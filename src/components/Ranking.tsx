import React from 'react';
import { motion } from 'motion/react';
import { Trophy, ArrowLeft, Target, Brain } from 'lucide-react';
import { UserDatabase, UserProfile } from '../types';
import { getIQProfile } from '../utils/iq';

interface RankingProps {
  users: UserDatabase;
  onBack: () => void;
}

export const Ranking: React.FC<RankingProps> = ({ users, onBack }) => {
  const sortedUsers = (Object.entries(users) as [string, UserProfile][]).sort(
    ([, a], [, b]) => b.best - a.best
  );

  const getRankBadge = (index: number) => {
    if (index === 0) return { icon: '🥇', class: 'text-[#fbbf24]' };
    if (index === 1) return { icon: '🥈', class: 'text-[#94a3b8]' };
    if (index === 2) return { icon: '🥉', class: 'text-[#cd7c2f]' };
    return { icon: `${index + 1}`, class: 'text-[#a78bca]' };
  };

  return (
    <div className="flex flex-col min-h-screen px-5 pt-6 pb-28 max-w-md mx-auto w-full relative z-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-xl bg-[#1a0533] border border-[#c084fc]/20 flex items-center justify-center text-[#f5f0ff] hover:bg-[#240847] transition-colors cursor-pointer shrink-0"
        >
          <ArrowLeft size={18} />
        </button>
        <div>
          <h2 className="font-syne text-xl font-bold text-[#f5f0ff] flex items-center gap-2">
            <span>Ranking & QI dos Jogadores</span>
            <Trophy size={20} className="text-[#fbbf24]" />
          </h2>
          <p className="text-xs text-[#a78bca]">Pontuação, precisão e tipo de QI dos jogadores</p>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-2.5 flex-1">
        {sortedUsers.length === 0 ? (
          <div className="text-center py-16 text-[#a78bca]">
            <p className="text-sm">Nenhum jogador registado ainda.</p>
            <p className="text-xs mt-1">Sê o primeiro a jogar!</p>
          </div>
        ) : (
          sortedUsers.map(([username, profile], idx) => {
            const badge = getRankBadge(idx);
            const iq = getIQProfile(profile.totalCorrect || 0, profile.totalAnswered || 0);

            return (
              <motion.div
                key={username}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col gap-2 p-3 bg-[#1a0533] rounded-xl border border-[#c084fc]/20"
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-6 text-center font-syne font-extrabold text-base shrink-0 ${badge.class}`}
                  >
                    {badge.icon}
                  </div>

                  <div className="w-9 h-9 rounded-full bg-[#240847] flex items-center justify-center text-lg shrink-0 border border-[#c084fc]/30">
                    {profile.av}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-dmsans text-sm font-bold text-[#f5f0ff] truncate">
                        {username}
                      </span>
                      <span className="font-syne font-extrabold text-xs text-[#fbbf24] shrink-0">
                        {profile.best} pts
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-[#a78bca] mt-0.5">
                      <span className="flex items-center gap-1 text-[#34d399] font-medium">
                        <Target size={10} />
                        Precisão: {profile.totalAnswered ? iq.accuracy : 0}%
                      </span>
                      <span>•</span>
                      <span>{profile.games} partidas</span>
                    </div>
                  </div>
                </div>

                {/* IQ Type Bar */}
                <div className="flex items-center justify-between gap-1 px-2 py-1 rounded-lg bg-[#0d0118] border border-[#c084fc]/15 text-[10px]">
                  <div className="flex items-center gap-1.5 text-[#e9d5ff]">
                    <Brain size={12} className={iq.color} />
                    <span className="font-semibold">{iq.icon} {iq.label}</span>
                  </div>
                  <span className={`font-extrabold px-1.5 py-0.2 rounded border text-[9px] ${iq.badgeBg}`}>
                    QI ~{iq.score}
                  </span>
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="w-full py-3 rounded-2xl border border-[#c084fc]/20 bg-[#1a0533] text-[#c084fc] font-dmsans text-xs font-medium hover:bg-[#240847] transition-colors cursor-pointer mt-6"
      >
        ← Voltar
      </button>
    </div>
  );
};
