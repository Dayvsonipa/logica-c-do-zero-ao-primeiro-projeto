#include <stdio.h>

int main(void) {
    int numero, multiplicador;

    printf("Digite um numero: ");
    scanf("%d", &numero);

    for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
        printf("%d x %d = %d\n",
               numero, multiplicador, numero * multiplicador);
    }
    return 0;
}
