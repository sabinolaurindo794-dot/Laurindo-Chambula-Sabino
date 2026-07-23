import { relations } from 'drizzle-orm';
import { integer, json, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  email: text('email').notNull(),
  displayName: text('display_name'),
  avatar: text('avatar'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const gameHistory = pgTable('game_history', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  category: text('category').notNull(),
  score: integer('score').notNull(),
  totalQuestions: integer('total_questions').notNull(),
  correctAnswers: integer('correct_answers').notNull(),
  timeSpentSeconds: integer('time_spent_seconds').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

export const userStats = pgTable('user_stats', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull()
    .unique(),
  totalGames: integer('total_games').default(0),
  totalScore: integer('total_score').default(0),
  streakDays: integer('streak_days').default(0),
  lastPlayedAt: timestamp('last_played_at'),
});

export const customQuestions = pgTable('custom_questions', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  cat: text('cat').notNull(),
  q: text('q').notNull(),
  opts: json('opts').$type<string[]>().notNull(),
  ans: integer('ans').notNull(),
  exp: text('exp'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const usersRelations = relations(users, ({ many, one }) => ({
  gameHistories: many(gameHistory),
  stats: one(userStats, {
    fields: [users.id],
    references: [userStats.userId],
  }),
  customQuestions: many(customQuestions),
}));

export const gameHistoryRelations = relations(gameHistory, ({ one }) => ({
  user: one(users, {
    fields: [gameHistory.userId],
    references: [users.id],
  }),
}));

export const userStatsRelations = relations(userStats, ({ one }) => ({
  user: one(users, {
    fields: [userStats.userId],
    references: [users.id],
  }),
}));

export const customQuestionsRelations = relations(customQuestions, ({ one }) => ({
  user: one(users, {
    fields: [customQuestions.userId],
    references: [users.id],
  }),
}));
