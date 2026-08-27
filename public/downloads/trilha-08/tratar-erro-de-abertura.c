#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("dados.txt", "r");

    if (arquivo == NULL) {
        perror("Nao foi possivel abrir dados.txt");
        return 1;
    }

    printf("Arquivo aberto para leitura.\n");
    fclose(arquivo);
    return 0;
}
