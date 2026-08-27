#include <stdio.h>

int main(void) {
    int opcao, quantidade;
    float preco, subtotal, total = 0.0f;

    do {
        printf("\n=== LANCHONETE LEVELUP ===\n");
        printf("1 - Hamburguer  R$ 18.00\n");
        printf("2 - Batata      R$ 10.00\n");
        printf("3 - Suco        R$  7.00\n");
        printf("4 - Ver total\n");
        printf("0 - Fechar pedido\n");
        printf("Opcao: ");
        scanf("%d", &opcao);

        if (opcao >= 1 && opcao <= 3) {
            printf("Quantidade: ");
            scanf("%d", &quantidade);

            if (quantidade <= 0) {
                printf("Quantidade invalida.\n");
                continue;
            }

            switch (opcao) {
                case 1: preco = 18.0f; break;
                case 2: preco = 10.0f; break;
                default: preco = 7.0f;
            }

            subtotal = preco * quantidade;
            total += subtotal;
            printf("Item adicionado: R$ %.2f\n", subtotal);
        } else if (opcao == 4) {
            printf("Total parcial: R$ %.2f\n", total);
        } else if (opcao != 0) {
            printf("Opcao invalida.\n");
        }
    } while (opcao != 0);

    printf("Total do pedido: R$ %.2f\n", total);
    printf("Pedido finalizado. Obrigado!\n");
    return 0;
}
