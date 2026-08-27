#include <stdio.h>

int main(void) {
    FILE *origem = fopen("contatos.txt", "r");
    FILE *backup;
    int caractere;

    if (origem == NULL) {
        printf("Nenhum arquivo para copiar.\n");
        return 0;
    }

    backup = fopen("contatos-backup.txt", "w");
    if (backup == NULL) {
        printf("Erro ao criar o backup.\n");
        fclose(origem);
        return 1;
    }

    while ((caractere = fgetc(origem)) != EOF) {
        fputc(caractere, backup);
    }

    fclose(origem);
    fclose(backup);
    printf("Backup concluido.\n");
    return 0;
}
