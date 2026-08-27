#include <stdio.h>

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
}
