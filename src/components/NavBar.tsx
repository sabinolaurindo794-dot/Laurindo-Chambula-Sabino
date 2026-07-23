import React from 'react';
import { Home, Trophy, Users } from 'lucide-react';
import { ScreenId } from '../types';

interface NavBarProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeScreen, onNavigate }) => {
  if (activeScreen === 'splash' || activeScreen === 'quiz') {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#1a0533] border-t border-[#c084fc]/20 py-2.5 px-4 flex justify-around z-30 shadow-2xl">
      <button
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer ${
          activeScreen === 'home' ? 'text-[#c084fc]' : 'text-[#a78bca] hover:text-[#f5f0ff]'
        }`}
      >
        <Home size={20} />
        <span>Início</span>
      </button>

      <button
        onClick={() => onNavigate('ranking')}
        className={`flex flex-col items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer ${
          activeScreen === 'ranking' ? 'text-[#c084fc]' : 'text-[#a78bca] hover:text-[#f5f0ff]'
        }`}
      >
        <Trophy size={20} />
        <span>Ranking</span>
      </button>

      <button
        onClick={() => onNavigate('multi-lobby')}
        className={`flex flex-col items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer ${
          activeScreen === 'multi-lobby' ? 'text-[#c084fc]' : 'text-[#a78bca] hover:text-[#f5f0ff]'
        }`}
      >
        <Users size={20} />
        <span>Multi</span>
      </button>
    </nav>
  );
};
