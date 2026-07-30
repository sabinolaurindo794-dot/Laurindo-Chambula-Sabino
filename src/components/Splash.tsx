import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Play } from 'lucide-react';
import gameIcon from '../assets/images/game_icon_1784815977845.jpg';
import { soundEngine } from '../utils/audio';

interface SplashProps {
  onStart: () => void;
  onShowRanking: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onStart, onShowRanking }) => {
  const handleStart = () => {
    onStart();
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <h1 className="font-syne text-5xl font-extrabold tracking-tight bg-gradient-to-br from-[#c084fc] via-[#f0abfc] to-[#fbbf24] bg-clip-text text-transparent leading-none">
          EIDQUIZ
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-[#a78bca] font-medium mt-2">
          Quiz · Conhecimento
        </p>
      </motion.div>

      {/* Game Icon Badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-32 h-32 rounded-2xl my-6 bg-[#1a0533] p-1.5 border-2 border-[#c084fc]/40 shadow-[0_0_40px_rgba(192,132,252,0.35)] relative overflow-hidden flex items-center justify-center group"
      >
        <img
          src={gameIcon}
          alt="EidQuiz Ícone"
          className="w-full h-full object-cover rounded-xl shadow-inner group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-xs space-y-2.5"
      >
        <button
          onClick={handleStart}
          className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-sm shadow-lg shadow-[#7c3aed]/30 hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Play size={16} fill="currentColor" />
          <span>Jogar Agora</span>
        </button>

        <button
          onClick={onShowRanking}
          className="w-full py-2.5 px-5 rounded-xl border border-[#c084fc]/30 bg-[#1a0533]/50 hover:bg-[#1a0533] text-[#c084fc] font-dmsans font-medium text-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
        >
          <Trophy size={15} />
          <span>Ver Ranking Global</span>
        </button>
      </motion.div>
    </div>
  );
};
