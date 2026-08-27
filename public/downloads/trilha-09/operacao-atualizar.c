#include <stdio.h>
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
}
