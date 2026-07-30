import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Star, XCircle, Volume2, VolumeX } from 'lucide-react';
import { GameMode, Question } from '../types';
import { CATEGORIES } from '../data/questions';
import { soundEngine } from '../utils/audio';

interface QuizProps {
  questions: Question[];
  mode: GameMode;
  currentUser: string;
  opponentName?: string;
  onFinishQuiz: (stats: { correct: number; wrong: number; points: number }) => void;
  onQuit: () => void;
}

export const Quiz: React.FC<QuizProps> = ({
  questions,
  mode,
  currentUser,
  opponentName = 'Adversário',
  onFinishQuiz,
  onQuit,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [isMuted, setIsMuted] = useState(() => soundEngine.getIsMuted());

  // Timer state
  const [timeLeft, setTimeLeft] = useState(15);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Multiplayer simulated progress
  const [opponentProgress, setOpponentProgress] = useState(0);

  const currentQ = questions[currentIdx];
  const total = questions.length;
  const letters = ['A', 'B', 'C', 'D'];
  const catConfig = CATEGORIES[currentQ?.cat] || CATEGORIES.todas;

  // Speak female voice welcome greeting when starting to play
  useEffect(() => {
    soundEngine.speakWelcome('Bem-vindo ao EidQuiz!');
  }, []);

  // Reflection sound during question reflection phase
  useEffect(() => {
    if (!isAnswered) {
      soundEngine.startReflectionSound();
    } else {
      soundEngine.stopReflectionSound();
    }

    return () => {
      soundEngine.stopReflectionSound();
    };
  }, [currentIdx, isAnswered]);

  // Timer logic
  useEffect(() => {
    if (mode === 'timer' && !isAnswered) {
      setTimeLeft(15);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleAnswer(-1); // timeout
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIdx, mode, isAnswered]);

  const handleToggleMute = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
  };

  const handleAnswer = (ansIdx: number) => {
    if (isAnswered) return;

    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedAns(ansIdx);
    setIsAnswered(true);

    soundEngine.stopReflectionSound();

    const isCorrect = ansIdx === currentQ.ans;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      const timeBonus = mode === 'timer' ? Math.max(0, timeLeft * 5) : 0;
      const roundPts = 100 + timeBonus;
      setPoints((prev) => prev + roundPts);

      soundEngine.playCorrectTone();
    } else {
      setWrongCount((prev) => prev + 1);

      soundEngine.playWrongTone();
    }

    // Multiplayer progress update
    if (mode === 'multi') {
      const oppPct = Math.min(
        100,
        Math.round(((currentIdx + 1) / total) * 100 * (0.6 + Math.random() * 0.5))
      );
      setOpponentProgress(oppPct);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < total) {
      setCurrentIdx((prev) => prev + 1);
      setIsAnswered(false);
      setSelectedAns(null);
    } else {
      soundEngine.stopReflectionSound();
      onFinishQuiz({
        correct: correctCount,
        wrong: wrongCount,
        points: points,
      });
    }
  };

  const handleQuitGame = () => {
    soundEngine.stopReflectionSound();
    onQuit();
  };

  // Timer Ring calculations
  const strokeDashoffset = 119.4 * (1 - timeLeft / 15);
  const timerColor =
    timeLeft > 7 ? 'var(--accent)' : timeLeft > 3 ? 'var(--gold)' : 'var(--red)';

  return (
    <div className="flex flex-col min-h-screen px-5 pt-5 pb-28 max-w-md mx-auto w-full relative z-10">
      {/* Top Bar */}
      <div className="flex items-center gap-2.5 mb-5">
        <button
          onClick={handleQuitGame}
          className="w-9 h-9 rounded-xl bg-[#1a0533] border border-[#c084fc]/20 flex items-center justify-center text-[#f5f0ff] hover:bg-[#240847] transition-colors cursor-pointer shrink-0"
          title="Sair"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="flex-1">
          <div className="text-[11px] text-[#a78bca] mb-1 font-medium">
            {currentIdx + 1} de {total}
          </div>
          <div className="h-1.5 bg-[#1a0533] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#c084fc] to-[#f0abfc] rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        {/* Audio Mute Button */}
        <button
          onClick={handleToggleMute}
          className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
            isMuted
              ? 'bg-[#f87171]/10 border-[#f87171]/30 text-[#f87171]'
              : 'bg-[#1a0533] border-[#c084fc]/20 text-[#c084fc] hover:bg-[#240847]'
          }`}
          title={isMuted ? 'Ativar som' : 'Desativar som'}
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>

        {/* Timer SVG in timer mode */}
        {mode === 'timer' && (
          <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
            <svg className="w-10 h-10 -rotate-90">
              <circle
                cx="20"
                cy="20"
                r="17"
                className="fill-none stroke-[#1a0533] stroke-[3]"
              />
              <circle
                cx="20"
                cy="20"
                r="17"
                className="fill-none stroke-[3] stroke-dasharray-[106.8] transition-all duration-1000 ease-linear"
                style={{
                  strokeDasharray: 106.8,
                  strokeDashoffset: 106.8 * (1 - timeLeft / 15),
                  stroke: timerColor,
                }}
              />
            </svg>
            <span
              className="absolute font-syne font-bold text-xs"
              style={{ color: timerColor }}
            >
              {timeLeft}
            </span>
          </div>
        )}

        {/* Live Score Chip */}
        <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#1a0533] rounded-full border border-[#c084fc]/20 text-xs font-semibold text-[#fbbf24] shrink-0">
          <Star size={13} fill="currentColor" />
          <span>{points}</span>
        </div>
      </div>

      {/* Multiplayer VS Bar */}
      {mode === 'multi' && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2.5 p-3 bg-[#1a0533] rounded-xl border border-[#c084fc]/20 mb-4"
        >
          <div className="flex-1">
            <div className="text-[11px] font-medium text-[#a78bca] truncate">
              {currentUser}
            </div>
            <div className="h-1.5 bg-[#240847] rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-[#c084fc] transition-all duration-500"
                style={{
                  width: `${Math.round(((currentIdx + 1) / total) * 100)}%`,
                }}
              />
            </div>
          </div>
          <span className="font-syne font-bold text-xs text-[#a78bca]">VS</span>
          <div className="flex-1 text-right">
            <div className="text-[11px] font-medium text-[#a78bca] truncate">
              {opponentName}
            </div>
            <div className="h-1.5 bg-[#240847] rounded-full mt-1 overflow-hidden">
              <div
                className="h-full bg-[#fbbf24] transition-all duration-500"
                style={{ width: `${opponentProgress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Question Category Badge */}
      <div className="mb-3">
        <span
          className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
          style={{
            backgroundColor: catConfig.bg,
            color: catConfig.color,
          }}
        >
          {catConfig.label}
        </span>
      </div>

      {/* Question Card */}
      <motion.div
        key={currentIdx}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-[#1a0533] border border-[#c084fc]/20 rounded-2xl p-5 mb-5 shadow-lg"
      >
        <div className="text-xs text-[#a78bca] font-medium mb-1.5">
          Pergunta {currentIdx + 1}
        </div>
        <h3 className="font-syne font-semibold text-lg text-[#f5f0ff] leading-snug">
          {currentQ.q}
        </h3>
      </motion.div>

      {/* Options */}
      <div className="space-y-2.5 mb-5">
        {currentQ.opts.map((optText, i) => {
          const isCorrect = i === currentQ.ans;
          const isSelected = i === selectedAns;

          let btnStyle =
            'border-[#c084fc]/20 bg-[#1a0533] hover:bg-[#240847] text-[#f5f0ff]';
          let letterStyle =
            'border-[#c084fc]/30 text-[#a78bca] bg-[#0d0118]/50';

          if (isAnswered) {
            if (isCorrect) {
              btnStyle =
                'border-[#34d399] bg-[#34d399]/15 text-white font-medium';
              letterStyle =
                'border-[#34d399] text-[#34d399] bg-[#34d399]/20 font-bold';
            } else if (isSelected) {
              btnStyle =
                'border-[#f87171] bg-[#f87171]/15 text-white font-medium';
              letterStyle =
                'border-[#f87171] text-[#f87171] bg-[#f87171]/20 font-bold';
            } else {
              btnStyle = 'border-[#c084fc]/10 bg-[#1a0533]/40 text-[#a78bca] opacity-60';
            }
          }

          return (
            <button
              key={i}
              disabled={isAnswered}
              onClick={() => handleAnswer(i)}
              className={`w-full p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${btnStyle}`}
            >
              <div
                className={`w-8 h-8 rounded-lg border flex items-center justify-center font-syne font-bold text-xs shrink-0 transition-colors ${letterStyle}`}
              >
                {letters[i]}
              </div>
              <span className="text-sm font-dmsans leading-tight flex-1">
                {optText}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explanation / Feedback */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-xl border mb-6 text-xs leading-relaxed ${
            selectedAns === currentQ.ans
              ? 'bg-[#34d399]/10 border-[#34d399]/30 text-[#6ee7b7]'
              : 'bg-[#f87171]/10 border-[#f87171]/30 text-[#fca5a5]'
          }`}
        >
          <div className="flex items-center gap-1.5 font-bold text-sm mb-1">
            {selectedAns === currentQ.ans ? (
              <>
                <CheckCircle2 size={16} />
                <span>Correto!</span>
              </>
            ) : (
              <>
                <XCircle size={16} />
                <span>Incorreto.</span>
              </>
            )}
          </div>
          <p className="opacity-90">{currentQ.exp}</p>
        </motion.div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md p-5 bg-gradient-to-t from-[#0d0118] via-[#0d0118]/90 to-transparent z-20"
        >
          <button
            onClick={handleNext}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#c084fc] to-[#7c3aed] text-white font-syne font-bold text-base shadow-xl shadow-[#7c3aed]/30 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
          >
            {currentIdx + 1 < total ? 'Próxima Pergunta →' : 'Ver Resultados'}
          </button>
        </motion.div>
      )}
    </div>
  );
};
