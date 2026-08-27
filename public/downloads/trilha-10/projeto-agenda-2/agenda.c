#include <stdio.h>
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
}
