#include <stdio.h>

int main(void) {
    float peso, altura, imc;

    printf("Peso em kg: ");
    scanf("%f", &peso);
    printf("Altura em metros: ");
    scanf("%f", &altura);

    if (peso <= 0 || altura <= 0) {
        printf("Dados invalidos.\n");
    } else {
        imc = peso / (altura * altura);
        printf("IMC: %.2f\n", imc);

        if (imc < 18.5f) {
            printf("Classificacao: abaixo do peso.\n");
        } else if (imc < 25.0f) {
            printf("Classificacao: peso adequado.\n");
        } else if (imc < 30.0f) {
            printf("Classificacao: sobrepeso.\n");
        } else {
            printf("Classificacao: obesidade.\n");
        }
    }
    return 0;
}
