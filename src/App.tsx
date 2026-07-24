import { useState, useEffect } from 'react';
import { CategoryId, GameMode, Question, ScreenId, UserDatabase } from './types';
import { AVATARS, getRandomQuestions } from './data/questions';
import { Splash } from './components/Splash';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { MultiLobby } from './components/MultiLobby';
import { Result } from './components/Result';
import { Ranking } from './components/Ranking';
import { NavBar } from './components/NavBar';
import { useAuth } from './context/AuthContext';
import { useOnline } from './context/OnlineContext';

const STORAGE_USERS_KEY = 'lauquiz_users';
const STORAGE_CURRENT_KEY = 'lauquiz_current';

const INITIAL_DEMO_USERS: UserDatabase = {
  'MárioFilósofo': { av: '🔮', points: 1450, games: 12, best: 1200 },
  'LiaCiência': { av: '🐬', points: 1100, games: 8, best: 950 },
  'PedroHistória': { av: '🦅', points: 880, games: 6, best: 800 },
};

export default function App() {
  const { token, saveGameToDatabase } = useAuth();
  const { isOnline, queueOfflineGame, syncPendingGames } = useOnline();
  const [users, setUsers] = useState<UserDatabase>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_USERS_KEY);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_DEMO_USERS;
  });

  const [currentUser, setCurrentUser] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_CURRENT_KEY);
      if (saved && users[saved]) return saved;
    } catch {
      // fallback
    }
    const defaultNick = 'Jogador' + Math.floor(1000 + Math.random() * 9000);
    return defaultNick;
  });

  const [activeScreen, setActiveScreen] = useState<ScreenId>('splash');
  const [selectedCat, setSelectedCat] = useState<CategoryId>('todas');
  const [selectedMode, setSelectedMode] = useState<GameMode>('solo');
  const [questionCount, setQuestionCount] = useState<number>(10);

  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [opponentName, setOpponentName] = useState<string>('Adversário');
  const [lastStats, setLastStats] = useState({
    correct: 0,
    wrong: 0,
    points: 0,
  });

  // Auto-sync pending games when coming online or token is available
  useEffect(() => {
    if (isOnline && token) {
      syncPendingGames(token);
    }
  }, [isOnline, token]);

  // Ensure current user profile exists in database
  useEffect(() => {
    if (!users[currentUser]) {
      const randomAv = AVATARS[Math.floor(Math.random() * AVATARS.length)];
      const updated = {
        ...users,
        [currentUser]: { av: randomAv, points: 0, games: 0, best: 0 },
      };
      setUsers(updated);
      localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(updated));
    }
    localStorage.setItem(STORAGE_CURRENT_KEY, currentUser);
  }, [currentUser, users]);

  // Save users database whenever updated
  const saveUsers = (newUsers: UserDatabase) => {
    setUsers(newUsers);
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(newUsers));
  };

  // Edit user profile
  const handleEditProfile = (newName: string, newAvatar: string) => {
    if (newName === currentUser) {
      const updated = {
        ...users,
        [currentUser]: {
          ...users[currentUser],
          av: newAvatar,
        },
      };
      saveUsers(updated);
      return;
    }

    if (users[newName]) {
      alert('Este nome já está a ser utilizado, escolhe outro.');
      return;
    }

    const currentProfile = users[currentUser] || {
      av: newAvatar,
      points: 0,
      games: 0,
      best: 0,
    };

    const newUsers = { ...users };
    delete newUsers[currentUser];
    newUsers[newName] = { ...currentProfile, av: newAvatar };

    setCurrentUser(newName);
    saveUsers(newUsers);
  };

  // Start game flow
  const handleStartGame = () => {
    if (selectedMode === 'multi') {
      setActiveScreen('multi-lobby');
    } else {
      const qList = getRandomQuestions(selectedCat, questionCount);
      setActiveQuestions(qList);
      setActiveScreen('quiz');
    }
  };

  // Start multiplayer quiz from lobby
  const handleStartMultiGame = (oppName: string) => {
    setOpponentName(oppName);
    const qList = getRandomQuestions(selectedCat, questionCount);
    setActiveQuestions(qList);
    setActiveScreen('quiz');
  };

  // Quiz completed
  const handleFinishQuiz = async (stats: { correct: number; wrong: number; points: number }) => {
    setLastStats(stats);

    const gamePayload = {
      category: selectedCat,
      score: stats.points,
      totalQuestions: activeQuestions.length || 10,
      correctAnswers: stats.correct,
      timeSpentSeconds: 60,
    };

    // Attempt online sync to PostgreSQL if connected
    let savedSuccessfully = false;
    if (isOnline && token) {
      savedSuccessfully = await saveGameToDatabase(gamePayload);
    }

    // If offline or save failed, queue game locally
    if (!savedSuccessfully) {
      queueOfflineGame(gamePayload);
    }

    // Update user profile locally
    const currentProfile = users[currentUser] || {
      av: '🦁',
      points: 0,
      games: 0,
      best: 0,
    };

    const updatedProfile = {
      ...currentProfile,
      points: currentProfile.points + stats.points,
      games: currentProfile.games + 1,
      best: Math.max(currentProfile.best, stats.points),
    };

    const updatedUsers = {
      ...users,
      [currentUser]: updatedProfile,
    };

    saveUsers(updatedUsers);
    setActiveScreen('result');
  };

  const handleQuitQuiz = () => {
    if (confirm('Sair do quiz? O progresso da rodada atual será perdido.')) {
      setActiveScreen('home');
    }
  };

  const currentUserProfile = users[currentUser] || {
    av: '🦁',
    points: 0,
    games: 0,
    best: 0,
  };

  return (
    <div className="min-h-screen bg-[#0d0118] text-[#f5f0ff] font-dmsans relative overflow-x-hidden app-bg-glow">
      {activeScreen === 'splash' && (
        <Splash
          onStart={() => setActiveScreen('home')}
          onShowRanking={() => setActiveScreen('ranking')}
        />
      )}

      {activeScreen === 'home' && (
        <Home
          currentUser={currentUser}
          userProfile={currentUserProfile}
          selectedCat={selectedCat}
          selectedMode={selectedMode}
          questionCount={questionCount}
          onSelectCat={setSelectedCat}
          onSelectMode={setSelectedMode}
          onSelectCount={setQuestionCount}
          onStartGame={handleStartGame}
          onEditProfile={handleEditProfile}
        />
      )}

      {activeScreen === 'quiz' && (
        <Quiz
          questions={activeQuestions}
          mode={selectedMode}
          currentUser={currentUser}
          opponentName={opponentName}
          onFinishQuiz={handleFinishQuiz}
          onQuit={handleQuitQuiz}
        />
      )}

      {activeScreen === 'multi-lobby' && (
        <MultiLobby
          currentUser={currentUser}
          userProfile={currentUserProfile}
          onStartMultiGame={handleStartMultiGame}
          onCancel={() => setActiveScreen('home')}
        />
      )}

      {activeScreen === 'result' && (
        <Result
          currentUser={currentUser}
          correct={lastStats.correct}
          wrong={lastStats.wrong}
          points={lastStats.points}
          totalQuestions={activeQuestions.length || 10}
          onPlayAgain={handleStartGame}
          onGoHome={() => setActiveScreen('home')}
        />
      )}

      {activeScreen === 'ranking' && (
        <Ranking
          users={users}
          onBack={() => setActiveScreen('home')}
        />
      )}

      <NavBar
        activeScreen={activeScreen}
        onNavigate={(screen) => setActiveScreen(screen)}
      />
    </div>
  );
}
