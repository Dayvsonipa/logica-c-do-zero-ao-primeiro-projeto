#include <stdio.h>

void mostrarDobro(int numero);
void desenharLinha(char simbolo, int quantidade);

int main(void) {
    mostrarDobro(7);
    mostrarDobro(12);

    desenharLinha('-', 25);
    desenharLinha('=', 10);
    return 0;
}

void mostrarDobro(int numero) {
    printf("O dobro de %d e %d.\n", numero, numero * 2);
}

void desenharLinha(char simbolo, int quantidade) {
    int i;
    for (i = 1; i <= quantidade; i++) {
        printf("%c", simbolo);
    }
    printf("\n");
}
