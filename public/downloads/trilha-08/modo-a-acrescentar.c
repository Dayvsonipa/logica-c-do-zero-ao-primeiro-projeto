#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("placar.txt", "a");

    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo.\n");
        return 1;
    }

    fprintf(arquivo, "Maya;1430\n");
    fclose(arquivo);

    printf("Nova pontuacao adicionada.\n");
    return 0;
}
