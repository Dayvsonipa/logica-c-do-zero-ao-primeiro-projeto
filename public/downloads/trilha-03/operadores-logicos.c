#include <stdio.h>

int main(void) {
    int idade = 20;
    int possuiIngresso = 1;
    int acompanhado = 0;

    printf("Maior e com ingresso: %d\n",
           idade >= 18 && possuiIngresso == 1);
    printf("Pode entrar acompanhado: %d\n",
           idade >= 18 || acompanhado == 1);
    printf("Nao esta acompanhado: %d\n", !acompanhado);
    return 0;
}
