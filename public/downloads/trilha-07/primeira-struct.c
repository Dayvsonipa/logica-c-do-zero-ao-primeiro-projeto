#include <stdio.h>

struct Produto {
    int codigo;
    char nome[50];
    float preco;
    int estoque;
};

int main(void) {
    struct Produto produto;

    produto.codigo = 101;
    produto.preco = 149.90f;
    produto.estoque = 8;

    printf("Codigo: %d\n", produto.codigo);
    printf("Preco: R$ %.2f\n", produto.preco);
    printf("Estoque: %d unidade(s)\n", produto.estoque);
    return 0;
}
