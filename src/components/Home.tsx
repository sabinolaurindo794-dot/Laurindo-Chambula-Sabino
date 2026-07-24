import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Edit2, Sparkles, Target, Timer, Users, LogIn, LogOut, Wifi, WifiOff, RefreshCw, Download, Search, BookOpen, Layers } from 'lucide-react';
import { CategoryId, GameMode, UserProfile } from '../types';
import { AVATARS, CATEGORIES, QUESTIONS } from '../data/questions';
import { useAuth } from '../context/AuthContext';
import { useOnline } from '../context/OnlineContext';
import gameIcon from '../assets/images/game_icon_1784815977845.jpg';

interface HomeProps {
  currentUser: string;
  userProfile: UserProfile;
  selectedCat: CategoryId;
  selectedMode: GameMode;
  questionCount: number;
  onSelectCat: (cat: CategoryId) => void;
  onSelectMode: (mode: GameMode) => void;
  onSelectCount: (count: number) => void;
  onStartGame: () => void;
  onEditProfile: (newName: string, newAvatar: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  currentUser,
  userProfile,
  selectedCat,
  selectedMode,
  questionCount,
  onSelectCat,
  onSelectMode,
  onSelectCount,
  onStartGame,
  onEditProfile,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(currentUser);
  const [tempAvatar, setTempAvatar] = useState(userProfile.av);
  const [searchTerm, setSearchTerm] = useState('');
  const { user, token, loginWithGoogle, logout } = useAuth();
  const { isOnline, pendingGamesCount, syncPendingGames } = useOnline();
  const [isSyncing, setIsSyncing] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallPWA = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  const handleManualSync = async () => {
    if (!token) return;
    setIsSyncing(true);
    await syncPendingGames(token);
    setIsSyncing(false);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      onEditProfile(tempName.trim(), tempAvatar);
      setIsEditing(false);
    }
  };

  const allCategoryKeys = (Object.keys(CATEGORIES) as CategoryId[]).sort((a, b) => {
    if (a === 'todas') return -1;
    if (b === 'todas') return 1;
    return (CATEGORIES[a]?.label || '').localeCompare(CATEGORIES[b]?.label || '', 'pt');
  });
  const filteredCategoryKeys = allCategoryKeys.filter((catKey) => {
    const cat = CATEGORIES[catKey];
    if (!searchTerm.trim()) return true;
    return cat.label.toLowerCase().includes(searchTerm.toLowerCase().trim());
  });

  const totalQuestions = QUESTIONS.length;
  const totalDisciplines = allCategoryKeys.length - 1; // minus 'todas'

