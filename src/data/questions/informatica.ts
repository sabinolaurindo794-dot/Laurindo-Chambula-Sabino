import { Question } from '../../types';

export const INFORMATICA_QUESTIONS: Question[] = [
  {
    cat: 'informatica',
    q: 'Qual componente do computador é considerado o "cérebro" do sistema, encarregado de executar instruções e processar dados?',
    opts: ['CPU (Processador)', 'Memória RAM', 'Disco Rígido (HD/SSD)', 'Placa Mãe'],
    ans: 0,
    exp: 'A CPU (Unidade Central de Processamento) realiza o processamento aritmético e lógico do computador.'
  },
  {
    cat: 'informatica',
    q: 'A memória RAM é classificada como uma memória:',
    opts: ['Volátil e de acesso rápido', 'Não volátil e de armazenamento permanente', 'Secundária de backup', 'Apenas de leitura (ROM)'],
    ans: 0,
    exp: 'A memória RAM perde todos os seus dados quando o computador é desligado (volátil).'
  },
  {
    cat: 'informatica',
    q: 'Qual protocolo de rede é responsável pela transferência segura e criptografada de páginas Web?',
    opts: ['HTTPS', 'HTTP', 'FTP', 'SMTP'],
    ans: 0,
    exp: 'O HTTPS utiliza criptografia SSL/TLS para garantir a segurança no tráfego de dados do navegador.'
  },
  {
    cat: 'informatica',
    q: 'No Microsoft Excel / LibreOffice Calc, qual função calcula a soma de um intervalo de células?',
    opts: ['=SOMA()', '=SOMAR()', '=TOTAL()', '=CALCULAR()'],
    ans: 0,
    exp: 'A função =SOMA(A1:A10) adiciona todos os valores numéricos no intervalo especificado.'
  },
  {
    cat: 'informatica',
    q: 'O que caracteriza um malware do tipo "Phishing"?',
    opts: ['Enganação por e-mails ou sites falsos para roubar senhas e dados bancários', 'Vírus que bloqueia arquivos e exige resgate em bitcoins', 'Programa que acelera a velocidade da conexão de rede', 'Driver desatualizado da placa de vídeo'],
    ans: 0,
    exp: 'Phishing utiliza técnicas de engenharia social para fraudar usuários e extrair informações confidenciais.'
  },
  {
    cat: 'informatica',
    q: 'Qual atalho do teclado no Windows é utilizado universalmente para copiar um item selecionado?',
    opts: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + Z'],
    ans: 0,
    exp: 'Ctrl + C é o comando padrão para copiar textos, arquivos ou dados para a área de transferência.'
  },
  {
    cat: 'informatica',
    q: 'O que significa a sigla SSD na arquitetura de hardware?',
    opts: ['Solid State Drive (Disco de Estado Sólido)', 'Super Speed Data', 'System Storage Device', 'Serial Software Disk'],
    ans: 0,
    exp: 'O SSD utiliza memória flash para armazenar dados com velocidades muito superiores aos HDs mecânicos.'
  },
  {
    cat: 'informatica',
    q: 'Qual das opções abaixo é um sistema operacional de código aberto (Open Source)?',
    opts: ['Linux', 'Windows 11', 'macOS', 'iOS'],
    ans: 0,
    exp: 'O Linux é o sistema operacional de código aberto mais famoso e utilizado do mundo.'
  },
  {
    cat: 'informatica',
    q: 'O protocolo SMTP em redes de computadores é utilizado para:',
    opts: ['Envio de mensagens de e-mail', 'Recebimento de e-mails via POP3', 'Navegação em sites com imagens', 'Atribuição de endereços IP dinâmicos'],
    ans: 0,
    exp: 'SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para envio de e-mails na Internet.'
  },
  {
    cat: 'informatica',
    q: 'Em planilhas do Excel, a referência relativa $A$1 indica:',
    opts: ['Uma referência absoluta de célula (coluna A e linha 1 fixas)', 'Uma célula que muda quando copiada', 'Um erro de sintaxe de fórmula', 'A soma de todas as células da coluna A'],
    ans: 0,
    exp: 'O símbolo de cifrão ($) trava a coluna e a linha, tornando a referência absoluta ao arrastar fórmulas.'
  }
];
