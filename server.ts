import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { requireAuth, AuthRequest } from './src/middleware/auth.ts';
import { getOrCreateUser } from './src/db/users.ts';
import { db } from './src/db/index.ts';
import { users, gameHistory, userStats, customQuestions } from './src/db/schema.ts';
import { eq, desc } from 'drizzle-orm';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', database: 'connected' });
  });

  // User Sync
  app.post('/api/auth/sync', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: 'User missing' });
      }
      const { displayName, avatar } = req.body || {};
      const user = await getOrCreateUser(req.user.uid, req.user.email || '', displayName, avatar);
      res.json({ user });
    } catch (error) {
      console.error('Error syncing user:', error);
      res.status(500).json({ error: 'Failed to sync user' });
    }
  });

  // Get User Stats
  app.get('/api/stats', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const dbUser = await getOrCreateUser(req.user.uid, req.user.email || '');
      
      const statsList = await db.select().from(userStats).where(eq(userStats.userId, dbUser.id));
      const stats = statsList[0] || {
        userId: dbUser.id,
        totalGames: 0,
        totalScore: 0,
        streakDays: 0,
        lastPlayedAt: null,
      };

      res.json({ stats, user: dbUser });
    } catch (error) {
      console.error('Error fetching stats:', error);
      res.status(500).json({ error: 'Failed to fetch user stats' });
    }
  });

  // Get Game History
  app.get('/api/history', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const dbUser = await getOrCreateUser(req.user.uid, req.user.email || '');

      const history = await db
        .select()
        .from(gameHistory)
        .where(eq(gameHistory.userId, dbUser.id))
        .orderBy(desc(gameHistory.createdAt))
        .limit(20);

      res.json({ history });
    } catch (error) {
      console.error('Error fetching history:', error);
      res.status(500).json({ error: 'Failed to fetch game history' });
    }
  });

  // Save Game Result
  app.post('/api/history', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const dbUser = await getOrCreateUser(req.user.uid, req.user.email || '');

      const { category, score, totalQuestions, correctAnswers, timeSpentSeconds } = req.body;

      const [newHistory] = await db
        .insert(gameHistory)
        .values({
          userId: dbUser.id,
          category: category || 'todas',
          score: Number(score) || 0,
          totalQuestions: Number(totalQuestions) || 10,
          correctAnswers: Number(correctAnswers) || 0,
          timeSpentSeconds: Number(timeSpentSeconds) || 0,
        })
        .returning();

      // Update aggregate stats
      const existingStats = await db.select().from(userStats).where(eq(userStats.userId, dbUser.id));
      const now = new Date();

      if (existingStats.length === 0) {
        await db.insert(userStats).values({
          userId: dbUser.id,
          totalGames: 1,
          totalScore: Number(score) || 0,
          streakDays: 1,
          lastPlayedAt: now,
        });
      } else {
        const cur = existingStats[0];
        const lastDate = cur.lastPlayedAt ? new Date(cur.lastPlayedAt) : null;
        let streak = cur.streakDays || 1;

        if (lastDate) {
          const diffDays = Math.floor((now.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            streak += 1;
          } else if (diffDays > 1) {
            streak = 1;
          }
        }

        await db
          .update(userStats)
          .set({
            totalGames: (cur.totalGames || 0) + 1,
            totalScore: (cur.totalScore || 0) + (Number(score) || 0),
            streakDays: streak,
            lastPlayedAt: now,
          })
          .where(eq(userStats.userId, dbUser.id));
      }

      res.json({ success: true, history: newHistory });
    } catch (error) {
      console.error('Error saving game result:', error);
      res.status(500).json({ error: 'Failed to save game result' });
    }
  });

  // Custom Questions
  app.get('/api/custom-questions', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const dbUser = await getOrCreateUser(req.user.uid, req.user.email || '');

      const questions = await db
        .select()
        .from(customQuestions)
        .where(eq(customQuestions.userId, dbUser.id))
        .orderBy(desc(customQuestions.createdAt));

      res.json({ questions });
    } catch (error) {
      console.error('Error fetching custom questions:', error);
      res.status(500).json({ error: 'Failed to fetch custom questions' });
    }
  });

  app.post('/api/custom-questions', requireAuth, async (req: AuthRequest, res) => {
    try {
      if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
      const dbUser = await getOrCreateUser(req.user.uid, req.user.email || '');

      const { cat, q, opts, ans, exp } = req.body;

      const [newQ] = await db
        .insert(customQuestions)
        .values({
          userId: dbUser.id,
          cat: cat || 'geral',
          q,
          opts: opts || [],
          ans: Number(ans) || 0,
          exp: exp || '',
        })
        .returning();

      res.json({ question: newQ });
    } catch (error) {
      console.error('Error adding custom question:', error);
      res.status(500).json({ error: 'Failed to create question' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
