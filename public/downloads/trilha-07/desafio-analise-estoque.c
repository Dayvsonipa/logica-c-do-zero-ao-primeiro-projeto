#include <stdio.h>

#define TAMANHO 4

typedef struct {
    int id;
    char nome[40];
    float preco;
    int estoque;
} Produto;

int main(void) {
    Produto produtos[TAMANHO] = {
        {1, "Teclado", 180.0f, 8},
        {2, "Mouse", 90.0f, 0},
        {3, "Headset", 220.0f, 4},
        {4, "Webcam", 250.0f, 0}
    };
    float valorTotal = 0.0f;
    int semEstoque = 0;
    int i;

    for (i = 0; i < TAMANHO; i++) {
        valorTotal += produtos[i].preco * produtos[i].estoque;
        if (produtos[i].estoque == 0) {
            printf("Sem estoque: %s\n", produtos[i].nome);
            semEstoque++;
        }
    }

    printf("Valor total em estoque: R$ %.2f\n", valorTotal);
    printf("Produtos esgotados: %d\n", semEstoque);
    return 0;
}
