import {
  AlertTriangle,
  CheckCircle2,
  FileArchive,
  List,
  Pencil,
  Search,
  ShieldCheck,
  Target,
  TerminalSquare,
  Trash2,
  UserPlus,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, ConceptCard, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const firstStruct = `#include <stdio.h>

struct Produto {
    int codigo;
    char nome[50];
    float preco;
    int estoque;
};

int main(void) {
    struct Produto produto;

    produto.codigo = 101;
    produto.preco = 149.90f;
    produto.estoque = 8;

    printf("Codigo: %d\\n", produto.codigo);
    printf("Preco: R$ %.2f\\n", produto.preco);
    printf("Estoque: %d unidade(s)\\n", produto.estoque);
    return 0;
}`;

const typedefStruct = `#include <stdio.h>

typedef struct {
    int matricula;
    char nome[60];
    float media;
} Aluno;

int main(void) {
    Aluno aluno = {202601, "Marina Alves", 8.5f};

    printf("Matricula: %d\\n", aluno.matricula);
    printf("Nome: %s\\n", aluno.nome);
    printf("Media: %.1f\\n", aluno.media);
    return 0;
}`;

const structInitializers = `#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
    int estoque;
} Produto;

int main(void) {
    Produto teclado = {1, "Teclado mecanico", 249.90f, 12};
    Produto mouse = {
        .id = 2,
        .nome = "Mouse gamer",
        .preco = 129.50f,
        .estoque = 20
    };

    printf("%d | %s | R$ %.2f | %d un.\\n",
           teclado.id, teclado.nome, teclado.preco, teclado.estoque);
    printf("%d | %s | R$ %.2f | %d un.\\n",
           mouse.id, mouse.nome, mouse.preco, mouse.estoque);
    return 0;
}`;

const readProduct = `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[60];
    float preco;
    int estoque;
} Produto;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);

int main(void) {
    Produto produto;

    printf("Codigo: ");
    scanf("%d", &produto.id);
    limparEntrada();

    printf("Nome do produto: ");
    lerTexto(produto.nome, 60);

    printf("Preco: R$ ");
    scanf("%f", &produto.preco);
    printf("Estoque: ");
    scanf("%d", &produto.estoque);

    printf("\\n=== PRODUTO CADASTRADO ===\\n");
    printf("%d | %s | R$ %.2f | %d un.\\n",
           produto.id, produto.nome, produto.preco, produto.estoque);
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\\n' && caractere != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\\n")] = '\\0';
}`;

const structFunctions = `#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

void exibirProduto(Produto produto);
float calcularValorComDesconto(Produto produto, float percentual);

int main(void) {
    Produto produto = {10, "Headset", 200.0f};

    exibirProduto(produto);
    printf("Com 15%% de desconto: R$ %.2f\\n",
           calcularValorComDesconto(produto, 15.0f));
    return 0;
}

void exibirProduto(Produto produto) {
    printf("%d | %s | R$ %.2f\\n",
           produto.id, produto.nome, produto.preco);
}

float calcularValorComDesconto(Produto produto, float percentual) {
    return produto.preco * (1.0f - percentual / 100.0f);
}`;

const returnStruct = `#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

Produto aplicarDesconto(Produto produto, float percentual);

int main(void) {
    Produto original = {5, "Webcam", 300.0f};
    Produto promocional;

    promocional = aplicarDesconto(original, 10.0f);

    printf("Preco original: R$ %.2f\\n", original.preco);
    printf("Preco promocional: R$ %.2f\\n", promocional.preco);
    return 0;
}

Produto aplicarDesconto(Produto produto, float percentual) {
    produto.preco *= 1.0f - percentual / 100.0f;
    return produto;
}`;

const structVector = `#include <stdio.h>

#define QUANTIDADE 3

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

int main(void) {
    Produto produtos[QUANTIDADE] = {
        {1, "Teclado", 180.0f},
        {2, "Mouse", 90.0f},
        {3, "Headset", 220.0f}
    };
    int i;

    for (i = 0; i < QUANTIDADE; i++) {
        printf("%d | %-12s | R$ %7.2f\\n",
               produtos[i].id,
               produtos[i].nome,
               produtos[i].preco);
    }
    return 0;
}`;

const controlledRegistration = `#include <stdio.h>
#include <string.h>

#define LIMITE 5

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

void limparEntrada(void);

int main(void) {
    Produto produtos[LIMITE];
    int quantidade = 0;
    char continuar;

    do {
        if (quantidade == LIMITE) {
            printf("Limite de cadastros atingido.\\n");
            break;
        }

        printf("Codigo: ");
        scanf("%d", &produtos[quantidade].id);
        limparEntrada();

        printf("Nome: ");
        fgets(produtos[quantidade].nome, 50, stdin);
        produtos[quantidade].nome[
            strcspn(produtos[quantidade].nome, "\\n")
        ] = '\\0';

        printf("Preco: R$ ");
        scanf("%f", &produtos[quantidade].preco);
        quantidade++;

        printf("Cadastrar outro? (S/N): ");
        scanf(" %c", &continuar);
    } while (continuar == 'S' || continuar == 's');

    printf("Quantidade cadastrada: %d\\n", quantidade);
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\\n' && caractere != EOF) {
    }
}`;

const organizedListing = `#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
    int estoque;
} Produto;

void listarProdutos(const Produto produtos[], int quantidade);

int main(void) {
    Produto produtos[3] = {
        {1, "Teclado", 180.0f, 8},
        {2, "Mouse", 90.0f, 15},
        {3, "Headset", 220.0f, 4}
    };

    listarProdutos(produtos, 3);
    return 0;
}

void listarProdutos(const Produto produtos[], int quantidade) {
    int i;

    if (quantidade == 0) {
        printf("Nenhum produto cadastrado.\\n");
        return;
    }

    printf("ID | NOME                 | PRECO      | ESTOQUE\\n");
    printf("------------------------------------------------\\n");
    for (i = 0; i < quantidade; i++) {
        printf("%2d | %-20s | R$ %7.2f | %d\\n",
               produtos[i].id, produtos[i].nome,
               produtos[i].preco, produtos[i].estoque);
    }
}`;

const searchById = `#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

int buscarPorId(const Produto produtos[], int quantidade, int id);

int main(void) {
    Produto produtos[3] = {
        {101, "Teclado", 180.0f},
        {205, "Mouse", 90.0f},
        {310, "Headset", 220.0f}
    };
    int id, indice;

    printf("ID procurado: ");
    scanf("%d", &id);

    indice = buscarPorId(produtos, 3, id);

    if (indice == -1) {
        printf("Produto nao encontrado.\\n");
    } else {
        printf("Encontrado: %s | R$ %.2f\\n",
               produtos[indice].nome, produtos[indice].preco);
    }
    return 0;
}

int buscarPorId(const Produto produtos[], int quantidade, int id) {
    int i;
    for (i = 0; i < quantidade; i++) {
        if (produtos[i].id == id) {
            return i;
        }
    }
    return -1;
}`;

const searchByName = `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[50];
} Produto;

int main(void) {
    Produto produtos[3] = {
        {1, "Teclado mecanico"},
        {2, "Mouse gamer"},
        {3, "Headset"}
    };
    char busca[50];
    int i, encontrado = -1;

    printf("Nome exato do produto: ");
    fgets(busca, sizeof(busca), stdin);
    busca[strcspn(busca, "\\n")] = '\\0';

    for (i = 0; i < 3; i++) {
        if (strcmp(produtos[i].nome, busca) == 0) {
            encontrado = i;
            break;
        }
    }

    if (encontrado == -1) {
        printf("Produto nao encontrado.\\n");
    } else {
        printf("ID encontrado: %d\\n", produtos[encontrado].id);
    }
    return 0;
}`;

const updateRecord = `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

int buscarPorId(const Produto produtos[], int quantidade, int id);
void limparEntrada(void);

int main(void) {
    Produto produtos[3] = {
        {1, "Teclado", 180.0f},
        {2, "Mouse", 90.0f},
        {3, "Headset", 220.0f}
    };
    int id, indice;

    printf("ID que deseja atualizar: ");
    scanf("%d", &id);
    limparEntrada();

    indice = buscarPorId(produtos, 3, id);
    if (indice == -1) {
        printf("Produto nao encontrado.\\n");
    } else {
        printf("Novo nome: ");
        fgets(produtos[indice].nome, 50, stdin);
        produtos[indice].nome[
            strcspn(produtos[indice].nome, "\\n")
        ] = '\\0';

        printf("Novo preco: R$ ");
        scanf("%f", &produtos[indice].preco);
        printf("Produto atualizado: %s | R$ %.2f\\n",
               produtos[indice].nome, produtos[indice].preco);
    }
    return 0;
}

int buscarPorId(const Produto produtos[], int quantidade, int id) {
    int i;
    for (i = 0; i < quantidade; i++) {
        if (produtos[i].id == id) return i;
    }
    return -1;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\\n' && caractere != EOF) {
    }
}`;

const deleteRecord = `#include <stdio.h>

typedef struct {
    int id;
    char nome[40];
} Produto;

int buscarPorId(const Produto produtos[], int quantidade, int id);
int excluirProduto(Produto produtos[], int quantidade, int id);

int main(void) {
    Produto produtos[4] = {
        {1, "Teclado"}, {2, "Mouse"},
        {3, "Headset"}, {4, "Webcam"}
    };
    int quantidade = 4;
    int id, i;

    printf("ID que deseja excluir: ");
    scanf("%d", &id);

    quantidade = excluirProduto(produtos, quantidade, id);

    printf("\\nRegistros restantes:\\n");
    for (i = 0; i < quantidade; i++) {
        printf("%d | %s\\n", produtos[i].id, produtos[i].nome);
    }
    return 0;
}

int buscarPorId(const Produto produtos[], int quantidade, int id) {
    int i;
    for (i = 0; i < quantidade; i++) {
        if (produtos[i].id == id) return i;
    }
    return -1;
}

int excluirProduto(Produto produtos[], int quantidade, int id) {
    int indice = buscarPorId(produtos, quantidade, id);
    int i;

    if (indice == -1) {
        printf("Produto nao encontrado.\\n");
        return quantidade;
    }

    for (i = indice; i < quantidade - 1; i++) {
        produtos[i] = produtos[i + 1];
    }

    printf("Produto excluido.\\n");
    return quantidade - 1;
}`;

const memoryCrud = `#include <stdio.h>
#include <string.h>

#define LIMITE 10

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);
void exibirMenu(void);
int buscarPorId(const Contato contatos[], int quantidade, int id);
int cadastrar(Contato contatos[], int quantidade);
void listar(const Contato contatos[], int quantidade);
void pesquisar(const Contato contatos[], int quantidade);
void atualizar(Contato contatos[], int quantidade);
int excluir(Contato contatos[], int quantidade);

int main(void) {
    Contato contatos[LIMITE];
    int quantidade = 0;
    int opcao;

    do {
        exibirMenu();
        scanf("%d", &opcao);

        switch (opcao) {
            case 1: quantidade = cadastrar(contatos, quantidade); break;
            case 2: listar(contatos, quantidade); break;
            case 3: pesquisar(contatos, quantidade); break;
            case 4: atualizar(contatos, quantidade); break;
            case 5: quantidade = excluir(contatos, quantidade); break;
            case 0: printf("Programa encerrado.\\n"); break;
            default: printf("Opcao invalida.\\n");
        }
    } while (opcao != 0);
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\\n' && caractere != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\\n")] = '\\0';
}

void exibirMenu(void) {
    printf("\\n=== AGENDA LEVELUP ===\\n");
    printf("1 - Cadastrar\\n2 - Listar\\n3 - Pesquisar\\n");
    printf("4 - Atualizar\\n5 - Excluir\\n0 - Sair\\nOpcao: ");
}

int buscarPorId(const Contato contatos[], int quantidade, int id) {
    int i;
    for (i = 0; i < quantidade; i++) {
        if (contatos[i].id == id) return i;
    }
    return -1;
}

int cadastrar(Contato contatos[], int quantidade) {
    if (quantidade == LIMITE) {
        printf("Agenda cheia.\\n");
        return quantidade;
    }

    printf("ID: ");
    scanf("%d", &contatos[quantidade].id);
    limparEntrada();

    if (buscarPorId(contatos, quantidade, contatos[quantidade].id) != -1) {
        printf("Esse ID ja esta em uso.\\n");
        return quantidade;
    }

    printf("Nome: ");
    lerTexto(contatos[quantidade].nome, 60);
    printf("Telefone: ");
    lerTexto(contatos[quantidade].telefone, 25);
    printf("Contato cadastrado.\\n");
    return quantidade + 1;
}

void listar(const Contato contatos[], int quantidade) {
    int i;
    if (quantidade == 0) {
        printf("Agenda vazia.\\n");
        return;
    }
    for (i = 0; i < quantidade; i++) {
        printf("%d | %-25s | %s\\n", contatos[i].id,
               contatos[i].nome, contatos[i].telefone);
    }
}

void pesquisar(const Contato contatos[], int quantidade) {
    int id, indice;
    printf("ID procurado: ");
    scanf("%d", &id);
    indice = buscarPorId(contatos, quantidade, id);
    if (indice == -1) printf("Contato nao encontrado.\\n");
    else printf("%s | %s\\n", contatos[indice].nome,
                contatos[indice].telefone);
}

void atualizar(Contato contatos[], int quantidade) {
    int id, indice;
    printf("ID que deseja atualizar: ");
    scanf("%d", &id);
    limparEntrada();
    indice = buscarPorId(contatos, quantidade, id);
    if (indice == -1) {
        printf("Contato nao encontrado.\\n");
        return;
    }
    printf("Novo nome: ");
    lerTexto(contatos[indice].nome, 60);
    printf("Novo telefone: ");
    lerTexto(contatos[indice].telefone, 25);
    printf("Contato atualizado.\\n");
}

int excluir(Contato contatos[], int quantidade) {
    int id, indice, i;
    printf("ID que deseja excluir: ");
    scanf("%d", &id);
    indice = buscarPorId(contatos, quantidade, id);
    if (indice == -1) {
        printf("Contato nao encontrado.\\n");
        return quantidade;
    }
    for (i = indice; i < quantidade - 1; i++) {
        contatos[i] = contatos[i + 1];
    }
    printf("Contato excluido.\\n");
    return quantidade - 1;
}`;

const inventoryChallenge = `#include <stdio.h>

#define TAMANHO 4

typedef struct {
    int id;
    char nome[40];
    float preco;
    int estoque;
} Produto;

int main(void) {
    Produto produtos[TAMANHO] = {
        {1, "Teclado", 180.0f, 8},
        {2, "Mouse", 90.0f, 0},
        {3, "Headset", 220.0f, 4},
        {4, "Webcam", 250.0f, 0}
    };
    float valorTotal = 0.0f;
    int semEstoque = 0;
    int i;

    for (i = 0; i < TAMANHO; i++) {
        valorTotal += produtos[i].preco * produtos[i].estoque;
        if (produtos[i].estoque == 0) {
            printf("Sem estoque: %s\\n", produtos[i].nome);
            semEstoque++;
        }
    }

    printf("Valor total em estoque: R$ %.2f\\n", valorTotal);
    printf("Produtos esgotados: %d\\n", semEstoque);
    return 0;
}`;

export function TrackSeven({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner"><div><p className="section-kicker">Materiais da trilha</p><strong>Quinze programas em C sobre registros e cadastros</strong><span>Exemplos completos, operações de CRUD e desafios preparados para o Dev-C++.</span></div><a className="button-primary" href="/downloads/trilha-07/trilha-07-codigos.zip" download><FileArchive /> Baixar todos os códigos</a></div>
      <div className="devcpp-banner"><TerminalSquare /><div><strong>C puro e dados em memória</strong><p>Os registros desta trilha desaparecem quando o programa fecha. A persistência em arquivo será o assunto da Trilha 08.</p></div></div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>Até aqui usamos vetores para guardar vários valores do mesmo tipo. Mas um produto real possui dados diferentes e relacionados: código inteiro, nome textual, preço decimal e quantidade em estoque. Um <strong>registro</strong> reúne esses campos em uma única entidade.</p>
        <div className="record-card"><div><small>PRODUTO</small><strong>Teclado mecânico</strong></div><dl><div><dt>código</dt><dd>101</dd></div><div><dt>preço</dt><dd>R$ 249,90</dd></div><div><dt>estoque</dt><dd>12</dd></div></dl></div>
        <div className="before-after-code"><div><small>DADOS SOLTOS</small><strong>codigo, nome, preco, estoque</strong><p>Variáveis separadas sem uma representação explícita do produto.</p></div><div><small>REGISTRO</small><strong>produto</strong><p>Todos os campos pertencem à mesma estrutura.</p></div></div>
        <Activity title="Descubra os campos" level="guiada"><p>Quais campos e tipos seriam necessários para representar um aluno?</p><Reveal title="Revelar possibilidade"><p><code>int matricula</code>, <code>char nome[60]</code>, <code>float media</code> e talvez <code>char turma</code>.</p></Reveal></Activity>
        <Activity title="Modele um jogo" level="pratica"><p>Planeje os campos de um personagem: identificador, nome, energia, pontuação e nível.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>A palavra <code>struct</code> cria um novo formato de registro. Primeiro descrevemos os campos; depois declaramos variáveis desse formato. Cada variável possui sua própria cópia dos campos.</p>
        <CodeBlock code={firstStruct} filename="primeira-struct.c" downloadUrl="/downloads/trilha-07/primeira-struct.c" />
        <div className="struct-anatomy"><span>struct Produto</span><strong>{`{ campos do registro }`}</strong><em>;</em></div>
        <p>Na primeira forma, declaramos variáveis como <code>struct Produto produto;</code>. O recurso <code>typedef</code> cria um apelido e permite escrever apenas <code>Aluno aluno;</code>.</p>
        <CodeBlock code={typedefStruct} filename="struct-com-typedef.c" downloadUrl="/downloads/trilha-07/struct-com-typedef.c" />
        <div className="concept-grid"><ConceptCard label="MODELO" title="typedef struct { ... } Aluno" tone="blue">Descreve quais campos um aluno possui.</ConceptCard><ConceptCard label="VARIÁVEL" title="Aluno aluno" tone="amber">Reserva um registro baseado no modelo.</ConceptCard><ConceptCard label="ACESSO" title="aluno.media" tone="slate">O ponto seleciona um campo do registro.</ConceptCard></div>
        <Activity title="Crie a estrutura Livro" level="pratica"><p>Use campos para código, título, autor, número de páginas e preço.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p>O operador ponto acessa um campo: <code>produto.preco</code>. Podemos atribuir campo por campo ou inicializar todos na declaração. A inicialização designada deixa explícito qual campo recebe cada valor.</p>
        <CodeBlock code={structInitializers} filename="campos-e-inicializacao.c" downloadUrl="/downloads/trilha-07/campos-e-inicializacao.c" />
        <div className="field-path"><div><small>REGISTRO</small><strong>mouse</strong></div><span>.</span><div><small>CAMPO</small><strong>preco</strong></div><span>=</span><div><small>VALOR</small><strong>129.50</strong></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Texto não recebe atribuição comum depois da criação</strong><p>Para alterar um campo textual existente, use leitura direta no vetor ou funções como <code>strcpy</code>, sempre respeitando o tamanho disponível.</p></div></div>
        <Activity title="Inicialize um filme" level="pratica"><p>Crie um registro com id, título, duração em minutos e classificação indicativa. Mostre todos os campos.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>Ao preencher um registro pelo teclado, cada campo utiliza seu especificador. Para nomes completos, usamos <code>fgets</code>. Se um <code>scanf</code> vier antes, removemos os caracteres restantes da entrada antes de ler o texto.</p>
        <CodeBlock code={readProduct} filename="ler-registro-produto.c" downloadUrl="/downloads/trilha-07/ler-registro-produto.c" />
        <div className="input-field-grid"><div><code>%d</code><strong>produto.id</strong></div><div><code>fgets</code><strong>produto.nome</strong></div><div><code>%f</code><strong>produto.preco</strong></div><div><code>%d</code><strong>produto.estoque</strong></div></div>
        <div className="learning-callout"><ShieldCheck /><div><strong>Proteja o tamanho do texto</strong><p>A função recebe o limite 60 porque o campo <code>nome</code> possui 60 posições. O limite precisa acompanhar o tamanho real do campo.</p></div></div>
        <Activity title="Cadastre um aluno" level="pratica"><p>Leia matrícula, nome completo e três notas. Calcule a média e armazene-a no campo correspondente.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p>Uma estrutura pode ser recebida como parâmetro e também devolvida por uma função. Quando enviamos um registro simples por valor, a função recebe uma cópia — assim como aconteceu com variáveis numéricas.</p>
        <CodeBlock code={structFunctions} filename="struct-em-funcoes.c" downloadUrl="/downloads/trilha-07/struct-em-funcoes.c" />
        <CodeBlock code={returnStruct} filename="retornar-struct.c" downloadUrl="/downloads/trilha-07/retornar-struct.c" />
        <div className="copy-visual"><div><small>REGISTRO ORIGINAL</small><strong>R$ 300,00</strong></div><span>cópia →</span><div><small>REGISTRO RETORNADO</small><strong>R$ 270,00</strong></div></div>
        <p>A função altera a cópia e a devolve. Por isso guardamos o resultado em <code>promocional</code>; o registro <code>original</code> continua com o preço anterior.</p>
        <Activity title="Aplique reajuste" level="desafio"><p>Crie uma função que receba um produto e um percentual de aumento, altere a cópia e devolva o registro reajustado.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>Um vetor de estruturas guarda vários registros completos. A expressão <code>produtos[i].preco</code> combina o índice do vetor com o campo do registro localizado naquela posição.</p>
        <CodeBlock code={structVector} filename="vetor-de-struct.c" downloadUrl="/downloads/trilha-07/vetor-de-struct.c" />
        <div className="record-array"><div><small>produtos[0]</small><strong>Teclado</strong><span>id · nome · preço</span></div><div><small>produtos[1]</small><strong>Mouse</strong><span>id · nome · preço</span></div><div><small>produtos[2]</small><strong>Headset</strong><span>id · nome · preço</span></div></div>
        <div className="condition-anatomy"><span>produtos</span><strong>[i]</strong><em>.preco</em></div>
        <Activity title="Calcule o valor do estoque" level="pratica"><p>Adicione o campo estoque e acumule <code>preco * estoque</code> de todos os registros.</p></Activity>
        <Activity title="Encontre o produto mais caro" level="desafio"><p>Guarde o índice do maior preço e use esse índice para mostrar nome e valor.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>Um vetor pode ter capacidade para cinco registros sem estar completamente ocupado. A variável <code>quantidade</code> informa quantas posições realmente possuem dados válidos e aponta também a próxima posição livre.</p>
        <CodeBlock code={controlledRegistration} filename="cadastro-controlado.c" downloadUrl="/downloads/trilha-07/cadastro-controlado.c" />
        <div className="capacity-meter"><div><span>0</span><strong>ocupado</strong></div><div><span>1</span><strong>ocupado</strong></div><div className="next-slot"><span>2</span><strong>próximo</strong></div><div><span>3</span><strong>livre</strong></div><div><span>4</span><strong>livre</strong></div></div>
        <p>Depois de cadastrar em <code>produtos[quantidade]</code>, incrementamos a quantidade. Antes de cada novo cadastro, verificamos se ela já alcançou o limite.</p>
        <Activity title="Simule a quantidade" level="guiada"><p>Começando em zero, indique a posição usada e o novo valor de quantidade após três cadastros.</p><Reveal title="Revelar sequência"><p>Usa posição 0 e vira 1; usa posição 1 e vira 2; usa posição 2 e vira 3. A próxima posição livre é 3.</p></Reveal></Activity>
        <Activity title="Evite código duplicado" level="desafio"><p>Transforme o cadastro em uma função que receba o vetor e a quantidade, e devolva a nova quantidade.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[7]} number="08">
        <p>Listar é percorrer somente as posições válidas, do índice zero até <code>quantidade - 1</code>. Uma função de listagem deve também explicar quando não existe nenhum registro.</p>
        <CodeBlock code={organizedListing} filename="listagem-organizada.c" downloadUrl="/downloads/trilha-07/listagem-organizada.c" />
        <div className="terminal-output"><span><TerminalSquare /> RELATÓRIO</span><code>ID | NOME | PREÇO | ESTOQUE — uma linha para cada registro válido</code></div>
        <p>Os tamanhos dentro do <code>printf</code>, como <code>%-20s</code> e <code>%7.2f</code>, ajudam a alinhar as colunas no terminal.</p>
        <Activity title="Filtre durante a listagem" level="pratica"><p>Mostre somente produtos com estoque maior que zero. Depois conte quantos foram exibidos.</p></Activity>
        <Activity title="Relatório de estoque baixo" level="desafio"><p>Crie uma função que liste apenas os produtos com menos de cinco unidades.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[8]} number="09">
        <p>Pesquisar significa percorrer os registros até que um campo corresponda ao valor procurado. Para números usamos <code>==</code>; para textos completos usamos <code>strcmp</code>.</p>
        <CodeBlock code={searchById} filename="pesquisar-por-id.c" downloadUrl="/downloads/trilha-07/pesquisar-por-id.c" />
        <CodeBlock code={searchByName} filename="pesquisar-por-nome.c" downloadUrl="/downloads/trilha-07/pesquisar-por-nome.c" />
        <div className="search-compare"><div><code>produtos[i].id == id</code><strong>Busca numérica</strong><p>Compara valores inteiros.</p></div><div><code>strcmp(nome, busca) == 0</code><strong>Busca textual exata</strong><p>Compara o conteúdo das strings.</p></div></div>
        <p>Retornar o índice é especialmente útil: ele informa se o registro existe e também onde está, permitindo listar, atualizar ou excluir aquele mesmo registro.</p>
        <Activity title="Pesquise por faixa de preço" level="desafio"><p>Leia preço mínimo e máximo e liste todos os produtos dentro do intervalo.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[9]} number="10">
        <p>Atualizar não cria outro registro. Primeiro localizamos o índice do registro existente; depois substituímos somente os campos desejados naquela posição.</p>
        <CodeBlock code={updateRecord} filename="atualizar-registro.c" downloadUrl="/downloads/trilha-07/atualizar-registro.c" />
        <div className="crud-flow"><div><Search /><strong>1. Localizar</strong><p>Busque pelo identificador único.</p></div><div><Pencil /><strong>2. Editar</strong><p>Leia os novos valores nos mesmos campos.</p></div><div><CheckCircle2 /><strong>3. Confirmar</strong><p>Mostre o registro depois da alteração.</p></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Não altere o registro errado</strong><p>Só realize a leitura dos novos dados quando o índice for diferente de -1. Caso contrário, informe que o cadastro não foi encontrado.</p></div></div>
        <Activity title="Atualização parcial" level="pratica"><p>Permita alterar apenas o estoque, preservando nome e preço.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[10]} number="11">
        <p>Para excluir um elemento de um vetor ocupado sem deixar um buraco, deslocamos cada registro posterior uma posição para a esquerda e diminuímos a quantidade. A capacidade do vetor não muda; apenas o número de posições válidas.</p>
        <CodeBlock code={deleteRecord} filename="excluir-registro.c" downloadUrl="/downloads/trilha-07/excluir-registro.c" />
        <div className="delete-shift"><div><span>0</span><strong>Teclado</strong></div><div className="removed"><span>1</span><strong>Mouse</strong></div><div><span>2 → 1</span><strong>Headset</strong></div><div><span>3 → 2</span><strong>Webcam</strong></div></div>
        <h3 className="lesson-subtitle">Projeto da trilha — Agenda LevelUp em memória</h3>
        <p>O projeto reúne as quatro operações do CRUD: <strong>Create</strong> para cadastrar, <strong>Read</strong> para listar e pesquisar, <strong>Update</strong> para atualizar e <strong>Delete</strong> para excluir.</p>
        <CodeBlock code={memoryCrud} filename="agenda-levelup-memoria.c" downloadUrl="/downloads/trilha-07/agenda-levelup-memoria.c" />
        <div className="crud-cards"><div><UserPlus /><strong>C — Cadastrar</strong></div><div><List /><strong>R — Consultar</strong></div><div><Pencil /><strong>U — Atualizar</strong></div><div><Trash2 /><strong>D — Excluir</strong></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Ainda não existe persistência</strong><p>Ao fechar o programa, os contatos desaparecem porque estão somente na memória. Na Trilha 08, aprenderemos a gravar e recuperar esses registros em arquivos.</p></div></div>
        <Activity title="Plano de testes do CRUD" level="guiada"><ol className="exercise-list"><li>Liste a agenda vazia.</li><li>Cadastre dois contatos com IDs diferentes.</li><li>Tente repetir um ID.</li><li>Pesquise e atualize um contato existente.</li><li>Tente atualizar um ID inexistente.</li><li>Exclua o primeiro contato e liste novamente.</li></ol></Activity>
        <Activity title="Desafio final — Analise um estoque" level="desafio"><p>Use um vetor de produtos para calcular valor total e identificar itens esgotados.</p><Reveal title="Revelar programa completo"><CodeBlock code={inventoryChallenge} filename="desafio-analise-estoque.c" downloadUrl="/downloads/trilha-07/desafio-analise-estoque.c" /></Reveal></Activity>
        <div className="final-checklist"><div><Target /><h3>Checklist de domínio da Trilha 07</h3></div><ul><li><CheckCircle2 /> Sei modelar uma entidade com <code>struct</code>.</li><li><CheckCircle2 /> Acesso campos com o operador ponto.</li><li><CheckCircle2 /> Leio textos e números em um registro.</li><li><CheckCircle2 /> Percorro vetores de estruturas.</li><li><CheckCircle2 /> Uso quantidade para controlar posições válidas.</li><li><CheckCircle2 /> Consigo cadastrar, listar, pesquisar, atualizar e excluir em memória.</li></ul></div>
      </TrailSection>
    </div>
  );
}
