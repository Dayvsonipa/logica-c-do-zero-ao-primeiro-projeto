#include <stdio.h>

#define TAMANHO 5

int main(void) {
    int numeros[TAMANHO];
    int i;

    for (i = 0; i < TAMANHO; i++) {
        printf("Digite o valor da posicao %d: ", i);
        scanf("%d", &numeros[i]);
    }

    printf("\nValores armazenados:\n");
    for (i = 0; i < TAMANHO; i++) {
        printf("numeros[%d] = %d\n", i, numeros[i]);
    }
    return 0;
}
