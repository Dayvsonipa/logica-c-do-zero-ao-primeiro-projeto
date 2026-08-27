#include <stdio.h>

void exibirCardapio(void);
float obterPreco(int opcao);
int lerQuantidadeValida(void);

int main(void) {
    int opcao, quantidade;
    float preco, total = 0.0f;

    do {
        exibirCardapio();
        scanf("%d", &opcao);

        if (opcao >= 1 && opcao <= 3) {
            preco = obterPreco(opcao);
            quantidade = lerQuantidadeValida();
            total += preco * quantidade;
            printf("Total parcial: R$ %.2f\n", total);
        } else if (opcao != 0) {
            printf("Opcao invalida.\n");
        }
    } while (opcao != 0);

    printf("Total final: R$ %.2f\n", total);
    return 0;
}

void exibirCardapio(void) {
    printf("\n=== LANCHONETE LEVELUP ===\n");
    printf("1 - Hamburguer  R$ 18.00\n");
    printf("2 - Batata      R$ 10.00\n");
    printf("3 - Suco        R$  7.00\n");
    printf("0 - Fechar pedido\nOpcao: ");
}

float obterPreco(int opcao) {
    switch (opcao) {
        case 1: return 18.0f;
        case 2: return 10.0f;
        default: return 7.0f;
    }
}

int lerQuantidadeValida(void) {
    int quantidade;
    do {
        printf("Quantidade: ");
        scanf("%d", &quantidade);
        if (quantidade <= 0) {
            printf("Digite uma quantidade positiva.\n");
        }
    } while (quantidade <= 0);
    return quantidade;
}
