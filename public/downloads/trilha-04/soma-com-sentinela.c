#include <stdio.h>

int main(void) {
    float valor, total = 0.0f;

    printf("Digite um valor ou 0 para encerrar: ");
    scanf("%f", &valor);

    while (valor != 0.0f) {
        total += valor;
        printf("Digite outro valor ou 0 para encerrar: ");
        scanf("%f", &valor);
    }

    printf("Total acumulado: R$ %.2f\n", total);
    return 0;
}
