#include <stdio.h>

int main(void) {
    float saldo, valorCompra;

    printf("Informe seu saldo: R$ ");
    scanf("%f", &saldo);

    printf("Informe o valor da compra: R$ ");
    scanf("%f", &valorCompra);

    if (saldo >= valorCompra) {
        printf("Compra autorizada!\n");
    }

    printf("Obrigado por usar o sistema.\n");
    return 0;
}
