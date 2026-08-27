#include <stdio.h>

void tentarAlterar(int numero);

int main(void) {
    int valor = 10;

    printf("Antes da funcao: %d\n", valor);
    tentarAlterar(valor);
    printf("Depois da funcao: %d\n", valor);
    return 0;
}

void tentarAlterar(int numero) {
    numero = 99;
    printf("Dentro da funcao: %d\n", numero);
}
