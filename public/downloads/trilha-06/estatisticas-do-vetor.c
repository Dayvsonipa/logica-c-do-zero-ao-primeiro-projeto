#include <stdio.h>

#define TAMANHO 5

int main(void) {
    float valores[TAMANHO] = {12.5f, 8.0f, 19.5f, 6.0f, 14.0f};
    float soma = 0.0f;
    float maior = valores[0];
    float menor = valores[0];
    int i;

    for (i = 0; i < TAMANHO; i++) {
        soma += valores[i];

        if (valores[i] > maior) {
            maior = valores[i];
        }
        if (valores[i] < menor) {
            menor = valores[i];
        }
    }

    printf("Soma: %.2f\n", soma);
    printf("Media: %.2f\n", soma / TAMANHO);
    printf("Maior: %.2f\n", maior);
    printf("Menor: %.2f\n", menor);
    return 0;
}
