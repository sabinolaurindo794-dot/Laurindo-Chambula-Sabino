import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Edit2, Sparkles, Target, Timer, Users, Database, LogIn, LogOut, CheckCircle2, Wifi, WifiOff, RefreshCw, Download } from 'lucide-react';
import { CategoryId, GameMode, UserProfile } from '../types';
import { AVATARS, CATEGORIES } from '../data/questions';
import { useAuth } from '../context/AuthContext';
import { useOnline } from '../context/OnlineContext';
import gameIcon from '../assets/images/game_icon_1784815977845.jpg';

interface HomeProps {
  currentUser: string;
  userProfile: UserProfile;
  selectedCat: CategoryId;
  selectedMode: GameMode;
  onSelectCat: (cat: CategoryId) => void;
  onSelectMode: (mode: GameMode) => void;
  onStartGame: () => void;
  onEditProfile: (newName: string, newAvatar: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  currentUser,
  userProfile,
  selectedCat,
  selectedMode,
  onSelectCat,
  onSelectMode,
  onStartGame,
  onEditProfile,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(currentUser);
  const [tempAvatar, setTempAvatar] = useState(userProfile.av);
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

  return (
    <div className="flex flex-col min-h-screen px-5 pt-5 pb-28 max-w-md mx-auto w-full relative z-10">
      {/* Game Branding Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-12 h-12 rounded-2xl bg-[#1a0533] p-1 border border-[#c084fc]/30 shadow-md shrink-0">
          <img
            src={gameIcon}
            alt="LauQuiz Icon"
            className="w-full h-full object-cover rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h1 className="font-syne text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#c084fc] via-[#f0abfc] to-[#fbbf24] bg-clip-text text-transparent leading-tight">
              LauQuiz
            </h1>
            {/* Online/Offline Status Badge */}
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1 shadow-sm ${
                isOnline
                  ? 'bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/40'
                  : 'bg-[#f59e0b]/20 text-[#fbbf24] border border-[#f59e0b]/40 animate-pulse'
              }`}
            >
              {isOnline ? <Wifi size={12} /> : <WifiOff size={12} />}
              {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
          <p className="text-[11px] text-[#a78bca] font-medium">
            {isOnline ? 'Conectado · Jogue e sincronize na nuvem' : 'Modo Offline Ativo · Jogo 100% funcional'}
          </p>
        </div>
      </motion.div>

      {/* Online / Offline Sync Banner */}
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-3 bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-2xl mb-4 text-xs text-[#fef08a] flex items-center gap-2.5"
        >
          <WifiOff size={18} className="shrink-0 text-[#fbbf24]" />
          <div>
            <span className="font-bold block text-[#fbbf24]">A jogar sem internet</span>
            <span>Seus pontos e progresso serão guardados no telemóvel e sincronizados assim que voltar online!</span>
          </div>
        </motion.div>
      )}

      {/* Pending Sync Bar */}
      {isOnline && pendingGamesCount > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-3 bg-[#c084fc]/10 border border-[#c084fc]/30 rounded-2xl mb-4 text-xs text-[#f5f0ff] flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <RefreshCw size={16} className={`text-[#c084fc] ${isSyncing ? 'animate-spin' : ''}`} />
            <span>
              <strong>{pendingGamesCount}</strong> partida(s) guardadas offline
            </span>
          </div>
          <button
            onClick={handleManualSync}
            disabled={isSyncing || !token}
            className="px-2.5 py-1 rounded-lg bg-[#c084fc] hover:bg-[#a855f7] text-white font-semibold text-[11px] disabled:opacity-50 transition-colors cursor-pointer"
          >
            {isSyncing ? 'A sincronizar...' : 'Sincronizar'}
          </button>
        </motion.div>
      )}

      {/* PWA Install Banner */}
      {deferredPrompt && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-[#7c3aed]/20 border border-[#c084fc]/40 rounded-2xl mb-4 flex items-center justify-between shadow-md"
        >
          <div className="flex items-center gap-2 text-xs text-[#f5f0ff]">
            <Download size={16} className="text-[#c084fc]" />
            <span>Instalar LauQuiz no ecrã principal</span>
          </div>
          <button
            onClick={handleInstallPWA}
            className="px-3 py-1 rounded-xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white text-xs font-bold shadow-sm cursor-pointer hover:brightness-110"
          >
            Instalar
          </button>
        </motion.div>
      )}

      {/* DB & Auth Status Card */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-3.5 bg-[#120324] rounded-2xl border border-[#34d399]/30 mb-4 shadow-sm flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#34d399]/10 text-[#34d399]">
            <Database size={18} />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-syne font-semibold text-xs text-[#f5f0ff]">
              <span>Base de Dados SQL</span>
              <CheckCircle2 size={13} className="text-[#34d399]" />
            </div>
            <p className="text-[11px] text-[#a78bca]">
              {user ? `Conectado: ${user.email}` : 'Sincronização em nuvem ativa'}
            </p>
          </div>
        </div>

        {user ? (
          <button
            onClick={() => logout()}
            className="px-3 py-1.5 rounded-xl bg-[#240847] hover:bg-[#320c61] text-xs text-[#f87171] font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <LogOut size={14} />
            <span>Sair</span>
          </button>
        ) : (
          <button
            onClick={() => loginWithGoogle()}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white text-xs font-semibold flex items-center gap-1.5 hover:brightness-110 shadow-sm transition-all cursor-pointer"
          >
            <LogIn size={14} />
            <span>Login Google</span>
          </button>
        )}
      </motion.div>

      {/* Profile Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 p-3.5 bg-[#1a0533] rounded-2xl border border-[#c084fc]/20 mb-6 shadow-md"
      >
        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#c084fc] to-[#7c3aed] flex items-center justify-center text-xl shrink-0 shadow-inner">
          {userProfile.av}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-syne font-bold text-base text-[#f5f0ff] truncate">
            {currentUser}
          </h2>
          <p className="text-xs text-[#fbbf24] font-medium flex items-center gap-1">
            <Sparkles size={12} />
            {userProfile.points} pontos · {userProfile.games} jogos
          </p>
        </div>
        <button
          onClick={() => {
            setTempName(currentUser);
            setTempAvatar(userProfile.av);
            setIsEditing(true);
          }}
          className="p-2 rounded-xl bg-[#240847] hover:bg-[#320c61] text-[#c084fc] transition-colors cursor-pointer"
          title="Editar Perfil"
        >
          <Edit2 size={16} />
        </button>
      </motion.div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#1a0533] border border-[#c084fc]/30 rounded-2xl p-6 w-full max-w-sm shadow-2xl space-y-4"
          >
            <h3 className="font-syne text-xl font-bold text-[#f5f0ff]">
              Editar Perfil
            </h3>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-[#a78bca] mb-1.5">
                  Nome do Jogador
                </label>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  maxLength={18}
                  className="w-full px-4 py-3 rounded-xl bg-[#0d0118] border border-[#c084fc]/30 text-[#f5f0ff] outline-none focus:border-[#c084fc] font-dmsans text-sm"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-[#a78bca] mb-2">
                  Escolha o Avatar
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {AVATARS.map((av) => (
                    <button
                      key={av}
                      type="button"
                      onClick={() => setTempAvatar(av)}
                      className={`h-12 rounded-xl text-2xl flex items-center justify-center transition-all cursor-pointer ${
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

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-3 rounded-xl border border-[#c084fc]/30 text-[#a78bca] hover:bg-[#240847] text-sm font-medium transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-sm shadow-md hover:brightness-110 transition-all cursor-pointer"
                >
                  Salvar
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Categories */}
      <div className="mb-6">
        <span className="block text-xs uppercase tracking-wider text-[#a78bca] font-medium mb-3">
          Categoria
        </span>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Todas Category */}
          <button
            onClick={() => onSelectCat('todas')}
            className={`col-span-2 p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3.5 ${
              selectedCat === 'todas'
                ? 'border-[#c084fc] bg-[#240847] shadow-lg shadow-[#c084fc]/10'
                : 'border-[#c084fc]/20 bg-[#1a0533] hover:bg-[#1f073d]'
            }`}
          >
            <span className="text-3xl">{CATEGORIES.todas.icon}</span>
            <div>
              <div className="font-syne font-bold text-sm text-[#f5f0ff]">
                {CATEGORIES.todas.label}
              </div>
              <div className="text-xs text-[#a78bca]">
                {CATEGORIES.todas.count} perguntas misturadas
              </div>
            </div>
          </button>

          {/* Specific Categories */}
          {(Object.keys(CATEGORIES).filter((k) => k !== 'todas') as CategoryId[]).map(
            (catKey) => {
              const cat = CATEGORIES[catKey];
              const isSelected = selectedCat === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => onSelectCat(catKey)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#c084fc] bg-[#240847] shadow-lg shadow-[#c084fc]/10'
                      : 'border-[#c084fc]/20 bg-[#1a0533] hover:bg-[#1f073d]'
                  }`}
                >
                  <span className="text-2xl mb-2 block">{cat.icon}</span>
                  <div>
                    <div className="font-syne font-bold text-sm text-[#f5f0ff]">
                      {cat.label}
                    </div>
                    <div className="text-[11px] text-[#a78bca] mt-0.5">
                      {cat.count} {cat.count === 1 ? 'pergunta' : 'perguntas'}
                    </div>
                  </div>
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Game Mode */}
      <div className="mb-8">
        <span className="block text-xs uppercase tracking-wider text-[#a78bca] font-medium mb-3">
          Modo de Jogo
        </span>

        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => onSelectMode('solo')}
            className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
              selectedMode === 'solo'
                ? 'border-[#c084fc] text-[#c084fc] bg-[#240847]'
                : 'border-[#c084fc]/20 text-[#a78bca] bg-[#1a0533] hover:bg-[#1f073d]'
            }`}
          >
            <Target size={20} className="mb-0.5" />
            <span className="text-xs font-medium">Solo</span>
          </button>

          <button
            onClick={() => onSelectMode('timer')}
            className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
              selectedMode === 'timer'
                ? 'border-[#c084fc] text-[#c084fc] bg-[#240847]'
                : 'border-[#c084fc]/20 text-[#a78bca] bg-[#1a0533] hover:bg-[#1f073d]'
            }`}
          >
            <Timer size={20} className="mb-0.5" />
            <span className="text-xs font-medium">Temporizado</span>
          </button>

          <button
            onClick={() => onSelectMode('multi')}
            className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 ${
              selectedMode === 'multi'
                ? 'border-[#c084fc] text-[#c084fc] bg-[#240847]'
                : 'border-[#c084fc]/20 text-[#a78bca] bg-[#1a0533] hover:bg-[#1f073d]'
            }`}
          >
            <Users size={20} className="mb-0.5" />
            <span className="text-xs font-medium">Multijogador</span>
          </button>
        </div>
      </div>

      {/* Start Button */}
      <button
        onClick={onStartGame}
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-base shadow-xl shadow-[#7c3aed]/30 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer mt-auto"
      >
        {selectedMode === 'multi' ? 'Criar / Entrar em Sala' : 'Iniciar Quiz'}
      </button>
    </div>
  );
};
