#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("mensagem.txt", "r");
    int caractere;

    if (arquivo == NULL) {
        printf("Crie mensagem.txt antes de executar.\n");
        return 1;
    }

    while ((caractere = fgetc(arquivo)) != EOF) {
        putchar(caractere);
    }

    fclose(arquivo);
    return 0;
}
