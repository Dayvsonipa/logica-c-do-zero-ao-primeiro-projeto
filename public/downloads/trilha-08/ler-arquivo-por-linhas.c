#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("placar.txt", "r");
    char linha[120];
    int numero = 1;

    if (arquivo == NULL) {
        printf("Arquivo placar.txt nao encontrado.\n");
        return 1;
    }

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        printf("Linha %d: %s", numero, linha);
        numero++;
    }

    fclose(arquivo);
    return 0;
}
