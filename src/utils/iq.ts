export interface IQProfile {
  score: number;
  label: string;
  description: string;
  icon: string;
  accuracy: number;
  color: string;
  badgeBg: string;
}

export function calculateAccuracy(correct: number = 0, total: number = 0): number {
  if (!total || total <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((correct / total) * 100)));
}

export function getIQProfile(correct: number = 0, total: number = 0): IQProfile {
  const accuracy = calculateAccuracy(correct, total);

  if (!total || total === 0) {
    return {
      score: 100,
      label: 'QI Em Avaliação',
      description: 'Responda a perguntas para determinar a sua precisão e o seu tipo de QI.',
      icon: '🧠',
      accuracy: 0,
      color: 'text-[#a78bca]',
      badgeBg: 'bg-[#240847] border-[#c084fc]/30 text-[#f5f0ff]',
    };
  }

  const score = Math.min(155, Math.max(80, Math.round(80 + (accuracy * 0.72))));

  if (accuracy >= 90) {
    return {
      score,
      label: 'QI Genial',
      description: 'Raciocínio lógico e precisão analítica de nível extraordinário.',
      icon: '🧠✨',
      accuracy,
      color: 'text-[#34d399]',
      badgeBg: 'bg-[#064e3b]/50 border-[#34d399]/40 text-[#34d399]',
    };
  } else if (accuracy >= 75) {
    return {
      score,
      label: 'QI Superior',
      description: 'Mente altamente aguçada com elevada precisão e raciocínio crítico.',
      icon: '⚡',
      accuracy,
      color: 'text-[#c084fc]',
      badgeBg: 'bg-[#581c87]/50 border-[#c084fc]/40 text-[#e9d5ff]',
    };
  } else if (accuracy >= 60) {
    return {
      score,
      label: 'QI Elevado',
      description: 'Excelente capacidade de dedução e assimilação de conceitos.',
      icon: '💡',
      accuracy,
      color: 'text-[#38bdf8]',
      badgeBg: 'bg-[#075985]/50 border-[#38bdf8]/40 text-[#38bdf8]',
    };
  } else if (accuracy >= 40) {
    return {
      score,
      label: 'QI Médio',
      description: 'Boa base de conhecimento geral e retenção equilibrada.',
      icon: '📘',
      accuracy,
      color: 'text-[#fbbf24]',
      badgeBg: 'bg-[#78350f]/50 border-[#fbbf24]/40 text-[#fbbf24]',
    };
  } else {
    return {
      score,
      label: 'QI Em Aprendizagem',
      description: 'Em fase de desenvolvimento contínuo e expansão de conhecimento.',
      icon: '🌱',
      accuracy,
      color: 'text-[#f87171]',
      badgeBg: 'bg-[#7f1d1d]/50 border-[#f87171]/40 text-[#f87171]',
    };
  }
}
