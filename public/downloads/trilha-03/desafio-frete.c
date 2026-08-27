#include <stdio.h>

int main(void) {
    float valorCompra, frete;
    int regiao;

    printf("Valor da compra: R$ ");
    scanf("%f", &valorCompra);
    printf("Regiao (1-Sudeste, 2-Sul, 3-Outras): ");
    scanf("%d", &regiao);

    if (valorCompra < 0) {
        printf("Valor de compra invalido.\n");
    } else if (valorCompra >= 200.0f) {
        printf("Frete gratis!\n");
    } else {
        switch (regiao) {
            case 1: frete = 15.0f; break;
            case 2: frete = 20.0f; break;
            case 3: frete = 30.0f; break;
            default: frete = -1.0f;
        }

        if (frete < 0) {
            printf("Regiao invalida.\n");
        } else {
            printf("Frete: R$ %.2f\n", frete);
            printf("Total: R$ %.2f\n", valorCompra + frete);
        }
    }
    return 0;
}
