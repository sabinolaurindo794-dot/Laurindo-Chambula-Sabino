import React from 'react';
import { motion } from 'motion/react';
import { RotateCcw, Home as HomeIcon, Target, Brain, Sparkles } from 'lucide-react';
import { getIQProfile } from '../utils/iq';

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
  const percentage = Math.round((correct / (totalQuestions || 1)) * 100);
  const iqProfile = getIQProfile(correct, totalQuestions);

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
    <div className="flex flex-col items-center text-center min-h-screen px-5 pt-6 pb-28 max-w-md mx-auto w-full relative z-10">
      {/* Trophy Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', damping: 12, stiffness: 200 }}
        className="text-6xl my-2 animate-bounce-in shrink-0"
      >
        {trophies[index]}
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-4 space-y-0.5"
      >
        <h2 className="font-syne font-extrabold text-2xl text-[#f5f0ff]">
          {currentUser}
        </h2>
        <p className="text-xs text-[#a78bca] font-medium">{messages[index]}</p>
      </motion.div>

      {/* IQ Type & Accuracy Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-gradient-to-br from-[#1d063b] via-[#120324] to-[#1a0533] border border-[#c084fc]/35 rounded-2xl p-4 mb-4 text-left shadow-lg space-y-3"
      >
        {/* IQ Type Header */}
        <div className="flex items-center justify-between gap-2 border-b border-[#c084fc]/20 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#7c3aed]/20 text-[#c084fc] border border-[#c084fc]/30">
              <Brain size={18} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#a78bca] font-bold flex items-center gap-1">
                <span>Avaliação de QI</span>
                <Sparkles size={10} className="text-[#fbbf24]" />
              </div>
              <div className="font-syne text-base font-extrabold text-[#f5f0ff] flex items-center gap-1.5">
                <span>{iqProfile.icon}</span>
                <span>{iqProfile.label}</span>
              </div>
            </div>
          </div>

          <div className={`px-2.5 py-1 rounded-xl text-xs font-syne font-extrabold border ${iqProfile.badgeBg}`}>
            QI ~{iqProfile.score}
          </div>
        </div>

        <p className="text-[11px] text-[#e9d5ff]/90 leading-relaxed italic">
          "{iqProfile.description}"
        </p>

        {/* Precision Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-[#a78bca] font-medium flex items-center gap-1">
              <Target size={12} className="text-[#34d399]" />
              Precisão de Respostas:
            </span>
            <span className="font-syne font-extrabold text-[#34d399]">
              {percentage}% ({correct}/{totalQuestions})
            </span>
          </div>

          <div className="w-full h-2.5 bg-[#0d0118] rounded-full overflow-hidden border border-[#34d399]/30">
            <div
              className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] transition-all duration-500 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-3 gap-2 w-full mb-6"
      >
        <div className="bg-[#1a0533] border border-[#c084fc]/20 rounded-2xl p-3 text-center">
          <div className="font-syne text-xl font-extrabold text-[#34d399]">
            {correct}
          </div>
          <div className="text-[10px] text-[#a78bca] mt-0.5">Corretas</div>
        </div>

        <div className="bg-[#1a0533] border border-[#c084fc]/20 rounded-2xl p-3 text-center">
          <div className="font-syne text-xl font-extrabold text-[#f87171]">
            {wrong}
          </div>
          <div className="text-[10px] text-[#a78bca] mt-0.5">Erradas</div>
        </div>

        <div className="bg-[#1a0533] border border-[#c084fc]/20 rounded-2xl p-3 text-center">
          <div className="font-syne text-xl font-extrabold text-[#fbbf24]">
            {points}
          </div>
          <div className="text-[10px] text-[#a78bca] mt-0.5">Pontos</div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full space-y-2.5 mt-auto"
      >
        <button
          onClick={onPlayAgain}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-sm shadow-xl shadow-[#7c3aed]/30 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <RotateCcw size={16} />
          <span>Jogar Novamente</span>
        </button>

        <button
          onClick={onGoHome}
          className="w-full py-3 rounded-2xl border border-[#c084fc]/20 bg-[#1a0533] text-[#c084fc] font-dmsans text-xs font-medium hover:bg-[#240847] transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <HomeIcon size={15} />
          <span>Início</span>
        </button>
      </motion.div>
    </div>
  );
};
