#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

Produto aplicarDesconto(Produto produto, float percentual);

int main(void) {
    Produto original = {5, "Webcam", 300.0f};
    Produto promocional;

    promocional = aplicarDesconto(original, 10.0f);

    printf("Preco original: R$ %.2f\n", original.preco);
    printf("Preco promocional: R$ %.2f\n", promocional.preco);
    return 0;
}

Produto aplicarDesconto(Produto produto, float percentual) {
    produto.preco *= 1.0f - percentual / 100.0f;
    return produto;
}
