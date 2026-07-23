export type CategoryId = 'todas' | 'filosofia' | 'ciencias' | 'antropologia' | 'historia' | 'tecnologia' | 'comunicacao' | 'economia' | 'medicina';
export type GameMode = 'solo' | 'timer' | 'multi';
export type ScreenId = 'splash' | 'home' | 'quiz' | 'multi-lobby' | 'result' | 'ranking';

export interface Question {
  id?: string;
  cat: CategoryId;
  q: string;
  opts: string[];
  ans: number;
  exp: string;
}

export interface UserProfile {
  av: string;
  points: number;
  games: number;
  best: number;
}

export interface UserDatabase {
  [username: string]: UserProfile;
}

export interface CategoryConfig {
  id: CategoryId;
  label: string;
  icon: string;
  color: string;
  bg: string;
  count: number;
}
