#include <stdio.h>

int main(void) {
    int opcao;
    float numero1, numero2;

    do {
        printf("\n=== CALCULADORA ===\n");
        printf("1 - Somar\n");
        printf("2 - Subtrair\n");
        printf("0 - Sair\n");
        printf("Opcao: ");
        scanf("%d", &opcao);

        if (opcao == 1 || opcao == 2) {
            printf("Digite dois numeros: ");
            scanf("%f %f", &numero1, &numero2);
        }

        switch (opcao) {
            case 1:
                printf("Resultado: %.2f\n", numero1 + numero2);
                break;
            case 2:
                printf("Resultado: %.2f\n", numero1 - numero2);
                break;
            case 0:
                printf("Ate a proxima!\n");
                break;
            default:
                printf("Opcao invalida.\n");
        }
    } while (opcao != 0);
    return 0;
}
