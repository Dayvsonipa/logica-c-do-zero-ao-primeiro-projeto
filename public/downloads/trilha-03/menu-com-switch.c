#include <stdio.h>

int main(void) {
    int opcao;

    printf("=== MENU DE JOGOS ===\n");
    printf("1 - Iniciar jogo\n");
    printf("2 - Ver instrucoes\n");
    printf("3 - Sair\n");
    printf("Escolha uma opcao: ");
    scanf("%d", &opcao);

    switch (opcao) {
        case 1:
            printf("Preparando a partida...\n");
            break;
        case 2:
            printf("Use as setas para movimentar.\n");
            break;
        case 3:
            printf("Ate a proxima!\n");
            break;
        default:
            printf("Opcao invalida.\n");
    }
    return 0;
}
