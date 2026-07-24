import { Question } from '../../types';

export const MECANICA_QUESTIONS: Question[] = [
  {
    cat: 'mecanica',
    q: 'Qual ciclo termodinâmico ideal define o limite máximo de eficiência teórica para qualquer máquina térmica entre duas fontes de temperatura?',
    opts: ['Ciclo Otto', 'Ciclo Diesel', 'Ciclo de Carnot', 'Ciclo Rankine'],
    ans: 2,
    exp: 'O Ciclo de Carnot, constituído por duas transformações isotérmicas e duas adiabáticas reversíveis, estabelece o rendimento máximo teórico.'
  },
  {
    cat: 'mecanica',
    q: 'Em elementos de máquinas, qual componente mecânico tem como função transmitir torque e rotação permitindo desvios angulares entre eixos?',
    opts: ['Junta Homocinética (Cardã)', 'Chaveta paralela', 'Mancal de deslizamento', 'Anel elástico retenção'],
    ans: 0,
    exp: 'As juntas cardã e homocinéticas articuladas permitem a transmissão de potência mecânica contínua entre eixos não alinhados.'
  },
  {
    cat: 'mecanica',
    q: 'O módulo de elasticidade (ou Módulo de Young) de um material mede a sua resistência a:',
    opts: ['Deformação plástica sob impacto', 'Deformação elástica sob tensão axial', 'Fadiga por ciclos térmicos', 'Desgaste por abrasão superficial'],
    ans: 1,
    exp: 'O Módulo de Young (E = tensão / deformação) representa a rigidez do material dentro do regime elástico linear (Lei de Hooke).'
  },
  {
    cat: 'mecanica',
    q: 'Em motores de combustão interna de quatro tempos, quais são as quatro fases em sequência correta?',
    opts: ['Admissão, Compressão, Combustão/Expansão, Escapamento', 'Compressão, Admissão, Injeção, Escape', 'Ignição, Admissão, Exaustão, Lubrificação', 'Admissão, Exaustão, Compressão, Ignição'],
    ans: 0,
    exp: 'O ciclo de quatro tempos (Otto/Diesel) executa ordenadamente: Admissão do fluido, Compressão, Combustão/Expansão (tempo motor) e Escapamento.'
  },
  {
    cat: 'mecanica',
    q: 'Qual instrumento de medição de alta precisão é utilizado na metrologia mecânica para medir dimensões com resolução de milésimos de milímetro (μm)?',
    opts: ['Paquímetro analógico', 'Micrômetro', 'Goniômetro', 'Régua graduada de fita'],
    ans: 1,
    exp: 'O micrômetro utiliza o sistema parafuso micrométrico calibrado para aferir espessuras e diâmetros com precisão de até 0,001 mm.'
  },
  {
    cat: 'mecanica',
    q: 'Na mecânica dos fluidos, a equação de Bernoulli expressa a conservação de qual grandeza ao longo de uma linha de corrente para um fluido incompressível?',
    opts: ['Massa atômica', 'Energia mecânica por unidade de volume', 'Entropia estática', 'Viscosidade cinemática'],
    ans: 1,
    exp: 'A equação de Bernoulli relaciona pressão, velocidade e altitude de um fluido, expressando a conservação da energia mecânica total do escoamento.'
  },
  {
    cat: 'mecanica',
    q: 'Qual a principal causa da falha mecânica por "Fadiga" em componentes submetidos a carregamentos repetidos?',
    opts: ['Aumento excessivo de temperatura instantânea', 'Propagação de trincas microscópicas sob tensões cíclicas', 'Corrosão galvânica acelerada', 'Falta de lubrificação no mancal'],
    ans: 1,
    exp: 'Fadiga é o fenômeno de nucleação e propagação progressiva de trincas causado por flutuações repetidas de tensão abaixo do limite de escoamento.'
  },
  {
    cat: 'mecanica',
    q: 'Em usinagem, qual processo utiliza uma ferramenta multicortante rotativa para remover cavaco da peça fixada na mesa da máquina?',
    opts: ['Torneamento', 'Fresamento', 'Aplainamento', 'Aterramento elétrico'],
    ans: 1,
    exp: 'O fresamento emprega fresas cilíndricas ou de topo com múltiplos gumes cortantes em rotação para usinar superfícies planas, ranhuras e perfis.'
  },
  {
    cat: 'mecanica',
    q: 'A viscosidade de um fluido lubrificante automotivo ou industrial mede a sua:',
    opts: ['Capacidade de condução elétrica', 'Resistência interna ao escoamento e ao cisalhamento', 'Pressão de vaporização', 'Densidade de massa especifica'],
    ans: 1,
    exp: 'A viscosidade descreve o atrito interno do fluido; quanto maior a viscosidade, mais resistente o líquido é para escoar sob força de cisalhamento.'
  },
  {
    cat: 'mecanica',
    q: 'A Lei de Hooke estabelece a relação direta de proporcionalidade entre força e deformação até o limite de:',
    opts: ['Ruptura total do corpo', 'Escoamento (Limite Elástico)', 'Endurecimento por encruamento', 'Flutuação térmica'],
    ans: 1,
    exp: 'F = k * x é válida enquanto a deformação for totalmente reversível, ou seja, abaixo do limite de proporcionalidade elástica do material.'
  }
];
