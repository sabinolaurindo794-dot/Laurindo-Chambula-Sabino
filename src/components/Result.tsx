import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Home as HomeIcon, Award } from 'lucide-react';

interface ResultProps {
  currentUser: string;
  correct: number;
  wrong: number;
  points: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

export const Result: React.FC<ResultProps> = ({
  currentUser,
  correct,
  wrong,
  points,
  totalQuestions,
  onPlayAgain,
  onGoHome,
}) => {
  const percentage = Math.round((correct / totalQuestions) * 100);

  const trophies = ['😅', '🤔', '👍', '🎉', '🏆'];
  const messages = [
    'Continua a praticar!',
    'Bom esforço! Revê os temas.',
    'Bom resultado! Base sólida.',
    'Muito bem! Impressionante!',
    'Excelente! Dominas estes temas!',
  ];

  const index =
    percentage < 20
      ? 0
      : percentage < 40
      ? 1
      : percentage < 60
      ? 2
      : percentage < 80
      ? 3
      : 4;

  return (
    <div className="flex flex-col items-center text-center min-h-screen px-5 pt-8 pb-28 max-w-md mx-auto w-full relative z-10">
      {/* Trophy Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12, stiffness: 200 }}
        className="text-7xl my-4 animate-bounce-in"
      >
        {trophies[index]}
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6 space-y-1"
      >
        <h2 className="font-syne font-extrabold text-2xl text-[#f5f0ff]">
          {currentUser} — {percentage}%
        </h2>
        <p className="text-sm text-[#a78bca] font-medium">{messages[index]}</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-3 gap-2.5 w-full mb-8"
      >
        <div className="bg-[#1a0533] border border-[#c084fc]/20 rounded-2xl p-4 text-center">
          <div className="font-syne text-2xl font-extrabold text-[#34d399]">
            {correct}
          </div>
          <div className="text-[11px] text-[#a78bca] mt-0.5">Corretas</div>
        </div>

        <div className="bg-[#1a0533] border border-[#c084fc]/20 rounded-2xl p-4 text-center">
          <div className="font-syne text-2xl font-extrabold text-[#f87171]">
            {wrong}
          </div>
          <div className="text-[11px] text-[#a78bca] mt-0.5">Erradas</div>
        </div>

        <div className="bg-[#1a0533] border border-[#c084fc]/20 rounded-2xl p-4 text-center">
          <div className="font-syne text-2xl font-extrabold text-[#fbbf24]">
            {points}
          </div>
          <div className="text-[11px] text-[#a78bca] mt-0.5">Pontos</div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full space-y-3 mt-auto"
      >
        <button
          onClick={onPlayAgain}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-base shadow-xl shadow-[#7c3aed]/30 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <RotateCcw size={18} />
          <span>Jogar Novamente</span>
        </button>

        <button
          onClick={onGoHome}
          className="w-full py-3.5 rounded-2xl border border-[#c084fc]/20 bg-[#1a0533] text-[#c084fc] font-dmsans text-sm font-medium hover:bg-[#240847] transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <HomeIcon size={16} />
          <span>Início</span>
        </button>
      </motion.div>
    </div>
  );
};
