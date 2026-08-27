#include <stdio.h>

int somar(int numero1, int numero2);

int main(void) {
    int resultado;

    resultado = somar(8, 5);
    printf("Resultado: %d\n", resultado);
    printf("Outra soma: %d\n", somar(20, 7));
    return 0;
}

int somar(int numero1, int numero2) {
    int total = numero1 + numero2;
    return total;
}
