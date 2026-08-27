#include <stdio.h>

void exibirMenu(void);

int main(void) {
    int opcao;

    do {
        exibirMenu();
        scanf("%d", &opcao);

        switch (opcao) {
            case 1: printf("Cadastrar escolhido.\n"); break;
            case 2: printf("Listar escolhido.\n"); break;
            case 3: printf("Pesquisar escolhido.\n"); break;
            case 4: printf("Atualizar escolhido.\n"); break;
            case 5: printf("Excluir escolhido.\n"); break;
            case 6: printf("Backup escolhido.\n"); break;
            case 0: printf("Agenda encerrada.\n"); break;
            default: printf("Opcao invalida.\n");
        }
    } while (opcao != 0);

    return 0;
}

void exibirMenu(void) {
    printf("\n=== AGENDA LEVELUP ===\n");
    printf("1 - Cadastrar\n");
    printf("2 - Listar\n");
    printf("3 - Pesquisar\n");
    printf("4 - Atualizar\n");
    printf("5 - Excluir\n");
    printf("6 - Criar backup\n");
    printf("0 - Sair\n");
    printf("Opcao: ");
}
