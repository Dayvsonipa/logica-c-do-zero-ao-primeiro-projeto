#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
    int estoque;
} Produto;

int main(void) {
    Produto teclado = {1, "Teclado mecanico", 249.90f, 12};
    Produto mouse = {
        .id = 2,
        .nome = "Mouse gamer",
        .preco = 129.50f,
        .estoque = 20
    };

    printf("%d | %s | R$ %.2f | %d un.\n",
           teclado.id, teclado.nome, teclado.preco, teclado.estoque);
    printf("%d | %s | R$ %.2f | %d un.\n",
           mouse.id, mouse.nome, mouse.preco, mouse.estoque);
    return 0;
}
