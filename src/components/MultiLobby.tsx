import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Copy, Check, Play, ArrowLeft } from 'lucide-react';
import { UserProfile } from '../types';
import { AVATARS } from '../data/questions';

interface MultiLobbyProps {
  currentUser: string;
  userProfile: UserProfile;
  onStartMultiGame: (opponentName: string) => void;
  onCancel: () => void;
}

export const MultiLobby: React.FC<MultiLobbyProps> = ({
  currentUser,
  userProfile,
  onStartMultiGame,
  onCancel,
}) => {
  const [roomCode] = useState(() =>
    Math.random().toString(36).substring(2, 6).toUpperCase()
  );
  const [copied, setCopied] = useState(false);

  // Simulated players in room
  const [opponentName] = useState(() => {
    const fakeNames = ['NgulaQuiz', 'ZuluKing', 'KuimaTop', 'LuandaBoss', 'MindMaster'];
    return fakeNames[Math.floor(Math.random() * fakeNames.length)];
  });

  const [opponentAvatar] = useState(() => {
    return AVATARS[Math.floor(Math.random() * AVATARS.length)];
  });

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen px-5 pt-6 pb-28 max-w-md mx-auto w-full relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onCancel}
          className="w-9 h-9 rounded-xl bg-[#1a0533] border border-[#c084fc]/20 flex items-center justify-center text-[#f5f0ff] hover:bg-[#240847] transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h2 className="font-syne text-xl font-bold text-[#f5f0ff]">
            Sala Multijogador
          </h2>
          <p className="text-xs text-[#a78bca]">
            Partilha o código com os teus amigos
          </p>
        </div>
      </div>

      {/* Room Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1a0533] border border-[#c084fc]/30 rounded-2xl p-6 text-center mb-6 shadow-xl relative overflow-hidden"
      >
        <div className="text-xs uppercase tracking-widest text-[#a78bca] font-medium mb-1">
          Código da Sala
        </div>
        <div className="font-syne text-4xl font-extrabold tracking-[0.2em] bg-gradient-to-r from-[#c084fc] via-[#f0abfc] to-[#fbbf24] bg-clip-text text-transparent my-2">
          {roomCode}
        </div>
        <button
          onClick={handleCopyCode}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#240847] hover:bg-[#320c61] border border-[#c084fc]/20 text-xs text-[#c084fc] transition-colors cursor-pointer mt-2"
        >
          {copied ? <Check size={14} className="text-[#34d399]" /> : <Copy size={14} />}
          <span>{copied ? 'Copiado!' : 'Copiar Código'}</span>
        </button>
      </motion.div>

      {/* Players List */}
      <div className="flex-1 mb-8">
        <span className="block text-xs uppercase tracking-wider text-[#a78bca] font-medium mb-3 flex items-center gap-1.5">
          <Users size={14} />
          Jogadores na Sala (2/2)
        </span>

        <div className="space-y-2.5">
          {/* Current User */}
          <div className="flex items-center gap-3 p-3.5 bg-[#1a0533] rounded-xl border border-[#c084fc]/20">
            <div className="w-10 h-10 rounded-full bg-[#240847] flex items-center justify-center text-xl shrink-0">
              {userProfile.av}
            </div>
            <div className="flex-1 font-dmsans text-sm font-medium text-[#f5f0ff]">
              {currentUser} <span className="text-xs text-[#a78bca]">(Tu)</span>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399]" title="Pronto" />
          </div>

          {/* Opponent */}
          <div className="flex items-center gap-3 p-3.5 bg-[#1a0533] rounded-xl border border-[#c084fc]/20">
            <div className="w-10 h-10 rounded-full bg-[#240847] flex items-center justify-center text-xl shrink-0">
              {opponentAvatar}
            </div>
            <div className="flex-1 font-dmsans text-sm font-medium text-[#f5f0ff]">
              {opponentName}
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#34d399] shadow-[0_0_8px_#34d399]" title="Pronto" />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 mt-auto">
        <button
          onClick={() => onStartMultiGame(opponentName)}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-base shadow-xl shadow-[#7c3aed]/30 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <Play size={18} fill="currentColor" />
          <span>Iniciar Partida</span>
        </button>

        <button
          onClick={onCancel}
          className="w-full py-3.5 rounded-2xl border border-[#c084fc]/20 bg-transparent text-[#a78bca] font-dmsans text-sm font-medium hover:bg-[#1a0533] transition-colors cursor-pointer"
        >
          Voltar para o Início
        </button>
      </div>
    </div>
  );
};
