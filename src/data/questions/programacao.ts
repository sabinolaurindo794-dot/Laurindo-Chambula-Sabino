import { Question } from '../../types';

export const PROGRAMACAO_QUESTIONS: Question[] = [
  {
    cat: 'programacao',
    q: 'Qual estrutura de dados opera sob o princípio LIFO (Last In, First Out)?',
    opts: ['Fila (Queue)', 'Pilha (Stack)', 'Árvore Binária (Binary Tree)', 'Lista Encadeada (LinkedList)'],
    ans: 1,
    exp: 'A Pilha (Stack) insere e remove elementos pelo mesmo topo, fazendo com que o último elemento inserido seja o primeiro a ser retirado.'
  },
  {
    cat: 'programacao',
    q: 'Em Programação Orientada a Objetos (POO), qual pilar permite que classes derivadas redefinam métodos da classe pai mantendo a mesma assinatura?',
    opts: ['Encapsulamento', 'Polimorfismo', 'Abstração', 'Herança Múltipla'],
    ans: 1,
    exp: 'O polimorfismo permite que instâncias de diferentes classes respondam à mesma chamada de método de maneiras específicas (sobrescrita/override).'
  },
  {
    cat: 'programacao',
    q: 'Qual a complexidade de tempo assintótica no pior caso do algoritmo de ordenação QuickSort sem otimizações?',
    opts: ['O(1)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    ans: 3,
    exp: 'No pior caso (vetor já ordenado e pivô mal escolhido nas extremidades), a árvore de recursão do QuickSort degrada para complexidade quadrática O(n²).'
  },
  {
    cat: 'programacao',
    q: 'Em TypeScript/JavaScript, qual a diferença fundamental entre "let" e "var" no escopo de variáveis?',
    opts: ['let possui escopo de bloco; var possui escopo de função', 'var não aceita reatribuição de valor', 'let é Hoisted para o escopo global automaticamente', 'Não existe diferença no tempo de execução'],
    ans: 0,
    exp: 'Variáveis declaradas com let e const têm escopo limitado ao bloco {} em que foram inseridas; var é elevada (hoisted) ao escopo da função ou global.'
  },
  {
    cat: 'programacao',
    q: 'O que caracteriza um "Closure" (Fechamento) em linguagens de programação funcionais e modernas?',
    opts: ['Uma função que lança exceções sem tratamento', 'Uma função combinada com o ambiente léxico onde foi declarada', 'Um loop infinito de alocação de memória', 'A compilação Just-In-Time do código'],
    ans: 1,
    exp: 'Um closure é a combinação de uma função empacotada com referências ao seu estado ao redor (escopo léxico exterior), preservando variáveis mesmo após a execução da função pai.'
  },
  {
    cat: 'programacao',
    q: 'Qual padrão de projeto (Design Pattern) estrutural fornece uma interface unificada e simplificada para um conjunto complexo de interfaces num subsistema?',
    opts: ['Factory Method', 'Facade', 'Singleton', 'Observer'],
    ans: 1,
    exp: 'O padrão Facade (Fachada) esconde a complexidade de rotinas internas oferecendo um ponto de entrada limpo e simplificado para o cliente.'
  },
  {
    cat: 'programacao',
    q: 'Em gerenciamento de memória, o que é um "Memory Leak" (vazamento de memória)?',
    opts: ['Corrupção física dos pentes de RAM', 'Incapacidade de liberar memória alocada dinamicamente que não é mais utilizada', 'Aumento instantâneo da velocidade da CPU', 'Execução de scripts fora do navegador'],
    ans: 1,
    exp: 'Ocorre um memory leak quando um programa retém referências desnecessárias a objetos na heap, impedindo que o Garbage Collector recupere o espaço alocado.'
  },
  {
    cat: 'programacao',
    q: 'Em bancos de dados relacionais e ORMs, qual propriedade ACID garante que uma transação concluída permaneça salva mesmo em falha de energia?',
    opts: ['Atomicidade', 'Consistência', 'Isolamento', 'Durabilidade (Durability)'],
    ans: 3,
    exp: 'A Durabilidade assegura que os efeitos de uma transação confirmada (commit) fiquem registrados permanentemente no armazenamento não volátil.'
  },
  {
    cat: 'programacao',
    q: 'No desenvolvimento Web com React, qual Hook é utilizado para executar efeitos colaterais (side effects) como sincronização com APIs ou eventos DOM?',
    opts: ['useState', 'useEffect', 'useMemo', 'useRef'],
    ans: 1,
    exp: 'O hook useEffect permite executar funções assíncronas, inscrições e manipulações de efeitos colaterais após a renderização do componente.'
  },
  {
    cat: 'programacao',
    q: 'Qual protocolo de aplicação com suporte a comunicação bidirecional em tempo real contínua é padronizado pela RFC 6455?',
    opts: ['HTTP/1.1', 'WebSocket', 'GraphQL Queries', 'RESTful Polling'],
    ans: 1,
    exp: 'WebSocket estabelece um canal TCP full-duplex permanente entre cliente e servidor, ideal para chats, jogos multiplayer e métricas ao vivo.'
  }
];
