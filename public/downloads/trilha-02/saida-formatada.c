#include <stdio.h>

int main(void) {
    float preco = 129.9f;
    int estoque = 7;
    char setor = 'G';

    printf("=== FICHA DO PRODUTO ===\n");
    printf("Produto : Teclado mecanico\n");
    printf("Preco   : R$ %.2f\n", preco);
    printf("Estoque : %d unidade(s)\n", estoque);
    printf("Setor   : %c\n", setor);
    return 0;
}
