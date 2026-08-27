#include <stdio.h>

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
}
