#include <stdio.h>

int main(void) {
    int numero = 1;
    int soma = 0;

    while (numero <= 5) {
        soma = soma + numero;
        printf("Somei %d. Total agora: %d\n", numero, soma);
        numero++;
    }

    printf("Soma final: %d\n", soma);
    return 0;
}
