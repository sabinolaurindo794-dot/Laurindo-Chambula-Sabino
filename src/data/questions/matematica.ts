import { Question } from '../../types';

export const MATEMATICA_QUESTIONS: Question[] = [
  {
    cat: 'matematica',
    q: 'No Cálculo Diferencial, qual é a derivada de f(x) = x³ - 5x + 7 em relação a x?',
    opts: ['f\'(x) = 3x² - 5', 'f\'(x) = 3x² - 5x', 'f\'(x) = x² - 5', 'f\'(x) = 3x³ - 5'],
    ans: 0,
    exp: 'Pela regra do tombo: d/dx(x³) = 3x², d/dx(-5x) = -5 e a derivada da constante 7 é 0. Assim, f\'(x) = 3x² - 5.'
  },
  {
    cat: 'matematica',
    q: 'Qual o valor do determinante de uma matriz quadrada de ordem 2x2 com linhas [a, b] e [c, d]?',
    opts: ['a*c + b*d', 'a*d - b*c', 'a*b - c*d', '(a+d) / (b+c)'],
    ans: 1,
    exp: 'O determinante de uma matriz 2x2 é calculado pelo produto da diagonal principal menos o produto da diagonal secundária: ad - bc.'
  },
  {
    cat: 'matematica',
    q: 'O Teorema Fundamental do Álgebra garante que todo polinômio não constante de grau n com coeficientes complexos possui exatamente:',
    opts: ['n raízes reais distintas', 'n raízes complexas (contando multiplicidades)', 'n/2 raízes irracionais', 'Infinitas raízes em corpos finitos'],
    ans: 1,
    exp: 'Formulado por Gauss, o Teorema Fundamental do Álgebra afirma que um polinômio de grau n possui exatamente n raízes no corpo dos números complexos.'
  },
  {
    cat: 'matematica',
    q: 'Em Geometria Plana, qual a fórmula para calcular a soma dos ângulos internos de um polígono convexo de n lados?',
    opts: ['S = (n - 2) * 180°', 'S = n * 180°', 'S = (n + 2) * 360°', 'S = (n - 3) * 90°'],
    ans: 0,
    exp: 'A soma dos ângulos internos de qualquer polígono convexo de n lados é dada por S_i = (n - 2) * 180°.'
  },
  {
    cat: 'matematica',
    q: 'Qual a definição do número irracional pi (π)?',
    opts: ['Razão entre o raio de um círculo e sua área', 'Razão entre o perímetro de um círculo e seu diâmetro', 'Produto da diagonal pelo lado de um quadrado', 'Limite da soma de Fibonacci'],
    ans: 1,
    exp: 'O número π ≈ 3,14159 é a razão constante entre o comprimento de qualquer circunferência (C) e seu diâmetro (D = 2r).'
  },
  {
    cat: 'matematica',
    q: 'Em probabilidade, dois eventos A e B são ditos "independentes" quando a probabilidade da interseção P(A ∩ B) é igual a:',
    opts: ['P(A) + P(B)', 'P(A) * P(B)', 'P(A) / P(B)', 'P(A) - P(B)'],
    ans: 1,
    exp: 'Eventos independentes são aqueles em que a ocorrência de um não afeta a probabilidade do outro; logo P(A ∩ B) = P(A) * P(B).'
  },
  {
    cat: 'matematica',
    q: 'Qual a solução real da equação logarítmica log₂(x) = 5?',
    opts: ['x = 10', 'x = 25', 'x = 32', 'x = 64'],
    ans: 2,
    exp: 'Pela definição de logaritmo: log_b(a) = c <=> b^c = a. Logo, 2⁵ = 32, portanto x = 32.'
  },
  {
    cat: 'matematica',
    q: 'Na trigonometria, qual identidade fundamental relaciona o seno e o cosseno de qualquer ângulo x?',
    opts: ['sen²(x) + cos²(x) = 1', 'sen(x) + cos(x) = tg(x)', 'sen²(x) - cos²(x) = 1', 'tg²(x) + 1 = sen²(x)'],
    ans: 0,
    exp: 'A Relação Fundamental da Trigonometria decorre diretamente do Teorema de Pitágoras no círculo trigonométrico unitário: sen²(x) + cos²(x) = 1.'
  },
  {
    cat: 'matematica',
    q: 'Qual é o enésimo termo (a_n) de uma Progressão Aritmética (PA) de primeiro termo a₁ e razão r?',
    opts: ['a_n = a₁ * r^(n-1)', 'a_n = a₁ + (n - 1) * r', 'a_n = (a₁ + r) / n', 'a_n = a₁ + n * r'],
    ans: 1,
    exp: 'Na PA, cada termo a partir do segundo é obtido somando a razão r ao anterior; logo a_n = a₁ + (n - 1) * r.'
  },
  {
    cat: 'matematica',
    q: 'O Teorema de Bayes na teoria das probabilidades é utilizado para calcular:',
    opts: ['A média amostral de variáveis contínuas', 'A probabilidade condicional inversa P(A|B) conhecendo P(B|A)', 'A variância populacional', 'O desvio padrão em distribuições normais'],
    ans: 1,
    exp: 'O Teorema de Bayes expressa P(A|B) = [P(B|A) * P(A)] / P(B), atualizando a probabilidade a priori de uma hipótese com base em novas evidências.'
  },
  {
    cat: 'matematica',
    q: 'Qual é a integral indefinida da função f(x) = e^(2x) dx?',
    opts: ['e^(2x) + C', '(1/2) * e^(2x) + C', '2 * e^(2x) + C', 'x * e^(2x) + C'],
    ans: 1,
    exp: 'Usando substituição u = 2x, du = 2 dx => ∫ e^(2x) dx = (1/2) * e^(2x) + C.'
  },
  {
    cat: 'matematica',
    q: 'Qual a área de um triângulo equilátero de lado L?',
    opts: ['(L² * √3) / 4', 'L² / 2', 'L² * √2', '(L² * √3) / 2'],
    ans: 0,
    exp: 'A altura h do triângulo equilátero é (L * √3) / 2. A área é (base * h) / 2 = (L² * √3) / 4.'
  },
  {
    cat: 'matematica',
    q: 'O Teorema de Pitágoras aplica-se exclusivamente a triângulos:',
    opts: ['Acutângulos', 'Obtusângulos', 'Retângulos', 'Isósceles sem ângulo reto'],
    ans: 2,
    exp: 'O Teorema de Pitágoras estabelece a² = b² + c² apenas em triângulos retângulos (com um ângulo de 90°).'
  },
  {
    cat: 'matematica',
    q: 'Qual é a razão (q) de uma Progressão Geométrica (PG) em que a₁ = 3 e a₄ = 24?',
    opts: ['q = 2', 'q = 3', 'q = 4', 'q = 8'],
    ans: 0,
    exp: 'a₄ = a₁ * q³ => 24 = 3 * q³ => q³ = 8 => q = 2.'
  },
  {
    cat: 'matematica',
    q: 'Qual o valor da soma infinita de uma PG convergente com a₁ = 10 e razão r = 1/2?',
    opts: ['15', '20', '25', '30'],
    ans: 1,
    exp: 'A soma de PG infinita com |r| < 1 é S = a₁ / (1 - r) = 10 / (1 - 1/2) = 10 / 0.5 = 20.'
  },
  {
    cat: 'matematica',
    q: 'Em Geometria Analítica, a distância entre os pontos A(1, 2) e B(4, 6) no plano cartesiano é:',
    opts: ['5', '7', '√12', '10'],
    ans: 0,
    exp: 'd = √[(4 - 1)² + (6 - 2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5.'
  },
  {
    cat: 'matematica',
    q: 'Qual é o número total de combinações simples C(6, 2) para escolher 2 elementos de um conjunto de 6?',
    opts: ['12', '15', '30', '36'],
    ans: 1,
    exp: 'C(6, 2) = 6! / [2! * (6 - 2)!] = (6 * 5) / (2 * 1) = 15.'
  },
  {
    cat: 'matematica',
    q: 'Uma equação do segundo grau ax² + bx + c = 0 possui duas raízes reais e distintas se o discriminante (Δ = b² - 4ac) for:',
    opts: ['Δ < 0', 'Δ = 0', 'Δ > 0', 'Δ igual ao produto a*c'],
    ans: 2,
    exp: 'Quando Δ > 0, a Fórmula de Bhaskara gera dois valores reais e distintos para x.'
  },
  {
    cat: 'matematica',
    q: 'O valor da função trigonométrica cos(60°) ou cos(π/3 rad) é:',
    opts: ['√3 / 2', '1 / 2', '√2 / 2', '0'],
    ans: 1,
    exp: 'No círculo trigonométrico ou na tabela de ângulos notáveis, cos(60°) = 1/2 = 0,5.'
  }
];
