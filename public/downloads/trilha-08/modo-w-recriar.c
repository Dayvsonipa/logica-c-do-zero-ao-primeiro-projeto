#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("placar.txt", "w");

    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo.\n");
        return 1;
    }

    fprintf(arquivo, "Luna;1200\n");
    fprintf(arquivo, "Kai;950\n");
    fclose(arquivo);

    printf("Placar recriado.\n");
    return 0;
}
