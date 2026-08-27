#include <stdio.h>

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
}
