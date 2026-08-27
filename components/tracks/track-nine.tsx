import {
  AlertTriangle,
  Archive,
  CheckCircle2,
  ClipboardCheck,
  ContactRound,
  FileArchive,
  FileSearch,
  Flag,
  FolderCheck,
  Menu,
  Pencil,
  PlusCircle,
  Search,
  ShieldCheck,
  TerminalSquare,
  Trash2,
  Wrench,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, ConceptCard, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const menuBase = `#include <stdio.h>

void exibirMenu(void);

int main(void) {
    int opcao;

    do {
        exibirMenu();
        scanf("%d", &opcao);

        switch (opcao) {
            case 1: printf("Cadastrar escolhido.\n"); break;
            case 2: printf("Listar escolhido.\n"); break;
            case 3: printf("Pesquisar escolhido.\n"); break;
            case 4: printf("Atualizar escolhido.\n"); break;
            case 5: printf("Excluir escolhido.\n"); break;
            case 6: printf("Backup escolhido.\n"); break;
            case 0: printf("Agenda encerrada.\n"); break;
            default: printf("Opcao invalida.\n");
        }
    } while (opcao != 0);

    return 0;
}

void exibirMenu(void) {
    printf("\n=== AGENDA LEVELUP ===\n");
    printf("1 - Cadastrar\n");
    printf("2 - Listar\n");
    printf("3 - Pesquisar\n");
    printf("4 - Atualizar\n");
    printf("5 - Excluir\n");
    printf("6 - Criar backup\n");
    printf("0 - Sair\n");
    printf("Opcao: ");
}`;

const contactModel = `#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    Contato contato = {15, "Marina Alves", "3199999-2026"};

    printf("Registro na memoria:\n");
    printf("ID: %d\nNome: %s\nTelefone: %s\n",
           contato.id, contato.nome, contato.telefone);

    printf("\nLinha que sera salva:\n");
    printf("%d;%s;%s\n",
           contato.id, contato.nome, contato.telefone);
    return 0;
}`;

const safeInput = `#include <stdio.h>
#include <string.h>

int lerInteiro(const char mensagem[]);
void lerTexto(const char mensagem[], char texto[], int tamanho);

int main(void) {
    int id = lerInteiro("ID: ");
    char nome[60];

    lerTexto("Nome: ", nome, 60);
    printf("Recebido: %d | %s\n", id, nome);
    return 0;
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

void lerTexto(const char mensagem[], char texto[], int tamanho) {
    while (1) {
        printf("%s", mensagem);
        if (fgets(texto, tamanho, stdin) == NULL) {
            texto[0] = '\0';
        }
        texto[strcspn(texto, "\n")] = '\0';

        if (strlen(texto) == 0) {
            printf("O texto nao pode ficar vazio.\n");
        } else if (strchr(texto, ';') != NULL) {
            printf("Nao use ponto e virgula.\n");
        } else {
            return;
        }
    }
}`;

const parseLine = `#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int linhaParaContato(const char linha[], Contato *contato);

int main(void) {
    char linha[] = "21;Eduardo Nunes;3197777-4321";
    Contato contato;

    if (linhaParaContato(linha, &contato)) {
        printf("%d | %s | %s\n",
               contato.id, contato.nome, contato.telefone);
    } else {
        printf("Registro invalido.\n");
    }
    return 0;
}

int linhaParaContato(const char linha[], Contato *contato) {
    return sscanf(linha, "%d;%59[^;];%24[^\n]",
                  &contato->id,
                  contato->nome,
                  contato->telefone) == 3;
}`;

const uniqueId = `#include <stdio.h>

#define ARQUIVO "contatos.txt"

int idExiste(int idProcurado);

int main(void) {
    int id;

    printf("ID que deseja testar: ");
    scanf("%d", &id);

    if (idExiste(id)) {
        printf("Esse ID ja esta cadastrado.\n");
    } else {
        printf("ID disponivel para cadastro.\n");
    }
    return 0;
}

int idExiste(int idProcurado) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    int id;

    if (arquivo == NULL) {
        return 0;
    }

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;", &id) == 1 && id == idProcurado) {
            fclose(arquivo);
            return 1;
        }
    }

    fclose(arquivo);
    return 0;
}`;

const createOperation = `#include <stdio.h>
#include <string.h>

#define ARQUIVO "contatos.txt"

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);
int idExiste(int idProcurado);

int main(void) {
    Contato contato;
    FILE *arquivo;

    printf("ID positivo: ");
    scanf("%d", &contato.id);
    limparEntrada();

    if (contato.id <= 0 || idExiste(contato.id)) {
        printf("ID invalido ou ja cadastrado.\n");
        return 0;
    }

    printf("Nome: ");
    lerTexto(contato.nome, 60);
    printf("Telefone: ");
    lerTexto(contato.telefone, 25);

    arquivo = fopen(ARQUIVO, "a");
    if (arquivo == NULL) {
        printf("Nao foi possivel abrir a agenda.\n");
        return 1;
    }

    fprintf(arquivo, "%d;%s;%s\n",
            contato.id, contato.nome, contato.telefone);
    fclose(arquivo);
    printf("Contato cadastrado.\n");
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\n' && caractere != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\n")] = '\0';
}

int idExiste(int idProcurado) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    int id;

    if (arquivo == NULL) return 0;
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;", &id) == 1 && id == idProcurado) {
            fclose(arquivo);
            return 1;
        }
    }
    fclose(arquivo);
    return 0;
}`;

const listOperation = `#include <stdio.h>

#define ARQUIVO "contatos.txt"

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    Contato contato;
    int quantidade = 0;

    if (arquivo == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return 0;
    }

    printf("ID | NOME                       | TELEFONE\n");
    printf("----------------------------------------------\n");
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &contato.id, contato.nome, contato.telefone) == 3) {
            printf("%2d | %-26s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            quantidade++;
        }
    }

    fclose(arquivo);
    printf("Total: %d contato(s).\n", quantidade);
    return 0;
}`;

const searchOperation = `#include <stdio.h>

#define ARQUIVO "contatos.txt"

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (arquivo == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return 0;
    }

    printf("ID procurado: ");
    scanf("%d", &idProcurado);

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &contato.id, contato.nome, contato.telefone) == 3 &&
            contato.id == idProcurado) {
            printf("%d | %s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            encontrado = 1;
            break;
        }
    }

    fclose(arquivo);
    if (!encontrado) printf("Contato nao encontrado.\n");
    return 0;
}`;

const updateOperation = `#include <stdio.h>
#include <string.h>

#define ARQUIVO "contatos.txt"
#define TEMPORARIO "contatos.tmp"
#define BACKUP "contatos.bak"

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);
int substituirArquivo(void);

int main(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("Agenda vazia.\n");
        return 0;
    }

    destino = fopen(TEMPORARIO, "w");
    if (destino == NULL) {
        fclose(origem);
        printf("Erro ao criar arquivo temporario.\n");
        return 1;
    }

    printf("ID que deseja atualizar: ");
    scanf("%d", &idProcurado);
    limparEntrada();

    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &contato.id, contato.nome, contato.telefone) != 3) {
            fputs(linha, destino);
            continue;
        }
        if (contato.id == idProcurado) {
            printf("Novo nome: ");
            lerTexto(contato.nome, 60);
            printf("Novo telefone: ");
            lerTexto(contato.telefone, 25);
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
        printf("Nao foi possivel concluir a atualizacao.\n");
    }
    return 0;
}

void limparEntrada(void) {
    int c;
    while ((c = getchar()) != '\n' && c != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\n")] = '\0';
}

int substituirArquivo(void) {
    remove(BACKUP);
    if (rename(ARQUIVO, BACKUP) != 0) return 0;
    if (rename(TEMPORARIO, ARQUIVO) != 0) {
        rename(BACKUP, ARQUIVO);
        return 0;
    }
    remove(BACKUP);
    return 1;
}`;

const deleteOperation = `#include <stdio.h>

#define ARQUIVO "contatos.txt"
#define TEMPORARIO "contatos.tmp"
#define BACKUP "contatos.bak"

int substituirArquivo(void);

int main(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    char linha[120];
    int idAtual;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("Agenda vazia.\n");
        return 0;
    }

    destino = fopen(TEMPORARIO, "w");
    if (destino == NULL) {
        fclose(origem);
        return 1;
    }

    printf("ID que deseja excluir: ");
    scanf("%d", &idProcurado);

    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (sscanf(linha, "%d;", &idAtual) == 1 &&
            idAtual == idProcurado) {
            encontrado = 1;
        } else {
            fputs(linha, destino);
        }
    }

    fclose(origem);
    fclose(destino);

    if (!encontrado) {
        remove(TEMPORARIO);
        printf("Contato nao encontrado.\n");
    } else if (substituirArquivo()) {
        printf("Contato excluido.\n");
    } else {
        printf("Nao foi possivel concluir a exclusao.\n");
    }
    return 0;
}

int substituirArquivo(void) {
    remove(BACKUP);
    if (rename(ARQUIVO, BACKUP) != 0) return 0;
    if (rename(TEMPORARIO, ARQUIVO) != 0) {
        rename(BACKUP, ARQUIVO);
        return 0;
    }
    remove(BACKUP);
    return 1;
}`;

const backupOperation = `#include <stdio.h>

#define ARQUIVO "contatos.txt"
#define BACKUP "contatos-backup.txt"

int main(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    int caractere;

    if (origem == NULL) {
        printf("Nenhum arquivo para copiar.\n");
        return 0;
    }

    destino = fopen(BACKUP, "w");
    if (destino == NULL) {
        fclose(origem);
        printf("Erro ao criar o backup.\n");
        return 1;
    }

    while ((caractere = fgetc(origem)) != EOF) {
        fputc(caractere, destino);
    }

    fclose(origem);
    fclose(destino);
    printf("Backup criado em %s.\n", BACKUP);
    return 0;
}`;

const diagnostics = `#include <stdio.h>

#define ARQUIVO "contatos.txt"

int main(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    int id;
    char nome[60];
    char telefone[25];
    int validos = 0;
    int invalidos = 0;

    if (arquivo == NULL) {
        printf("Arquivo ainda nao criado.\n");
        return 0;
    }

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &id, nome, telefone) == 3) {
            validos++;
        } else {
            invalidos++;
        }
    }

    fclose(arquivo);
    printf("Registros validos: %d\n", validos);
    printf("Linhas invalidas: %d\n", invalidos);
    return 0;
}`;

const searchNameChallenge = `#include <stdio.h>
#include <string.h>

#define ARQUIVO "contatos.txt"

int main(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    char busca[60];
    char nome[60];
    char telefone[25];
    int id;
    int encontrados = 0;

    if (arquivo == NULL) {
        printf("Agenda vazia.\n");
        return 0;
    }

    printf("Parte exata do nome: ");
    fgets(busca, sizeof(busca), stdin);
    busca[strcspn(busca, "\n")] = '\0';

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &id, nome, telefone) == 3 &&
            strstr(nome, busca) != NULL) {
            printf("%d | %s | %s\n", id, nome, telefone);
            encontrados++;
        }
    }

    fclose(arquivo);
    printf("Resultado(s): %d\n", encontrados);
    return 0;
}`;

const finalAgenda = `#include <stdio.h>
#include <string.h>

#define ARQUIVO "contatos.txt"
#define TEMPORARIO "contatos.tmp"
#define BACKUP_TROCA "contatos.bak"
#define BACKUP_USUARIO "contatos-backup.txt"

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void exibirMenu(void);
int lerInteiro(const char mensagem[]);
void lerTexto(const char mensagem[], char texto[], int tamanho);
int linhaParaContato(const char linha[], Contato *contato);
int idExiste(int idProcurado);
int substituirArquivo(void);
void cadastrar(void);
void listar(void);
void pesquisar(void);
void atualizar(void);
void excluir(void);
void criarBackup(void);

int main(void) {
    int opcao;

    do {
        exibirMenu();
        opcao = lerInteiro("Opcao: ");

        switch (opcao) {
            case 1: cadastrar(); break;
            case 2: listar(); break;
            case 3: pesquisar(); break;
            case 4: atualizar(); break;
            case 5: excluir(); break;
            case 6: criarBackup(); break;
            case 0: printf("Agenda encerrada. Ate logo!\n"); break;
            default: printf("Opcao invalida. Escolha de 0 a 6.\n");
        }
    } while (opcao != 0);

    return 0;
}

void exibirMenu(void) {
    printf("\n================================\n");
    printf("       AGENDA LEVELUP\n");
    printf("================================\n");
    printf("1 - Cadastrar contato\n");
    printf("2 - Listar contatos\n");
    printf("3 - Pesquisar por ID\n");
    printf("4 - Atualizar contato\n");
    printf("5 - Excluir contato\n");
    printf("6 - Criar backup\n");
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

void lerTexto(const char mensagem[], char texto[], int tamanho) {
    while (1) {
        printf("%s", mensagem);
        if (fgets(texto, tamanho, stdin) == NULL) {
            texto[0] = '\0';
        }
        texto[strcspn(texto, "\n")] = '\0';

        if (strlen(texto) == 0) {
            printf("O texto nao pode ficar vazio.\n");
        } else if (strchr(texto, ';') != NULL) {
            printf("Nao use ponto e virgula.\n");
        } else {
            return;
        }
    }
}

int linhaParaContato(const char linha[], Contato *contato) {
    return sscanf(linha, "%d;%59[^;];%24[^\n]",
                  &contato->id,
                  contato->nome,
                  contato->telefone) == 3;
}

int idExiste(int idProcurado) {
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

int substituirArquivo(void) {
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

void cadastrar(void) {
    Contato contato;
    FILE *arquivo;

    contato.id = lerInteiro("ID positivo: ");
    if (contato.id <= 0) {
        printf("O ID precisa ser maior que zero.\n");
        return;
    }
    if (idExiste(contato.id)) {
        printf("Esse ID ja esta cadastrado.\n");
        return;
    }

    lerTexto("Nome: ", contato.nome, 60);
    lerTexto("Telefone: ", contato.telefone, 25);

    arquivo = fopen(ARQUIVO, "a");
    if (arquivo == NULL) {
        printf("Nao foi possivel abrir a agenda.\n");
        return;
    }

    fprintf(arquivo, "%d;%s;%s\n",
            contato.id, contato.nome, contato.telefone);
    fclose(arquivo);
    printf("Contato cadastrado com sucesso.\n");
}

void listar(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    Contato contato;
    int quantidade = 0;
    int invalidos = 0;

    if (arquivo == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return;
    }

    printf("\nID | NOME                       | TELEFONE\n");
    printf("----------------------------------------------\n");
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (linhaParaContato(linha, &contato)) {
            printf("%2d | %-26s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            quantidade++;
        } else {
            invalidos++;
        }
    }

    fclose(arquivo);
    printf("Total: %d contato(s).\n", quantidade);
    if (invalidos > 0) {
        printf("Aviso: %d linha(s) invalida(s) ignorada(s).\n", invalidos);
    }
}

void pesquisar(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (arquivo == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return;
    }

    idProcurado = lerInteiro("ID procurado: ");
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (linhaParaContato(linha, &contato) &&
            contato.id == idProcurado) {
            printf("Encontrado: %d | %s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            encontrado = 1;
            break;
        }
    }

    fclose(arquivo);
    if (!encontrado) printf("Contato nao encontrado.\n");
}

void atualizar(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return;
    }

    destino = fopen(TEMPORARIO, "w");
    if (destino == NULL) {
        fclose(origem);
        printf("Erro ao criar arquivo temporario.\n");
        return;
    }

    idProcurado = lerInteiro("ID que deseja atualizar: ");
    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (!linhaParaContato(linha, &contato)) {
            fputs(linha, destino);
            continue;
        }

        if (contato.id == idProcurado) {
            printf("Contato atual: %s | %s\n",
                   contato.nome, contato.telefone);
            lerTexto("Novo nome: ", contato.nome, 60);
            lerTexto("Novo telefone: ", contato.telefone, 25);
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
        printf("Contato atualizado com sucesso.\n");
    } else {
        printf("Falha na troca. O arquivo original foi preservado.\n");
    }
}

void excluir(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return;
    }

    destino = fopen(TEMPORARIO, "w");
    if (destino == NULL) {
        fclose(origem);
        printf("Erro ao criar arquivo temporario.\n");
        return;
    }

    idProcurado = lerInteiro("ID que deseja excluir: ");
    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (linhaParaContato(linha, &contato) &&
            contato.id == idProcurado) {
            encontrado = 1;
        } else {
            fputs(linha, destino);
        }
    }

    fclose(origem);
    fclose(destino);

    if (!encontrado) {
        remove(TEMPORARIO);
        printf("Contato nao encontrado.\n");
    } else if (substituirArquivo()) {
        printf("Contato excluido com sucesso.\n");
    } else {
        printf("Falha na troca. O arquivo original foi preservado.\n");
    }
}

void criarBackup(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    int caractere;

    if (origem == NULL) {
        printf("Nenhum arquivo para copiar.\n");
        return;
    }

    destino = fopen(BACKUP_USUARIO, "w");
    if (destino == NULL) {
        fclose(origem);
        printf("Erro ao criar o backup.\n");
        return;
    }

    while ((caractere = fgetc(origem)) != EOF) {
        fputc(caractere, destino);
    }

    fclose(origem);
    fclose(destino);
    printf("Backup criado em %s.\n", BACKUP_USUARIO);
}`;

export function TrackNine({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner"><div><p className="section-kicker">Entrega final do curso</p><strong>Quatorze programas em C e a Agenda LevelUp completa</strong><span>Códigos progressivos, arquivo de exemplo, roteiro de testes e versão final para o Dev-C++.</span></div><a className="button-primary" href="/downloads/trilha-09/trilha-09-codigos.zip" download><FileArchive /> Baixar materiais da trilha</a></div>
      <div className="devcpp-banner"><TerminalSquare /><div><strong>Um único arquivo .c, sem projeto C++</strong><p>Abra <code>agenda-levelup-final.c</code> no Dev-C++, compile e execute. O arquivo <code>contatos.txt</code> será criado automaticamente na pasta de execução.</p></div></div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>Um projeto começa antes do código. Primeiro definimos o problema, o que o usuário precisa fazer e como saberemos que a solução funciona. Nossa Agenda LevelUp guardará contatos mesmo depois que o programa for fechado.</p>
        <div className="requirements-board"><div><small>PROBLEMA</small><strong>Contatos desaparecem</strong><p>Dados apenas na memória são perdidos ao encerrar.</p></div><div><small>USUÁRIO</small><strong>Precisa administrar</strong><p>Cadastrar, consultar, corrigir e remover contatos.</p></div><div><small>SOLUÇÃO</small><strong>CRUD persistente</strong><p>Menu em C conectado a um arquivo de texto.</p></div></div>
        <div className="crud-meaning"><div><PlusCircle /><strong>C · Create</strong><span>Cadastrar</span></div><div><Search /><strong>R · Read</strong><span>Listar e pesquisar</span></div><div><Pencil /><strong>U · Update</strong><span>Atualizar</span></div><div><Trash2 /><strong>D · Delete</strong><span>Excluir</span></div></div>
        <h3 className="lesson-subtitle">Requisitos da primeira versão</h3>
        <ul className="exercise-list"><li>Utilizar linguagem C e arquivo <code>.c</code>.</li><li>Salvar cada contato em <code>contatos.txt</code>.</li><li>Impedir IDs repetidos e textos vazios.</li><li>Continuar mostrando o menu até o usuário escolher sair.</li><li>Preservar o arquivo original se uma atualização falhar.</li></ul>
        <Activity title="Separe requisito de detalhe" level="guiada"><p>“O usuário deve pesquisar um contato” é requisito. “Usar a variável <code>encontrado</code>” é requisito ou decisão de implementação?</p><Reveal title="Revelar resposta"><p>É decisão de implementação. O requisito descreve o resultado esperado; a variável é uma das maneiras de construí-lo.</p></Reveal></Activity>
        <Activity title="Escreva critérios de sucesso" level="pratica"><p>Crie um resultado observável para cadastro, pesquisa, atualização e exclusão.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>O mesmo contato precisa de duas representações: uma <code>struct</code> enquanto o programa trabalha e uma linha textual quando ele é persistido. Manter a mesma ordem dos campos permite converter de uma forma para a outra.</p>
        <CodeBlock code={contactModel} filename="modelo-do-contato.c" downloadUrl="/downloads/trilha-09/modelo-do-contato.c" />
        <div className="model-bridge"><div><ContactRound /><small>NA MEMÓRIA</small><code>Contato contato</code></div><span>⇄</span><div><FolderCheck /><small>NO ARQUIVO</small><code>15;Marina;319...</code></div></div>
        <CodeBlock code={parseLine} filename="converter-linha-em-contato.c" downloadUrl="/downloads/trilha-09/converter-linha-em-contato.c" />
        <div className="learning-callout"><ShieldCheck /><div><strong>O ponteiro permite preencher o registro recebido</strong><p>Em <code>Contato *contato</code>, usamos <code>contato-&gt;id</code> porque a função recebeu o endereço da estrutura que será preenchida.</p></div></div>
        <Activity title="Faça a viagem de ida e volta" level="guiada"><p>Converta o contato 9, Larissa Gomes, 313333-2026 para linha. Depois indique quais campos a leitura deve reconstruir.</p><Reveal title="Revelar conversão"><p><code>9;Larissa Gomes;313333-2026</code>. A leitura reconstrói <code>id = 9</code>, <code>nome = "Larissa Gomes"</code> e <code>telefone = "313333-2026"</code>.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p>Um CRUD fica frágil quando cada função lê dados de uma maneira diferente. Centralizamos a leitura numérica e textual para que todo o sistema siga as mesmas regras e mensagens.</p>
        <CodeBlock code={safeInput} filename="funcoes-de-entrada-segura.c" downloadUrl="/downloads/trilha-09/funcoes-de-entrada-segura.c" />
        <div className="validation-gates"><div><span>1</span><strong>A leitura funcionou?</strong><p><code>fgets</code> recebeu uma linha.</p></div><div><span>2</span><strong>O formato é válido?</strong><p>O inteiro não possui texto sobrando.</p></div><div><span>3</span><strong>O campo é permitido?</strong><p>Texto não está vazio nem contém <code>;</code>.</p></div></div>
        <p>A função <code>lerInteiro</code> evita o estado problemático que ocorre quando <code>scanf</code> encontra letras. Já <code>lerTexto</code> protege o delimitador usado no arquivo.</p>
        <Activity title="Teste entradas ruins" level="pratica"><p>Tente <code>abc</code>, <code>12abc</code>, texto vazio e um nome com ponto e vírgula. Explique qual regra rejeita cada entrada.</p></Activity>
        <Activity title="Valide o tamanho" level="desafio"><p>Pesquise o que acontece quando o texto digitado é maior que o vetor. Proponha uma mensagem para esse caso.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>A função <code>main</code> não precisa conhecer os detalhes dos arquivos. Ela coordena o menu e chama uma função responsável por cada opção. Essa separação transforma um código grande em um mapa legível.</p>
        <CodeBlock code={menuBase} filename="menu-base-da-agenda.c" downloadUrl="/downloads/trilha-09/menu-base-da-agenda.c" />
        <div className="project-function-map"><div><Menu /><strong>main</strong><p>Coordena escolhas.</p></div><span>→</span><div><Wrench /><strong>Funções CRUD</strong><p>Executam cada operação.</p></div><span>→</span><div><FolderCheck /><strong>Arquivo</strong><p>Guarda os registros.</p></div></div>
        <div className="concept-grid"><ConceptCard label="COORDENA" title="main" tone="blue">Exibe menu, lê opção e direciona.</ConceptCard><ConceptCard label="EXECUTA" title="cadastrar / listar" tone="amber">Cada função cuida de uma responsabilidade.</ConceptCard><ConceptCard label="REUTILIZA" title="lerTexto / idExiste" tone="slate">Regras comuns servem a várias operações.</ConceptCard></div>
        <Activity title="Trace o caminho da opção 4" level="guiada"><p>Quais etapas acontecem desde a escolha do usuário até a mensagem final?</p><Reveal title="Revelar caminho"><p><code>main</code> lê 4, o <code>switch</code> chama <code>atualizar</code>, a função trabalha com os arquivos e devolve o controle à <code>main</code>, que mostra o menu novamente.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p>Cadastrar é acrescentar uma nova linha, mas o ID precisa identificar somente um contato. Antes de abrir em <code>a</code>, percorremos os registros existentes e verificamos se o número já está em uso.</p>
        <CodeBlock code={uniqueId} filename="verificar-id-existente.c" downloadUrl="/downloads/trilha-09/verificar-id-existente.c" />
        <CodeBlock code={createOperation} filename="operacao-cadastrar.c" downloadUrl="/downloads/trilha-09/operacao-cadastrar.c" />
        <div className="operation-pipeline"><div><small>VALIDAR</small><strong>ID positivo e livre</strong></div><span>→</span><div><small>COLETAR</small><strong>Nome e telefone</strong></div><span>→</span><div><small>PERSISTIR</small><strong>Modo a</strong></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Não verifique o ID depois de gravar</strong><p>Quando a duplicidade for percebida, o arquivo já estará incorreto. Toda validação deve acontecer antes da escrita.</p></div></div>
        <Activity title="Teste o cadastro" level="guiada"><ol className="exercise-list"><li>Cadastre ID 1.</li><li>Tente cadastrar ID 1 novamente.</li><li>Tente ID -2.</li><li>Cadastre ID 2 e abra <code>contatos.txt</code>.</li></ol></Activity>
        <Activity title="Melhore a experiência" level="desafio"><p>Em vez de encerrar quando o ID for inválido, repita a pergunta até receber um ID positivo e disponível.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>Listar percorre o arquivo inteiro, converte somente linhas válidas e apresenta uma tabela. O arquivo inexistente não é um erro fatal: significa apenas que nenhum cadastro foi realizado ainda.</p>
        <CodeBlock code={listOperation} filename="operacao-listar.c" downloadUrl="/downloads/trilha-09/operacao-listar.c" />
        <div className="terminal-output"><span><TerminalSquare /> SAÍDA ORGANIZADA</span><code>ID | NOME | TELEFONE — seguida da quantidade total</code></div>
        <p>A quantidade não é salva separadamente. Ela é calculada durante a leitura, garantindo que o total represente os registros válidos que realmente existem no arquivo.</p>
        <Activity title="Crie um estado vazio" level="guiada"><p>Renomeie temporariamente <code>contatos.txt</code> e execute a listagem. A mensagem é compreensível para quem usa o sistema?</p></Activity>
        <Activity title="Ordenação como evolução" level="desafio"><p>Para ordenar por nome, seria melhor imprimir diretamente ou carregar os registros em um vetor primeiro? Justifique.</p><Reveal title="Revelar raciocínio"><p>Carregar em um vetor permite comparar e trocar registros antes de exibir. A leitura direta segue necessariamente a ordem física do arquivo.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>A pesquisa reaproveita a mesma leitura da listagem, mas possui um objetivo específico. Assim que encontra o ID, mostra o contato, marca <code>encontrado</code> e usa <code>break</code> para evitar trabalho desnecessário.</p>
        <CodeBlock code={searchOperation} filename="operacao-pesquisar.c" downloadUrl="/downloads/trilha-09/operacao-pesquisar.c" />
        <div className="search-states"><div><Search /><strong>Procurando</strong><p>Percorre uma linha por vez.</p></div><div><CheckCircle2 /><strong>Encontrado</strong><p>Exibe e interrompe o laço.</p></div><div><FileSearch /><strong>Fim do arquivo</strong><p>Informa quando não houve correspondência.</p></div></div>
        <Activity title="Pesquise os limites" level="pratica"><p>Teste o primeiro ID, o último ID, um ID inexistente e a agenda vazia.</p></Activity>
        <Activity title="Pesquisa textual" level="desafio"><p>O programa abaixo usa <code>strstr</code> para encontrar uma parte exata do nome. Teste e depois pense em como permitir maiúsculas e minúsculas diferentes.</p><Reveal title="Revelar programa"><CodeBlock code={searchNameChallenge} filename="desafio-pesquisar-por-nome.c" downloadUrl="/downloads/trilha-09/desafio-pesquisar-por-nome.c" /></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[7]} number="08">
        <p>Atualizar combina pesquisa, leitura segura e reescrita. O original nunca é alterado enquanto ainda está sendo lido. Primeiro produzimos um temporário completo; só depois fazemos a troca protegida.</p>
        <CodeBlock code={updateOperation} filename="operacao-atualizar.c" downloadUrl="/downloads/trilha-09/operacao-atualizar.c" />
        <div className="protected-swap"><div><small>1</small><strong>Ler original</strong></div><span>→</span><div><small>2</small><strong>Produzir temporário</strong></div><span>→</span><div><small>3</small><strong>Original vira backup</strong></div><span>→</span><div><small>4</small><strong>Promover temporário</strong></div></div>
        <p>Se a promoção falhar, tentamos devolver o nome original ao backup. Depois de uma troca bem-sucedida, o backup técnico é removido.</p>
        <Activity title="Atualize sem perder vizinhos" level="guiada"><p>Cadastre IDs 1, 2 e 3. Atualize somente o 2 e confirme que os registros 1 e 3 permaneceram idênticos.</p></Activity>
        <Activity title="Preserve linhas inesperadas" level="desafio"><p>Observe o <code>continue</code> usado quando uma linha não pode ser convertida. Por que copiá-la é mais conservador que descartá-la?</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[8]} number="09">
        <p>Excluir usa a mesma troca protegida. A diferença está na construção do temporário: o registro procurado é identificado, mas não é copiado. Todos os demais continuam no novo arquivo.</p>
        <CodeBlock code={deleteOperation} filename="operacao-excluir.c" downloadUrl="/downloads/trilha-09/operacao-excluir.c" />
        <div className="delete-decision"><div><strong>ID diferente</strong><p>Copia a linha para o temporário.</p></div><div className="delete-skip"><strong>ID procurado</strong><p>Pula a linha e marca como encontrado.</p></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>A confirmação seria a próxima melhoria</strong><p>O projeto didático executa após receber o ID. Em um sistema real, mostrar o contato e pedir confirmação reduz exclusões acidentais.</p></div></div>
        <Activity title="Exclua em posições diferentes" level="pratica"><p>Teste a exclusão do primeiro, do último, do único contato restante e de um ID inexistente.</p></Activity>
        <Activity title="Adicione confirmação" level="desafio"><p>Antes de produzir o temporário, pesquise e mostre o contato. Continue somente quando o usuário digitar S.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[9]} number="10">
        <p>Backup e diagnóstico não fazem parte das quatro letras do CRUD, mas tornam o projeto mais confiável. O backup cria uma cópia solicitada pelo usuário; o diagnóstico conta registros válidos e linhas fora do formato.</p>
        <CodeBlock code={backupOperation} filename="operacao-criar-backup.c" downloadUrl="/downloads/trilha-09/operacao-criar-backup.c" />
        <CodeBlock code={diagnostics} filename="diagnostico-do-arquivo.c" downloadUrl="/downloads/trilha-09/diagnostico-do-arquivo.c" />
        <div className="reliability-cards"><div><Archive /><strong>Backup do usuário</strong><p>Cópia duradoura para recuperação manual.</p></div><div><ShieldCheck /><strong>Backup da troca</strong><p>Proteção curta durante atualização e exclusão.</p></div><div><FileSearch /><strong>Diagnóstico</strong><p>Mostra se o formato continua consistente.</p></div></div>
        <Activity title="Simule uma linha inválida" level="guiada"><p>Acrescente manualmente uma linha sem separadores e execute o diagnóstico. Depois remova a linha.</p></Activity>
        <Activity title="Restauração" level="desafio"><p>Crie uma função que copie <code>contatos-backup.txt</code> de volta para <code>contatos.txt</code>, mas somente após confirmação.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[10]} number="11">
        <p>Testar não é executar uma vez e concluir que “funcionou”. Um plano de testes percorre caminhos normais, limites e erros previsíveis, conferindo tanto as mensagens quanto o conteúdo do arquivo.</p>
        <div className="test-matrix"><div><small>CASO 01</small><strong>Agenda vazia</strong><p>Listar, pesquisar, atualizar, excluir e criar backup.</p></div><div><small>CASO 02</small><strong>Cadastro válido</strong><p>ID positivo, nome e telefone completos.</p></div><div><small>CASO 03</small><strong>Entradas inválidas</strong><p>Letras no menu, ID repetido, texto vazio e separador.</p></div><div><small>CASO 04</small><strong>Persistência</strong><p>Fechar, abrir novamente e listar os mesmos dados.</p></div><div><small>CASO 05</small><strong>Alterações</strong><p>Atualizar e excluir primeiro, meio, último e inexistente.</p></div><div><small>CASO 06</small><strong>Integridade</strong><p>Comparar arquivo, backup e total de registros.</p></div></div>
        <Activity title="Registre evidências" level="pratica"><p>Use o roteiro disponível no pacote da trilha. Para cada caso, anote entrada, resultado esperado, resultado obtido e situação.</p></Activity>
        <Activity title="Caça ao bug em dupla" level="desafio"><p>Troque o modo <code>a</code> por <code>w</code> no cadastro sem avisar a dupla. Ela deverá descobrir o defeito usando apenas testes.</p><Reveal title="Revelar efeito"><p>Cada novo cadastro apagará todos os anteriores. O teste de persistência com dois ou mais contatos revela rapidamente o erro.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[11]} number="12">
        <p>Chegou a hora de reunir as peças. Leia primeiro os protótipos: eles funcionam como o sumário do programa. Depois acompanhe a <code>main</code> e visite uma operação por vez.</p>
        <CodeBlock code={finalAgenda} filename="agenda-levelup-final.c" downloadUrl="/downloads/trilha-09/agenda-levelup-final.c" />
        <div className="release-card"><Flag /><div><small>PROJETO CONCLUÍDO</small><strong>Agenda LevelUp 1.0</strong><p>CRUD persistente, entrada segura, IDs únicos, backup, arquivos temporários e funções organizadas.</p></div></div>
        <div className="final-checklist"><div><ClipboardCheck /><h3>Checklist de entrega</h3></div><ul><li><CheckCircle2 />O arquivo está salvo com extensão <code>.c</code>.</li><li><CheckCircle2 />Cadastro, listagem, pesquisa, atualização e exclusão foram testados.</li><li><CheckCircle2 />Os contatos continuam após fechar e abrir o programa.</li><li><CheckCircle2 />Entradas inválidas não quebram o menu.</li><li><CheckCircle2 />O backup foi criado e conferido.</li></ul></div>
        <Activity title="Apresente como desenvolvedor" level="pratica"><p>Demonstre o sistema em até cinco minutos: explique o problema, cadastre dois contatos, reinicie, liste, atualize um, exclua outro e mostre o arquivo.</p></Activity>
        <Activity title="Escolha a versão 2.0" level="desafio"><p>Implemente uma evolução: pesquisa sem diferenciar maiúsculas, confirmação de exclusão, ordenação por nome, campo e-mail ou restauração de backup.</p></Activity>
        <div className="course-completion"><CheckCircle2 /><div><strong>Você saiu do zero e chegou ao primeiro projeto</strong><p>Agora você já consegue decompor problemas, escrever algoritmos, usar decisões, repetições, funções, vetores, estruturas e arquivos para construir uma solução completa em C.</p></div></div>
        <div className="project-package-card"><FileArchive /><div><small>PACOTE FINAL</small><strong>Portal completo pronto para guardar</strong><p>Baixe o projeto integral com todas as trilhas, páginas e materiais do curso.</p></div><a className="button-primary" href="/downloads/PORTAL-LOGICA-C-COMPLETO.zip" download>Baixar portal completo</a></div>
      </TrailSection>
    </div>
  );
}
