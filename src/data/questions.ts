import { CategoryConfig, CategoryId, Question } from '../types';
import { expandCategoryTo200 } from './questionExpander';
import { FILOSOFIA_QUESTIONS } from './questions/filosofia';
import { CIENCIAS_QUESTIONS } from './questions/ciencias';
import { ANTROPOLOGIA_QUESTIONS } from './questions/antropologia';
import { HISTORIA_QUESTIONS } from './questions/historia';
import { TECNOLOGIA_QUESTIONS } from './questions/tecnologia';
import { COMUNICACAO_QUESTIONS } from './questions/comunicacao';
import { ECONOMIA_QUESTIONS } from './questions/economia';
import { MEDICINA_QUESTIONS } from './questions/medicina';
import { FISICA_QUESTIONS } from './questions/fisica';
import { QUIMICA_QUESTIONS } from './questions/quimica';
import { PORTUGUES_QUESTIONS } from './questions/portugues';
import { MECANICA_QUESTIONS } from './questions/mecanica';
import { PROGRAMACAO_QUESTIONS } from './questions/programacao';
import { MATEMATICA_QUESTIONS } from './questions/matematica';
import { DIREITO_QUESTIONS } from './questions/direito';
import { FINANCAS_QUESTIONS } from './questions/financas';
import { SOCIOLOGIA_QUESTIONS } from './questions/sociologia';
import { OPINIAO_PUBLICA_QUESTIONS } from './questions/opiniao_publica';
import { POLITICA_QUESTIONS } from './questions/politica';
import { GEOGRAFIA_QUESTIONS } from './questions/geografia';
import { SAUDE_QUESTIONS } from './questions/saude';
import { CONTABILIDADE_QUESTIONS } from './questions/contabilidade';
import { INFORMATICA_QUESTIONS } from './questions/informatica';
import { FUTEBOL_QUESTIONS } from './questions/futebol';
import { HISTORIA_ANGOLA_QUESTIONS } from './questions/historia_angola';

export const AVATARS = ['🦁', '🐯', '🦊', '🐺', '🦅', '🐬', '🦋', '🔮'];

// Each category is expanded to exactly 200 high-quality questions
export const CATEGORY_QUESTIONS: Record<CategoryId, Question[]> = {
  todas: [],
  filosofia: expandCategoryTo200('filosofia', FILOSOFIA_QUESTIONS),
  ciencias: expandCategoryTo200('ciencias', CIENCIAS_QUESTIONS),
  antropologia: expandCategoryTo200('antropologia', ANTROPOLOGIA_QUESTIONS),
  historia: expandCategoryTo200('historia', HISTORIA_QUESTIONS),
  tecnologia: expandCategoryTo200('tecnologia', TECNOLOGIA_QUESTIONS),
  comunicacao: expandCategoryTo200('comunicacao', COMUNICACAO_QUESTIONS),
  economia: expandCategoryTo200('economia', ECONOMIA_QUESTIONS),
  medicina: expandCategoryTo200('medicina', MEDICINA_QUESTIONS),
  fisica: expandCategoryTo200('fisica', FISICA_QUESTIONS),
  quimica: expandCategoryTo200('quimica', QUIMICA_QUESTIONS),
  portugues: expandCategoryTo200('portugues', PORTUGUES_QUESTIONS),
  mecanica: expandCategoryTo200('mecanica', MECANICA_QUESTIONS),
  programacao: expandCategoryTo200('programacao', PROGRAMACAO_QUESTIONS),
  matematica: expandCategoryTo200('matematica', MATEMATICA_QUESTIONS),
  direito: expandCategoryTo200('direito', DIREITO_QUESTIONS),
  financas: expandCategoryTo200('financas', FINANCAS_QUESTIONS),
  sociologia: expandCategoryTo200('sociologia', SOCIOLOGIA_QUESTIONS),
  opiniao_publica: expandCategoryTo200('opiniao_publica', OPINIAO_PUBLICA_QUESTIONS),
  politica: expandCategoryTo200('politica', POLITICA_QUESTIONS),
  geografia: expandCategoryTo200('geografia', GEOGRAFIA_QUESTIONS),
  saude: expandCategoryTo200('saude', SAUDE_QUESTIONS),
  contabilidade: expandCategoryTo200('contabilidade', CONTABILIDADE_QUESTIONS),
  informatica: expandCategoryTo200('informatica', INFORMATICA_QUESTIONS),
  futebol: expandCategoryTo200('futebol', FUTEBOL_QUESTIONS),
  historia_angola: expandCategoryTo200('historia_angola', HISTORIA_ANGOLA_QUESTIONS),
};

export const QUESTIONS: Question[] = Object.values(CATEGORY_QUESTIONS).flat();

