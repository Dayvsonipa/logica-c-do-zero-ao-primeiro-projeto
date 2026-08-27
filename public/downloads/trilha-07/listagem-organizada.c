#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
    int estoque;
} Produto;

void listarProdutos(const Produto produtos[], int quantidade);

int main(void) {
    Produto produtos[3] = {
        {1, "Teclado", 180.0f, 8},
        {2, "Mouse", 90.0f, 15},
        {3, "Headset", 220.0f, 4}
    };

    listarProdutos(produtos, 3);
    return 0;
}

void listarProdutos(const Produto produtos[], int quantidade) {
    int i;

    if (quantidade == 0) {
        printf("Nenhum produto cadastrado.\n");
        return;
    }

    printf("ID | NOME                 | PRECO      | ESTOQUE\n");
    printf("------------------------------------------------\n");
    for (i = 0; i < quantidade; i++) {
        printf("%2d | %-20s | R$ %7.2f | %d\n",
               produtos[i].id, produtos[i].nome,
               produtos[i].preco, produtos[i].estoque);
    }
}
