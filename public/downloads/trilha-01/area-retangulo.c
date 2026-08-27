#include <stdio.h>

int main(void) {
    float base, altura, area;

    printf("Digite a base: ");
    scanf("%f", &base);

    printf("Digite a altura: ");
    scanf("%f", &altura);

    area = base * altura;

    printf("Area do retangulo: %.2f\n", area);
    return 0;
}
