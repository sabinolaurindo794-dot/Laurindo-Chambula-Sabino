import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../lib/firebase.ts';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  token: string | null;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  saveGameToDatabase: (gameData: {
    category: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    timeSpentSeconds?: number;
  }) => Promise<boolean>;
  getGameHistory: () => Promise<any[]>;
  getUserStats: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const idToken = await currentUser.getIdToken();
          setToken(idToken);
          // Sync with server
          await fetch('/api/auth/sync', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${idToken}`,
            },
            body: JSON.stringify({
              displayName: currentUser.displayName,
              avatar: '🦁',
            }),
          });
        } catch (err) {
          console.error('Failed to get token or sync user:', err);
        }
      } else {
        setToken(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error('Google Sign-In failed:', error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const saveGameToDatabase = async (gameData: {
    category: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    timeSpentSeconds?: number;
  }): Promise<boolean> => {
    if (!token) return false;
    try {
      const res = await fetch('/api/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(gameData),
      });
      return res.ok;
    } catch (err) {
      console.error('Failed to save game to database:', err);
      return false;
    }
  };

  const getGameHistory = async (): Promise<any[]> => {
    if (!token) return [];
    try {
      const res = await fetch('/api/history', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) return [];
      const data = await res.json();
      return data.history || [];
    } catch (err) {
      console.error('Failed to fetch game history:', err);
      return [];
    }
  };

  const getUserStats = async (): Promise<any> => {
    if (!token) return null;
    try {
      const res = await fetch('/api/stats', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.stats || null;
    } catch (err) {
      console.error('Failed to fetch user stats:', err);
      return null;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        token,
        loginWithGoogle,
        logout,
        saveGameToDatabase,
        getGameHistory,
        getUserStats,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
