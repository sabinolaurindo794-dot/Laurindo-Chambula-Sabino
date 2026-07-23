import React from 'react';
import { motion } from 'motion/react';
import { Trophy, ArrowLeft } from 'lucide-react';
import { UserDatabase, UserProfile } from '../types';

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
            <span>Ranking Global</span>
            <Trophy size={20} className="text-[#fbbf24]" />
          </h2>
          <p className="text-xs text-[#a78bca]">Os melhores jogadores do Lau Quiz</p>
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
            return (
              <motion.div
                key={username}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-3.5 bg-[#1a0533] rounded-xl border border-[#c084fc]/20"
              >
                <div
                  className={`w-7 text-center font-syne font-extrabold text-lg shrink-0 ${badge.class}`}
                >
                  {badge.icon}
                </div>

                <div className="w-10 h-10 rounded-full bg-[#240847] flex items-center justify-center text-xl shrink-0">
                  {profile.av}
                </div>

                <div className="flex-1 font-dmsans text-sm font-medium text-[#f5f0ff] truncate">
                  {username}
                </div>

                <div className="font-syne font-bold text-sm text-[#fbbf24] shrink-0">
                  {profile.best} pts
                </div>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="w-full py-3.5 rounded-2xl border border-[#c084fc]/20 bg-[#1a0533] text-[#c084fc] font-dmsans text-sm font-medium hover:bg-[#240847] transition-colors cursor-pointer mt-6"
      >
        ← Voltar
      </button>
    </div>
  );
};
