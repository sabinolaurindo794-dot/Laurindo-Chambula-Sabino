import { Question } from '../../types';

export const FINANCAS_QUESTIONS: Question[] = [
  {
    cat: 'financas',
    q: 'Qual a diferença entre Juros Simples e Juros Compostos no cálculo do montante final de um investimento?',
    opts: ['Juros simples rendem sobre o capital acumulado; compostos sobre o inicial', 'Juros simples incidem apenas sobre o capital inicial; compostos incidem sobre o capital acrescido de juros anteriores', 'Não há diferença matemática no longo prazo', 'Juros compostos são proibidos no sistema financeiro internacional'],
    ans: 1,
    exp: 'Nos juros compostos ("juros sobre juros"), a taxa de rendimento é aplicada a cada período sobre o saldo devedor/investido atualizado.'
  },
  {
    cat: 'financas',
    q: 'O indicador WACC (Weighted Average Cost of Capital) em Finanças Corporativas representa:',
    opts: ['O custo médio ponderado de capital (próprio e de terceiros) de uma empresa', 'A taxa de inflação acumulada do setor imobiliário', 'O lucro líquido por ação ordinária', 'A liquidez corrente imediata'],
    ans: 0,
    exp: 'O WACC calcula a taxa mínima de retorno exigida pelos provedores de capital (acionistas e credores) proporcionalmente ao financiamento da firma.'
  },
  {
    cat: 'financas',
    q: 'Na teoria moderna de carteiras de Harry Markowitz, o principal benefício da diversificação de ativos é:',
    opts: ['Eliminar completamente o risco sistêmico do mercado', 'Reduzir o risco não-sistêmico (específico) sem sacrificar o retorno esperado', 'Garantir rentabilidade positiva mensal', 'Isentar o investidor do imposto de renda'],
    ans: 1,
    exp: 'A diversificação entre ativos com correlações imperfeitas mitiga os riscos individuais de cada empresa ou setor (risco idiossincrático).'
  },
  {
    cat: 'financas',
    q: 'O indicador VPL (Valor Presente Líquido) utilizado na análise de investimentos avalia:',
    opts: ['A soma nominal das receitas futuras sem descontos', 'A diferença entre o valor presente dos fluxos de caixa futuros descontados e o investimento inicial', 'O número de anos até recuperar o capital zerado (Payback)', 'O valor contábil dos ativos imobilizados'],
    ans: 1,
    exp: 'Se VPL > 0, o projeto de investimento gera valor e rende acima da taxa mínima de atratividade (TMA) estipulada.'
  },
  {
    cat: 'financas',
    q: 'O modelo CAPM (Capital Asset Pricing Model) utiliza o coeficiente "Beta" (β) para mensurar:',
    opts: ['A taxa de juros básica do Banco Central', 'A sensibilidade do retorno de um ativo em relação às variações do mercado global', 'O índice de endividamento de curto prazo', 'A volatilidade cambial da moeda local'],
    ans: 1,
    exp: 'Beta mede o risco sistêmico: β > 1 indica que o ativo é mais volátil que a carteira de mercado; β < 1 indica menor volatilidade que o mercado.'
  },
  {
    cat: 'financas',
    q: 'Qual instrumento financeiro derivativo concede ao comprador o direito, mas não a obrigação, de comprar um ativo a um preço fixado até uma data estipulada?',
    opts: ['Opção de Compra (Call Option)', 'Opção de Venda (Put Option)', 'Contrato de Swap de moedas', 'Debênture conversível'],
    ans: 0,
    exp: 'A opção de compra (Call) dá ao titular o direito de comprar o ativo objeto mediante pagamento prévio de um prêmio ao lançador.'
  },
  {
    cat: 'financas',
    q: 'O conceito de "Liquidez" de um ativo financeiro refere-se a:',
    opts: ['À taxa de juros real após descontar a inflação', 'À facilidade e rapidez com que o ativo pode ser convertido em dinheiro sem perda significativa de valor', 'Ao prazo de maturação de um título público', 'À imunidade contra falências corporativas'],
    ans: 1,
    exp: 'Ativos de alta liquidez (como depósitos à vista e títulos de curtíssimo prazo) podem ser resgatados ou vendidos instantaneamente com mínimo impacto de preço.'
  },
  {
    cat: 'financas',
    q: 'A Taxa Interna de Retorno (TIR) de um projeto de investimento é a taxa de desconto que torna o Valor Presente Líquido (VPL) igual a:',
    opts: ['Certo (1)', 'Zero (0)', 'Infinito', 'Cem por cento (100%)'],
    ans: 1,
    exp: 'A TIR é o ponto de equilíbrio financeiro do projeto: a taxa na qual o valor presente das entradas de caixa iguala o investimento inicial (VPL = 0).'
  },
  {
    cat: 'financas',
    q: 'O EBITDA (ou LAJIDA) é uma métrica financeira amplamente utilizada para medir:',
    opts: ['A geração de caixa operacional antes de juros, impostos, depreciação e amortização', 'O lucro disponível exclusivamente para dividendos', 'A soma das dívidas tributárias de longo prazo', 'O ativo circulante total menos passivo circulante'],
    ans: 0,
    exp: 'O EBITDA avalia o desempenho operacional puro da empresa, eliminando os impactos da estrutura de capital, impostos e custos não desembolsáveis.'
  },
  {
    cat: 'financas',
    q: 'Qual o impacto da inflação elevada e não antecipada sobre os investidores em títulos de renda fixa prefixados?',
    opts: ['Aumenta o ganho real do investidor', 'Corrói o poder de compra e reduz o rendimento real do investimento', 'Garante isenção de tributação', 'Dobra o valor nominal de resgate'],
    ans: 1,
    exp: 'Como o rendimento nominal do título prefixado é fixo, se a inflação subir além do esperado, a taxa de retorno real (Taxa Nominal - Inflação) diminui.'
  }
];
