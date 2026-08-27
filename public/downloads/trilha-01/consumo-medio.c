#include <stdio.h>

int main(void) {
    float distancia, litros, consumo;

    printf("Distancia percorrida em km: ");
    scanf("%f", &distancia);

    printf("Combustivel gasto em litros: ");
    scanf("%f", &litros);

    consumo = distancia / litros;

    printf("Consumo medio: %.2f km/l\n", consumo);
    return 0;
}
