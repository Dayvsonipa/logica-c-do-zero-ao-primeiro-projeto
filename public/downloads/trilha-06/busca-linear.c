#include <stdio.h>

#define TAMANHO 6

int main(void) {
    int codigos[TAMANHO] = {104, 205, 310, 412, 518, 620};
    int procurado, posicao = -1;
    int i;

    printf("Digite o codigo procurado: ");
    scanf("%d", &procurado);

    for (i = 0; i < TAMANHO; i++) {
        if (codigos[i] == procurado) {
            posicao = i;
            break;
        }
    }

    if (posicao == -1) {
        printf("Codigo nao encontrado.\n");
    } else {
        printf("Codigo encontrado no indice %d.\n", posicao);
    }
    return 0;
}
