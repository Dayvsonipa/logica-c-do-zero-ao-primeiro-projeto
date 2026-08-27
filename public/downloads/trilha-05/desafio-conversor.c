#include <stdio.h>

float celsiusParaFahrenheit(float celsius);
float quilometrosParaMilhas(float quilometros);

int main(void) {
    int opcao;
    float valor;

    printf("1 - Celsius para Fahrenheit\n");
    printf("2 - Quilometros para milhas\n");
    printf("Opcao: ");
    scanf("%d", &opcao);
    printf("Valor: ");
    scanf("%f", &valor);

    if (opcao == 1) {
        printf("Resultado: %.2f F\n",
               celsiusParaFahrenheit(valor));
    } else if (opcao == 2) {
        printf("Resultado: %.2f milha(s)\n",
               quilometrosParaMilhas(valor));
    } else {
        printf("Opcao invalida.\n");
    }
    return 0;
}

float celsiusParaFahrenheit(float celsius) {
    return celsius * 9.0f / 5.0f + 32.0f;
}

float quilometrosParaMilhas(float quilometros) {
    return quilometros * 0.621371f;
}
