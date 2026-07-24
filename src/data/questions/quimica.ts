import { Question } from '../../types';

export const QUIMICA_QUESTIONS: Question[] = [
  {
    cat: 'quimica',
    q: 'Qual tipo de ligação química se caracteriza pelo compartilhamento de pares de elétrons entre átomos não-metálicos?',
    opts: ['Ligação Iônica', 'Ligação Covalente', 'Ligação Metálica', 'Ponte de Hidrogênio'],
    ans: 1,
    exp: 'A ligação covalente ocorre quando dois átomos compartilham elétrons de valência para atingirem a estabilidade (regra do octeto).'
  },
  {
    cat: 'quimica',
    q: 'Segundo a teoria ácido-base de Brønsted-Lowry, um ácido é definido como uma espécie capaz de:',
    opts: ['Doar um par de elétrons', 'Doar um próton (H+)', 'Aceitar um próton (H+)', 'Produzir íons OH- em solução'],
    ans: 1,
    exp: 'Na definição de Brønsted-Lowry, ácidos são doadores de prótons (H+) e bases são aceitadoras de prótons.'
  },
  {
    cat: 'quimica',
    q: 'O número de Avogadro (6,022 × 10²³) representa a quantidade de partículas presentes em exatamente:',
    opts: ['1 quilograma de matéria', '1 mol de qualquer substância', '1 litro de gás nas CNTP', '1 átomo grama de hidrogênio'],
    ans: 1,
    exp: 'O mol é a unidade SI de quantidade de matéria; 1 mol contém exatamente a constante de Avogadro em entidades elementares.'
  },
  {
    cat: 'quimica',
    q: 'Qual elemento químico possui o maior raio atômico e menor eletronegatividade na Tabela Periódica?',
    opts: ['Flúor (F)', 'Frâncio (Fr)', ' Hélio (He)', 'Oxigênio (O)'],
    ans: 1,
    exp: 'O Frâncio (Fr) situa-se na parte inferior esquerda da Tabela Periódica, possuindo a maior distância do núcleo aos elétrons e a menor atração eletrônica.'
  },
  {
    cat: 'quimica',
    q: 'O Princípio de Le Chatelier prevê que quando um sistema em equilíbrio sofre uma perturbação de temperatura, pressão ou concentração, ele:',
    opts: ['Cessa todas as reações químicas', 'Desloca o equilíbrio para minimizar a perturbação', 'Aumenta a constante Keq indefinidamente', 'Precipita todos os reagentes'],
    ans: 1,
    exp: 'O Princípio de Le Chatelier estabelece que o sistema reage na direção contrária à perturbação externa para restabelecer o estado de equilíbrio.'
  },
  {
    cat: 'quimica',
    q: 'Reações de oxirredução (Redox) envolvem fundamentalmente a transferência de:',
    opts: ['Nêutrons', 'Prótons', 'Elétrons', 'Fótons de radiação gamma'],
    ans: 2,
    exp: 'Em reações redox, o agente redutor perde (dá) elétrons (oxidação) e o agente oxidante ganha elétrons (redução).'
  },
  {
    cat: 'quimica',
    q: 'Qual grupo funcional orgânico caracteriza os álcoois?',
    opts: ['Carbonila (C=O) terminal', 'Carboxila (-COOH)', 'Hidroxila (-OH) ligada a carbono saturado', 'Éster (-COO-)'],
    ans: 2,
    exp: 'Os álcoois possuem o grupo hidroxila (-OH) ligado a um átomo de carbono saturado (com hibridização sp³).'
  },
  {
    cat: 'quimica',
    q: 'Qual lei dos gases ideais afirma que, a temperatura e massa constantes, a pressão e o volume são inversamente proporcionais?',
    opts: ['Lei de Charles', 'Lei de Boyle-Mariotte', 'Lei de Gay-Lussac', 'Lei de Dalton'],
    ans: 1,
    exp: 'A Lei de Boyle-Mariotte estabelece que P1 * V1 = P2 * V2 para transformações isotérmicas de gases ideais.'
  },
  {
    cat: 'quimica',
    q: 'Qual catalisador é responsável por acelerar reações bioquímicas em organismos vivos diminuindo a energia de ativação?',
    opts: ['Enzima', 'Polímero', 'Inibidor competitivo', 'Isótopo radioativo'],
    ans: 0,
    exp: 'As enzimas são proteínas biocatalisadoras que aumentam a velocidade de reações metabólicas específicas reduzindo a energia de ativação.'
  },
  {
    cat: 'quimica',
    q: 'Qual é o valor do pH de uma solução neutra a 25°C e como ele é calculated?',
    opts: ['pH = 0; log(10)', 'pH = 7; -log[H+]', 'pH = 14; +log[OH-]', 'pH = 1; -log[K_w]'],
    ans: 1,
    exp: 'O pH é definido como -log10[H+]. A 25°C em água pura, [H+] = 10⁻⁷ M, logo o pH neutro é igual a 7.'
  },
  {
    cat: 'quimica',
    q: 'O que são isótopos de um mesmo elemento químico?',
    opts: ['Átomos com o mesmo número de prótons (Z) e diferente número de nêutrons (A)', 'Átomos com o mesmo número de nêutrons e diferente número de prótons', 'Mapeamento de átomos com massa idêntica e carga oposta', 'Moléculas com fórmulas estruturais idênticas'],
    ans: 0,
    exp: 'Isótopos possuem o mesmo número atômico Z (mesmo elemento), mas diferem no número de massa A por terem mais ou menos nêutrons.'
  },
  {
    cat: 'quimica',
    q: 'A destilação fracionada do petróleo separa seus componentes com base em diferenças em qual propriedade física?',
    opts: ['Densidade', 'Ponto de ebulição', 'Solubilidade em água', 'Condutividade elétrica'],
    ans: 1,
    exp: 'Na torre de fracionamento, as misturas hidrocarbonetadas são separadas conforme seus diferentes pontos de ebulição.'
  },
  {
    cat: 'quimica',
    q: 'Qual gás é produzido na reação clássica entre um ácido forte e um metal ativo como o zinco ou magnésio?',
    opts: ['Gás Oxigênio (O2)', 'Gás Hidrogênio (H2)', 'Dióxido de Carbono (CO2)', 'Gás Cloro (Cl2)'],
    ans: 1,
    exp: 'A reação de simples troca entre metal e ácido gera sal e despesa libera gás hidrogênio (H2).'
  },
  {
    cat: 'quimica',
    q: 'Qual elemento é o segundo mais abundante na crosta terrestre, amplamente utilizado em semicondutores e microchips?',
    opts: ['Alumínio', 'Silício (Si)', 'Ferro', 'Carbono'],
    ans: 1,
    exp: 'O silício representa aproximadamente 28% da massa da crosta terrestre e é fundamental na indústria de microeletrônica.'
  },
  {
    cat: 'quimica',
    q: 'A isomeria plana de função ocorre entre quais dos seguintes pares de compostos de mesma fórmula molecular (C3H6O)?',
    opts: ['Propanal (aldeído) e Propanona (cetona)', 'Propanol e Propano', 'Benzeno e Tolueno', 'Ácido acético e Etanol'],
    ans: 0,
    exp: 'O propanal e a propanona compartilham a fórmula C3H6O, mas pertencem a funções orgânicas distintas (aldeído e cetona).'
  },
  {
    cat: 'quimica',
    q: 'Qual das alternativas apresenta um exemplo de mistura heterogênea bifásica?',
    opts: ['Água e sal totalmente dissolvido', 'Água e óleo vegetal', 'Ar atmosférico filtrado', 'Liga metálica de latão'],
    ans: 1,
    exp: 'Água e óleo não se misturam (imiscíveis), formando duas fases bem visíveis e distintas.'
  },
  {
    cat: 'quimica',
    q: 'O fenômeno no qual um mesmo elemento químico forma duas ou mais substâncias simples diferentes é chamado de:',
    opts: ['Alotropia', 'Isotopia', 'Isomeria', 'Radioatividade'],
    ans: 0,
    exp: 'A alotropia permite que o carbono forme grafite e diamante, ou o oxigênio forme O2 e O3 (ozônio).'
  },
  {
    cat: 'quimica',
    q: 'Em uma pilha eletroquímica (como a Pilha de Daniell), o Anodo é o eletrodo onde ocorre:',
    opts: ['Oxidação e ganho de elétrons', 'Oxidação e perda de elétrons', 'Redução e atração de cátions', 'Fusão nuclear espontânea'],
    ans: 1,
    exp: 'No anodo de uma pilha ocorre a oxidação (perda de elétrons), sendo o polo negativo da célula galvânica.'
  },
  {
    cat: 'quimica',
    q: 'Qual sal inorgânico é o principal componente do mármore, calcário e conchas marinhas?',
    opts: ['Cloreto de Sódio (NaCl)', 'Carbonato de Cálcio (CaCO3)', 'Sulfato de Cobre (CuSO4)', 'Nitrato de Amônio (NH4NO3)'],
    ans: 1,
    exp: 'O carbonato de cálcio (CaCO3) é abundante na natureza, constituindo rochas calcárias e exoesqueletos.'
  }
];