export const CATEGORIES: Record<CategoryId, CategoryConfig> = {
  todas: { id: 'todas', label: 'Todas', icon: '', color: '#c084fc', bg: 'rgba(192,132,252,0.15)', count: QUESTIONS.length },
  filosofia: { id: 'filosofia', label: 'Filosofia', icon: '', color: '#c084fc', bg: 'rgba(192,132,252,0.15)', count: CATEGORY_QUESTIONS.filosofia.length },
  ciencias: { id: 'ciencias', label: 'Ciências', icon: '', color: '#34d399', bg: 'rgba(52,211,153,0.15)', count: CATEGORY_QUESTIONS.ciencias.length },
  antropologia: { id: 'antropologia', label: 'Antropologia', icon: '', color: '#fb923c', bg: 'rgba(251,146,60,0.15)', count: CATEGORY_QUESTIONS.antropologia.length },
  historia: { id: 'historia', label: 'História', icon: '', color: '#60a5fa', bg: 'rgba(96,165,250,0.15)', count: CATEGORY_QUESTIONS.historia.length },
  tecnologia: { id: 'tecnologia', label: 'Tecnologia', icon: '', color: '#38bdf8', bg: 'rgba(56,189,248,0.15)', count: CATEGORY_QUESTIONS.tecnologia.length },
  comunicacao: { id: 'comunicacao', label: 'Comunicação', icon: '', color: '#f472b6', bg: 'rgba(244,114,182,0.15)', count: CATEGORY_QUESTIONS.comunicacao.length },
  economia: { id: 'economia', label: 'Economia', icon: '', color: '#facc15', bg: 'rgba(250,204,21,0.15)', count: CATEGORY_QUESTIONS.economia.length },
  medicina: { id: 'medicina', label: 'Medicina', icon: '', color: '#f87171', bg: 'rgba(248,113,113,0.15)', count: CATEGORY_QUESTIONS.medicina.length },
  fisica: { id: 'fisica', label: 'Física', icon: '', color: '#38bdf8', bg: 'rgba(56,189,248,0.15)', count: CATEGORY_QUESTIONS.fisica.length },
  quimica: { id: 'quimica', label: 'Química', icon: '', color: '#a78bfa', bg: 'rgba(167,139,250,0.15)', count: CATEGORY_QUESTIONS.quimica.length },
  portugues: { id: 'portugues', label: 'Português', icon: '', color: '#f472b6', bg: 'rgba(244,114,182,0.15)', count: CATEGORY_QUESTIONS.portugues.length },
  mecanica: { id: 'mecanica', label: 'Mecânica', icon: '', color: '#fb923c', bg: 'rgba(251,146,60,0.15)', count: CATEGORY_QUESTIONS.mecanica.length },
  programacao: { id: 'programacao', label: 'Programação', icon: '', color: '#34d399', bg: 'rgba(52,211,153,0.15)', count: CATEGORY_QUESTIONS.programacao.length },
  matematica: { id: 'matematica', label: 'Matemática', icon: '', color: '#60a5fa', bg: 'rgba(96,165,250,0.15)', count: CATEGORY_QUESTIONS.matematica.length },
  direito: { id: 'direito', label: 'Direito', icon: '', color: '#facc15', bg: 'rgba(250,204,21,0.15)', count: CATEGORY_QUESTIONS.direito.length },
  financas: { id: 'financas', label: 'Finanças', icon: '', color: '#4ade80', bg: 'rgba(74,222,128,0.15)', count: CATEGORY_QUESTIONS.financas.length },
  sociologia: { id: 'sociologia', label: 'Sociologia', icon: '', color: '#e879f9', bg: 'rgba(232,121,249,0.15)', count: CATEGORY_QUESTIONS.sociologia.length },
  opiniao_publica: { id: 'opiniao_publica', label: 'Opinião Pública', icon: '', color: '#fbbf24', bg: 'rgba(251,191,36,0.15)', count: CATEGORY_QUESTIONS.opiniao_publica.length },
  politica: { id: 'politica', label: 'Política', icon: '', color: '#c084fc', bg: 'rgba(192,132,252,0.15)', count: CATEGORY_QUESTIONS.politica.length },
  geografia: { id: 'geografia', label: 'Geografia', icon: '', color: '#2dd4bf', bg: 'rgba(45,212,191,0.15)', count: CATEGORY_QUESTIONS.geografia.length },
  saude: { id: 'saude', label: 'Saúde', icon: '', color: '#f87171', bg: 'rgba(248,113,113,0.15)', count: CATEGORY_QUESTIONS.saude.length },
  contabilidade: { id: 'contabilidade', label: 'Contabilidade', icon: '', color: '#818cf8', bg: 'rgba(129,140,248,0.15)', count: CATEGORY_QUESTIONS.contabilidade.length },
  informatica: { id: 'informatica', label: 'Informática', icon: '', color: '#38bdf8', bg: 'rgba(56,189,248,0.15)', count: CATEGORY_QUESTIONS.informatica.length },
  futebol: { id: 'futebol', label: 'Futebol', icon: '', color: '#22c55e', bg: 'rgba(34,197,94,0.15)', count: CATEGORY_QUESTIONS.futebol.length },
  historia_angola: { id: 'historia_angola', label: 'História de Angola', icon: '', color: '#ef4444', bg: 'rgba(239,68,68,0.15)', count: CATEGORY_QUESTIONS.historia_angola.length },
};

