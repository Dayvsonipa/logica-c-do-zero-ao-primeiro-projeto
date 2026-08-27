#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

void exibirProduto(Produto produto);
float calcularValorComDesconto(Produto produto, float percentual);

int main(void) {
    Produto produto = {10, "Headset", 200.0f};

    exibirProduto(produto);
    printf("Com 15%% de desconto: R$ %.2f\n",
           calcularValorComDesconto(produto, 15.0f));
    return 0;
}

void exibirProduto(Produto produto) {
    printf("%d | %s | R$ %.2f\n",
           produto.id, produto.nome, produto.preco);
}

float calcularValorComDesconto(Produto produto, float percentual) {
    return produto.preco * (1.0f - percentual / 100.0f);
}
