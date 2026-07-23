import { Question } from '../../types';

export const ECONOMIA_QUESTIONS: Question[] = [
  {
    cat: 'economia',
    q: 'O indicador IPCA (Índice Nacional de Preços ao Consumidor Amplo) no Brasil é apurado pelo IBGE e mede a variação de preços para famílias com rendimentos de quantas salários mínimos?',
    opts: ['1 a 40 salários mínimos', '1 a 5 salários mínimos', '10 a 100 salários mínimos', 'Apenas acima de 50 salários mínimos'],
    ans: 0,
    exp: 'O IPCA é o índice oficial de inflação do Brasil (usado pelo Banco Central no regime de metas), medindo o custo de vida de famílias de 1 a 40 salários mínimos nas regiões metropolitanas.'
  },
  {
    cat: 'economia',
    q: 'A Curva de Phillips na macroeconomia original (desenvolvida por A. W. Phillips) sugeria a existência de uma relação inversa (trade-off) de curto prazo entre quais duas variáveis?',
    opts: ['Taxa de Inflação e Taxa de Desemprego', 'Produto Interno Bruto e Exportações Líquidas', 'Taxa de Câmbio e Reservas Internacionais', 'Gasto Público e Arrecadação Tributária'],
    ans: 0,
    exp: 'A Curva de Phillips mostrava que reduções no desemprego costumam vir acompanhadas por pressões inflacionárias de demanda no curto prazo.'
  },
  {
    cat: 'economia',
    q: 'O conceito de "Destruição Criativa" (Creative Destruction) formulado pelo economista Joseph Schumpeter identifica como motor do desenvolvimento capitalista:',
    opts: ['A inovação tecnológica e empresarial constante que destrói estruturas econômicas velhas e cria continuamente novas', 'O controle de preços e congelamento de salários pelo Estado', 'A acumulação estática de moedas de ouro em bancos centrais', 'A proibição do comércio internacional de manufaturados'],
    ans: 0,
    exp: 'Schumpeter argumentou em "Capitalismo, Socialismo e Democracia" que o processo de mutação industrial revoluciona ininterruptamente a estrutura econômica por dentro.'
  },
  {
    cat: 'economia',
    q: 'Na microeconomia, o conceito de "Elasticidade-Preço da Demanda" mede:',
    opts: ['A variação percentual na quantidade demandada de um bem em resposta a uma variação percentual em seu preço', 'A variação do custo de produção quando a fábrica aumenta o número de operários', 'O aumento do salário mínimo corrigido pela inflação acumulada', 'A taxa de juros cobrada por empréstimos bancários de curto prazo'],
    ans: 0,
    exp: 'A elasticidade-preço (Ep) indica a sensibilidade dos consumidores a mudanças de preço: se |Ep| > 1 a demanda é elástica; se |Ep| < 1 a demanda é inelástica.'
  },
  {
    cat: 'economia',
    q: 'A "Trindade Impossível" (Trilema Macroeconômico de Mundell-Fleming) estabelece que um país não pode manter simultaneamente quais três condições econômicas?',
    opts: ['Câmbio Fixo, Livre Mobilidade de Capitais e Autonomia da Política Monetária', 'Inflação Zero, Desemprego Zero e PIB Crescente', 'Isenção de Impostos, Superávit Primário e Dívida Zero', 'Exportações Altas, Importações Zero e Juros Baixos'],
    ans: 0,
    exp: 'O Trilema de Mundell-Fleming prova que ao escolher duas dessas garantias, o país é matematicamente forçado a renunciar à terceira.'
  },
  {
    cat: 'economia',
    q: 'O indicador "PIB" (Produto Interno Bruto) sob a ótica da Demanda / Despesa é calculado pela fórmula clássica:',
    opts: ['PIB = C + I + G + (X - M)', 'PIB = C + S + T', 'PIB = Vendas - Custos - Impostos', 'PIB = Exportações / Importações'],
    ans: 0,
    exp: 'A despesa agregada é a soma do Consumo das Famílias (C), Investimento das Empresas (I), Gastos do Governo (G) e Exportações Líquidas (Exportações X menos Importações M).'
  },
  {
    cat: 'economia',
    q: 'Na teoria dos jogos, o "Equilíbrio de Nash" é uma situação na qual:',
    opts: ['Nenhum jogador tem incentivo para mudar unilateralmente sua estratégia, dadas as estratégias adotadas pelos demais jogadores', 'Todos os jogadores obtêm exatamente a mesma recompensa financeira', 'O Estado intervém para confiscar o lucro dos vencedores', 'Um jogador ganha tudo e os outros são eliminados imediatamente'],
    ans: 0,
    exp: 'Formulado por John Nash, o equilíbrio ocorre quando cada jogador está fazendo o melhor que pode, considerando as escolhas dos adversários.'
  },
  {
    cat: 'economia',
    q: 'O que caracteriza a falha de mercado conhecida como "Assimetria de Informação" do tipo "Sinalização" (Signaling) modelada por Michael Spence?',
    opts: ['A ação tomada por uma parte informada (ex: trabalhador qualificado) para transmitir credivelmente informações privadas a uma parte não-informada (ex: empregador) mediante um sinal custoso (ex: diploma)', 'O roubo de segredos industriais por hackers', 'A falsificação de notas de dinheiro em circulação', 'A falta de computadores nas bolsas de valores'],
    ans: 0,
    exp: 'Em mercados com informação assimétrica, a sinalização funciona se o custo de obter o sinal for substancialmente mais baixo para os agentes de alta qualidade do que para os de baixa.'
  },
  {
    cat: 'economia',
    q: 'A chamada "Armadilha da Liquidez" (Liquidity Trap) analisada por John Maynard Keynes ocorre quando:',
    opts: ['A taxa de juros nominal está tão próxima de zero que a política monetária perde eficácia, pois as pessoas preferem reter moeda líquida a investir em títulos', 'Os bancos privados ficam sem papel-moeda nos cofres físicos', 'O valor das ações de tecnologia cai 90% em um único dia', 'A taxa de câmbio desvaloriza 500% devido à hiperinflação'],
    ans: 0,
    exp: 'Na armadilha da liquidez, injeções adicionais de moeda pelo Banco Central não reduzem mais os juros nem estimulam o investimento, exigindo estímulo fiscal direto.'
  },
  {
    cat: 'economia',
    q: 'A "Lei dos Rendimentos Decrescentes" na teoria microeconômica da produção afirma que:',
    opts: ['Ao aumentar sucessivamente a quantidade de um fator variável (ex: trabalho) mantendo fixos os demais fatores (ex: capital/fábrica), o produto marginal do fator variável acabará por declinar', 'O lucro de uma empresa cai a zero assim que ela entra na bolsa de valores', 'Os preços das mercadorias caem proporcionalmente à inflação', 'O consumo das famílias reduz quando a renda dobra'],
    ans: 0,
    exp: 'Adicionar mais trabalhadores em uma fábrica de tamanho fixo aumenta a produção total, mas cada trabalhador adicional contribuirá com um incremento cada vez menor (produto marginal decrescente).'
  },
  {
    cat: 'economia',
    q: 'O que estabelece o Teorema de Coase na economia do bem-estar social?',
    opts: ['Se os custos de transação forem nulos e os direitos de propriedade forem bem definidos, as partes privadas podem negociar e resolver externidades com eficiência sem intervenção estatal', 'O Estado deve estatizar todas as indústrias que poluem o meio ambiente', 'As taxas de juros reais devem ser sempre iguais à inflação esperada', 'A cobrança de impostos não gera perda de peso morto na economia'],
    ans: 0,
    exp: 'Ronald Coase provou que a negociação privada entre as partes afetadas conduzirá a um resultado eficiente de Pareto independente de quem detém inicialmente os direitos de propriedade, desde que não haja custos de transação.'
  },
  {
    cat: 'economia',
    q: 'O "Efeito Fisher" na economia monetária descreve a relação estrita entre as taxas de juros, estabelecendo que:',
    opts: ['A taxa de juros nominal é aproximadamente igual à soma da taxa de juros real com a taxa de inflação esperada (i = r + πᵉ)', 'A taxa de juros flutua na razão inversa do PIB nominal', 'A inflação é sempre zero quando os juros reais são negativos', 'Os bancos centrais devem fixar juros por decreto imutável'],
    ans: 0,
    exp: 'A Equação de Fisher demonstra que para manter o retorno real do capital (r), os credores exigem uma taxa nominal (i) que embuta a compensação pela inflação esperada (πᵉ).'
  },
  {
    cat: 'economia',
    q: 'O indicador "Coeficiente de Gini" varia em uma escala de 0 a 1 e é utilizado para medir:',
    opts: ['O grau de desigualdade na distribuição de renda ou riqueza de uma população', 'A produtividade média por trabalhador na indústria', 'O nível de endividamento público em relação ao PIB', 'A taxa de analfabetismo funcional do país'],
    ans: 0,
    exp: 'O Coeficiente de Gini calcula a área entre a Curva de Lorenz e a linha de igualdade perfeita: 0 representa igualdade absoluta e 1 representa desigualdade máxima.'
  },
  {
    cat: 'economia',
    q: 'A teoria da "Vantagem Comparativa" formulada pelo economista clássico David Ricardo provou que:',
    opts: ['O comércio internacional traz benefícios mútuos para os países mesmo que um deles seja mais eficiente (tenha vantagem absoluta) na produção de todas as mercadorias', 'Cada país deve produzir apenas mercadorias que não tenham custo de transporte', 'O protecionismo alfandegário total é o único meio de enriquecer uma nação', 'As exportações de matérias-primas são sempre prejudiciais ao desenvolvimento'],
    ans: 0,
    exp: 'David Ricardo demonstrou que o comércio compensa se os países se especializarem nos bens em que possuem menor custo de oportunidade relativo.'
  },
  {
    cat: 'economia',
    q: 'O que caracteriza a situação de "Monopsônio" em uma estrutura de mercado microeconômica?',
    opts: ['Mercado onde existe apenas um único comprador de determinado bem ou fator de produção para muitos vendedores', 'Mercado controlado por dois únicos produtores gigantes', 'Mercado em concorrência perfeita com infinitos compradores e vendedores', 'Mercado onde o Estado proíbe a venda de alimentos'],
    ans: 0,
    exp: 'Diferente do Monopólio (um único vendedor), o Monopsônio confere poder de mercado ao único comprador (ex: uma grande fábrica isolada compondo o único mercado de trabalho da região).'
  },
  {
    cat: 'economia',
    q: 'A "Curva de Laffer" na economia pelo lado da oferta (Supply-Side Economics) ilustra a relação hipotética entre:',
    opts: ['As alíquotas de imposto cobradas e a arrecadação tributária total do Estado', 'O crescimento populacional e a oferta de alimentos agrários', 'A quantidade de moeda em circulação e a taxa de câmbio', 'O investimento privado e o déficit público em conta corrente'],
    ans: 0,
    exp: 'Arthur Laffer argumentou que alíquotas tributárias excessivas desestimulam o trabalho e a produção, reduzindo a base de cálculo a ponto de diminuir a arrecadação total do governo.'
  },
  {
    cat: 'economia',
    q: 'O modelo de crescimento econômico de Solow-Swan identifica como motor do crescimento sustentado de longo prazo por habitante (per capita):',
    opts: ['O progresso tecnológico exógeno (produtividade total dos fatores)', 'O acúmulo infinito de capital físico simples sem inovação', 'A emissão descontrolada de papel-moeda pelo banco central', 'A proibição de importações de tecnologia estrangeira'],
    ans: 0,
    exp: 'Robert Solow mostrou que a acumulação isolada de capital sofre de rendimentos decrescentes, tornando o avanço tecnológico a única fonte contínua de crescimento da renda per capita no longo prazo.'
  },
  {
    cat: 'economia',
    q: 'Na teoria da decisão sob incerteza, o "Paradoxo de St. Petersburgo" proposto por Daniel Bernoulli serviu para demonstrar a necessidade de introduzir o conceito de:',
    opts: ['Utilidade Marginal Decrescente e Aversão ao Risco na função de utilidade esperada', 'Juros compostos diários na contabilidade bancária', 'Probabilidade subjetiva bayesiana absoluta', 'Custo fixo de produção industrial'],
    ans: 0,
    exp: 'O jogo de cara ou coroa com valor esperado infinito provou que as pessoas não tomam decisões com base no valor monetário esperado, mas na utilidade esperada do dinheiro.'
  },
  {
    cat: 'economia',
    q: 'O mecanismo de política monetária conhecido como "Quantitative Easing" (QE / Afrouxamento Quantitativo) adotado por Bancos Centrais consiste em:',
    opts: ['Compra massiva de títulos públicos e privados de longo prazo no mercado secundário para injetar liquidez direta no sistema e reduzir juros de longo prazo', 'Aumento das taxas de redesconto bancário para conter a inflação', 'Confisco temporário de depósitos de poupança da população', 'Emissão de moedas metálicas comemorativas de ouro'],
    ans: 0,
    exp: 'Utilizado quando as taxas de juros de curto prazo estão no limite inferior zero (Zero Lower Bound), o QE expande o balanço do Banco Central para destravar o crédito e reduzir juros longos.'
  },
  {
    cat: 'economia',
    q: 'A falha de mercado conhecida como "Seleção Adversa" (Adverse Selection) surge no contexto de informação assimétrica ANTES da assinatura do contrato e provoca:',
    opts: ['A expulsão dos produtos/agentes de boa qualidade do mercado, deixando apenas os de baixa qualidade (ex: O Mercado de "Lemons" de Akerlof)', 'O aumento involuntário da taxa de juros do cupom de títulos do tesouro', 'A quebra de patentes farmacêuticas internacionais', 'O aumento da concorrência entre empresas do mesmo setor'],
    ans: 0,
    exp: 'George Akerlof demonstrou que quando compradores não conseguem diferenciar carros bons de carros ruins ("lemons"), o preço médio oferecido afasta os donos de carros bons, destruindo o mercado.'
  },
  {
    cat: 'economia',
    q: 'O conceito de "Risco Moral" (Moral Hazard) na economia dos contratos ocorre APÓS a assinatura do contrato quando:',
    opts: ['Uma das partes altera seu comportamento para assumir riscos maiores sabendo que os custos da falha serão suportados por outra parte (ex: seguradora ou socorro estatal)', 'O comprador descobre que o produto estava vencido na prateleira', 'A empresa decreta falência antes de pagar os salários dos funcionários', 'O governo aumenta a alíquota do imposto sobre operações financeiras'],
    ans: 0,
    exp: 'O Moral Hazard ocorre quando a proteção fornecida por um contrato de seguro ou garantia implícita ("too big to fail") desincentiva a prudência da parte segurada.'
  },
  {
    cat: 'economia',
    q: 'A "Hipótese dos Mercados Eficientes" (EMH) formulada por Eugene Fama em sua forma forte afirma que os preços dos ativos financeiros:',
    opts: ['Refletem instantaneamente e totalmente todas as informações disponíveis, sejam elas públicas ou privadas (insider information)', 'São manipulados exclusivamente por mineradores de criptomoedas', 'Flutuam sem qualquer relação com os fundamentos econômicos das empresas', 'Podem ser previstos com 100% de precisão por análise técnica de gráficos'],
    ans: 0,
    exp: 'A versão forte da EMH defende que nem mesmo informações privilegiadas permitem obter retornos anormais consistentes acima da média do mercado ajustada ao risco.'
  },
  {
    cat: 'economia',
    q: 'O "Teorema de Modigliani-Miller" na finança corporativa estabelece que, sob mercados de capitais perfeitos (sem impostos ou custos de falência), o valor de uma empresa:',
    opts: ['É totalmente independente da sua estrutura de capital (proporção entre dívida e patrimônio líquido)', 'Depende exclusivamente da quantidade de dinheiro físico em caixa', 'Aumenta 100% para cada dólar de dívida contratado', 'É determinado pelo valor contábil das suas patentes industriais'],
    ans: 0,
    exp: 'Franco Modigliani e Merton Miller provaram que a forma como a empresa financia seus ativos (ações vs. debêntures) não altera seu valor total de mercado em mercados sem atritos.'
  },
  {
    cat: 'economia',
    q: 'Na teoria do consumidor, o que caracteriza um "Bem de Giffen"?',
    opts: ['Um bem inferior cuja demanda AUMENTA quando seu preço AUMENTA, violando a Lei da Demanda devido ao efeito renda negativo superar o efeito substituição', 'Um bem de luxo comprado apenas por ostentação social (Bem de Veblen)', 'Um bem cuja oferta é infinitamente elástica no mercado internacional', 'Um bem produzido exclusivamente por empresas estatais monopolistas'],
    ans: 0,
    exp: 'Bens de Giffen são bens essenciais e altamente inferiores (ex: batatas na Grande Fome da Irlanda); quando seu preço sobe, o empobrecimento força a população a cortar itens melhores e comprar mais batatas.'
  },
  {
    cat: 'economia',
    q: 'A "Taxa Neutra de Juros" (ou taxa real de juro de equilíbrio / r*) é definida como:',
    opts: ['A taxa de juros real que mantém a economia em pleno emprego com inflação estável, sem ser estimulativa nem restritiva', 'A taxa de juros cobrada por bancos centrais em empréstimos de emergência', 'A taxa cobrada pela caderneta de poupança em anos de recessão', 'A taxa de juros de títulos públicos com vencimento acima de 30 anos'],
    ans: 0,
    exp: 'A taxa neutra (r*) é o benchmark de equilíbrio macroeconômico; juros reais acima de r* desaceleram a economia e juros abaixo de r* estimulam a demanda.'
  },
  {
    cat: 'economia',
    q: 'O "Efeito Crowding-Out" (Efeito Deslocamento) na macroeconomia ocorre quando:',
    opts: ['O aumento dos gastos públicos financiados por emissão de dívida eleva as taxas de juros, reduzindo o investimento e o consumo privados', 'O aumento das importações provoca a falência de indústrias nacionais', 'A valorização da moeda nacional destrói a rentabilidade dos exportadores', 'O excesso de caixa das empresas privadas gera deflação crônica'],
    ans: 0,
    exp: 'Ao competir por poupança no mercado financeiro para cobrir deficits fiscais, o governo eleva os juros reais, desestimulando ("crowding out") os investimentos do setor privado.'
  },
  {
    cat: 'economia',
    q: 'A "Equivalência Ricardiana" reformulada pelo economista Robert Barro sugere que cortes de impostos financiados por endividamento público:',
    opts: ['Não estimulam o consumo presente, pois as famílias antecipam que impostos mais altos serão cobrados no futuro para pagar a dívida, aumentando a poupança hoje', 'Geram um boom imediato e sustentado de consumo de bens duráveis', 'Reduzem a taxa de câmbio nominal instantaneamente', 'Aumentam o déficit comercial do país com o resto do mundo'],
    ans: 0,
    exp: 'A proposição ricardiana assume que agentes com expectativas racionais percebem a restrição orçamentária intertemporal do governo, neutralizando os efeitos do estímulo fiscal.'
  },
  {
    cat: 'economia',
    q: 'A condição de "Ótimo de Pareto" na economia do bem-estar social é atingida quando:',
    opts: ['Não é possível realocar recursos para melhorar a situação de um indivíduo sem piorar a situação de pelo menos outro indivíduo', 'Renda e riqueza são distribuídas com igualdade matemática absoluta', 'O governo arrecada 100% do PIB em tributos estatais', 'Todos os bens são vendidos a preço zero no mercado'],
    ans: 0,
    exp: 'Uma alocação é eficiente no sentido de Pareto quando todas as trocas mutuamente vantajosas foram esgotadas, sendo impossível obter ganhos sem impor custos a outrem.'
  },
  {
    cat: 'economia',
    q: 'A "Doença Holandesa" (Dutch Disease) é um fenômeno macroeconômico em que a forte entrada de divisas pela exportação de recursos naturais (ex: petróleo/commodities) provoca:',
    opts: ['A apreciação da moeda nacional, prejudicando a competitividade das exportações da indústria manufatureira e desindustrializando o país', 'Hiperinflação acompanhada por escassez de alimentos básicos', 'A falência imediata dos bancos estatais de desenvolvimento', 'A perda de acesso aos mercados de capitais internacionais'],
    ans: 0,
    exp: 'A valorização cambial excessiva impulsionada pelas commodities encarece os produtos manufaturados nacionais no exterior e barateia os importados, atrofia o setor industrial.'
  },
  {
    cat: 'economia',
    q: 'O que mede o indicador de "Risco-País" (como o índice EMBI+ calculado pelo J.P. Morgan)?',
    opts: ['O diferencial de rendimento (spread) entre os títulos da dívida pública de um país emergente e os títulos do Tesouro dos EUA (Treasuries) tidos como livres de risco', 'A probabilidade estatística de ocorrência de terremotos e furacões', 'A taxa de criminalidade urbana medida por 100 mil habitantes', 'O déficit acumulado da balança comercial de serviços'],
    ans: 0,
    exp: 'O EMBI+ quantifica a sobretaxa cobrada pelos investidores internacionais para compensar o risco de calote (default) do governo emergente.'
  },
  {
    cat: 'economia',
    q: 'O modelo IS-LM (Investment-Savings / Liquidity preference-Money supply) desenvolvido por John Hicks formaliza:',
    opts: ['O equilíbrio simultâneo no mercado de bens e serviços (curva IS) e no mercado monetário/financeiro (curva LM)', 'A taxa de crescimento populacional Malthusiana em longo prazo', 'O valor das opções de compra e venda na bolsa de valores', 'A taxa de câmbio real em países sem banco central'],
    ans: 0,
    exp: 'O modelo IS-LM relaciona a taxa de juros e o produto/renda agregada, servindo como ferramenta clássica para analisar políticas fiscais e monetárias de curto prazo.'
  },
  {
    cat: 'economia',
    q: 'Na teoria da regressão econométrica, o problema da "Heterocedasticidade" nos resíduos do modelo MQO (Mínimos Quadrados Ordinários) significa que:',
    opts: ['A variância dos erros do modelo não é constante ao longo das observações da amostra', 'Os erros da amostragem somam exatamente zero em todas as linhas', 'Existe correlação perfeita entre duas variáveis explicativas independentes', 'A amostra possui poucas observações quantitativas'],
    ans: 0,
    exp: 'A heterocedasticidade invalida os testes de hipótese padrões (t e F) porque os erros padrão das estimativas de MQO ficam viesados, exigindo correções como erros padrão robustos de White.'
  },
  {
    cat: 'economia',
    q: 'A "Tragédia dos Comuns" (Tragedy of the Commons) descrita por Garrett Hardin refere-se ao colapso de recursos de uso comum (não-excludentes e rivais) motivado por:',
    opts: ['O incentivo de cada indivíduo para sobreexplorar o recurso em benefício próprio, transferindo o custo da degradação para toda a coletividade', 'A cobrança de tarifas excessivas pelo proprietário privado da terra', 'A proibição do acesso público a parques ecológicos estaduais', 'A interferência de multinacionais de biotecnologia agrária'],
    ans: 0,
    exp: 'A ausência de direitos de propriedade ou regulação eficaz em bens rivais não-excludentes (como pastos comunitários ou estoques de peixe nos oceanos) leva à sobre-exploração predatória.'
  },
  {
    cat: 'economia',
    q: 'A "Teoria Quantitativa da Moeda" (TQM) expressa na equação de trocas de Irving Fisher (M · V = P · Y) postula que, com velocidade de circulação (V) e produto (Y) constantes no curto prazo:',
    opts: ['Variações na oferta de moeda (M) causam variações proporcionalmente diretas no nível geral de preços (P) - inflação', 'O aumento da moeda reduz automaticamente a taxa de desemprego para zero', 'O produto nacional bruto cresce à mesma taxa da emissão de moeda', 'A taxa de câmbio permanece fixa independente do banco central'],
    ans: 0,
    exp: 'A TQM é o pilar do monetarismo de Milton Friedman, sintetizado no lema "a inflação é sempre e em qualquer lugar um fenômeno monetário".'
  },
  {
    cat: 'economia',
    q: 'O que diferencia o Produto Interno Bruto (PIB) do Produto Nacional Bruto (PNB)?',
    opts: ['O PIB mede a renda gerada DENTRO das fronteiras geográficas do país; o PNB mede a renda pertencente aos RESIDENTES do país (PNB = PIB + Renda Enviada ao Exterior - Renda Recebida do Exterior)', 'O PIB inclui a produção agrícola e o PNB inclui apenas a indústria', 'O PNB é calculado exclusivamente em Dólares e o PIB em moeda local', 'O PIB desconta a inflação e o PNB é mantido em termos nominais brutos'],
    ans: 0,
    exp: 'O PNB considera a nacionalidade dos fatores de produção: liquida o saldo de remessas e recebimentos de renda de capital e trabalho com o exterior.'
  },
  {
    cat: 'economia',
    q: 'O conceito de "Custo de Oportunidade" na teoria econômica representa:',
    opts: ['O valor da melhor alternativa sacrificada ou renunciada ao se fazer uma escolha econômica', 'O preço de compra com desconto ofertado em liquidações de estoque', 'O custo total de transporte de mercadorias entre dois portos', 'O imposto pago ao governo pela abertura de uma empresa'],
    ans: 0,
    exp: 'Como os recursos são escassos, escolher aplicar tempo ou capital em uma opção implica abrir mão dos benefícios que seriam gerados pela segunda melhor opção disponível.'
  },
  {
    cat: 'economia',
    q: 'A "Inflexibilidade Descendente de Salários" (Sticky Wages) na teoria Keynesiana explica por que:',
    opts: ['Salários nominais não se reajustam rapidamente para baixo em recessões, impedindo a autorregulação rápida do mercado de trabalho e gerando desemprego involuntário', 'Os salários sobem automaticamente 10% todos os meses em países emergentes', 'As empresas preferem demitir diretores a demitir operários não-qualificados', 'Os sindicatos aceitam reduções salariais sem protestos trabalhistas'],
    ans: 0,
    exp: 'Contratos de trabalho, salário mínimo e resistência psicológica impedem que salários nominais caiam em recessões para limpar o mercado, convertendo choques de demanda em desemprego.'
  },
  {
    cat: 'economia',
    q: 'Na gestão de carteiras de investimentos, o "Modelo CAPM" (Capital Asset Pricing Model) calcula o retorno esperado de um ativo em função de qual medida de risco sistemático?',
    opts: ['Beta (β), que mede a sensibilidade dos retornos do ativo às variações do mercado como um todo', 'Desvio padrão total do balanço contábil da empresa', 'Duração média da dívida emitida em debêntures', 'Coeficiente de volatilidade histórica do Dólar'],
    ans: 0,
    exp: 'O CAPM estabelece que o risco não-diversificável (risco de mercado) medido pelo Beta determina o prêmio de risco exigido pelo investidor (E(R) = Rf + β · [E(Rm) - Rf]).'
  },
  {
    cat: 'economia',
    q: 'O paradoxo da "Paridade do Poder de Compra" (PPC / Purchasing Power Parity) baseado na Lei do Preço Único afirma que no longo prazo a taxa de câmbio entre duas moedas deve:',
    opts: ['Igualar o preço de uma cesta idêntica de bens e serviços consumida em ambos os países', 'Permanecer fixa na razão de 1 para 1 em todas as nações', 'Flutuar em conformidade exata com a taxa de juros do FMI', 'Ser determinada pelo valor das reservas de petróleo bruto dos países'],
    ans: 0,
    exp: 'A PPC defende que se um bem custa $10 nos EUA e R$50 no Brasil, a taxa de câmbio teórica de equilíbrio de longo prazo deveria ser de 5 Reais por Dólar.'
  },
  {
    cat: 'economia',
    q: 'Na microeconomia da produção, a "Taxa Marginal de Substituição Técnica" (TMST) entre dois fatores de produção (Trabalho K e Capital L) representa:',
    opts: ['A quantidade de Capital que pode ser reduzida ao se adicionar uma unidade de Trabalho, mantendo o nível total de produção constante (ao longo da mesma Isoquanta)', 'O valor pago em dividendos aos acionistas da fábrica', 'A velocidade de substituição de máquinas antigas por novas', 'A taxa de depreciação anual dos equipamentos de escritório'],
    ans: 0,
    exp: 'A TMST mede a inclinação da isoquanta de produção e reflete a razão entre os produtos marginais dos fatores (TMST = PMgL / PMgK).'
  },
  {
    cat: 'economia',
    q: 'A "Operação de Mercado Aberto" (Open Market) do Banco Central consiste na:',
    opts: ['Compra e venda de títulos públicos no mercado financeiro para controlar a quantidade de moeda (liquidez) e a taxa de juros de curto prazo', 'Abertura de agências bancárias estatais em cidades do interior', 'Fiscalização do cumprimento do horário de funcionamento dos bancos', 'Auditoria das demonstrações financeiras das empresas listadas na Bolsa'],
    ans: 0,
    exp: 'Ao comprar títulos públicos, o Banco Central injeta moeda no sistema e reduz a taxa de juros; ao vender títulos, enxuga a liquidez e eleva os juros.'
  },
  {
    cat: 'economia',
    q: 'A "Curva de Kuznets" hipotetizou que ao longo do processo de desenvolvimento econômico de um país, a desigualdade de renda:',
    opts: ['Inicialmente aumenta nos estágios iniciais de industrialização e posteriormente diminui nos estágios avançados (formato de U invertido)', 'Cai continuamente a zero desde o primeiro ano de crescimento', 'Permanece exatamente constante sem qualquer alteração histórica', 'Aumenta exponencialmente de forma irreversível até o colapso estatal'],
    ans: 0,
    exp: 'Simon Kuznets sugeriu que a migração do setor agrícola tradicional para o setor industrial urbano amplia a desigualdade inicial, que cai à medida que a economia se desenvolve.'
  },
  {
    cat: 'economia',
    q: 'Na teoria das finanças públicas, um "Bem Público Puro" possui duas características centrais:',
    opts: ['Não-Rivalidade no consumo e Não-Excludibilidade no acesso', 'Preço elevado no mercado e venda restrita a governos', 'Produção exclusiva por cooperativas agrárias privadas', 'Isenção total de impostos estaduais e federais'],
    ans: 0,
    exp: 'Um bem público (ex: iluminação pública ou defesa nacional) permite que o consumo por uma pessoa não reduza a disponibilidade para outros (não-rival) e é impossível impedir o uso por não-pagadores (não-excludente).'
  },
  {
    cat: 'economia',
    q: 'O problema do "Pegador Carona" (Free-Rider Problem) em bens públicos surge porque:',
    opts: ['Como é impossível excluir não-pagadores do benefício do bem público, os indivíduos têm incentivo para não pagar pelo bem, levando à sua subprovisão pelo mercado privado', 'Os motoristas de ônibus recusam passageiros idosos sem passe livre', 'As empresas privadas cobram preços abusivos pelo transporte público', 'Os governos proíbem o investimento estrangeiro em infraestrutura'],
    ans: 0,
    exp: 'Devido ao comportamento de free-rider, o mercado livre falha em ofertar a quantidade socialmente ótima de bens públicos, justificando o financiamento via tributação coercitiva.'
  },
  {
    cat: 'economia',
    q: 'A "Teoria das Expectativas Racionais" introduzida por Robert Lucas no debate macroeconômico afirma que os agentes econômicos:',
    opts: ['Formam suas expectativas utilizando eficientemente toda a informação disponível, não cometendo erros sistemáticos ou previsíveis de previsão', 'Tomam decisões baseadas exclusivamente em eventos ocorridos há mais de 50 anos', 'Cometem sempre os mesmos erros em todas as decisões econômicas', 'Ignoram completamente as mudanças nas políticas do Banco Central'],
    ans: 0,
    exp: 'Lucas revolucionou a macroeconomia mostrando que políticas econômicas previsíveis são antecipadas pelos agentes, neutralizando seus efeitos sobre o produto real (Crítica de Lucas).'
  },
  {
    cat: 'economia',
    q: 'O que mede o "Índice de Herfindahl-Hirschman" (HHI) em defesa da concorrência e análise de fusões de empresas?',
    opts: ['O grau de concentração de mercado de um setor econômico, somando os quadrados das participações de mercado (market shares) de todas as empresas', 'A produtividade marginal do fator trabalho em indústrias pesadas', 'O valor residual dos ativos intangíveis de uma multinacional', 'A taxa de juros real efetiva do crédito consignado'],
    ans: 0,
    exp: 'O HHI varia de próximo de 0 (concorrência perfeita) até 10.000 (monopólio puro); órgãos antitruste usam o HHI para avaliar o impacto de fusões na concentração de mercado.'
  },
  {
    cat: 'economia',
    q: 'A "Taxa de Desemprego Natural" (ou NAIRU - Non-Accelerating Inflation Rate of Unemployment) é definida como:',
    opts: ['A taxa de desemprego de equilíbrio de longo prazo que não gera pressões aceleratórias sobre a taxa de inflação', 'A taxa de desemprego quando o país está em guerra civil', 'A porcentagem de trabalhadores informais sem carteira assinada', 'A quantidade de jovens que procuram o primeiro emprego'],
    ans: 0,
    exp: 'A NAIRU reflete o desemprego estrutural e friccional da economia; se a taxa efetiva cair abaixo da NAIRU, a escassez de mão de obra acelera a inflação.'
  },
  {
    cat: 'economia',
    q: 'O modelo de determinação da taxa de câmbio por "Overshooting" desenvolvido por Rudi Dornbusch explica por que:',
    opts: ['A taxa de câmbio nominal sofre uma reação exagerada e volatilidade no curto prazo após um choque monetário devido ao ajustamento lento (rigidez) dos preços de bens e serviços', 'As moedas de países emergentes nunca desvalorizam frente ao Dólar', 'A taxa de juros nominal é sempre igual à taxa de inflação passada', 'Os bancos centrais não conseguem acumular reservas internacionais'],
    ans: 0,
    exp: 'Dornbusch provou que a velocidade rápida de ajuste dos mercados financeiros frente à lentidão do mercado de bens força o câmbio a "ultrapassar" seu nível de equilíbrio de longo prazo para manter a paridade não-coberta de juros.'
  },
  {
    cat: 'economia',
    q: 'O que é a "Perda de Peso Morto" (Deadweight Loss) provocada pela incidência de um imposto sobre um mercado competitivo?',
    opts: ['A redução no bem-estar total (soma do excedente do consumidor e do produtor) que é destruída e não é capturada como arrecadação pelo governo', 'A quantidade de mercadorias estragadas durante o transporte rodoviário', 'A taxa cobrada por bancos para transferências internacionais', 'O prejuízo contábil registrado por empresas estatais deficitárias'],
    ans: 0,
    exp: 'O imposto altera os preços relativos e reduz o volume de transações eficientes no mercado, gerando uma ineficiência econômica alocativa pura (peso morto).'
  },
  {
    cat: 'economia',
    q: 'O conceito de "Monopólio Natural" ocorre quando:',
    opts: ['Uma única empresa consegue ofertar o produto para todo o mercado a um custo menor do que se houvesse duas ou mais empresas, devido a economias de escala substanciais e altos custos fixos (ex: redes de água/energia)', 'O governo concede uma patente exclusiva de 100 anos para um produto alimentar', 'Duas empresas se fundem para eliminar a concorrência de preços', 'Uma empresa compra todos os pontos comerciais do centro da cidade'],
    ans: 0,
    exp: 'Monopólios naturais possuem custos médios decrescentes na faixa relevante de demanda devido a elevados investimentos em infraestrutura (ex: redes elétricas ou saneamento), exigindo regulação pública.'
  }
];
