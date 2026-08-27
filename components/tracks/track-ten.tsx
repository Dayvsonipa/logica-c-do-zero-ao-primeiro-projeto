import {
  AlertTriangle,
  ArrowDownAZ,
  Boxes,
  CheckCircle2,
  FileArchive,
  FileCode2,
  FileCog,
  FileInput,
  FileOutput,
  FolderGit2,
  Gauge,
  History,
  Layers3,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const partialSearch = `#include <stdio.h>
#include <string.h>

int main(void) {
    char nomes[4][40] = {
        "Ana Souza", "Bruno Lima",
        "Mariana Alves", "Carlos Santos"
    };
    char busca[40];
    int encontrados = 0;
    int i;

    printf("Parte do nome: ");
    fgets(busca, sizeof(busca), stdin);
    busca[strcspn(busca, "\n")] = '\0';

    for (i = 0; i < 4; i++) {
        if (strstr(nomes[i], busca) != NULL) {
            printf("Encontrado: %s\n", nomes[i]);
            encontrados++;
        }
    }

    printf("Total: %d resultado(s).\n", encontrados);
    return 0;
}`;

const insensitiveSearch = `#include <stdio.h>
#include <string.h>
#include <ctype.h>

void paraMinusculas(const char origem[], char destino[], int tamanho);

int main(void) {
    char nomes[4][40] = {
        "Ana Souza", "BRUNO LIMA",
        "Mariana Alves", "Carlos Santos"
    };
    char busca[40];
    char buscaNormalizada[40];
    char nomeNormalizado[40];
    int i;

    printf("Parte do nome: ");
    fgets(busca, sizeof(busca), stdin);
    busca[strcspn(busca, "\n")] = '\0';
    paraMinusculas(busca, buscaNormalizada, 40);

    for (i = 0; i < 4; i++) {
        paraMinusculas(nomes[i], nomeNormalizado, 40);
        if (strstr(nomeNormalizado, buscaNormalizada) != NULL) {
            printf("Encontrado: %s\n", nomes[i]);
        }
    }
    return 0;
}

void paraMinusculas(const char origem[], char destino[], int tamanho) {
    int i = 0;
    while (origem[i] != '\0' && i < tamanho - 1) {
        destino[i] = (char) tolower((unsigned char) origem[i]);
        i++;
    }
    destino[i] = '\0';
}`;

const alphabeticalSort = `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[50];
} Contato;

int main(void) {
    Contato contatos[4] = {
        {4, "Marina Alves"},
        {2, "Ana Souza"},
        {1, "Carlos Santos"},
        {3, "Bruno Lima"}
    };
    Contato temporario;
    int i, j;

    for (i = 0; i < 4 - 1; i++) {
        for (j = 0; j < 4 - 1 - i; j++) {
            if (strcmp(contatos[j].nome, contatos[j + 1].nome) > 0) {
                temporario = contatos[j];
                contatos[j] = contatos[j + 1];
                contatos[j + 1] = temporario;
            }
        }
    }

    printf("CONTATOS EM ORDEM ALFABETICA\n");
    for (i = 0; i < 4; i++) {
        printf("%d | %s\n", contatos[i].id, contatos[i].nome);
    }
    return 0;
}`;

const partialUpdate = `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    Contato contato = {7, "Bruno Lima", "3198888-7654"};
    char novoNome[60];
    char novoTelefone[25];

    printf("Atual: %s | %s\n", contato.nome, contato.telefone);
    printf("Novo nome (Enter mantem): ");
    fgets(novoNome, sizeof(novoNome), stdin);
    novoNome[strcspn(novoNome, "\n")] = '\0';

    printf("Novo telefone (Enter mantem): ");
    fgets(novoTelefone, sizeof(novoTelefone), stdin);
    novoTelefone[strcspn(novoTelefone, "\n")] = '\0';

    if (strlen(novoNome) > 0) {
        strcpy(contato.nome, novoNome);
    }
    if (strlen(novoTelefone) > 0) {
        strcpy(contato.telefone, novoTelefone);
    }

    printf("Depois: %s | %s\n", contato.nome, contato.telefone);
    return 0;
}`;

const deleteConfirmation = `#include <stdio.h>

int main(void) {
    int id = 12;
    char nome[] = "Marina Alves";
    char resposta;

    printf("Contato localizado: %d | %s\n", id, nome);
    printf("Confirmar exclusao? (S/N): ");
    scanf(" %c", &resposta);

    if (resposta == 'S' || resposta == 's') {
        printf("Exclusao autorizada.\n");
    } else {
        printf("Operacao cancelada. Nenhum dado foi alterado.\n");
    }
    return 0;
}`;

const restoreBackup = `#include <stdio.h>

#define BACKUP "contatos-backup.txt"
#define DESTINO "contatos-restaurados.txt"

int main(void) {
    FILE *origem = fopen(BACKUP, "r");
    FILE *destino;
    int caractere;

    if (origem == NULL) {
        printf("Backup nao encontrado.\n");
        return 0;
    }

    destino = fopen(DESTINO, "w");
    if (destino == NULL) {
        fclose(origem);
        printf("Erro ao criar arquivo restaurado.\n");
        return 1;
    }

    while ((caractere = fgetc(origem)) != EOF) {
        fputc(caractere, destino);
    }

    fclose(origem);
    fclose(destino);
    printf("Copia restaurada em %s.\n", DESTINO);
    return 0;
}`;

const reportExample = `#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    Contato contatos[4] = {
        {8, "Ana Souza", "3191111-1111"},
        {15, "Bruno Lima", "3192222-2222"},
        {3, "Carolina Fernandes", "3193333-3333"},
        {21, "Diego Alves", "3194444-4444"}
    };
    int menorId = contatos[0].id;
    int maiorId = contatos[0].id;
    int maiorNome = 0;
    int i;

    for (i = 0; i < 4; i++) {
        if (contatos[i].id < menorId) menorId = contatos[i].id;
        if (contatos[i].id > maiorId) maiorId = contatos[i].id;
        if (strlen(contatos[i].nome) > strlen(contatos[maiorNome].nome)) {
            maiorNome = i;
        }
    }

    printf("Total de contatos: 4\n");
    printf("Menor ID: %d\n", menorId);
    printf("Maior ID: %d\n", maiorId);
    printf("Nome mais longo: %s\n", contatos[maiorNome].nome);
    return 0;
}`;

const agendaHeader = `#ifndef AGENDA_H
#define AGENDA_H

#define MAX_CONTATOS 500

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void exibirMenu(void);
int lerInteiro(const char mensagem[]);
void cadastrar(void);
void listarOrdenado(void);
void pesquisarPorNome(void);
void atualizarParcial(void);
void excluirComConfirmacao(void);
void criarBackup(void);
void restaurarBackup(void);
void exibirRelatorio(void);

#endif`;

const mainSource = `#include <stdio.h>
#include "agenda.h"

int main(void) {
    int opcao;

    do {
        exibirMenu();
        opcao = lerInteiro("Opcao: ");

        switch (opcao) {
            case 1: cadastrar(); break;
            case 2: listarOrdenado(); break;
            case 3: pesquisarPorNome(); break;
            case 4: atualizarParcial(); break;
            case 5: excluirComConfirmacao(); break;
            case 6: criarBackup(); break;
            case 7: restaurarBackup(); break;
            case 8: exibirRelatorio(); break;
            case 0: printf("Agenda 2.0 encerrada.\n"); break;
            default: printf("Escolha uma opcao de 0 a 8.\n");
        }
    } while (opcao != 0);

    return 0;
}`;

const agendaSource = `#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include "agenda.h"

#define ARQUIVO "contatos.txt"
#define TEMPORARIO "contatos.tmp"
#define BACKUP_TROCA "contatos.bak"
#define BACKUP_USUARIO "contatos-backup.txt"

static void lerTexto(const char mensagem[], char texto[], int tamanho,
                     int permiteVazio);
static int linhaParaContato(const char linha[], Contato *contato);
static int idExiste(int idProcurado);
static int substituirArquivo(void);
static int arquivoExiste(const char nome[]);
static int copiarArquivo(const char origem[], const char destino[]);
static int carregarContatos(Contato contatos[], int limite);
static void paraMinusculas(const char origem[], char destino[], int tamanho);
static int compararNomes(const char a[], const char b[]);

void exibirMenu(void) {
    printf("\n================================\n");
    printf("      AGENDA LEVELUP 2.0\n");
    printf("================================\n");
    printf("1 - Cadastrar\n");
    printf("2 - Listar em ordem alfabetica\n");
    printf("3 - Pesquisar por nome\n");
    printf("4 - Atualizar parcialmente\n");
    printf("5 - Excluir com confirmacao\n");
    printf("6 - Criar backup\n");
    printf("7 - Restaurar backup\n");
    printf("8 - Exibir relatorio\n");
    printf("0 - Sair\n");
}

int lerInteiro(const char mensagem[]) {
    char linha[100];
    char extra;
    int valor;

    while (1) {
        printf("%s", mensagem);
        if (fgets(linha, sizeof(linha), stdin) != NULL &&
            sscanf(linha, "%d %c", &valor, &extra) == 1) {
            return valor;
        }
        printf("Digite um numero inteiro valido.\n");
    }
}

static void lerTexto(const char mensagem[], char texto[], int tamanho,
                     int permiteVazio) {
    while (1) {
        printf("%s", mensagem);
        if (fgets(texto, tamanho, stdin) == NULL) texto[0] = '\0';
        texto[strcspn(texto, "\n")] = '\0';

        if (!permiteVazio && strlen(texto) == 0) {
            printf("O texto nao pode ficar vazio.\n");
        } else if (strchr(texto, ';') != NULL) {
            printf("Nao use ponto e virgula.\n");
        } else {
            return;
        }
    }
}

static int linhaParaContato(const char linha[], Contato *contato) {
    return sscanf(linha, "%d;%59[^;];%24[^\n]",
                  &contato->id, contato->nome, contato->telefone) == 3;
}

static int arquivoExiste(const char nome[]) {
    FILE *arquivo = fopen(nome, "r");
    if (arquivo == NULL) return 0;
    fclose(arquivo);
    return 1;
}

static int copiarArquivo(const char origem[], const char destino[]) {
    FILE *entrada = fopen(origem, "r");
    FILE *saida;
    int caractere;

    if (entrada == NULL) return 0;
    saida = fopen(destino, "w");
    if (saida == NULL) {
        fclose(entrada);
        return 0;
    }
    while ((caractere = fgetc(entrada)) != EOF) {
        fputc(caractere, saida);
    }
    fclose(entrada);
    fclose(saida);
    return 1;
}

static int idExiste(int idProcurado) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    Contato contato;

    if (arquivo == NULL) return 0;
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (linhaParaContato(linha, &contato) &&
            contato.id == idProcurado) {
            fclose(arquivo);
            return 1;
        }
    }
    fclose(arquivo);
    return 0;
}

static int substituirArquivo(void) {
    remove(BACKUP_TROCA);
    if (rename(ARQUIVO, BACKUP_TROCA) != 0) {
        remove(TEMPORARIO);
        return 0;
    }
    if (rename(TEMPORARIO, ARQUIVO) != 0) {
        rename(BACKUP_TROCA, ARQUIVO);
        return 0;
    }
    remove(BACKUP_TROCA);
    return 1;
}

static void paraMinusculas(const char origem[], char destino[], int tamanho) {
    int i = 0;
    while (origem[i] != '\0' && i < tamanho - 1) {
        destino[i] = (char) tolower((unsigned char) origem[i]);
        i++;
    }
    destino[i] = '\0';
}

static int compararNomes(const char a[], const char b[]) {
    char aNormalizado[60];
    char bNormalizado[60];
    paraMinusculas(a, aNormalizado, 60);
    paraMinusculas(b, bNormalizado, 60);
    return strcmp(aNormalizado, bNormalizado);
}

static int carregarContatos(Contato contatos[], int limite) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    int quantidade = 0;

    if (arquivo == NULL) return 0;
    while (quantidade < limite &&
           fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (linhaParaContato(linha, &contatos[quantidade])) {
            quantidade++;
        }
    }
    fclose(arquivo);
    return quantidade;
}

void cadastrar(void) {
    Contato contato;
    FILE *arquivo;

    contato.id = lerInteiro("ID positivo: ");
    if (contato.id <= 0 || idExiste(contato.id)) {
        printf("ID invalido ou ja cadastrado.\n");
        return;
    }
    lerTexto("Nome: ", contato.nome, 60, 0);
    lerTexto("Telefone: ", contato.telefone, 25, 0);

    arquivo = fopen(ARQUIVO, "a");
    if (arquivo == NULL) {
        printf("Nao foi possivel abrir a agenda.\n");
        return;
    }
    fprintf(arquivo, "%d;%s;%s\n",
            contato.id, contato.nome, contato.telefone);
    fclose(arquivo);
    printf("Contato cadastrado.\n");
}

void listarOrdenado(void) {
    Contato contatos[MAX_CONTATOS];
    Contato temporario;
    int quantidade = carregarContatos(contatos, MAX_CONTATOS);
    int i, j;

    if (quantidade == 0) {
        printf("Agenda vazia.\n");
        return;
    }
    for (i = 0; i < quantidade - 1; i++) {
        for (j = 0; j < quantidade - 1 - i; j++) {
            if (compararNomes(contatos[j].nome,
                              contatos[j + 1].nome) > 0) {
                temporario = contatos[j];
                contatos[j] = contatos[j + 1];
                contatos[j + 1] = temporario;
            }
        }
    }
    printf("\nID | NOME                       | TELEFONE\n");
    printf("----------------------------------------------\n");
    for (i = 0; i < quantidade; i++) {
        printf("%2d | %-26s | %s\n", contatos[i].id,
               contatos[i].nome, contatos[i].telefone);
    }
}

void pesquisarPorNome(void) {
    Contato contatos[MAX_CONTATOS];
    char busca[60];
    char buscaNormalizada[60];
    char nomeNormalizado[60];
    int quantidade = carregarContatos(contatos, MAX_CONTATOS);
    int encontrados = 0;
    int i;

    if (quantidade == 0) {
        printf("Agenda vazia.\n");
        return;
    }
    lerTexto("Parte do nome: ", busca, 60, 0);
    paraMinusculas(busca, buscaNormalizada, 60);
    for (i = 0; i < quantidade; i++) {
        paraMinusculas(contatos[i].nome, nomeNormalizado, 60);
        if (strstr(nomeNormalizado, buscaNormalizada) != NULL) {
            printf("%d | %s | %s\n", contatos[i].id,
                   contatos[i].nome, contatos[i].telefone);
            encontrados++;
        }
    }
    printf("Resultado(s): %d\n", encontrados);
}

void atualizarParcial(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    char linha[120];
    char novoNome[60];
    char novoTelefone[25];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("Agenda vazia.\n");
        return;
    }
    destino = fopen(TEMPORARIO, "w");
    if (destino == NULL) {
        fclose(origem);
        return;
    }
    idProcurado = lerInteiro("ID que deseja atualizar: ");
    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (!linhaParaContato(linha, &contato)) {
            fputs(linha, destino);
            continue;
        }
        if (contato.id == idProcurado) {
            printf("Atual: %s | %s\n", contato.nome, contato.telefone);
            lerTexto("Novo nome (Enter mantem): ", novoNome, 60, 1);
            lerTexto("Novo telefone (Enter mantem): ", novoTelefone, 25, 1);
            if (strlen(novoNome) > 0) strcpy(contato.nome, novoNome);
            if (strlen(novoTelefone) > 0) {
                strcpy(contato.telefone, novoTelefone);
            }
            encontrado = 1;
        }
        fprintf(destino, "%d;%s;%s\n",
                contato.id, contato.nome, contato.telefone);
    }
    fclose(origem);
    fclose(destino);
    if (!encontrado) {
        remove(TEMPORARIO);
        printf("Contato nao encontrado.\n");
    } else if (substituirArquivo()) {
        printf("Contato atualizado.\n");
    } else {
        printf("Falha na troca. O original foi preservado.\n");
    }
}

void excluirComConfirmacao(void) {
    Contato contatos[MAX_CONTATOS];
    int quantidade = carregarContatos(contatos, MAX_CONTATOS);
    int idProcurado = lerInteiro("ID que deseja excluir: ");
    int indice = -1;
    int i;
    char resposta[10];
    FILE *origem;
    FILE *destino;
    char linha[120];
    Contato contato;

    for (i = 0; i < quantidade; i++) {
        if (contatos[i].id == idProcurado) indice = i;
    }
    if (indice == -1) {
        printf("Contato nao encontrado.\n");
        return;
    }
    printf("Excluir %s | %s? (S/N): ",
           contatos[indice].nome, contatos[indice].telefone);
    fgets(resposta, sizeof(resposta), stdin);
    if (resposta[0] != 'S' && resposta[0] != 's') {
        printf("Exclusao cancelada.\n");
        return;
    }

    origem = fopen(ARQUIVO, "r");
    destino = fopen(TEMPORARIO, "w");
    if (origem == NULL || destino == NULL) {
        if (origem != NULL) fclose(origem);
        if (destino != NULL) fclose(destino);
        remove(TEMPORARIO);
        printf("Nao foi possivel preparar a exclusao.\n");
        return;
    }
    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (linhaParaContato(linha, &contato) &&
            contato.id == idProcurado) {
            continue;
        }
        fputs(linha, destino);
    }
    fclose(origem);
    fclose(destino);
    if (substituirArquivo()) printf("Contato excluido.\n");
    else printf("Falha na troca. O original foi preservado.\n");
}

void criarBackup(void) {
    if (copiarArquivo(ARQUIVO, BACKUP_USUARIO)) {
        printf("Backup criado.\n");
    } else {
        printf("Nao foi possivel criar o backup.\n");
    }
}

void restaurarBackup(void) {
    char resposta[10];

    if (!arquivoExiste(BACKUP_USUARIO)) {
        printf("Backup nao encontrado.\n");
        return;
    }
    printf("Restaurar o backup e substituir a agenda atual? (S/N): ");
    fgets(resposta, sizeof(resposta), stdin);
    if (resposta[0] != 'S' && resposta[0] != 's') {
        printf("Restauracao cancelada.\n");
        return;
    }
    if (!copiarArquivo(BACKUP_USUARIO, TEMPORARIO)) {
        printf("Nao foi possivel ler o backup.\n");
        return;
    }
    if (!arquivoExiste(ARQUIVO)) {
        if (rename(TEMPORARIO, ARQUIVO) == 0) {
            printf("Backup restaurado.\n");
        } else {
            remove(TEMPORARIO);
            printf("Falha na restauracao.\n");
        }
    } else if (substituirArquivo()) {
        printf("Backup restaurado.\n");
    } else {
        printf("Falha na troca. A agenda atual foi preservada.\n");
    }
}

void exibirRelatorio(void) {
    Contato contatos[MAX_CONTATOS];
    int quantidade = carregarContatos(contatos, MAX_CONTATOS);
    int menorId, maiorId, maiorNome;
    int i;

    if (quantidade == 0) {
        printf("Agenda vazia.\n");
        return;
    }
    menorId = maiorId = contatos[0].id;
    maiorNome = 0;
    for (i = 1; i < quantidade; i++) {
        if (contatos[i].id < menorId) menorId = contatos[i].id;
        if (contatos[i].id > maiorId) maiorId = contatos[i].id;
        if (strlen(contatos[i].nome) > strlen(contatos[maiorNome].nome)) {
            maiorNome = i;
        }
    }
    printf("\n=== RELATORIO ===\n");
    printf("Total de contatos: %d\n", quantidade);
    printf("Faixa de IDs: %d ate %d\n", menorId, maiorId);
    printf("Nome mais longo: %s\n", contatos[maiorNome].nome);
    printf("Backup disponivel: %s\n",
           arquivoExiste(BACKUP_USUARIO) ? "sim" : "nao");
}`;

export function TrackTen({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner"><div><p className="section-kicker">Trilha bônus · versão 2.0</p><strong>Sete laboratórios e um projeto modular completo</strong><span>Exemplos em C, arquivos .h, projeto pronto para o Dev-C++ e desafios de evolução.</span></div><a className="button-primary" href="/downloads/trilha-10/trilha-10-codigos.zip" download><FileArchive /> Baixar todos os materiais</a></div>
      <div className="devcpp-banner"><TerminalSquare /><div><strong>Continuamos usando C, não C++</strong><p>A novidade é que o Dev-C++ compilará vários arquivos do mesmo projeto. Os códigos continuam com extensão <code>.c</code>; somente as declarações compartilhadas ficam em <code>agenda.h</code>.</p></div></div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>Uma versão 2.0 não precisa abandonar o que já funciona. Evoluir significa observar limitações reais, escolher melhorias e refatorar com segurança. A Agenda 1.0 já possui CRUD persistente; agora vamos melhorar experiência, organização e confiabilidade.</p>
        <div className="version-compare"><div><small>AGENDA 1.0</small><strong>CRUD funcional</strong><p>Pesquisa por ID, lista na ordem do arquivo e código em uma única unidade.</p></div><div><small>AGENDA 2.0</small><strong>Uso mais inteligente</strong><p>Busca por nome, ordenação, alterações parciais, restauração e módulos.</p></div></div>
        <div className="upgrade-roadmap"><div><Search /><strong>Encontrar melhor</strong></div><div><ShieldCheck /><strong>Alterar com segurança</strong></div><div><Gauge /><strong>Analisar dados</strong></div><div><Layers3 /><strong>Organizar o código</strong></div></div>
        <Activity title="Priorize melhorias" level="guiada"><p>Classifique pesquisa por nome, cor do terminal e confirmação de exclusão entre essencial, importante e opcional. Justifique.</p><Reveal title="Revelar uma possibilidade"><p>Pesquisa pode ser importante, confirmação pode ser essencial para evitar perda, e cor pode ser opcional. A classificação depende do risco e da necessidade do usuário.</p></Reveal></Activity>
        <Activity title="Escreva a história da versão" level="pratica"><p>Complete: “Como usuário da agenda, quero ___ para que ___”. Crie três histórias.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>Pesquisar somente por ID exige que o usuário memorize um número. <code>strstr</code> procura uma string dentro de outra e devolve <code>NULL</code> quando não encontra. Assim, “Mari” pode localizar “Mariana” e “Marina”.</p>
        <CodeBlock code={partialSearch} filename="pesquisa-parcial.c" downloadUrl="/downloads/trilha-10/pesquisa-parcial.c" />
        <div className="search-window"><code>Mariana Alves</code><span>contém</span><strong>Mari</strong></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Busca vazia encontra todos</strong><p>Toda string contém a string vazia. No projeto final, a função de entrada não permite que o termo fique em branco.</p></div></div>
        <Activity title="Preveja os resultados" level="guiada"><p>Com os nomes Ana, Mariana, Marina e Carlos, quais aparecem ao buscar <code>Mar</code>?</p><Reveal title="Revelar resposta"><p>Mariana e Marina, pois ambas contêm exatamente a sequência <code>Mar</code>.</p></Reveal></Activity>
        <Activity title="Conte correspondências" level="pratica"><p>Altere o programa para guardar e mostrar o índice de cada nome encontrado.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p>A comparação textual comum diferencia maiúsculas e minúsculas. Para uma busca amigável, criamos cópias normalizadas em minúsculas. O nome original continua intacto e é usado na apresentação.</p>
        <CodeBlock code={insensitiveSearch} filename="busca-sem-diferenciar-maiusculas.c" downloadUrl="/downloads/trilha-10/busca-sem-diferenciar-maiusculas.c" />
        <div className="normalization-flow"><div><small>ORIGINAL</small><strong>BRUNO Lima</strong></div><span>→</span><div><small>CÓPIA</small><strong>bruno lima</strong></div><span>⇄</span><div><small>BUSCA</small><strong>bruno</strong></div></div>
        <p>O cast para <code>unsigned char</code> antes de <code>tolower</code> evita valores inadequados para a função. É um detalhe pequeno que demonstra cuidado com a biblioteca padrão.</p>
        <Activity title="Proteja o original" level="guiada"><p>Por que não transformar diretamente o campo <code>contato.nome</code> em minúsculas?</p><Reveal title="Revelar explicação"><p>Isso modificaria o dado que será exibido e talvez salvo. A cópia permite comparar sem destruir a escrita original do nome.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>O arquivo mantém a ordem de cadastro, mas o relatório pode exibir outra ordem. Carregamos os contatos em um vetor, ordenamos a cópia em memória e mostramos o resultado sem reescrever o arquivo.</p>
        <CodeBlock code={alphabeticalSort} filename="ordenacao-alfabetica.c" downloadUrl="/downloads/trilha-10/ordenacao-alfabetica.c" />
        <div className="sort-pass"><div>Marina</div><div>Ana</div><span>troca</span><div>Ana</div><div>Marina</div></div>
        <p>O Bubble Sort compara vizinhos. Quando o nome da esquerda vem depois do nome da direita, trocamos a <code>struct</code> inteira — não apenas o texto — para manter ID e telefone ligados ao contato correto.</p>
        <Activity title="Execute uma passagem" level="guiada"><p>Faça no papel a primeira passagem sobre: Marina, Ana, Carlos e Bruno.</p><Reveal title="Revelar resultado"><p>Após comparar os vizinhos uma vez, a sequência fica Ana, Carlos, Bruno, Marina. O maior nome alfabeticamente já chegou ao final.</p></Reveal></Activity>
        <Activity title="Ordene por ID" level="desafio"><p>Troque a comparação de nomes por uma comparação numérica e liste do menor para o maior ID.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p>Na versão 1.0, atualizar o telefone obrigava o usuário a digitar novamente o nome. Na versão 2.0, pressionar Enter mantém o valor atual; somente campos preenchidos substituem os anteriores.</p>
        <CodeBlock code={partialUpdate} filename="atualizacao-parcial.c" downloadUrl="/downloads/trilha-10/atualizacao-parcial.c" />
        <div className="partial-fields"><div><small>ENTRADA VAZIA</small><strong>Preservar</strong><p>O campo atual permanece.</p></div><div><small>NOVO TEXTO</small><strong>Substituir</strong><p>A cópia recebe o valor digitado.</p></div></div>
        <Activity title="Atualize apenas o telefone" level="guiada"><p>Pressione Enter no nome e digite outro telefone. Quais campos devem mudar?</p><Reveal title="Revelar resposta"><p>Somente o telefone. O ID e o nome permanecem exatamente como estavam.</p></Reveal></Activity>
        <Activity title="Valide a atualização" level="desafio"><p>Impeça ponto e vírgula também nos campos opcionais, mas continue aceitando o Enter vazio.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>Excluir é a operação mais destrutiva do CRUD. Antes de reescrever o arquivo, localizamos o contato, mostramos nome e telefone e pedimos uma confirmação clara.</p>
        <CodeBlock code={deleteConfirmation} filename="confirmacao-de-exclusao.c" downloadUrl="/downloads/trilha-10/confirmacao-de-exclusao.c" />
        <div className="confirmation-gate"><div><Search /><strong>Localizar</strong></div><span>→</span><div><FileOutput /><strong>Mostrar contato</strong></div><span>→</span><div><ShieldCheck /><strong>Confirmar S</strong></div><span>→</span><div><RefreshCcw /><strong>Reescrever</strong></div></div>
        <Activity title="Teste o cancelamento" level="pratica"><p>Digite N, n e qualquer outra letra. Nenhuma delas deve autorizar a exclusão.</p></Activity>
        <Activity title="Mensagem responsável" level="desafio"><p>Inclua na confirmação o ID, o nome e o telefone. Explique por que mostrar apenas o ID é menos seguro.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>Criar backup só resolve metade do problema. Também precisamos restaurá-lo. Para praticar sem risco, o primeiro exemplo cria <code>contatos-restaurados.txt</code>; o projeto final pede confirmação antes de substituir a agenda atual.</p>
        <CodeBlock code={restoreBackup} filename="restaurar-backup.c" downloadUrl="/downloads/trilha-10/restaurar-backup.c" />
        <div className="backup-timeline"><div><History /><strong>Backup existente</strong></div><span>→</span><div><FileInput /><strong>Ler cópia</strong></div><span>→</span><div><ShieldCheck /><strong>Confirmar</strong></div><span>→</span><div><FileOutput /><strong>Restaurar</strong></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Restaurar também substitui dados</strong><p>Uma agenda restaurada volta ao estado do backup. Contatos criados depois daquela cópia podem desaparecer, por isso a confirmação é obrigatória.</p></div></div>
        <Activity title="Simule a linha do tempo" level="guiada"><p>Crie backup com dois contatos, cadastre um terceiro e restaure. Quantos contatos devem permanecer?</p><Reveal title="Revelar resultado"><p>Dois. A restauração recupera o estado capturado antes do terceiro cadastro.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[7]} number="08">
        <p>Relatórios transformam registros em informação. Podemos contar contatos, observar a faixa de IDs, localizar o nome mais longo e informar se existe um backup disponível.</p>
        <CodeBlock code={reportExample} filename="relatorio-da-agenda.c" downloadUrl="/downloads/trilha-10/relatorio-da-agenda.c" />
        <div className="metric-cards"><div><Gauge /><strong>Total</strong><p>Quantidade carregada.</p></div><div><ArrowDownAZ /><strong>Faixa de IDs</strong><p>Menor e maior valor.</p></div><div><FileCode2 /><strong>Maior nome</strong><p>Índice do texto mais longo.</p></div></div>
        <Activity title="Transforme dado em informação" level="pratica"><p>Adicione a quantidade de nomes que começam com a letra A.</p></Activity>
        <Activity title="Relatório por domínio" level="desafio"><p>Imagine que o contato também possua e-mail. Conte quantos endereços terminam em <code>@gmail.com</code>.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[8]} number="09">
        <p>Um arquivo com centenas de linhas funciona, mas fica difícil localizar responsabilidades. Dividir o projeto não muda a linguagem nem o programa final: apenas distribui as partes em unidades com papéis claros.</p>
        <div className="module-responsibilities"><div><FileCode2 /><small>main.c</small><strong>Coordenação</strong><p>Menu, opção e chamadas.</p></div><div><FileCog /><small>agenda.c</small><strong>Implementação</strong><p>Regras e operações.</p></div><div><FolderGit2 /><small>agenda.h</small><strong>Contrato</strong><p>Tipos e protótipos compartilhados.</p></div></div>
        <div className="before-after-code"><div><small>UM ARQUIVO</small><strong>Tudo junto</strong><p>Simples para começar, trabalhoso para manter.</p></div><div><small>PROJETO MODULAR</small><strong>Papéis separados</strong><p>Cada arquivo responde a uma pergunta.</p></div></div>
        <Activity title="Escolha o arquivo" level="guiada"><p>Onde ficam: a <code>struct Contato</code>, o corpo de <code>cadastrar</code> e a função <code>main</code>?</p><Reveal title="Revelar mapa"><p>A estrutura compartilhada fica em <code>agenda.h</code>; a implementação de cadastro em <code>agenda.c</code>; e a função principal em <code>main.c</code>.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[9]} number="10">
        <p>O cabeçalho funciona como um contrato. Ele anuncia o tipo <code>Contato</code> e as funções que outros arquivos podem chamar. As proteções <code>#ifndef</code>, <code>#define</code> e <code>#endif</code> evitam inclusão duplicada.</p>
        <CodeBlock code={agendaHeader} filename="agenda.h" downloadUrl="/downloads/trilha-10/projeto-agenda-2/agenda.h" />
        <div className="header-anatomy"><div><small>GUARDA</small><code>#ifndef AGENDA_H</code></div><div><small>MODELO</small><code>typedef struct</code></div><div><small>CONTRATO</small><code>void cadastrar(void);</code></div></div>
        <p>O arquivo de implementação inclui o próprio cabeçalho. Assim, o compilador confere se as funções definidas combinam com o contrato publicado.</p>
        <CodeBlock code={mainSource} filename="main.c" downloadUrl="/downloads/trilha-10/projeto-agenda-2/main.c" />
        <Activity title="Protótipo ou implementação?" level="pratica"><p>Classifique <code>void listarOrdenado(void);</code> e <code>void listarOrdenado(void) {`{ ... }`}</code>.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[10]} number="11">
        <p>No Dev-C++, crie um <strong>Projeto C de Console</strong>. Adicione <code>main.c</code> e <code>agenda.c</code> como unidades do projeto e mantenha <code>agenda.h</code> na mesma pasta. Compilar apenas <code>main.c</code> não inclui automaticamente o corpo das funções.</p>
        <ol className="step-list"><li><span>1</span><div><strong>Arquivo → Novo → Projeto</strong><p>Escolha Console Application e confirme linguagem C.</p></div></li><li><span>2</span><div><strong>Adicione as unidades</strong><p>Inclua <code>main.c</code> e <code>agenda.c</code> no projeto.</p></div></li><li><span>3</span><div><strong>Guarde o cabeçalho junto</strong><p><code>#include "agenda.h"</code> procura o arquivo local.</p></div></li><li><span>4</span><div><strong>Compile o projeto inteiro</strong><p>O linker conecta as chamadas da main às implementações.</p></div></li></ol>
        <div className="compile-map"><div><code>main.c</code></div><div><code>agenda.c</code></div><span>compilador + linker</span><div><strong>Agenda 2.0</strong></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>“Undefined reference” costuma indicar unidade ausente</strong><p>Se o protótipo foi reconhecido, mas o corpo da função não foi encontrado, confira se <code>agenda.c</code> realmente faz parte do projeto.</p></div></div>
        <Activity title="Diagnostique três erros" level="desafio"><p>Explique os efeitos de: esquecer <code>agenda.h</code>; adicionar somente <code>main.c</code>; salvar <code>agenda.c</code> como <code>agenda.cpp</code>.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[11]} number="12">
        <p>A implementação reúne todas as melhorias. Funções marcadas como <code>static</code> são utilitárias internas de <code>agenda.c</code>; somente as operações declaradas no cabeçalho ficam disponíveis à <code>main</code>.</p>
        <CodeBlock code={agendaSource} filename="agenda.c" downloadUrl="/downloads/trilha-10/projeto-agenda-2/agenda.c" />
        <div className="release-card"><Sparkles /><div><small>VERSÃO BÔNUS CONCLUÍDA</small><strong>Agenda LevelUp 2.0</strong><p>Busca inteligente, ordenação, atualização parcial, confirmação, backup restaurável, relatórios e arquitetura modular.</p></div></div>
        <div className="project-package-card"><Boxes /><div><small>PROJETO DEV-C++</small><strong>Todos os arquivos na estrutura correta</strong><p>Baixe, extraia na mesma pasta e adicione os dois arquivos .c ao seu Projeto C.</p></div><a className="button-primary" href="/downloads/trilha-10/AGENDA-LEVELUP-2.0.zip" download>Baixar Agenda 2.0</a></div>
        <Activity title="Teste de regressão" level="guiada"><p>Antes de testar as novidades, confirme que cadastrar, listar e sair continuam funcionando. Depois teste cada melhoria.</p><Reveal title="Revelar motivo"><p>Regressão é quando uma mudança quebra algo que já funcionava. Testar recursos antigos protege a versão anterior durante a evolução.</p></Reveal></Activity>
        <Activity title="Planeje a versão 3.0" level="desafio"><p>Escolha duas evoluções coerentes: campo e-mail, favoritos, grupos, exportação CSV, data de aniversário ou interface gráfica. Escreva requisitos antes do código.</p></Activity>
        <div className="course-completion"><CheckCircle2 /><div><strong>Agora você também sabe evoluir um projeto</strong><p>Construir a primeira versão é importante; analisar limitações, refatorar e organizar uma segunda versão aproxima o aluno do trabalho real de desenvolvimento.</p></div></div>
      </TrailSection>
    </div>
  );
}
