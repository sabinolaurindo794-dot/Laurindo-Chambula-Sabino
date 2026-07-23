import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Play } from 'lucide-react';

interface SplashProps {
  onStart: () => void;
  onShowRanking: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onStart, onShowRanking }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-2"
      >
        <h1 className="font-syne text-7xl font-extrabold tracking-tight bg-gradient-to-br from-[#c084fc] via-[#f0abfc] to-[#fbbf24] bg-clip-text text-transparent leading-none">
          LAU
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-[#a78bca] font-medium mt-2">
          Quiz · Conhecimento
        </p>
      </motion.div>

      {/* Orb Visual */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-44 h-44 rounded-full my-10 bg-[radial-gradient(circle_at_40%_35%,#c084fc,#7c3aed_60%,#1a0533)] shadow-[0_0_80px_rgba(192,132,252,0.4)] animate-pulse-glow flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0533]/40 to-transparent pointer-events-none" />
        <span className="font-syne text-5xl font-extrabold text-white/90 drop-shadow-md">
          LQ
        </span>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-xs space-y-3"
      >
        <button
          onClick={onStart}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-base shadow-lg shadow-[#7c3aed]/30 hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Play size={18} fill="currentColor" />
          <span>Jogar Agora</span>
        </button>

        <button
          onClick={onShowRanking}
          className="w-full py-3.5 px-6 rounded-2xl border border-[#c084fc]/30 bg-[#1a0533]/50 hover:bg-[#1a0533] text-[#c084fc] font-dmsans font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
        >
          <Trophy size={16} />
          <span>Ver Ranking Global</span>
        </button>
      </motion.div>
    </div>
  );
};
