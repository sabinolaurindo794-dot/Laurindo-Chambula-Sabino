import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface PendingGame {
  id: string;
  category: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpentSeconds?: number;
  timestamp: number;
}

interface OnlineContextType {
  isOnline: boolean;
  pendingGamesCount: number;
  toggleOnlineMode: () => void;
  queueOfflineGame: (gameData: Omit<PendingGame, 'id' | 'timestamp'>) => void;
  syncPendingGames: (token?: string | null) => Promise<number>;
}

const STORAGE_PENDING_GAMES = 'eidquiz_pending_games';

const OnlineContext = createContext<OnlineContextType | undefined>(undefined);

export function OnlineProvider({ children }: { children: ReactNode }) {
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [pendingGames, setPendingGames] = useState<PendingGame[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PENDING_GAMES) || localStorage.getItem('lauquiz_pending_games');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Track online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(
        (reg) => console.log('[EidQuiz PWA] Service Worker registrado com sucesso:', reg.scope),
        (err) => console.warn('[EidQuiz PWA] Erro ao registrar Service Worker:', err)
      );
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Save pending games to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_PENDING_GAMES, JSON.stringify(pendingGames));
    } catch (e) {
      console.error('Erro ao guardar jogos pendentes:', e);
    }
  }, [pendingGames]);

  // Add game to offline queue
  const queueOfflineGame = (gameData: Omit<PendingGame, 'id' | 'timestamp'>) => {
    const newPending: PendingGame = {
      ...gameData,
      id: 'pending_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      timestamp: Date.now(),
    };
    setPendingGames((prev) => [...prev, newPending]);
  };

  // Sync pending games with server when online
  const syncPendingGames = async (authToken?: string | null): Promise<number> => {
    if (!navigator.onLine || pendingGames.length === 0 || !authToken) {
      return 0;
    }

    let syncedCount = 0;
    const remaining: PendingGame[] = [];

    for (const game of pendingGames) {
      try {
        const res = await fetch('/api/history', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            category: game.category,
            score: game.score,
            totalQuestions: game.totalQuestions,
            correctAnswers: game.correctAnswers,
            timeSpentSeconds: game.timeSpentSeconds || 60,
          }),
        });

        if (res.ok) {
          syncedCount++;
        } else {
          remaining.push(game);
        }
      } catch (err) {
        remaining.push(game);
      }
    }

    setPendingGames(remaining);
    return syncedCount;
  };

  const toggleOnlineMode = () => {
    setIsOnline((prev) => !prev);
  };

  return (
    <OnlineContext.Provider
      value={{
        isOnline,
        pendingGamesCount: pendingGames.length,
        toggleOnlineMode,
        queueOfflineGame,
        syncPendingGames,
      }}
    >
      {children}
    </OnlineContext.Provider>
  );
}

export function useOnline() {
  const context = useContext(OnlineContext);
  if (!context) {
    throw new Error('useOnline deve ser usado dentro de um OnlineProvider');
  }
  return context;
}
