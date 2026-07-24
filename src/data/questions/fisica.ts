import { Question } from '../../types';

export const FISICA_QUESTIONS: Question[] = [
  {
    cat: 'fisica',
    q: 'Segundo a Teoria da Relatividade Restrita de Einstein, o que acontece com o tempo para um objeto que se aproxima da velocidade da luz em relação a um observador em repouso?',
    opts: ['Acelera exponencialmente', 'Dilata-se (passa mais devagar)', 'Permanece exatamente inalterado', 'Regride no tempo'],
    ans: 1,
    exp: 'A dilatação temporal é um efeito da relatividade restrita: o tempo próprio de um referencial em movimento passa mais devagar em relação a um observador inercial estático.'
  },
  {
    cat: 'fisica',
    q: 'A Segunda Lei da Termodinâmica afirma que a entropia de um sistema isolado em um processo irreversível sempre:',
    opts: ['Aumenta ou permanece constante', 'Diminui a zero absoluto', 'Flutua senoidalmente', 'Anula a energia interna'],
    ans: 0,
    exp: 'A entropia mede a desordem ou dispersão de energia de um sistema; em processos naturais e irreversíveis, a entropia total do universo sempre aumenta.'
  },
  {
    cat: 'fisica',
    q: 'Qual fenômeno quântico descreve a capacidade de partículas compartilharem um estado quântico correlacionado instantaneamente, independentemente da distância?',
    opts: ['Efeito Fotoelétrico', 'Efeito Doppler', 'Emanação Témica', 'Emaranhamento Quântico'],
    ans: 3,
    exp: 'O emaranhamento quântico (quantum entanglement) é a correlação não-local entre estados quânticos de partículas interdependentes.'
  },
  {
    cat: 'fisica',
    q: 'A força gravitacional entre duas massas atrativas varia inversamente com:',
    opts: ['A distância linear', 'O quadrado da distância', 'O cubo da massa combinada', 'A aceleração de Coriolis'],
    ans: 1,
    exp: 'A Lei da Gravitação Universal de Newton estabelece que F = G * (m1 * m2) / r², ou seja, varia com o inverso do quadrado da distância r.'
  },
  {
    cat: 'fisica',
    q: 'Qual constante física fundamental determina o quantum de ação e a proporcionalidade entre energia de um fóton e sua frequência?',
    opts: ['Constante de Boltzmann', 'Constante de Planck (h)', 'Constante de Avogadro', 'Constante de Rydberg'],
    ans: 1,
    exp: 'A equação de Planck E = h * f relaciona a energia do fóton com sua frequência através da constante de Planck h ≈ 6,626 × 10⁻³⁴ J·s.'
  },
  {
    cat: 'fisica',
    q: 'O princípio da incerteza de Heisenberg estabelece uma limitação fundamental na medição simultânea de quais variáveis conjuntas?',
    opts: ['Massa e Carga', 'Temperatura e Pressão', 'Posição e Momento linear', 'Spin e Frequência óptica'],
    ans: 2,
    exp: 'Δx * Δp ≥ ℏ / 2 indica que é impossível determinar com precisão arbitrária simultânea a posição e o momento de uma partícula.'
  },
  {
    cat: 'fisica',
    q: 'Qual lei do eletromagnetismo (uma das equações de Maxwell) estabelece que a variação de um campo magnético induz um campo elétrico?',
    opts: ['Lei de Gauss', 'Lei de Faraday-Lenz', 'Lei de Ampère-Maxwell', 'Lei de Coulomb'],
    ans: 1,
    exp: 'A Lei da Indução de Faraday descreve como a variação no tempo de um fluxo magnético produz uma força eletromotriz e campo elétrico induzido.'
  },
  {
    cat: 'fisica',
    q: 'O Efeito Doppler é a alteração aparente na frequência de uma onda devido ao:',
    opts: ['Aumento de temperatura do meio', 'Movimento relativo entre a fonte e o observador', 'Mudança de meio de refração', 'Colapso da função de onda'],
    ans: 1,
    exp: 'Quando a fonte sonora ou luminosa se aproxima, a frequência aparente aumenta (som mais agudo / desvio para o azul); quando se afasta, diminui.'
  },
  {
    cat: 'fisica',
    q: 'Na mecânica clássica, o trabalho total realizado sobre um corpo por uma força resultante é igual à variação de sua:',
    opts: ['Energia Potencial Gravitacional', 'Energia Cinética', 'Entropia Térmica', 'Quantidade de Movimento'],
    ans: 1,
    exp: 'Pelo Teorema do Trabalho e Energia Cinética (Teorema da Energia Cinética), W_total = ΔK = K_final - K_inicial.'
  },
  {
    cat: 'fisica',
    q: 'Qual experiência histórica comprovou a dualidade onda-partícula dos elétrons através de padrões de interferência?',
    opts: ['Experiência de Michelson-Morley', 'Experiência da Fenda Dupla (Davisson-Germer)', 'Experiência de Cavendish', 'Experiência de Rutherford'],
    ans: 1,
    exp: 'A difração de elétrons na fenda dupla e nos experimentos de Davisson-Germer provou o comportamento ondulatório da matéria proposto por de Broglie.'
  },
  {
    cat: 'fisica',
    q: 'A velocidade da luz no vácuo (c) é de aproximadamente:',
    opts: ['300.000 km/s', '150.000 km/s', '1.000.000 km/h', '340 m/s'],
    ans: 0,
    exp: 'A velocidade da luz no vácuo é uma constante física universal de exatos 299.792.458 m/s, aproximadamente 300.000 km/s.'
  },
  {
    cat: 'fisica',
    q: 'Qual das seguintes leis afirma que "para toda ação há uma reação de igual intensidade, mesma direção e sentido oposto"?',
    opts: ['Primeira Lei de Newton (Inércia)', 'Segunda Lei de Newton (F = m*a)', 'Terceira Lei de Newton (Ação e Reação)', 'Lei da Conservação da Entropia'],
    ans: 2,
    exp: 'A Terceira Lei de Newton estabelece o par de forças de ação e reação atuando em corpos distintos.'
  },
  {
    cat: 'fisica',
    q: 'O que caracteriza um fluido ideal no estudo da hidrodinâmica (Equação de Bernoulli)?',
    opts: ['Incompressível e sem viscosidade (atrito interno)', 'Altamente compressível e viscoso', 'Com viscosidade infinita e temperatura variável', 'Sempre em regime turbulento'],
    ans: 0,
    exp: 'Um fluido ideal é um modelo simplificado incompressível e sem viscosidade que escoa em regime permanente.'
  },
  {
    cat: 'fisica',
    q: 'A Primeira Lei da Termodinâmica expressa o princípio de conservação de qual grandeza física?',
    opts: ['Massa total', 'Energia', 'Momento angular', 'Força resultante'],
    ans: 1,
    exp: 'A 1ª Lei afirma que a variação da energia interna de um sistema é igual ao calor trocado menos o trabalho realizado (ΔU = Q - W).'
  },
  {
    cat: 'fisica',
    q: 'O fenômeno da Refração da luz ocorre quando a onda luminosa:',
    opts: ['Muda de velocidade ao passar de um meio transparente para outro com diferente índice de refração', 'É totalmente absorvida por um corpo negro em equilíbrio', 'Reflete em uma superfície polida formando imagem virtual', 'Gera elétrons livres em uma chapa metálica'],
    ans: 0,
    exp: 'A refração envolve alteração de velocidade e comprimento de onda quando a luz muda de meio óptico.'
  },
  {
    cat: 'fisica',
    q: 'O que é a Radiação do Corpo Negro que levou Planck a propor a quantização da energia?',
    opts: ['Emissão de radiação eletromagnética por um objeto em equilíbrio térmico que absorve toda a radiação incidente', 'Radiação emitida por núcleos radioativos instáveis de urânio', 'Apenas luz visível emitida por metais frios', 'O fluxo de nêutrons em reatores nucleares'],
    ans: 0,
    exp: 'A incapacidade da física clássica de explicar o espectro do corpo negro (catástrofe do ultravioleta) deu origem à física quântica.'
  },
  {
    cat: 'fisica',
    q: 'Qual é a unidade de medidida da Resistência Elétrica no Sistema Internacional (SI)?',
    opts: ['Volt (V)', 'Ampère (A)', 'Ohm (Ω)', 'Joule (J)'],
    ans: 2,
    exp: 'A resistência elétrica é medida em Ohms (Ω), de acordo com a Lei de Ohm V = R * I.'
  },
  {
    cat: 'fisica',
    q: 'Qual partícula elementar é a mediadora (bóson de calibre) da força eletromagnética?',
    opts: ['Glúon', 'Bóson de Higgs', 'Fóton', 'Gráviton'],
    ans: 2,
    exp: 'O fóton é o quantum de luz e o mediador da interação eletromagnética no Modelo Padrão da física de partículas.'
  },
  {
    cat: 'fisica',
    q: 'O Principio de Arquimedes sobre o Empuxo afirma que todo corpo imerso em um fluido sofre uma força vertical para cima igual a:',
    opts: ['Massa do próprio corpo', 'Peso do volume do fluido deslocado', 'Pressão atmosférica no local', 'Velocidade de escoamento do fluido'],
    ans: 1,
    exp: 'O empuxo é a força exercida pelo fluido sobre o corpo imerso, equivalente ao peso do volume de fluido por ele deslocado.'
  },
  {
    cat: 'fisica',
    q: 'A Força Centripeta atua em corpos que realizam movimento circular e está direcionada:',
    opts: ['Para fora da curva (tangencial)', 'Para o centro da trajetória circular', 'No sentido da velocidade vetorial', 'Sempre para baixo devido à gravidade'],
    ans: 1,
    exp: 'A força centrípeta aponta para o centro de curvatura, promovendo a alteração na direção da velocidade vetorial.'
  }
];
