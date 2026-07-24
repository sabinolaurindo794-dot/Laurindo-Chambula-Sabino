import { Question } from '../../types';

export const CONTABILIDADE_QUESTIONS: Question[] = [
  {
    cat: 'contabilidade',
    q: 'Qual é a Equação Fundamental da Contabilidade que rege o Balanço Patrimonial de uma entidade?',
    opts: ['Ativo = Passivo + Patrimônio Líquido', 'Ativo + Passivo = Receita', 'Patrimônio Líquido = Ativo + Despesas', 'Lucro = Ativo - Caixa'],
    ans: 0,
    exp: 'A equação fundamental estabelece que todos os recursos da empresa (Ativo) são financiados por capitais de terceiros (Passivo) e capital próprio (Patrimônio Líquido).'
  },
  {
    cat: 'contabilidade',
    q: 'O método das Partidas Dobradas, formulado por Frei Luca Pacioli no século XV, determina que:',
    opts: ['Cada débito deve ter um crédito de igual valor em uma ou mais contas', 'Todas as despesas devem ser pagas à vista', 'O caixa deve ser auditado duas vezes ao dia', 'As receitas não podem superar o ativo circulante'],
    ans: 0,
    exp: 'Pelo método das partidas dobradas, para todo lançamento a débito (aplicação de recursos) corresponde um lançamento a crédito (origem de recursos) de valor equivalente.'
  },
  {
    cat: 'contabilidade',
    q: 'O Princípio da Competência (Regime de Competência) determina que receitas e despesas devem ser reconhecidas na contabilidade:',
    opts: ['No momento do efetivo recebimento ou pagamento em dinheiro no caixa', 'No período em que ocorrem seus fatos geradores, independentemente de pagamento ou recebimento', 'Apenas no encerramento do exercício social anual', 'Quando o auditor externo aprova a nota fiscal'],
    ans: 1,
    exp: 'O regime de competência registra as variações patrimoniais quando o direito ou a obrigação são gerados, garantindo a mensuração precisa do resultado do período.'
  },
  {
    cat: 'contabilidade',
    q: 'O Demonstrativo do Resultado do Exercício (DRE) tem como objetivo principal apresentar:',
    opts: ['A posição estática dos bens e dívidas da empresa', 'A composição do fluxo de caixa operacional diário', 'O resumo das receitas, custos e despesas para apurar o lucro ou prejuízo líquido do período', 'A lista de acionistas minoritários'],
    ans: 2,
    exp: 'A DRE é uma demonstração contábil dinâmica que confronta as receitas obtidas com os custos e despesas incorridos para determinar o resultado econômico final.'
  },
  {
    cat: 'contabilidade',
    q: 'No Balanço Patrimonial, as dívidas e obrigações que vencem no prazo de até 12 meses após a data do balanço são classificadas no:',
    opts: ['Ativo Não Circulante', 'Passivo Circulante', 'Patrimônio Líquido', 'Ativo Realizável a Longo Prazo'],
    ans: 1,
    exp: 'O Passivo Circulante engloba os compromissos exigíveis de curto prazo (fornecedores, empréstimos, impostos a recolher) com vencimento inferior a 1 ano.'
  },
  {
    cat: 'contabilidade',
    q: 'A Depreciação Contábil representa a perda de valor dos bens do Ativo Imobilizado decorrente de:',
    opts: ['Aumento da taxa de câmbio', 'Desgaste pelo uso, ação da natureza ou obsolescência tecnológica', 'Flutuação na bolsa de valores', 'Inadimplência de clientes'],
    ans: 1,
    exp: 'A depreciação aloca o custo de aquisição do bem tangível ao longo de sua vida útil estimada devido ao desgaste operacional e envelhecimento.'
  },
  {
    cat: 'contabilidade',
    q: 'Como é classificada a conta "Capital Social" nas demonstrações financeiras corporativas?',
    opts: ['Conta do Ativo Circulante', 'Conta de Despesa Operacional', 'Subgrupo do Patrimônio Líquido', 'Passivo Não Circulante'],
    ans: 2,
    exp: 'O Capital Social integra o Patrimônio Líquido, representando o montante inicial ou subscrevido pelos sócios/acionistas para fundar e expandir a empresa.'
  },
  {
    cat: 'contabilidade',
    q: 'A Demonstração dos Fluxos de Caixa (DFC) divide as movimentações financeiras em três grandes atividades:',
    opts: ['Físicas, Químicas e Biológicas', 'Operacionais, de Investimento e de Financiamento', 'Trabalhistas, Fiscais e Jurídicas', 'Internas, Externas e Internacionais'],
    ans: 1,
    exp: 'A DFC evidencia as entradas e saídas efetivas de caixa organizadas por Atividades Operacionais, de Investimento e de Financiamento.'
  },
  {
    cat: 'contabilidade',
    q: 'O conceito de "Margem de Contribuição" na contabilidade gerencial é calculado como:',
    opts: ['Receita de Vendas menos Custos e Despesas Variáveis', 'Lucro Líquido dividido pelo Ativo Total', 'Ativo Circulante menos Passivo Circulante', 'Preço de custo mais imposto sobre vendas'],
    ans: 0,
    exp: 'A Margem de Contribuição indica o valor que cada produto/serviço gera para cobrir os custos fixos e formar o lucro da empresa.'
  },
  {
    cat: 'contabilidade',
    q: 'Qual demonstração contábil detalha as alterações ocorridas nas contas integrantes do patrimônio líquido da entidade durante o exercício?',
    opts: ['DMPL (Demonstração das Mutações do Patrimônio Líquido)', 'DVA (Demonstração do Valor Adicionado)', 'Balancete de Verificação Semanal', 'Nota de Empenho Orçamentário'],
    ans: 0,
    exp: 'A DMPL explicita a movimentação de reservas, lucros/prejuízos acumulados, aumentos de capital e dividendos distribuídos no período.'
  }
];
