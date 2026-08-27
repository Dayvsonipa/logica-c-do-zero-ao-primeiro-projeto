#include <stdio.h>

int main(void) {
    int numero;

    for (numero = 1; numero <= 20; numero++) {
        if (numero == 7) {
            continue;
        }

        if (numero == 13) {
            break;
        }

        printf("%d ", numero);
    }
    printf("\n");
    return 0;
}
