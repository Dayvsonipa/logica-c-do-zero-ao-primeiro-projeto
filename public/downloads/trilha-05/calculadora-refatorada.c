#include <stdio.h>

void exibirMenu(void);
float somar(float a, float b);
float subtrair(float a, float b);

int main(void) {
    int opcao;
    float numero1, numero2;

    do {
        exibirMenu();
        scanf("%d", &opcao);

        if (opcao == 1 || opcao == 2) {
            printf("Digite dois numeros: ");
            scanf("%f %f", &numero1, &numero2);
        }

        switch (opcao) {
            case 1:
                printf("Resultado: %.2f\n", somar(numero1, numero2));
                break;
            case 2:
                printf("Resultado: %.2f\n", subtrair(numero1, numero2));
                break;
            case 0:
                printf("Programa encerrado.\n");
                break;
            default:
                printf("Opcao invalida.\n");
        }
    } while (opcao != 0);
    return 0;
}

void exibirMenu(void) {
    printf("\n=== CALCULADORA ORGANIZADA ===\n");
    printf("1 - Somar\n2 - Subtrair\n0 - Sair\n");
    printf("Opcao: ");
}

float somar(float a, float b) { return a + b; }
float subtrair(float a, float b) { return a - b; }
