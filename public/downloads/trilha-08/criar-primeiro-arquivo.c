#include <stdio.h>

int main(void) {
    FILE *arquivo;

    arquivo = fopen("mensagem.txt", "w");

    if (arquivo == NULL) {
        printf("Nao foi possivel criar o arquivo.\n");
        return 1;
    }

    fputs("Meu primeiro arquivo criado em C!\n", arquivo);
    fclose(arquivo);

    printf("Arquivo criado com sucesso.\n");
    return 0;
}
