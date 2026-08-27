#include <stdio.h>

int main(void) {
    int quantidade = 12;
    float preco = 39.90f;
    double distancia = 123456.789;
    char categoria = 'B';

    printf("Quantidade: %d\n", quantidade);
    printf("Preco: %.2f\n", preco);
    printf("Distancia: %.3f\n", distancia);
    printf("Categoria: %c\n", categoria);

    printf("int ocupa %zu byte(s).\n", sizeof(int));
    printf("float ocupa %zu byte(s).\n", sizeof(float));
    printf("double ocupa %zu byte(s).\n", sizeof(double));
    printf("char ocupa %zu byte(s).\n", sizeof(char));
    return 0;
}
