#include <stdio.h>

float areaRetangulo(float base, float altura);
float areaTriangulo(float base, float altura);

int main(void) {
    float base = 8.0f;
    float altura = 5.0f;

    printf("Area do retangulo: %.2f\n",
           areaRetangulo(base, altura));
    printf("Area do triangulo: %.2f\n",
           areaTriangulo(base, altura));
    return 0;
}

float areaRetangulo(float base, float altura) {
    return base * altura;
}

float areaTriangulo(float base, float altura) {
    return areaRetangulo(base, altura) / 2.0f;
}
