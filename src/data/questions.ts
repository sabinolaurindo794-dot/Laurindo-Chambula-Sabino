import { CategoryConfig, CategoryId, Question } from '../types';
import { FILOSOFIA_QUESTIONS } from './questions/filosofia';
import { CIENCIAS_QUESTIONS } from './questions/ciencias';
import { ANTROPOLOGIA_QUESTIONS } from './questions/antropologia';
import { HISTORIA_QUESTIONS } from './questions/historia';
import { TECNOLOGIA_QUESTIONS } from './questions/tecnologia';
import { COMUNICACAO_QUESTIONS } from './questions/comunicacao';
import { ECONOMIA_QUESTIONS } from './questions/economia';
import { MEDICINA_QUESTIONS } from './questions/medicina';

export const AVATARS = ['🦁', '🐯', '🦊', '🐺', '🦅', '🐬', '🦋', '🔮'];

export const QUESTIONS: Question[] = [
  ...FILOSOFIA_QUESTIONS,
  ...CIENCIAS_QUESTIONS,
  ...ANTROPOLOGIA_QUESTIONS,
  ...HISTORIA_QUESTIONS,
  ...TECNOLOGIA_QUESTIONS,
  ...COMUNICACAO_QUESTIONS,
  ...ECONOMIA_QUESTIONS,
  ...MEDICINA_QUESTIONS,
];

export const CATEGORIES: Record<CategoryId, CategoryConfig> = {
  todas: { id: 'todas', label: 'Todas', icon: '🌐', color: '#c084fc', bg: 'rgba(192,132,252,0.15)', count: QUESTIONS.length },
  filosofia: { id: 'filosofia', label: 'Filosofia', icon: '🧠', color: '#c084fc', bg: 'rgba(192,132,252,0.15)', count: FILOSOFIA_QUESTIONS.length },
  ciencias: { id: 'ciencias', label: 'Ciências', icon: '🔬', color: '#34d399', bg: 'rgba(52,211,153,0.15)', count: CIENCIAS_QUESTIONS.length },
  antropologia: { id: 'antropologia', label: 'Antropologia', icon: '🗺️', color: '#fb923c', bg: 'rgba(251,146,60,0.15)', count: ANTROPOLOGIA_QUESTIONS.length },
  historia: { id: 'historia', label: 'História', icon: '📜', color: '#60a5fa', bg: 'rgba(96,165,250,0.15)', count: HISTORIA_QUESTIONS.length },
  tecnologia: { id: 'tecnologia', label: 'Tecnologia', icon: '💻', color: '#38bdf8', bg: 'rgba(56,189,248,0.15)', count: TECNOLOGIA_QUESTIONS.length },
  comunicacao: { id: 'comunicacao', label: 'Comunicação', icon: '🗣️', color: '#f472b6', bg: 'rgba(244,114,182,0.15)', count: COMUNICACAO_QUESTIONS.length },
  economia: { id: 'economia', label: 'Economia', icon: '📈', color: '#facc15', bg: 'rgba(250,204,21,0.15)', count: ECONOMIA_QUESTIONS.length },
  medicina: { id: 'medicina', label: 'Medicina', icon: '🩺', color: '#f87171', bg: 'rgba(248,113,113,0.15)', count: MEDICINA_QUESTIONS.length },
};

export function getRandomQuestions(cat: CategoryId, count = 10): Question[] {
  const pool = cat === 'todas' ? QUESTIONS : QUESTIONS.filter(q => q.cat === cat);
  return [...pool].sort(() => Math.random() - 0.5).slice(0, count);
}
