#include <stdio.h>

int main(void) {
    int quantidade;
    float precoUnitario, total;

    printf("Quantidade de produtos: ");
    scanf("%d", &quantidade);

    printf("Preco unitario: R$ ");
    scanf("%f", &precoUnitario);

    total = quantidade * precoUnitario;

    printf("Total da compra: R$ %.2f\n", total);
    return 0;
}
