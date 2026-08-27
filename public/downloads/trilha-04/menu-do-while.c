#include <stdio.h>

int main(void) {
    int opcao;

    do {
        printf("\n=== MENU ===\n");
        printf("1 - Exibir mensagem\n");
        printf("0 - Sair\n");
        printf("Opcao: ");
        scanf("%d", &opcao);

        if (opcao == 1) {
            printf("Continue praticando C!\n");
        } else if (opcao != 0) {
            printf("Opcao invalida.\n");
        }
    } while (opcao != 0);

    printf("Programa encerrado.\n");
    return 0;
}
