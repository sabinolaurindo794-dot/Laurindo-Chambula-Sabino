import { Question } from '../../types';

export const TECNOLOGIA_QUESTIONS: Question[] = [
  {
    cat: 'tecnologia',
    q: 'Qual teorema da ciência da computação provou por Alan Turing em 1936 demonstra que não existe um algoritmo geral capaz de determinar se um programa arbitrário irá terminar ou rodar infinitamente?',
    opts: ['Problema da Parada (Halting Problem)', 'Teorema de Gödel sobre Incompletude', 'Teorema de Cook-Levin', 'Lei de Amdahl'],
    ans: 0,
    exp: 'O Problema da Parada provou de forma indecidível a existência de limites fundamentais para o que pode ser computado por máquinas de Turing.'
  },
  {
    cat: 'tecnologia',
    q: 'O Teorema CAP para sistemas distribuídos (formulado por Eric Brewer) afirma que é impossível para um datastore distribuído prover simultaneamente mais de duas de quais três garantias?',
    opts: ['Consistência, Disponibilidade e Tolerância a Partições (Consistency, Availability, Partition tolerance)', 'Criptografia, Autenticação e Privacidade', 'Concorrência, Agilidade e Performance', 'Capacidade, Acessibilidade e Prevenção de Falhas'],
    ans: 0,
    exp: 'O Teorema CAP demonstra que em presença de uma partição de rede (P), o sistema deve obrigatoriamente escolher entre manter consistência (C) ou disponibilidade (A).'
  },
  {
    cat: 'tecnologia',
    q: 'O algoritmo de consenso Paxos e seu equivalente Raft são amplamente utilizados em sistemas distribuídos de alta disponibilidade para garantir:',
    opts: ['Consenso e estado replicado consistente entre nós em redes não-confiáveis com falhas parciais', 'Compressão sem perdas de imagens médicas', 'Renderização 3D em tempo real por GPU', 'Criptografia assimétrica de chave pública de 4096 bits'],
    ans: 0,
    exp: 'Paxos e Raft resolvem o problema de consenso distribuído garantindo que um cluster de servidores concorde sobre uma sequência de valores/comandos mesmo se alguns nós falharem.'
  },
  {
    cat: 'tecnologia',
    q: 'Na teoria da complexidade computacional, a classe NP (Non-deterministic Polynomial time) engloba todos os problemas para os quais:',
    opts: ['Uma solução proposta pode ser VERIFICADA em tempo polinomial por uma máquina de Turing determinística', 'O algoritmo de resolução mais rápido roda sempre em O(1)', 'É matematicamente impossível encontrar qualquer solução aproximada', 'A memória exigida cresce de forma logarítmica O(log n)'],
    ans: 0,
    exp: 'Problemas em NP podem ser difíceis de resolver, mas se uma solução (certificado) for fornecida, ela pode ser validada em tempo polinomial.'
  },
  {
    cat: 'tecnologia',
    q: 'O algoritmo de roteamento Dijkstra em grafos ponderados com pesos não-negativos possui complexidade assintótica O((V + E) log V) ao utilizar qual estrutura de dados para a fila de prioridade?',
    opts: ['Fibonacci Heap ou Binary Heap', 'Matriz de Adjacência simples', 'Tabela Hash com encadeamento direto', 'Pilha LIFO sem ordenação'],
    ans: 0,
    exp: 'A utilização de Heaps de prioridade min-heap otimiza a extração do nó de menor distância no algoritmo de Dijkstra de O(V²) para O((V + E) log V).'
  },
  {
    cat: 'tecnologia',
    q: 'Em bancos de dados relacionais, o nível de isolamento de transação "Serializable" previne quais anomalias de concorrência?',
    opts: ['Dirty Read, Non-repeatable Read, Phantom Read e Serialization Anomaly', 'Apenas exclusão acidental de tabelas', 'Overhead de memória RAM na CPU', 'Estouro de pilha no sistema operacional'],
    ans: 0,
    exp: 'Serializable é o nível de isolamento mais estrito (ACID), garantindo que o resultado da execução concorrente de transações seja idêntico a algum resultado de execução sequencial.'
  },
  {
    cat: 'tecnologia',
    q: 'Qual o papel do mecanismo de "Garbage Collection" com algoritmo Generacional (Young/Old Generation) na JVM ou motores V8?',
    opts: ['Inspecionar objetos na memória heap e coletar os não-alcançáveis, aproveitando que a maioria dos objetos morre jovem (Hipótese Fraca de Geracionalidade)', 'Limpar o histórico de navegação do browser do usuário', 'Desfragmentar automaticamente o disco rígido durante o boot', 'Compilar código em Assembly x86 antes de executar'],
    ans: 0,
    exp: 'A hipótese geracional observa que a vasta maioria dos objetos é de vida curta (Young Gen), permitindo limpezas frequentes e rápidas de menor impacto (Minor GC).'
  },
  {
    cat: 'tecnologia',
    q: 'No protocolo TCP (Transport Control Protocol), o mecanismo de "Three-Way Handshake" para estabelecimento de conexão envolve a troca ordenada de quais flags?',
    opts: ['SYN -> SYN-ACK -> ACK', 'FIN -> ACK -> FIN-ACK', 'RST -> PSH -> URG', 'CONNECT -> ACCEPT -> READY'],
    ans: 0,
    exp: 'O cliente envia SYN, o servidor responde com SYN-ACK e o cliente confirma com ACK, sincronizando números de sequência de ambos os lados.'
  },
  {
    cat: 'tecnologia',
    q: 'O conceito de "Condição de Corrida" (Race Condition) em programação concorrente/multithreading ocorre quando:',
    opts: ['Múltiplas threads acessam e modificam concorrentemente um recurso compartilhado sem sincronização, tornando o resultado dependente do tempo exato de execução', 'Duas threads tentam alocar memória em discos rígidos diferentes', 'O processador atinge 100% de uso de frequência de clock sem esquentar', 'Um programa escrito em C é compilado para WebAssembly'],
    ans: 0,
    exp: 'Condições de corrida provocam bugs não-determinísticos graves ao ler/escrever dados mutáveis compartilhados sem primitivas de exclusão mútua (como mutex ou locks).'
  },
  {
    cat: 'tecnologia',
    q: 'Na arquitetura de computadores, a "Inversão de Dependência" (o D do acrônimo SOLID em orientação a objetos) estabelece que:',
    opts: ['Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações', 'Classes filhas devem sobrescrever obrigatoriamente todas as variáveis privadas da classe pai', 'Todo código deve ser compilado estaticamente em C++', 'Nenhum método pode retornar objetos nulos'],
    ans: 0,
    exp: 'O Princípio de Inversão de Dependência (DIP) desacopla os componentes do sistema fazendo com que detalhes de implementação dependam de interfaces/abstrações e não o contrário.'
  },
  {
    cat: 'tecnologia',
    q: 'Qual a principal vantagem da estrutura de dados "B-Tree" (ou B+Tree) em relação a Árvores de Busca Binária balanceadas (AVL) para implementação de índices de bancos de dados em disco?',
    opts: ['Alto grau de ramificação (fan-out) reduzindo drasticamente o número de operações de E/S (I/O) em disco necessárias para localizar um registro', 'Nenhum uso de ponteiros de memória', 'Pesquisa sempre em O(1) independente do tamanho da chave', 'Armazenamento exclusivo de dados em formato hexadecimal'],
    ans: 0,
    exp: 'Como o acesso ao disco é ordens de grandeza mais lento que a RAM, o alto fan-out das B-Trees permite armazenar milhões de chaves em árvores rasas de apenas 3 ou 4 níveis de profundidade.'
  },
  {
    cat: 'tecnologia',
    q: 'O algoritmo de criptografia assimétrica RSA baseia sua segurança na dificuldade matemática computacional de resolver qual problema?',
    opts: ['Fatoração de números inteiros compostos muito grandes formados por dois primos secretos', 'Cálculo do logaritmo discreto em corpos finitos', 'Problema do Caixeiro Viajante', 'Inversão da função hash SHA-256'],
    ans: 0,
    exp: 'Multiplicar dois primos p e q grandes é computacionalmente simples, mas fatorar seu produto n = p · q sem conhecer uma das partes é inviável no tempo atual.'
  },
  {
    cat: 'tecnologia',
    q: 'Na arquitetura de microserviços, o padrão "Saga" é utilizado para resolver qual desafio estrutural?',
    opts: ['Gerenciar transações distribuídas e manter a consistência eventual de dados entre múltiplos microserviços sem usar transações ACID de duas fases (2PC)', 'Aumentar a velocidade do tráfego UDP em redes sem fio', 'Substituir todos os bancos SQL por arquivos de texto simples', 'Compilar serviços Java em executáveis nativos C'],
    ans: 0,
    exp: 'Uma Saga é uma sequência de transações locais em cada serviço, onde cada etapa bem-sucedida dispara a próxima ou invoca ações de compensação em caso de falha.'
  },
  {
    cat: 'tecnologia',
    q: 'O que caracteriza a vulnerabilidade de segurança conhecida como "SQL Injection" (Injeção de SQL)?',
    opts: ['A inserção maliciosa de comandos SQL em campos de entrada não-sanitizados, permitindo a execução de consultas arbitrárias no banco de dados', 'A invasão física de datacenters por meio de pendrives contaminados', 'A sobrecarga do servidor web por milhões de requisições GET simultâneas', 'O roubo de senhas através de interceptação Wi-Fi aberta'],
    ans: 0,
    exp: 'Quando entradas do usuário são concatenadas diretamente em strings de instrução SQL sem Prepared Statements ou parâmetros parametrizados, o invasor altera a sintaxe da consulta executada.'
  },
  {
    cat: 'tecnologia',
    q: 'O protocolo TLS (Transport Layer Security) utiliza Criptografia Híbrida. Isso significa que:',
    opts: ['Usa criptografia assimétrica para autenticação e troca segura de chave de sessão, e criptografia simétrica mais rápida para cifrar os dados do tráfego real', 'Combina senhas de texto puro com chaves impressas em papel', 'Utiliza apenas hash SHA-1 de uma via', 'Funciona exclusivamente na camada física de cabos de fibra óptica'],
    ans: 0,
    exp: 'A chave assimétrica (RSA/ECC) é lenta, por isso é usada apenas na fase inicial (handshake) para negociar uma chave simétrica de sessão (AES) usada para trafegar o volume de dados.'
  },
  {
    cat: 'tecnologia',
    q: 'Qual o papel do "Kernel" no sistema operacional?',
    opts: ['Gerenciar os recursos do hardware (CPU, memória, dispositivos) e fornecer uma camada de abstração segura para os programas em User Mode', 'Renderizar as janelas e botões gráficos da interface do usuário', 'Instalar atualizações de navegadores web automaticamente', 'Formatador exclusivo de planilhas eletrônicas'],
    ans: 0,
    exp: 'O Kernel opera no modo privilegiado (Supervisor/Kernel Mode) do processador, controlando escalonamento de processos, memória virtual e chamadas de sistema (syscalls).'
  },
  {
    cat: 'tecnologia',
    q: 'Na engenharia de software, o padrão de projeto GoF "Observer" pertence a qual categoria e qual seu propósito?',
    opts: ['Padrão Comportamental; define uma dependência um-para-muitos entre objetos para que quando um mude de estado, seus dependentes sejam notificados automaticamente', 'Padrão Criacional; garante uma única instância de uma classe no sistema', 'Padrão Estrutural; converte a interface de uma classe em outra esperada pelos clientes', 'Padrão de Concorrência; aloca registradores da CPU estaticamente'],
    ans: 0,
    exp: 'O pattern Observer (Publish-Subscribe) desacopla o objeto sujeito dos seus observadores, permitindo reatividade a eventos em tempo de execução.'
  },
  {
    cat: 'tecnologia',
    q: 'Em redes de computadores, qual a função da tabela ARP (Address Resolution Protocol)?',
    opts: ['Mapear endereços lógicos IP (Camada 3) para endereços físicos MAC de placa de rede (Camada 2) na mesma rede local', 'Converter URLs de sites em endereços de e-mail', 'Cifrar pacotes de dados no roteador de borda', 'Atribuir portas TCP dinâmicas a servidores web'],
    ans: 0,
    exp: 'O protocolo ARP envia broadcasts solicitando "Quem tem o IP X?" para obter o endereço MAC da placa de rede de destino necessário para montar o quadro Ethernet.'
  },
  {
    cat: 'tecnologia',
    q: 'O que é a "Inversão de Controle" (Inversion of Control - IoC) e como o padrão "Injeção de Dependência" (DI) a implementa?',
    opts: ['O controle da criação e fornecimento das dependências de um objeto é delegado a um contêiner/framework externo em vez do próprio objeto instanciá-las', 'O código do programa executa em ordem reversa, da última linha para a primeira', 'O banco de dados grava dados primeiro no disco e depois na memória RAM', 'Os testes unitários são executados exclusivamente em ambiente de produção'],
    ans: 0,
    exp: 'Injeção de dependência injeta as instâncias necessárias (via construtor, setter ou interface) removendo o acoplamento rígido de chamadas "new Class()".'
  },
  {
    cat: 'tecnologia',
    q: 'A técnica de "Memória Virtual" com Paginamento (Paging) gerenciada pelo MMU (Memory Management Unit) possibilita:',
    opts: ['Que os processos usem um espaço de endereçamento contínuo maior que a memória RAM física disponível, mapeando páginas virtuais em quadros físicos ou disco (swap)', 'Dobrar a frequência em Gigahertz do processador de forma overlocked', 'Executar código fonte sem necessidade de compilação ou interpretação', 'Gravar dados permanentemente sem uso de energia elétrica'],
    ans: 0,
    exp: 'O MMU traduz endereços virtuais em físicos usando tabelas de páginas (Page Tables), isolando a memória de cada processo e permitindo swapping quando a RAM enche.'
  },
  {
    cat: 'tecnologia',
    q: 'O algoritmo de ordenação QuickSort possui complexidade de pior caso O(n²). Em qual situação esse pior caso ocorre na versão clássica com pivô fixo no último elemento?',
    opts: ['Quando o vetor já está totalmente ordenado ou invertido', 'Quando o vetor contém apenas números primos de 64 bits', 'Quando o tamanho do vetor é uma potência de 2', 'Quando a memória RAM do computador é menor que 8 GB'],
    ans: 0,
    exp: 'Com pivô mal escolhido em vetores ordenados, o particionamento desbalanceia gerando subproblemas de tamanho n-1 e 0, degradando de O(n log n) para O(n²).'
  },
  {
    cat: 'tecnologia',
    q: 'No modelo OSI de 7 camadas para redes de computadores, em qual camada atuam os Roteadores e os Switches de Camada 2, respectivamente?',
    opts: ['Roteadores na Camada 3 (Rede); Switches de Camada 2 na Camada 2 (Enlace de Dados)', 'Roteadores na Camada 7 (Aplicação); Switches na Camada 1 (Física)', 'Roteadores na Camada 4 (Transporte); Switches na Camada 3 (Rede)', 'Ambos atuam exclusivamente na Camada 5 (Sessão)'],
    ans: 0,
    exp: 'Roteadores encaminham pacotes examinando endereços IP na Camada de Rede (3); switches tradicionais comutam quadros examinando endereços MAC na Camada de Enlace (2).'
  },
  {
    cat: 'tecnologia',
    q: 'Em compiladores, o que é a fase de "Análise Léxica" (Lexing / Scanning)?',
    opts: ['Transformar a sequência de caracteres do código-fonte em uma sequência de unidades categóricas chamadas Tokens', 'Construir a Árvore de Sintaxe Abstrata (AST)', 'Gerar instruções finais em linguagem de máquina Assembly', 'Otimizar laços de repetição e eliminar código morto'],
    ans: 0,
    exp: 'O Lexer lê o fluxo de caracteres brutos e agrupa palavras-chave, identificadores e operadores em Tokens reconhecidos pela gramática formal do compilador.'
  },
  {
    cat: 'tecnologia',
    q: 'Qual a diferença crucial entre os bancos de dados NoSQL do tipo "Document" (ex: MongoDB) e do tipo "Key-Value" (ex: Redis)?',
    opts: ['Bancos Document armazenam dados estruturados em JSON/BSON permitindo consultas por campos internos; Key-Value acessam dados exclusivamente pela chave primária', 'Key-Value suportam linguagem SQL completa e Joins complexos; Document não', 'Document operam apenas em fitas magnéticas; Key-Value operam na nuvem', 'Key-Value exigem esquemas (schemas) rígidos de tabela; Document não possuem chaves'],
    ans: 0,
    exp: 'Bancos baseados em documentos analisam e indexam o conteúdo interno do documento (subdocumentos, arrays), enquanto Key-Value trata o valor como um blob opaco indexado pela chave.'
  },
  {
    cat: 'tecnologia',
    q: 'O ataque de segurança "Cross-Site Scripting" (XSS) do tipo Refletido ou Armazenado consiste em:',
    opts: ['Injetar e executar scripts maliciosos (normalmente JavaScript) no navegador de outros usuários através de entradas de dados não-sanitizadas da aplicação web', 'Capturar senhas enviadas em pacotes de rede sem criptografia TLS', 'Forçar a vítima a enviar requisições HTTP involuntárias utilizando seus cookies de sessão ativas', 'Alterar as rotas de tráfego dos servidores DNS raiz'],
    ans: 0,
    exp: 'O XSS permite que atacantes executem JavaScript no contexto da sessão da vítima, podendo roubar tokens JWT, cookies de autenticação (Session Hijacking) ou manipular a DOM.'
  },
  {
    cat: 'tecnologia',
    q: 'O padrão de arquitetura "Event-Driven" acoplado a Message Brokers (como Apache Kafka ou RabbitMQ) oferece a vantagem de:',
    opts: ['Desacoplamento temporal e espacial entre produtores e consumidores de mensagens, suportando alta vazão e resiliência a picos de tráfego (backpressure)', 'Garantir latência zero em transmissões de áudio analógico', 'Eliminar a necessidade de testes de código automatizados', 'Executar código Java dentro de bancos de dados relacionais obsoletos'],
    ans: 0,
    exp: 'Filas e streams de eventos permitem que produtores publiquem eventos assincronamente sem esperar pelo processamento imediato dos consumidores, aumentando a escalabilidade.'
  },
  {
    cat: 'tecnologia',
    q: 'Qual a finalidade da técnica de "Bloom Filter" em ciência da computação?',
    opts: ['Estrutura de dados probabilística extremamente eficiente em espaço usada para testar se um elemento PERTENCE a um conjunto (pode gerar falsos positivos, mas nunca falsos negativos)', 'Ordenação rápida de strings alfanuméricas em tempo O(n)', 'Criptografia de dados sensíveis armazenados em memórias cache', 'Compressão sem perdas de arquivos executáveis Linux'],
    ans: 0,
    exp: 'Um Bloom Filter responde com certeza se o item NÃO está presente no conjunto, ou com alta probabilidade se ELE PODE estar, evitando leituras custosas em disco/banco.'
  },
  {
    cat: 'tecnologia',
    q: 'O que estabelece a "Lei de Amdahl" no contexto do processamento paralelo?',
    opts: ['O ganho máximo de velocidade (speedup) de um programa paralelo é limitado pela fração sequencial (não-paralelizável) do código', 'O número de transistores em um chip dobra a cada 18 meses', 'A quantidade de memória RAM necessária é proporcional ao quadrado do número de núcleos de CPU', 'A latência de rede é inversamente proporcional à largura de banda'],
    ans: 0,
    exp: 'Mesmo com infinitos processadores, se 10% de um programa é estritamente sequencial, o speedup máximo teórico nunca poderá ultrapassar 10 vezes.'
  },
  {
    cat: 'tecnologia',
    q: 'O algoritmo de criptografia simétrica AES (Advanced Encryption Standard / Rijndael) opera com blocos de dados de qual tamanho fixo e chaves de quais comprimentos?',
    opts: ['Blocos de 128 bits e chaves de 128, 192 ou 256 bits', 'Blocos de 512 bits e chaves de 64 bits', 'Blocos de 32 bits e chaves de 1024 bits', 'Blocos de tamanho variável até 4 Gigabytes'],
    ans: 0,
    exp: 'O AES é uma cifra de bloco baseada em uma rede de substituição e permutação operando em uma matriz 4x4 de bytes (State) com blocos de 128 bits.'
  },
  {
    cat: 'tecnologia',
    q: 'Em linguagens funcionais puras como Haskell, o que são "Efeitos Colaterais" (Side Effects) e por que são evitados em Funções Puras?',
    opts: ['Qualquer modificação no estado fora do escopo local da função (como alterar variáveis globais ou E/S); Funções puras garantem Transparência Referencial e facilidade de raciocínio', 'Erros de sintaxe que interrompem a compilação', 'Overhead de memória gerado pelo coletor de lixo', 'Exceções disparadas quando a CPU superaquece'],
    ans: 0,
    exp: 'Funções puras sempre retornam o mesmo valor para os mesmos argumentos e não causam mutação externa, facilitando concorrência segura e otimizações do compilador.'
  },
  {
    cat: 'tecnologia',
    q: 'No protocolo de rede HTTP/2 e HTTP/3, quais foram os avanços arquiteturais mais significativos em relação ao HTTP/1.1?',
    opts: ['Multiplexação de requisições sobre uma única conexão (HTTP/2) e uso do protocolo de transporte QUIC baseado em UDP para eliminar Head-of-Line Blocking (HTTP/3)', 'Envio de dados em código Morse analógico', 'Remoção de suporte a arquivos de imagem e vídeo', 'Uso obrigatório de modems dial-up de 56 kbps'],
    ans: 0,
    exp: 'HTTP/2 introduziu enquadramento binário e multiplexação; HTTP/3 substituiu o TCP pelo QUIC sobre UDP, resolvendo bloqueios de linha em perda de pacotes.'
  },
  {
    cat: 'tecnologia',
    q: 'O que define uma função "Hash Criptográfica" segura (como SHA-256)?',
    opts: ['Unidirecionalidade (dificuldade de pré-imagem), resistência a segunda pré-imagem e resistência a colisões (duas entradas diferentes gerarem o mesmo hash)', 'Capacidade de ser invertida usando a chave secreta do usuário', 'Geração de hashes de tamanhos diferentes dependendo do tamanho da entrada', 'Execução exclusiva em placas de vídeo de alta gama'],
    ans: 0,
    exp: 'Uma função de hash criptográfica converte dados arbitrários em uma impressão digital de tamanho fixo com alta sensibilidade a qualquer mudança mínima na entrada (efeito avalanche).'
  },
  {
    cat: 'tecnologia',
    q: 'Em microsserviços e APIs Web, o que é o mecanismo de "Rate Limiting" e qual algoritmo clássico é frequentemente usado para sua implementação?',
    opts: ['Controle da taxa de requisições aceitas por cliente para evitar sobrecarga ou ataques DDoS; implementado por algoritmos como Leaky Bucket ou Token Bucket', 'Aceleração automática de consultas SQL complexas', 'Compactação de código JavaScript antes do envio ao cliente', 'Limitador físico de temperatura do servidor web'],
    ans: 0,
    exp: 'Token Bucket permite rajadas de tráfego até o limite de capacidade de tokens no balde, reabastecendo tokens a uma taxa constante regulada.'
  },
  {
    cat: 'tecnologia',
    q: 'Qual a finalidade da métrica "McCabe Cyclomatic Complexity" (Complexidade Ciclomática) em engenharia de software?',
    opts: ['Medir o número de caminhos linearmente independentes através do código-fonte para avaliar sua complexidade e determinar a quantidade mínima de testes necessária', 'Calcular o peso em Megabytes do arquivo compilado', 'Medir o número de linhas de comentários por arquivo', 'Estimar o custo financeiro de servidores em nuvem'],
    ans: 0,
    exp: 'A complexidade ciclomática baseia-se no grafo de fluxo de controle (V(G) = E - N + 2P); valores altos indicam código difícil de manter, testar e propenso a bugs.'
  },
  {
    cat: 'tecnologia',
    q: 'O mecanismo de "Copy-on-Write" (CoW) utilizado na chamada de sistema `fork()` no Linux tem como objetivo:',
    opts: ['Adiar a duplicação física das páginas de memória do processo pai até que o pai ou o filho tentem modificar (escrever) em uma página', 'Gravar logs do sistema em dois discos rígidos ao mesmo tempo', 'Impedir a execução de scripts Python não autorizados', 'Duplicar todas as conexões TCP ativas automaticamente'],
    ans: 0,
    exp: 'O CoW torna a criação de novos processos extremamente rápida e eficiente em memória, pois páginas de leitura são compartilhadas até que ocorra uma escrita real.'
  },
  {
    cat: 'tecnologia',
    q: 'No gerenciador de contêineres Docker, o que diferencia uma "Imagem Docker" de um "Contêiner Docker"?',
    opts: ['A Imagem é um modelo somente leitura estático contendo o código e dependências; o Contêiner é uma instância executável isolada da imagem com uma camada de escrita mutável', 'A Imagem roda em sistemas Windows; o Contêiner roda apenas em macOS', 'Contêineres exigem hipervisores de hardware pesado tipo 1', 'Imagens ocupam memória RAM física; contêineres ocupam apenas fitas'],
    ans: 0,
    exp: 'Um contêiner adiciona uma camada de sistema de arquivos gravável (rw layer) no topo das camadas empilhadas e imutáveis da imagem Docker.'
  },
  {
    cat: 'tecnologia',
    q: 'O que é um "Deadlock" em sistemas operacionais e quais são as quatro condições necessárias conhecidas como Condições de Coffman?',
    opts: ['Bloqueio mútuo onde processos ficam paralisados esperando por recursos retidos por outros; Condições: Exclusão Mútua, Posse e Espera, Não-Preempção e Espera Circular', 'Falha do disco rígido devido a sobreaquecimento do motor', 'Interrupção na transmissão de cabo de rede de fibra', 'Erro de compilação em código C++ por ausência de ponto e vírgula'],
    ans: 0,
    exp: 'Se qualquer uma das quatro condições de Coffman for quebrada ou prevenida, o deadlock não pode se consolidar no sistema.'
  },
  {
    cat: 'tecnologia',
    q: 'O padrão arquitetural "CQRS" (Command Query Responsibility Segregation) preconiza:',
    opts: ['Separar a estrutura de dados e modelos usados para atualizar informações (Commands) dos modelos usados para consultar/ler informações (Queries)', 'Utilizar apenas comandos de terminal Linux para administrar bancos de dados', 'Executar todas as consultas SQL dentro do navegador cliente', 'Proibir o uso de métodos HTTP POST em APIs REST'],
    ans: 0,
    exp: 'CQRS permite otimizar pipelines de escrita e leitura de forma independente, frequentemente combinado com Event Sourcing para manter auditabilidade total.'
  },
  {
    cat: 'tecnologia',
    q: 'O que é a técnica de "Just-In-Time Compilation" (Compilação JIT) utilizada no V8 do Chrome ou no HotSpot da JVM?',
    opts: ['Compilar trechos de código de bytecode altamente executados ("hot spots") diretamente em código de máquina nativo durante a própria execução da aplicação', 'Compilar o código fonte em segundo plano antes do desenvolvedor salvar o arquivo', 'Traduzir HTML diretamente em consultas SQL de banco de dados', 'Gerar documentação técnica em PDF automaticamente'],
    ans: 0,
    exp: 'A compilação JIT combina a inicialização rápida do interpretador com o desempenho próximo ao de código nativo compilado C/C++ através de perfilamento dinâmico.'
  },
  {
    cat: 'tecnologia',
    q: 'O ataque "CSRF" (Cross-Site Request Forgery) explora qual característica do comportamento padrão dos navegadores web?',
    opts: ['O envio automático dos cookies de sessão gravados para o domínio de destino em requisições cross-origin não protegidas por SameSite/Anti-CSRF Tokens', 'A execução de comandos Shell do sistema operacional via navegador', 'A capacidade de ler arquivos do disco rígido da vítima sem permissão', 'A fragilidade de senhas alfanuméricas curtas'],
    ans: 0,
    exp: 'No CSRF, o navegador envia automaticamente os cookies de autenticação da vítima ao acessar um site malicioso que submete um formulário para a aplicação vulnerável.'
  },
  {
    cat: 'tecnologia',
    q: 'Em ciência da computação, o que define uma "Tabela Hash com Encadeamento Aberto" (Open Addressing) para resolução de colisões em comparação com o "Encadeamento Separado" (Separate Chaining)?',
    opts: ['Em Open Addressing todos os elementos são armazenados no próprio array da tabela, usando sondagem (linear, quadrática, hashing duplo); em Chaining cada posição contém uma lista encadeada', 'Chaining armazena dados em arquivos texto externos', 'Open Addressing não permite a busca de chaves string', 'Chaining exige processadores quânticos de 128 qubits'],
    ans: 0,
    exp: 'Em Open Addressing, se ocorrer uma colisão, o algoritmo sonda posições alternativas dentro do próprio array até encontrar um slot livre.'
  },
  {
    cat: 'tecnologia',
    q: 'O protocolo gRPC desenvolvido pelo Google utiliza qual formato de serialização de dados binários por padrão e qual protocolo de transporte?',
    opts: ['Protocol Buffers (Protobuf) sobre transporte HTTP/2', 'JSON estruturado sobre conexões Telnet sem criptografia', 'XML com schemas DTD sobre pacotes UDP brutos', 'YAML comprimido com Zip sobre porta serial RS-232'],
    ans: 0,
    exp: 'Protobuf é um mecanismo compacto, fortemente tipado e altamente eficiente para serialização de dados estruturados, potencializado pela multiplexação do HTTP/2.'
  },
  {
    cat: 'tecnologia',
    q: 'O princípio da imutabilidade na programação reativa e gerenciamento de estado (como Redux ou React) visa garantir que:',
    opts: ['O estado anterior nunca seja alterado diretamente (mutado); modificações geram um novo objeto de estado, facilitando detecção de mudanças por referência rasal (shallow check)', 'Os arquivos de código fonte sejam gravados em mídias CD-ROM não regraváveis', 'O banco de dados não aceite inserções de novos usuários', 'As variáveis globais fiquem acessíveis a qualquer módulo'],
    ans: 0,
    exp: 'A imutabilidade permite comparações de referência ultrarrápidas (`prevProps.data !== nextProps.data`) evitando checagens profundas (deep check) custosas em árvores de UI.'
  },
  {
    cat: 'tecnologia',
    q: 'A vulnerabilidade de estouro de buffer (Buffer Overflow) em linguagens como C e C++ ocorre quando:',
    opts: ['Dados são gravados além dos limites de alocação de um buffer de memória sem verificação de tamanho, podendo sobrescrever o ponteiro de retorno na pilha (stack)', 'O disco rígido atinge 100% da capacidade de armazenamento', 'O usuário digita um texto com mais de 255 caracteres em um campo web', 'A memória RAM fica sem energia por desligamento incorreto'],
    ans: 0,
    exp: 'Ao sobrescrever o Instruction Pointer / Return Address na pilha de execução (Stack Frame), o atacante pode redirecionar o fluxo de controle da CPU para seu próprio shellcode.'
  },
  {
    cat: 'tecnologia',
    q: 'Qual a finalidade da técnica de "Circuit Breaker" em arquiteturas de sistemas distribuídos?',
    opts: ['Interromper chamadas a um serviço remoto com falhas recorrentes para evitar falha em cascata, retornando erro rapidamente e permitindo recuperação do serviço', 'Desligar os disjuntores da rede elétrica do datacenter em emergências', 'Bloqueio definitivo de acessos IP de usuários inadimplentes', 'Compactar mensagens de log em arquivos compactados .tar.gz'],
    ans: 0,
    exp: 'Inspirado em disjuntores elétricos, o padrão alterna entre os estados Fechado (normal), Aberto (bloqueia chamadas imediatamente) e Meio-Aberto (testa se o serviço recuperou).'
  },
  {
    cat: 'tecnologia',
    q: 'O que postula o modelo da "Arquitetura Hexagonal" (ou Ports and Adapters) proposto por Alistair Cockburn?',
    opts: ['Isolar o domínio da aplicação e as regras de negócio de dependências externas (UI, bancos de dados, frameworks) através de Portas (interfaces) e Adaptadores', 'Construir os prédios dos datacenters no formato geométrico de um hexágono regular', 'Utilizar exclusivamente linguagens funcionais criadas a partir do ano 2010', 'Dividir o código em exatamente 6 arquivos executáveis'],
    ans: 0,
    exp: 'A Arquitetura Hexagonal garante que o núcleo de negócio permaneça testável e agnóstico em relação a banco de dados, cliente HTTP ou qualquer detalhe de infraestrutura.'
  },
  {
    cat: 'tecnologia',
    q: 'Em bancos de dados relacionais, o que é um índice "Covering Index" (Índice Cobertor)?',
    opts: ['Um índice secundário que contém todas as colunas solicitadas por uma consulta SQL, permitindo que a busca seja satisfeita sem necessidade de acessar a tabela principal (Index-Only Scan)', 'Um índice gravado em pen-drive para cópia de segurança', 'Um índice de chave primária que criptografa os dados da tabela', 'Um índice temporário criado no momento do shutdown do banco'],
    ans: 0,
    exp: 'Como o índice contém todos os campos do SELECT e WHERE, o SGBD economiza leituras aleatórias de páginas da tabela no disco, acelerando a execução.'
  },
  {
    cat: 'tecnologia',
    q: 'Qual a diferença entre "Autenticação" e "Autorização" no contexto da segurança da informação?',
    opts: ['Autenticação verifica QUEM é o usuário (identidade); Autorização determina QUAIS recursos ou permissões esse usuário autenticado pode acessar', 'Autenticação é feita com senhas; Autorização é feita exclusivamente com impressões digitais', 'Autenticação ocorre no servidor web; Autorização ocorre no roteador Wi-Fi', 'Ambos são termos idênticos para a verificação de e-mail registrado'],
    ans: 0,
    exp: 'A autenticação valida as credenciais do usuário (ex: login com sucesso); a autorização checa a matriz de acessos (ex: o usuário tem permissão para deletar este registro?).'
  },
  {
    cat: 'tecnologia',
    q: 'O que é a técnica de "Sharding" em bancos de dados distribuídos?',
    opts: ['Particionamento horizontal dos dados distribuindo registros entre múltiplos servidores/bancos independentes com base em uma Chave de Sharding (Shard Key)', 'Cópia espelhada contínua de todo o banco de dados em um único disco', 'Compactação de colunas do tipo texto usando algoritmo Gzip', 'Tradução de código SQL para linguagem Java'],
    ans: 0,
    exp: 'O Sharding permite escalar horizontalmente a capacidade de escrita e armazenamento, dividindo o conjunto total de dados em fragmentos menores (shards).'
  },
  {
    cat: 'tecnologia',
    q: 'Qual a função do algoritmo "Raft" de eleição de líder em clusters de nós distribuídos?',
    opts: ['Eleger um único nó líder responsável pelo log de replicação, detectando falhas via timeouts de heartbeat e transitando entre os estados Follower, Candidate e Leader', 'Orderar arrays de strings na memória RAM em O(n)', 'Criptografar arquivos de mídia enviadas por streaming', 'Controlar a velocidade de rotação das ventoinhas do servidor'],
    ans: 0,
    exp: 'Raft foi desenvolvido para ser mais inteligível que o Paxos, mantendo a decomposição clara de eleição de líder, replicação de log e garantia de segurança de estado.'
  }
];