const STORAGE_SEEN_QUESTIONS_KEY = 'academia_sabedoria_seen_questions_v2';

function getSeenMap(): Record<string, string[]> {
  try {
    const raw = localStorage.getItem(STORAGE_SEEN_QUESTIONS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveSeenMap(map: Record<string, string[]>) {
  try {
    localStorage.setItem(STORAGE_SEEN_QUESTIONS_KEY, JSON.stringify(map));
  } catch (e) {
    console.error('Failed to save seen questions', e);
  }
}

function getQuestionKey(q: Question): string {
  return `${q.cat}:::${q.q.trim()}`;
}

export function shuffleQuestionOptions(q: Question): Question {
  const indexed = q.opts.map((opt, i) => ({ opt, isCorrect: i === q.ans }));
  for (let i = indexed.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexed[i], indexed[j]] = [indexed[j], indexed[i]];
  }
  return {
    ...q,
    opts: indexed.map((item) => item.opt),
    ans: indexed.findIndex((item) => item.isCorrect),
  };
}

export function getRandomQuestions(cat: CategoryId, count = 10, username = 'default'): Question[] {
  const pool = cat === 'todas' ? QUESTIONS : (CATEGORY_QUESTIONS[cat] || []);
  if (!pool || pool.length === 0) return [];

  const userCatKey = `${username}_${cat}`;
  const seenMap = getSeenMap();
  let seenKeys = new Set<string>(seenMap[userCatKey] || []);

  // Filter questions not seen yet
  let unseenPool = pool.filter((q) => !seenKeys.has(getQuestionKey(q)));

  let selected: Question[] = [];

  if (unseenPool.length >= count) {
    // We have enough unseen questions for a full game
    const shuffled = [...unseenPool].sort(() => Math.random() - 0.5);
    selected = shuffled.slice(0, count);
    selected.forEach((q) => seenKeys.add(getQuestionKey(q)));
  } else if (unseenPool.length > 0) {
    // We have SOME unseen questions, but not enough for 'count'
    // 1. Take all remaining unseen questions
    selected = [...unseenPool];
    const needed = count - unseenPool.length;

    // 2. All questions in this category have now been presented! Reset seen tracker for new cycle
    seenKeys = new Set<string>();

    // 3. Pick 'needed' additional questions from pool excluding those already selected
    const selectedKeys = new Set(selected.map((q) => getQuestionKey(q)));
    const remainingPool = pool.filter((q) => !selectedKeys.has(getQuestionKey(q)));
    const shuffledRemaining = [...remainingPool].sort(() => Math.random() - 0.5);
    const extra = shuffledRemaining.slice(0, needed);

    selected = [...selected, ...extra];

    // Mark the new cycle's questions as seen
    selected.forEach((q) => seenKeys.add(getQuestionKey(q)));
  } else {
    // unseenPool is empty -> User has already answered ALL questions in this category!
    // Reset cycle and start fresh
    seenKeys = new Set<string>();
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    selected = shuffled.slice(0, count);
    selected.forEach((q) => seenKeys.add(getQuestionKey(q)));
  }

  // Save updated seen keys
  seenMap[userCatKey] = Array.from(seenKeys);
  saveSeenMap(seenMap);

  // Return with shuffled options
  return selected.map((q) => shuffleQuestionOptions(q));
}

export function getCategoryQuestionStats(cat: CategoryId, username = 'default') {
  const pool = cat === 'todas' ? QUESTIONS : (CATEGORY_QUESTIONS[cat] || []);
  const userCatKey = `${username}_${cat}`;
  const seenMap = getSeenMap();
  const seenKeys = new Set<string>(seenMap[userCatKey] || []);
  const seenCount = pool.filter((q) => seenKeys.has(getQuestionKey(q))).length;
  return {
    seenCount,
    totalCount: pool.length,
    remainingCount: Math.max(0, pool.length - seenCount),
    isCompletedCycle: pool.length > 0 && seenCount === pool.length,
  };
}

export function resetCategoryQuestionProgress(cat?: CategoryId, username = 'default') {
  const seenMap = getSeenMap();
  if (cat) {
    delete seenMap[`${username}_${cat}`];
  } else {
    Object.keys(seenMap).forEach((key) => {
      if (key.startsWith(`${username}_`)) {
        delete seenMap[key];
      }
    });
  }
  saveSeenMap(seenMap);
}

