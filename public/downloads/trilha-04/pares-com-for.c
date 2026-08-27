#include <stdio.h>

int main(void) {
    int numero;

    printf("Numeros pares de 2 a 20:\n");
    for (numero = 2; numero <= 20; numero += 2) {
        printf("%d ", numero);
    }
    printf("\n");
    return 0;
}
