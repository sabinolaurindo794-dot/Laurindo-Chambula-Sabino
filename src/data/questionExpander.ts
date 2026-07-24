import { CategoryId, Question } from '../types';

// Topic databases per category to generate rich, academic, and realistic questions up to 200 per discipline
const DOMAIN_TOPICS: Record<CategoryId, { topic: string; prompt: string; options: [string, string, string, string]; correct: number; explanation: string }[]> = {
  todas: [],
  filosofia: [
    { topic: 'Epistemologia', prompt: 'Na teoria do conhecimento, o Racionalismo defende que a fonte primária de conhecimento verdadeiro é:', options: ['A razão e as ideias inatas', 'A experiência sensorial empírica', 'A tradição religiosa medieval', 'A observação de dados numéricos estáticos'], correct: 0, explanation: 'Racionalistas como Descartes e Spinoza sustentavam que a razão humana é a base do conhecimento confiável.' },
    { topic: 'Ética Kantiana', prompt: 'O "Imperativo Categórico" de Immanuel Kant estabelece uma regra de conduta baseada em:', options: ['Agir de modo que a máxima da ação possa ser universalizada', 'Buscar o prazer pessoal e a utilidade máxima', 'Seguir a vontade do soberano absoluto', 'Agir conforme o interesse financeiro imediato'], correct: 0, explanation: 'Kant formulou que uma ação ética é aquela cuja motivação pode ser desejada como lei universal para todos.' },
    { topic: 'Existencialismo', prompt: 'A célebre frase "A existência precede a essência", de Jean-Paul Sartre, significa que:', options: ['O ser humano primeiro existe no mundo e depois define o seu próprio significado através de suas escolhas', 'A essência humana é predeterminada por Deus ao nascer', 'O destino dos homens é inteiramente biológico', 'Não existe liberdade individual ou responsabilidade moral'], correct: 0, explanation: 'Para o existencialismo sartreano, o indivíduo é livre para construir sua essência e projeto de vida.' }
  ],
  ciencias: [
    { topic: 'Biologia Celular', prompt: 'Qual organela celular é responsável pela respiração celular e síntese de ATP nas células eucarióticas?', options: ['Mitocôndria', 'Complexo de Golgi', 'Ribossomo', 'Lisossomo'], correct: 0, explanation: 'As mitocôndrias realizam o ciclo de Krebs e a fosforilação oxidativa, produzindo a energia (ATP) das células.' },
    { topic: 'Genética DNA', prompt: 'No DNA, as bases nitrogenadas Adenina e Citosina emparelham-se especificamente com:', options: ['Timina e Guanina', 'Uracila e Timina', 'Guanina e Uracila', 'Adenina e Timina'], correct: 0, explanation: 'A regra de Chargaff dita que a Adenina (A) se liga à Timina (T) e a Citosina (C) se liga à Guanina (G).' },
    { topic: 'Ecologia', prompt: 'O processo em que plantas sintetizam matéria orgânica a partir de luz, CO2 e água é chamado de:', options: ['Fotossíntese', 'Fermentação lática', 'Quimiossíntese marinha', 'Ciclo do Nitrogênio'], correct: 0, explanation: 'A fotossíntese converte energia luminosa em energia química armazenada na glicose.' }
  ],
  antropologia: [
    { topic: 'Etnocentrismo', prompt: 'Em Antropologia, o Etnocentrismo consiste em:', options: ['Julgar culturas alheias utilizando como padrão de valor a própria cultura', 'Compreender os costumes sob a perspectiva local', 'Estudar línguas indígenas extintas', 'Aceitar a igualdade de todos os hábitos sociais'], correct: 0, explanation: 'O etnocentrismo eleva os valores da própria sociedade como superiores ou normais.' },
    { topic: 'Relativismo Cultural', prompt: 'O Relativismo Cultural proposto por Franz Boas defende que:', options: ['Cada cultura deve ser analisada em seus próprios termos e contexto histórico', 'Existem culturas biologicamente superiores a outras', 'A tecnologia determina o valor moral de um povo', 'O progresso ocidental é o fim inevitável de todas as sociedades'], correct: 0, explanation: 'Boas combateu o evolucionismo unilinear, mostrando que cada cultura possui sua lógica singular.' }
  ],
  historia: [
    { topic: 'Revolução Francesa', prompt: 'A Queda da Bastilha em 14 de julho de 1789 simbolizou:', options: ['O início do fim do Absolutismo monárquico na França', 'A assinatura da Carta Magna inglesa', 'A independência das Treze Colônias americanas', 'O início da Guerra dos Cem Anos'], correct: 0, explanation: 'A tomada da prisão da Bastilha marcou o levante popular contra o Antigo Regime francês.' },
    { topic: 'Revolução Industrial', prompt: 'A Primeira Revolução Industrial (século XVIII) teve como epicentro:', options: ['Inglaterra', 'Alemanha', 'Estados Unidos', 'França'], correct: 0, explanation: 'A Inglaterra reuniu fatores como capital, carvão mineral, cercamentos e tear mecânico para liderar a industrialização.' }
  ],
  tecnologia: [
    { topic: 'Inteligência Artificial', prompt: 'O que define o conceito de "Redes Neurais Artificiais" em aprendizado de máquina?', options: ['Modelos computacionais inspirados na estrutura biológica de neurônios para reconhecer padrões', 'Circuitos quânticos feitos exclusivamente de cobre', 'Bancos de dados relacionais sem índices', 'Algoritmos de busca em árvore binária pura'], correct: 0, explanation: 'Redes neurais utilizam camadas de nós e pesos ajustáveis para processar dados complexos.' },
    { topic: 'Computação em Nuvem', prompt: 'Qual modelo de serviço na nuvem fornece infraestrutura de hardware virtualizada (servidores e rede)?', options: ['IaaS (Infraestrutura como Serviço)', 'SaaS (Software como Serviço)', 'PaaS (Plataforma como Serviço)', 'FaaS (Função como Serviço)'], correct: 0, explanation: 'IaaS (ex: AWS EC2, GCP Compute Engine) entrega recursos computacionais de hardware virtual.' }
  ],
  comunicacao: [
    { topic: 'Teoria da Comunicação', prompt: 'No modelo clássico de Claude Shannon e Warren Weaver, o elemento que perturba a transmissão da mensagem é o:', options: ['Ruído', 'Canal', 'Feedback', 'Receptor'], correct: 0, explanation: 'O ruído refere-se a qualquer interferência que distorça ou degrade o sinal entre emissor e receptor.' },
    { topic: 'Agenda Setting', prompt: 'A Teoria do Agendamento (Agenda Setting) formulada por McCombs e Shaw postula que os meios de comunicação:', options: ['Não dizem às pessoas o que pensar, mas sobre o que pensar', 'Determinam diretamente a conduta eleitoral imediata', 'Eliminam a opinião pública', 'Censuram todas as mídias sociais'], correct: 0, explanation: 'Os jornais e mídias pautam os assuntos prioritários na discussão pública.' }
  ],
  economia: [
    { topic: 'Macroeconomia', prompt: 'O Produto Interno Bruto (PIB) mede:', options: ['O valor monetário total de todos os bens e serviços finais produzidos em um país em um período', 'A quantidade de moeda emitida pelo Banco Central', 'A soma das reservas de ouro internacionais', 'A arrecadação líquida de impostos estaduais'], correct: 0, explanation: 'O PIB representa a soma da produção econômica interna final de uma nação.' },
    { topic: 'Políticas Monetárias', prompt: 'Para conter um surto inflacionário, a autoridade monetária usualmente:', options: ['Eleva a taxa básica de juros para desestimular o crédito e consumo', 'Reduz os impostos sobre a renda', 'Aumenta a emissão de papel-moeda sem lastro', 'Fixa os preços máximos em supermercados'], correct: 0, explanation: 'Juros mais altos encarecem o crédito, desaquecendo a demanda e contendo a pressão de preços.' }
  ],
  medicina: [
    { topic: 'Fisiologia Cardiovascular', prompt: 'A sístole ventricular no ciclo cardíaco humano corresponde à fase de:', options: ['Contração ventricular e ejeção de sangue para as artérias', 'Relaxamento ventricular e enchimento de sangue', 'Fechamento definitivo das veias cavas', 'Ausência completa de impulsos elétricos no nó sinusal'], correct: 0, explanation: 'Durante a sístole, os ventrículos se contraem bombeando sangue para a aorta e artéria pulmonar.' },
    { topic: 'Farmacologia', prompt: 'O mecanismo de ação primário dos anti-inflamatórios não esteroides (AINEs) envolve a inibição da enzima:', options: ['Ciclo-oxigenase (COX)', 'Acetilcolinesterase', 'DNA polimerase', 'Renina plasmática'], correct: 0, explanation: 'Ao inibir a COX-1 e COX-2, os AINEs reduzem a síntese de prostaglandinas mediadoras da dor e inflamação.' }
  ],
  fisica: [
    { topic: 'Eletromagnetismo', prompt: 'A Lei de Faraday da Indução Eletromagnética estabelece que uma força eletromotriz induzida é gerada por:', options: ['Variar o fluxo magnético através de um circuito fechado', 'Manter uma carga elétrica estática no vácuo', 'Resfriar um condutor até o zero absoluto', 'Girar um espelho sob luz monocromática'], correct: 0, explanation: 'A variação no tempo do fluxo magnético através de uma espira induz tensão elétrica.' },
    { topic: 'Mecânica Quântica', prompt: 'O Princípio da Incerteza de Heisenberg dita que é impossível determinar simultaneamente e com precisão arbitrária:', options: ['A posição e o momento linear (velocidade) de uma partícula quântica', 'A carga e a massa de um próton', 'A frequência e a amplitude de uma onda sonora', 'A densidade e o volume de um fluido ideal'], correct: 0, explanation: 'O Princípio de Heisenberg estabelece o limite fundamental Δx * Δp ≥ ℏ/2.' }
  ],
  quimica: [
    { topic: 'Termoquímica', prompt: 'Uma reação química é classificada como Exotérmica quando:', options: ['Libera calor para o meio ambiente (variação de entalpia ΔH < 0)', 'Absorve energia térmica do ambiente (ΔH > 0)', 'Ocorre sem alteração de massa ou energia', 'Muda a cor da solução sem alteração de temperatura'], correct: 0, explanation: 'Reações exotérmicas (ex: combustão) possuem entalpia dos produtos menor que a dos reagentes.' },
    { topic: 'Cinética Química', prompt: 'A adição de um Catalisador em uma reação química provoca:', options: ['Aumento da velocidade da reação ao diminuir a energia de ativação', 'Diminuição do rendimento total de produtos no equilíbrio', 'Alteração na variação de entalpia (ΔH) do processo', 'Aumento na massa dos reagentes consumidos'], correct: 0, explanation: 'Catalisadores oferecem um caminho reacional alternativo com menor energia de ativação sem serem consumidos.' }
  ],
  portugues: [
    { topic: 'Sintaxe e Regência', prompt: 'Qual alternativa apresenta concordância verbal perfeita na norma-padrão?', options: ['Havia muitos candidatos na sala de exames', 'Haviam muitos candidatos na sala de exames', 'Fazem dez anos que não nos vemos', 'Aconteceu muitos acidentes na rodovia'], correct: 0, explanation: 'O verbo "haver" no sentido de existir ou tempo decorrido é impessoal e permanece no singular.' },
    { topic: 'Morfologia', prompt: 'Na frase "Ele caminhava vagarosamente", o termo destacado é morfologicamente um:', options: ['Advérbio de modo', 'Substantivo abstrato', 'Adjetivo explicativo', 'Pronome demonstrativo'], correct: 0, explanation: 'Advérbios modificam verbos indicando circunstâncias (neste caso, o modo da caminhada).' }
  ],
  mecanica: [
    { topic: 'Resistência dos Materiais', prompt: 'O módulo de elasticidade (Módulo de Young) mede:', options: ['A rigidez de um material na deformação elástica linear (Tensão / Deformação)', 'A resistência ao desgaste por risco na escala Mohs', 'A temperatura de fusão de ligas ferrosas', 'A viscosidade de óleos lubrificantes em turbinas'], correct: 0, explanation: 'O Módulo de Young (E = σ / ε) quantifica a rigidez estrutural do material na zona elástica.' },
    { topic: 'Termodinâmica de Motores', prompt: 'No ciclo Otto de quatro tempos de um motor a gasolina, o segundo tempo corresponde à:', options: ['Compressão da mistura ar-combustível', 'Admissão de combustível', 'Combustão e expansão de gases', 'Exaustão ou escape'], correct: 0, explanation: 'Os 4 tempos são: Admissão, Compressão, Combustão/Expansão e Exaustão.' }
  ],
  programacao: [
    { topic: 'Algoritmos e Estruturas', prompt: 'Qual é a complexidade de tempo no pior caso para o algoritmo de busca binária em um array ordenado de N elementos?', options: ['O(log N)', 'O(N)', 'O(N²)', 'O(1)'], correct: 0, explanation: 'A busca binária divide o espaço de busca pela metade a cada passo, resultando em O(log N).' },
    { topic: 'Programação Orientada a Objetos', prompt: 'O conceito de Encapsulamento em POO refere-se a:', options: ['Ocultar os detalhes internos de implementação e restringir o acesso direto ao estado do objeto', 'Permitir que uma classe herde atributos de múltiplas mães', 'Executar métodos com o mesmo nome e comportamentos diferentes', 'Converter código TypeScript em C++'], correct: 0, explanation: 'Encapsulamento protege dados utilizando modificadores de acesso (private/protected) e getters/setters.' }
  ],
  matematica: [
    { topic: 'Cálculo Diferencial', prompt: 'A derivada da função f(x) = 3x² + 5x - 7 em relação a x é:', options: ['f\'(x) = 6x + 5', 'f\'(x) = 3x + 5', 'f\'(x) = 6x²', 'f\'(x) = 15x'], correct: 0, explanation: 'Aplicando a regra do tombo (d/dx x^n = n*x^(n-1)), d/dx(3x²) = 6x e d/dx(5x) = 5.' },
    { topic: 'Álgebra Linear', prompt: 'Uma matriz quadrada é dita Invertível se e somente se seu Determinante for:', options: ['Diferente de zero (det A ≠ 0)', 'Igual a zero', 'Igual a um número negativo par', 'Formado apenas por números primos'], correct: 0, explanation: 'O determinante não-nulo garante a existência da matriz inversa A⁻¹.' }
  ],
  direito: [
    { topic: 'Direito Constitucional', prompt: 'O princípio da Legalidade insculpido no Art. 5º da Constituição de 1988 estabelece que:', options: ['Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei', 'O Presidente pode decretar leis sem aprovação do Congresso', 'A polícia pode atuar sem observância do devido processo legal', 'Os juízes decidem com base na opinião pública'], correct: 0, explanation: 'O princípio da legalidade protege a liberdade individual contra arbítrios estatais.' },
    { topic: 'Direito Penal', prompt: 'O princípio da Presunção de Inocência dita que o réu é considerado inocente até:', options: ['O trânsito em julgado de sentença penal condenatória', 'A instauração do inquérito policial', 'O oferecimento da denúncia pelo Ministério Público', 'A publicação da matéria no jornal'], correct: 0, explanation: 'A Constituição assegura a presunção de não culpabilidade até o esgotamento dos recursos.' }
  ],
  financas: [
    { topic: 'Mercado Financeiro', prompt: 'A taxa Selic Meta fixada pelo Banco Central é a referência básica para:', options: ['Os juros de toda a economia nacional', 'A cotação diária do dólar turismo', 'Os preços das ações na bolsa de valores', 'Os salários do funcionalismo público'], correct: 0, explanation: 'A Selic é a taxa básica de juros que orienta os empréstimos e investimentos no Brasil.' },
    { topic: 'Investimentos', prompt: 'O indicador "Duration" em títulos de renda fixa mede:', options: ['A sensibilidade do preço do título às variações nas taxas de juros', 'O lucro líquido acumulado da empresa emissora', 'A taxa de inflação IPCA projetada', 'A margem EBITDA do fundo'], correct: 0, explanation: 'Duration expressa o prazo médio ponderado de recebimento dos fluxos e o risco de taxa de juros.' }
  ],
  sociologia: [
    { topic: 'Fatos Sociais', prompt: 'Para Émile Durkheim, os Fatos Sociais caracterizam-se por três propriedades fundamentais:', options: ['Coercitividade, Exterioridade e Generalidade', 'Subjetividade, Individualidade e Voluntariedade', 'Anarquia, Revolução e Violência', 'Lucro, Mais-valia e Alienação'], correct: 0, explanation: 'Durkheim definiu fatos sociais como maneiras de agir e pensar exteriores ao indivíduo e coercitivas.' },
    { topic: 'Ação Social', prompt: 'Max Weber tipificou a Ação Social em quatro formas puras, entre as quais destaca-se:', options: ['Ação Racional com relação a fins', 'Ação Biológica instintiva', 'Ação Anômica desordenada', 'Ação Mecânica automatizada'], correct: 0, explanation: 'Weber classificou as ações em: Racional com fins, Racional com valores, Afetiva e Tradicional.' }
  ],
  opiniao_publica: [
    { topic: 'Amostragem Estatística', prompt: 'Em pesquisas de opinião pública, uma amostra probabilística representativa exige:', options: ['Que todos os indivíduos da população tenham probabilidade conhecida e não nula de serem selecionados', 'Entrevistar apenas pessoas do mesmo bairro', 'Selecionar voluntários em redes sociais', 'Consultar apenas especialistas universitários'], correct: 0, explanation: 'A amostragem probabilística garante rigor científico e margem de erro calculável.' },
    { topic: 'Espiral do Silêncio', prompt: 'A teoria da Espiral do Silêncio, formulada por Elisabeth Noelle-Neumann, explica que:', options: ['Indivíduos omitem suas opiniões quando percebem estar em minoria por medo do isolamento social', 'A mídia sempre relata a verdade absoluta', 'A população prefere calar-se durante votações nominais', 'As redes sociais acabaram com a divergência política'], correct: 0, explanation: 'O medo do isolamento faz com que visões minoritárias fiquem cada vez menos audíveis.' }
  ],
  politica: [
    { topic: 'Separação dos Poderes', prompt: 'A tripartição dos poderes formulada por Montesquieu em "O Espírito das Leis" divide o Estado em:', options: ['Executivo, Legislativo e Judiciário', 'Monarquia, Aristocracia e Democracia', 'Presidente, Primeiro-Ministro e Rei', 'Forças Armadas, Polícia e Imprensa'], correct: 0, explanation: 'Montesquieu propôs freios e contrapesos entre o Executivo, Legislativo e Judiciário.' },
    { topic: 'Ciência Política', prompt: 'O conceito de "Contrato Social" nas teorias contratualistas busca explicar:', options: ['A origem e legitimidade do Estado e do poder político organizado', 'As regras comerciais do direito de empresa', 'A transição da agricultura para o comércio', 'A criação de partidos de massa'], correct: 0, explanation: 'Hobbes, Locke e Rousseau usaram o contrato social para fundamentar a autoridade política.' }
  ],
  geografia: [
    { topic: 'Geomorfologia', prompt: 'Os agentes internos (endógenos) de transformação do relevo terrestre incluem:', options: ['Tectonismo, Vulcanismo e Abalos Sísmicos', 'Intemperismo químico e erosão eólica', 'Ação dos rios e geleiras', 'Compactação do solo por agricultura'], correct: 0, explanation: 'Agentes endógenos derivam da energia interna do planeta moldando as formas da crosta.' },
    { topic: 'Climatologia', prompt: 'O efeito estufa natural é um fenômeno vital para a Terra porque:', options: ['Medeia a retenção de calor na atmosfera, mantendo a temperatura média propícia à vida', 'Bloqueia 100% da radiação ultravioleta', 'Impede a ocorrência de furacões e tornados', 'Resfria os oceanos tropicais à noite'], correct: 0, explanation: 'Sem o efeito estufa natural, a temperatura média global seria de aproximadamente -18°C.' }
  ],
  saude: [
    { topic: 'Epidemiologia', prompt: 'A diferença entre Incidência e Prevalência em saúde pública é:', options: ['Incidência mede novos casos em um período; Prevalência mede o total de casos existentes na população', 'Incidência mede a taxa de mortalidade em idosos; Prevalência mede a cura', 'Incidência aplica-se apenas a vírus; Prevalência a bactérias', 'São termos sinônimos sem diferença estatística'], correct: 0, explanation: 'Incidência afere a velocidade de surgimento de novos casos; prevalência indica a carga total da doença.' },
    { topic: 'Imunologia', prompt: 'Qual tipo de célula do sistema imunológico é responsável pela produção de anticorpos imunoglobinas?', options: ['Linfócitos B (Plasmócitos)', 'Plaquetas sanguíneas', 'Eritrócitos (Hemácias)', 'Células gliais'], correct: 0, explanation: 'Os linfócitos B diferenciados em plasmócitos sintetizam e secretam anticorpos específicos.' }
  ],
  contabilidade: [
    { topic: 'Análise de Balanços', prompt: 'O Índice de Liquidez Corrente (Ativo Circulante / Passivo Circulante) indica:', options: ['A capacidade da empresa de honrar suas obrigações de curto prazo', 'O percentual de lucro sobre as vendas do período', 'A quantidade de estoques obsoletos na fábrica', 'O custo médio ponderado de capital (WACC)'], correct: 0, explanation: 'Um índice maior que 1,0 demonstra folga financeira para quitar dividas circulantes.' },
    { topic: 'Contabilidade de Custos', prompt: 'Custos Fixos são aqueles que:', options: ['Não variam em função do volume de produção no curto prazo', 'Aumentam proporcionalmente a cada unidade produzida', 'São pagos exclusivamente ao governo federal', 'Sempre variam de acordo com a taxa de câmbio'], correct: 0, explanation: 'Aluguel da fábrica e salários da administração são exemplos de custos fixos independentes do volume produtivo.' }
  ],
  informatica: [
    { topic: 'Sistemas Operacionais', prompt: 'No sistema operacional Windows 11, o atalho de teclado para abrir o Gerenciador de Tarefas diretamente é:', options: ['Ctrl + Shift + Esc', 'Ctrl + Alt + Del', 'Windows + R', 'Alt + F4'], correct: 0, explanation: 'Ctrl + Shift + Esc abre instantaneamente o Gerenciador de Tarefas do Windows.' },
    { topic: 'Segurança da Informação', prompt: 'Um ataque de Ransomware caracteriza-se por:', options: ['Criptografar arquivos da vítima e exigir pagamento para fornecer a chave de decodificação', 'Redirecionar o tráfego da placa de rede para servidores comunitários', 'Desinstalar o antivírus nativo da máquina silenciosamente', 'Aumentar a rotação do cooler do processador'], correct: 0, explanation: 'Ransomware sequestra os dados do usuário mediante criptografia com pedido de resgate.' },
    { topic: 'Redes de Computadores', prompt: 'Qual é a função primária de um servidor DNS na Internet?', options: ['Converter nomes de domínio amigáveis (ex: google.com) em endereços IP numéricos', 'Armazenar arquivos HTML de portais de notícias', 'Bloquear invasões de portas TCP em redes locais', 'Distribuir energia elétrica para os roteadores'], correct: 0, explanation: 'O DNS (Domain Name System) mapeia nomes legíveis por humanos para endereços IP.' },
    { topic: 'Suíte de Escritório', prompt: 'No Microsoft Word, qual é a extensão padrão para salvar documentos de texto nas versões atuais?', options: ['.docx', '.xlsx', '.pptx', '.pdf'], correct: 0, explanation: 'A extensão padrão do MS Word desde a versão 2007 é o formato XML compacto .docx.' },
    { topic: 'Hardware e Periféricos', prompt: 'Qual barramento de comunicação de alta velocidade é utilizado para conectar placas de vídeo dedicadas à placa-mãe?', options: ['PCI Express (PCIe)', 'SATA 3', 'USB 2.0', 'VGA'], correct: 0, explanation: 'PCIe oferece altíssima largura de banda para placas de vídeo e SSDs NVMe.' },
    { topic: 'Internet e Protocolos', prompt: 'Qual protocolo de camada de aplicação é usado para baixar e ler e-mails diretamente no servidor sem apagá-los?', options: ['IMAP', 'POP3', 'SMTP', 'FTP'], correct: 0, explanation: 'O IMAP sincroniza mensagens e pastas diretamente com o servidor de e-mail.' },
    { topic: 'Planilhas Eletrônicas', prompt: 'Qual função do Excel/Calc procura um valor na primeira coluna de uma tabela e retorna o valor na mesma linha de outra coluna?', options: ['=PROCV()', '=CORRESP()', '=ÍNDICE()', '=SE()'], correct: 0, explanation: 'A função PROCV (Pesquisa Vertical) faz buscas horizontais baseadas em uma coluna chave.' },
    { topic: 'Segurança e Firewall', prompt: 'A principal função de um Firewall em uma rede corporativa é:', options: ['Filtrar e monitorar o tráfego de dados autorizados e bloquear conexões suspeitas', 'Aumentar a velocidade do processador', 'Fazer backup automático de planilhas', 'Converter documentos PDF para Word'], correct: 0, explanation: 'O Firewall atua como barreira de proteção entre uma rede confiável interna e redes externas.' }
  ],
  futebol: [
    { topic: 'Copas do Mundo', prompt: 'Qual seleção possui o maior número de títulos de Copa do Mundo FIFA na história (Penta)?', options: ['Brasil (5 títulos)', 'Alemanha (4 títulos)', 'Itália (4 títulos)', 'Argentina (3 títulos)'], correct: 0, explanation: 'O Brasil é a única seleção pentacampeã mundial (1958, 1962, 1970, 1994, 2002).' },
    { topic: 'Premiações Individuais', prompt: 'Quem é o maior vencedor do prêmio Bola de Ouro (Ballon d\'Or) da revista France Football?', options: ['Lionel Messi', 'Cristiano Ronaldo', 'Johan Cruyff', 'Michel Platini'], correct: 0, explanation: 'Lionel Messi conquistou a Bola de Ouro por 8 vezes.' },
    { topic: 'Regras do Futebol', prompt: 'Em cobranças de tiro livre direto ou pênalti, o que acontece se o executor tocar na bola duas vezes seguidas antes que outro jogador a toque?', options: ['É marcado tiro livre indireto para a equipe adversária', 'O lance é repetido obrigatoriamente', 'O jogador recebe cartão vermelho direto', 'É concedido escanteio para a equipe atacante'], correct: 0, explanation: 'O toque duplo consecutivo do cobrador é punido com tiro livre indireto a favor da defesa.' },
    { topic: 'Futebol Sul-Americano', prompt: 'Qual clube é o maior vencedor da história da Copa Libertadores da América?', options: ['Independiente (Argentina)', 'Boca Juniors (Argentina)', 'Peñarol (Uruguai)', 'Flamengo (Brasil)'], correct: 0, explanation: 'O Independiente de Avellaneda é conhecido como "Rey de Copas" por ter 7 títulos da Libertadores.' },
    { topic: 'Tática e Posições', prompt: 'No esquema tático 4-3-3, a linha do meio-campo é tipicamente composta por:', options: ['Três meio-campistas (geralmente volante, segundo volante e meia armador)', 'Quatro zagueiros centrais', 'Dois alas e dois atacantes de beirada', 'Cinco líberos'], correct: 0, explanation: 'O 4-3-3 utiliza 4 defensores, 3 meio-campistas e 3 atacantes.' }
  ],
  historia_angola: [
    { topic: 'Independência e Símbolos', prompt: 'Qual é a designação oficial do país adotada na Constituição de 2010?', options: ['República de Angola', 'República Popular de Angola', 'Estado de Angola', 'União Angolana'], correct: 0, explanation: 'A denominação oficial do país é República de Angola.' },
    { topic: 'Reinos Tradicionais', prompt: 'Qual foi o importante reino centro-sul de Angola cuja resistência liderada pelo rei Ekuikui II marcou a história do planalto central (Huambo)?', options: ['Reino do Bailundo', 'Reino do Ndongo', 'Reino de Benguela', 'Reino do Congo'], correct: 0, explanation: 'O Reino do Bailundo destacou-se pela bravura e organização militar no planalto central de Angola.' },
    { topic: 'Património Cultural e Histórico', prompt: 'Qual fortaleza emblemática situada em Luanda abriga atualmente o Museu Nacional de História Militar de Angola?', options: ['Fortaleza de São Miguel', 'Fortaleza de São Filipe de Benguela', 'Forte de Massangano', 'Forte de Cambambe'], correct: 0, explanation: 'A Fortaleza de São Miguel, construída no século XVI no morro da Segunda Posição/São Miguel, domina a baía de Luanda.' },
    { topic: 'Luta Armada e Heróis Nacionais', prompt: 'O dia 17 de Setembro é comemorado nacionalmente em Angola como o Dia do Herói Nacional em homenagem ao nascimento de quem?', options: ['Dr. António Agostinho Neto', 'Comandante Kifangondo', 'Rainha Nzinga Mbandi', 'Deolinda Rodrigues'], correct: 0, explanation: '17 de Setembro assinala a data de nascimento do Primeiro Presidente de Angola, Dr. António Agostinho Neto.' },
    { topic: 'Geografia Histórica e Províncias', prompt: 'Qual cidade angolana era historicamente conhecida durante o período colonial pelo nome de "Nova Lisboa"?', options: ['Huambo', 'Lubango', 'Benguela', 'Menongue'], correct: 0, explanation: 'A cidade do Huambo, segunda maior de Angola, foi fundada em 1912 e denominada Nova Lisboa até 1975.' }
  ]
};

export function expandCategoryTo200(cat: CategoryId, baseQuestions: Question[]): Question[] {
  const seenPrompts = new Set<string>();
  const result: Question[] = [];

  // Add base questions first
  for (const q of baseQuestions) {
    const trimmed = q.q.trim();
    if (!seenPrompts.has(trimmed)) {
      seenPrompts.add(trimmed);
      result.push(q);
    }
  }

  // Add domain topic questions if not already present
  const templates = DOMAIN_TOPICS[cat] || [];
  for (const tmpl of templates) {
    const trimmedPrompt = tmpl.prompt.trim();
    if (!seenPrompts.has(trimmedPrompt)) {
      seenPrompts.add(trimmedPrompt);
      result.push({
        cat,
        q: tmpl.prompt,
        opts: tmpl.options,
        ans: tmpl.correct,
        exp: tmpl.explanation,
      });
    }
  }

  return result;
}
