export type Topic = {
  id: string;
  title: string;
  description: string;
};

export type Track = {
  number: string;
  slug: string;
  title: string;
  summary: string;
  topics: Topic[];
};

export const tracks: Track[] = [
  {
    number: "00",
    slug: "preparando-o-ambiente",
    title: "Preparando o ambiente",
    summary: "Conheça a linguagem C, prepare o Dev-C++ e execute seu primeiro programa.",
    topics: [
      { id: "boas-vindas", title: "Boas-vindas", description: "Entenda como a trilha funciona e onde vamos chegar." },
      { id: "programacao-logica", title: "Programação e lógica", description: "Descubra a diferença entre dar instruções e resolver um problema." },
      { id: "linguagem-c", title: "Conheça a linguagem C", description: "Veja por que C continua importante e o que construiremos com ela." },
      { id: "c-nao-cpp", title: "C não é C++", description: "Aprenda a identificar a linguagem usada nos nossos arquivos e exemplos." },
      { id: "dev-cpp", title: "Preparando o Dev-C++", description: "Crie um arquivo .c e confirme a configuração do compilador." },
      { id: "primeiro-programa", title: "Seu primeiro programa", description: "Compile o clássico Olá, mundo! e compreenda cada linha." },
      { id: "erros-comuns", title: "Erros comuns", description: "Reconheça mensagens simples de compilação sem entrar em pânico." },
      { id: "desafio", title: "Desafio da trilha", description: "Personalize a mensagem e teste seu novo programa." },
    ],
  },
  {
    number: "01",
    slug: "algoritmos-e-pensamento-logico",
    title: "Algoritmos e pensamento lógico",
    summary: "Transforme problemas em passos claros usando sequência, pseudocódigo e teste de mesa.",
    topics: topicList(["Entrada, processamento e saída", "Sequência lógica", "Decomposição", "Pseudocódigo", "Fluxogramas", "Teste de mesa", "Do algoritmo ao C"]),
  },
  {
    number: "02",
    slug: "variaveis-tipos-e-entrada",
    title: "Variáveis, tipos e entrada",
    summary: "Armazene informações, faça cálculos e converse com o usuário pelo terminal.",
    topics: topicList(["Variáveis e constantes", "Tipos básicos", "Saída com printf", "Entrada com scanf", "Operadores aritméticos", "Precedência", "Conversão e precisão", "Entrada segura", "Calculadora básica"]),
  },
  {
    number: "03",
    slug: "estruturas-de-decisao",
    title: "Estruturas de decisão",
    summary: "Ensine o programa a escolher caminhos com condições e operadores lógicos.",
    topics: topicList(["Como o programa decide", "Expressões relacionais", "Operadores lógicos", "Decisão com if", "Escolha com if e else", "Vários caminhos com else if", "Decisões aninhadas", "Seleção com switch", "Validação e projeto final"]),
  },
  {
    number: "04",
    slug: "estruturas-de-repeticao",
    title: "Estruturas de repetição",
    summary: "Automatize tarefas com while, do while e for, sem repetir código à mão.",
    topics: topicList(["Por que repetir", "Contadores", "Acumuladores e médias", "Repetição com while", "Sentinelas e validação", "Repetição com do while", "Repetição com for", "Laços aninhados", "break e continue", "Menu contínuo e projeto final"]),
  },
  {
    number: "05",
    slug: "funcoes-e-organizacao",
    title: "Funções e organização",
    summary: "Divida problemas maiores em partes pequenas, legíveis e reutilizáveis.",
    topics: topicList(["Por que usar funções", "Criando e chamando funções", "Protótipos", "Parâmetros", "Retorno de valores", "Procedimentos void", "Passagem por valor e escopo", "Reutilização e decomposição", "Funções de validação", "Refatoração e projeto final"]),
  },
  {
    number: "06",
    slug: "vetores-matrizes-e-textos",
    title: "Vetores, matrizes e textos",
    summary: "Trabalhe com coleções de dados e aprenda como C representa textos.",
    topics: topicList(["Coleções e vetores", "Índices e limites", "Preenchendo e percorrendo", "Busca e análise", "Vetores em funções", "Matrizes", "Percorrendo matrizes", "Caracteres", "Strings em C", "Biblioteca string.h", "Entrada segura e projeto final"]),
  },
  {
    number: "07",
    slug: "estruturas-e-registros",
    title: "Estruturas e registros",
    summary: "Agrupe informações relacionadas com struct e prepare os registros do CRUD.",
    topics: topicList(["O que é um registro", "Criando struct e typedef", "Campos e inicialização", "Leitura segura de registros", "Struct em funções", "Vetores de struct", "Cadastro controlado", "Listagem organizada", "Pesquisa de registros", "Atualização", "Exclusão e CRUD em memória"]),
  },
  {
    number: "08",
    slug: "arquivos-de-texto",
    title: "Arquivos de texto",
    summary: "Faça os dados sobreviverem ao fechamento do programa usando arquivos .txt.",
    topics: topicList(["Memória e persistência", "O tipo FILE e o ciclo do arquivo", "Abrindo, fechando e tratando erros", "Modos r, w e a", "Gravando texto e dados formatados", "Lendo caracteres e linhas", "Registros separados por delimitador", "Convertendo linhas em struct", "Cadastro, listagem e pesquisa", "Atualização com arquivo temporário", "Exclusão segura e preparação para o CRUD"]),
  },
  {
    number: "09",
    slug: "primeiro-projeto-crud",
    title: "Primeiro projeto: CRUD",
    summary: "Reúna tudo em um sistema completo de cadastro salvo em arquivo de texto.",
    topics: topicList(["Planejamento e requisitos", "Modelo do contato e formato do arquivo", "Entrada segura e funções utilitárias", "Menu principal e organização", "Cadastro com ID único", "Listagem persistente", "Pesquisa de contatos", "Atualização protegida", "Exclusão protegida", "Backup e diagnóstico", "Plano de testes", "Agenda LevelUp completa"]),
  },
  {
    number: "10",
    slug: "evoluindo-o-crud",
    title: "Evoluindo o CRUD",
    summary: "Transforme a Agenda LevelUp em uma versão 2.0 modular, inteligente e mais segura.",
    topics: topicList(["Da versão 1.0 para a 2.0", "Pesquisa por parte do nome", "Busca sem diferenciar maiúsculas", "Ordenação alfabética", "Atualização parcial", "Confirmação antes de excluir", "Restauração de backup", "Relatórios e estatísticas", "Por que dividir o projeto", "Arquivos .h e .c", "Projeto com vários arquivos no Dev-C++", "Agenda LevelUp 2.0"]),
  },
];

function topicList(titles: string[]): Topic[] {
  return titles.map((title, index) => ({
    id: slugify(title),
    title,
    description: `Etapa ${index + 1} da trilha: ${title.toLowerCase()}.`,
  }));
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function findTrack(slug: string) {
  return tracks.find((track) => track.slug === slug);
}