  return (
    <div className="flex flex-col h-[calc(100dvh-3.5rem)] pt-1 pb-1 px-3 max-w-md mx-auto w-full relative z-10 text-xs select-none overflow-hidden gap-1 justify-between">
      {/* Top Header Bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between gap-2 bg-[#1a0533]/90 backdrop-blur-md p-2 rounded-xl border border-[#c084fc]/20 shadow-sm shrink-0"
      >
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#0d0118] p-0.5 border border-[#c084fc]/30 shrink-0">
            <img
              src={gameIcon}
              alt="LauQuiz Icon"
              className="w-full h-full object-cover rounded-md"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="font-syne text-base font-extrabold tracking-tight bg-gradient-to-r from-[#c084fc] via-[#f0abfc] to-[#fbbf24] bg-clip-text text-transparent leading-none">
                LauQuiz
              </h1>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[8px] font-semibold flex items-center gap-0.5 ${
                  isOnline
                    ? 'bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30'
                    : 'bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/30 animate-pulse'
                }`}
              >
                {isOnline ? <Wifi size={8} /> : <WifiOff size={8} />}
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
            <p className="text-[9px] text-[#a78bca] truncate">
              {user ? user.email : 'Sincronização SQL ativa'}
            </p>
          </div>
        </div>

        <div>
          {user ? (
            <button
              onClick={() => logout()}
              className="px-2 py-1 rounded-md bg-[#240847] text-[10px] text-[#f87171] font-medium flex items-center gap-1 hover:bg-[#320c61] transition-colors cursor-pointer"
              title="Sair"
            >
              <LogOut size={10} />
              <span>Sair</span>
            </button>
          ) : (
            <button
              onClick={() => loginWithGoogle()}
              className="px-2 py-1 rounded-md bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white text-[10px] font-semibold flex items-center gap-1 hover:brightness-110 shadow-sm transition-all cursor-pointer"
            >
              <LogIn size={10} />
              <span>Login</span>
            </button>
          )}
        </div>
      </motion.div>

      {/* Stats & Info Banner */}
      <div className="flex items-center justify-between px-2.5 py-1 bg-gradient-to-r from-[#240847] to-[#120324] rounded-lg border border-[#c084fc]/25 shrink-0">
        <div className="flex items-center gap-1.5 text-[10px]">
          <BookOpen size={12} className="text-[#c084fc]" />
          <span className="font-bold text-[#f5f0ff]">{totalQuestions}</span>
          <span className="text-[#a78bca]">Perguntas</span>
        </div>
        <div className="h-3 w-[1px] bg-[#c084fc]/30" />
        <div className="flex items-center gap-1.5 text-[10px]">
          <Layers size={12} className="text-[#34d399]" />
          <span className="font-bold text-[#f5f0ff]">{totalDisciplines}</span>
          <span className="text-[#a78bca]">Disciplinas</span>
        </div>
        <div className="h-3 w-[1px] bg-[#c084fc]/30" />
        <div className="flex items-center gap-1 text-[10px] text-[#fbbf24] font-medium">
          <Sparkles size={10} />
          <span>{userProfile.points} pts</span>
        </div>
      </div>

      {/* Profile Bar */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 px-2.5 py-1 bg-[#120324] rounded-lg border border-[#c084fc]/15 shrink-0"
      >
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#c084fc] to-[#7c3aed] flex items-center justify-center text-[10px] shrink-0 shadow-inner">
          {userProfile.av}
        </div>
        <div className="flex-1 min-w-0 flex items-center justify-between">
          <span className="font-syne font-bold text-[11px] text-[#f5f0ff] truncate">
            {currentUser}
          </span>
          <span className="text-[9px] text-[#a78bca]">
            {userProfile.games} partidas jogadas
          </span>
        </div>
        <button
          onClick={() => {
            setTempName(currentUser);
            setTempAvatar(userProfile.av);
            setIsEditing(true);
          }}
          className="p-1 rounded bg-[#240847] hover:bg-[#320c61] text-[#c084fc] transition-colors cursor-pointer"
          title="Editar Perfil"
        >
          <Edit2 size={10} />
        </button>
      </motion.div>

      {/* Inline Banner Notice (Offline / Pending / PWA) */}
      {!isOnline && (
        <div className="px-2 py-0.5 bg-[#f59e0b]/15 border border-[#f59e0b]/30 rounded-lg text-[9px] text-[#fef08a] flex items-center gap-1.5 shrink-0">
          <WifiOff size={10} className="shrink-0 text-[#fbbf24]" />
          <span className="truncate">Modo Offline · Pontos guardados localmente</span>
        </div>
      )}

      {isOnline && pendingGamesCount > 0 && (
        <div className="px-2 py-0.5 bg-[#c084fc]/15 border border-[#c084fc]/30 rounded-lg text-[9px] text-[#f5f0ff] flex items-center justify-between shrink-0">
          <span className="flex items-center gap-1">
            <RefreshCw size={9} className={`text-[#c084fc] ${isSyncing ? 'animate-spin' : ''}`} />
            <strong>{pendingGamesCount}</strong> offline
          </span>
          <button
            onClick={handleManualSync}
            disabled={isSyncing || !token}
            className="px-2 py-0.5 rounded bg-[#c084fc] text-white text-[8px] font-bold cursor-pointer"
          >
            Sincronizar
          </button>
        </div>
      )}

      {deferredPrompt && (
        <div className="px-2 py-0.5 bg-[#7c3aed]/20 border border-[#c084fc]/40 rounded-lg text-[9px] text-[#f5f0ff] flex items-center justify-between shrink-0">
          <span className="flex items-center gap-1">
            <Download size={9} className="text-[#c084fc]" />
            <span>Instalar no ecrã principal</span>
          </span>
          <button
            onClick={handleInstallPWA}
            className="px-2 py-0.5 rounded bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white text-[8px] font-bold cursor-pointer"
          >
            Instalar
          </button>
        </div>
      )}

      {/* Disciplines Grid Section with Search & Full Category List */}
      <div className="flex-1 min-h-0 flex flex-col gap-1 my-0.5">
        <div className="flex items-center justify-between shrink-0">
          <span className="text-[9.5px] uppercase font-bold tracking-wider text-[#a78bca]">
            Disciplinas ({totalDisciplines})
          </span>
          <span className="text-[9px] text-[#34d399] font-bold bg-[#064e3b]/80 px-1.5 py-0.5 rounded-full border border-[#34d399]/30">
            {CATEGORIES[selectedCat]?.label || 'Todas'}: {CATEGORIES[selectedCat]?.count} Qs
          </span>
        </div>

        {/* Quick Shortcut Pills */}
        <div className="flex items-center gap-1 shrink-0 overflow-x-auto pb-0.5 scrollbar-none text-[8.5px]">
          <span className="text-[#a78bca] text-[8px] uppercase font-semibold shrink-0">Destaques:</span>
          <button
            type="button"
            onClick={() => onSelectCat('futebol')}
            className={`px-2 py-0.5 rounded-full border flex items-center gap-1 shrink-0 font-bold transition-all cursor-pointer ${
              selectedCat === 'futebol'
                ? 'bg-[#22c55e] text-black border-[#22c55e] shadow-sm'
                : 'bg-[#22c55e]/20 text-[#4ade80] border-[#22c55e]/50 hover:bg-[#22c55e]/35'
            }`}
          >
            ⚽ Futebol
          </button>
          <button
            type="button"
            onClick={() => onSelectCat('informatica')}
            className={`px-2 py-0.5 rounded-full border flex items-center gap-1 shrink-0 font-bold transition-all cursor-pointer ${
              selectedCat === 'informatica'
                ? 'bg-[#38bdf8] text-black border-[#38bdf8] shadow-sm'
                : 'bg-[#38bdf8]/20 text-[#38bdf8] border-[#38bdf8]/50 hover:bg-[#38bdf8]/35'
            }`}
          >
            💻 Informática
          </button>
          <button
            type="button"
            onClick={() => onSelectCat('portugues')}
            className={`px-2 py-0.5 rounded-full border flex items-center gap-1 shrink-0 font-bold transition-all cursor-pointer ${
              selectedCat === 'portugues'
                ? 'bg-[#c084fc] text-black border-[#c084fc] shadow-sm'
                : 'bg-[#c084fc]/20 text-[#c084fc] border-[#c084fc]/50 hover:bg-[#c084fc]/35'
            }`}
          >
            📚 Português
          </button>
          <button
            type="button"
            onClick={() => onSelectCat('todas')}
            className={`px-2 py-0.5 rounded-full border flex items-center gap-1 shrink-0 font-bold transition-all cursor-pointer ${
              selectedCat === 'todas'
                ? 'bg-[#fbbf24] text-black border-[#fbbf24] shadow-sm'
                : 'bg-[#fbbf24]/20 text-[#fbbf24] border-[#fbbf24]/50 hover:bg-[#fbbf24]/35'
            }`}
          >
            ⚡ Todas
          </button>
        </div>

        {/* Search input for categories */}
        <div className="relative shrink-0">
          <Search size={11} className="absolute left-2 top-1.5 text-[#a78bca]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar disciplina (ex: Futebol, Informática...)"
            className="w-full pl-6 pr-2 py-0.5 rounded-md bg-[#120324] border border-[#c084fc]/20 text-[#f5f0ff] placeholder-[#a78bca]/60 text-[9.5px] outline-none focus:border-[#c084fc]/60"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 gap-1 overflow-y-auto flex-1 min-h-0 pr-0.5 scrollbar-thin scrollbar-thumb-[#c084fc]/30 scrollbar-track-transparent">
          {filteredCategoryKeys.map((catKey) => {
            const cat = CATEGORIES[catKey];
            const isSelected = selectedCat === catKey;
            return (
              <button
                key={catKey}
                onClick={() => onSelectCat(catKey)}
                className={`p-1 rounded-lg border text-left transition-all duration-150 cursor-pointer flex items-center gap-1 h-8 relative overflow-hidden ${
                  isSelected
                    ? 'border-[#c084fc] bg-[#240847] shadow-sm ring-1 ring-[#c084fc]/60'
                    : 'border-[#c084fc]/20 bg-[#1a0533] hover:bg-[#1f073d]'
                }`}
              >
                <span className="text-xs shrink-0">{cat.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="font-syne font-bold text-[8.5px] text-[#f5f0ff] truncate leading-tight">
                    {cat.label}
                  </div>
                  <div className="text-[7.5px] text-[#34d399] font-medium truncate">
                    {cat.count} Qs
                  </div>
                </div>
              </button>
            );
          })}
          {filteredCategoryKeys.length === 0 && (
            <div className="col-span-3 text-center py-2 text-[10px] text-[#a78bca]">
              Nenhuma disciplina encontrada com "{searchTerm}".
            </div>
          )}
        </div>
      </div>

      {/* Game Settings: Mode & Questions Count */}
      <div className="shrink-0 space-y-0.5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] uppercase font-bold tracking-wider text-[#a78bca]">
            Perguntas por Partida
          </span>
          <span className="text-[9px] text-[#34d399] font-bold">
            {questionCount} questões
          </span>
        </div>
        <div className="flex gap-1 justify-between">
          {[10, 20, 50, 100, 200].map((cnt) => (
            <button
              key={cnt}
              onClick={() => onSelectCount(cnt)}
              className={`flex-1 py-0.5 rounded-md border text-center transition-all cursor-pointer text-[9px] font-bold ${
                questionCount === cnt
                  ? 'border-[#34d399] bg-[#064e3b] text-[#34d399]'
                  : 'border-[#c084fc]/20 bg-[#1a0533] text-[#a78bca] hover:bg-[#240847]'
              }`}
            >
              {cnt === 200 ? '200 (Todas)' : cnt}
            </button>
          ))}
        </div>

        <span className="block text-[9px] uppercase font-bold tracking-wider text-[#a78bca] pt-0.5">
          Modo de Jogo
        </span>
        <div className="grid grid-cols-3 gap-1">
          <button
            onClick={() => onSelectMode('solo')}
            className={`p-1 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 h-8 ${
              selectedMode === 'solo'
                ? 'border-[#c084fc] text-[#c084fc] bg-[#240847]'
                : 'border-[#c084fc]/20 text-[#a78bca] bg-[#1a0533] hover:bg-[#1f073d]'
            }`}
          >
            <Target size={12} />
            <span className="text-[8.5px] font-semibold">Solo</span>
          </button>

          <button
            onClick={() => onSelectMode('timer')}
            className={`p-1 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 h-8 ${
              selectedMode === 'timer'
                ? 'border-[#c084fc] text-[#c084fc] bg-[#240847]'
                : 'border-[#c084fc]/20 text-[#a78bca] bg-[#1a0533] hover:bg-[#1f073d]'
            }`}
          >
            <Timer size={12} />
            <span className="text-[8.5px] font-semibold">Timer</span>
          </button>

          <button
            onClick={() => onSelectMode('multi')}
            className={`p-1 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5 h-8 ${
              selectedMode === 'multi'
                ? 'border-[#c084fc] text-[#c084fc] bg-[#240847]'
                : 'border-[#c084fc]/20 text-[#a78bca] bg-[#1a0533] hover:bg-[#1f073d]'
            }`}
          >
            <Users size={12} />
            <span className="text-[8.5px] font-semibold">Multiplayer</span>
          </button>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={onStartGame}
        className="w-full py-2 rounded-lg bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-xs shadow-md shadow-[#7c3aed]/25 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shrink-0"
      >
        {selectedMode === 'multi' ? 'Criar / Entrar em Sala' : `Iniciar Quiz (${questionCount} Perguntas)`}
      </button>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#1a0533] border border-[#c084fc]/30 rounded-2xl p-5 w-full max-w-sm shadow-2xl space-y-3"
          >
            <h3 className="font-syne text-lg font-bold text-[#f5f0ff]">
              Editar Perfil
            </h3>

            <form onSubmit={handleSaveProfile} className="space-y-3">
              <div>
                <label className="block text-[11px] uppercase font-medium tracking-wider text-[#a78bca] mb-1">
                  Nome do Jogador
                </label>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  maxLength={18}
                  className="w-full px-3 py-2 rounded-xl bg-[#0d0118] border border-[#c084fc]/30 text-[#f5f0ff] outline-none focus:border-[#c084fc] font-dmsans text-xs"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-medium tracking-wider text-[#a78bca] mb-1.5">
                  Escolha o Avatar
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {AVATARS.map((av) => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => setTempAvatar(av)}
                      className={`h-10 rounded-xl text-xl flex items-center justify-center transition-all cursor-pointer ${
                        tempAvatar === av
                          ? 'bg-[#c084fc]/20 border-2 border-[#c084fc] scale-105'
                          : 'bg-[#240847] border border-transparent hover:bg-[#2e0b59]'
                      }`}
                    >
                      {av}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-2 rounded-xl border border-[#c084fc]/30 text-[#a78bca] hover:bg-[#240847] text-xs font-medium transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-xs shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  Salvar
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

