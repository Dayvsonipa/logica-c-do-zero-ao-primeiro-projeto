#include <stdio.h>
#include "agenda.h"

int main(void) {
    int opcao;

    do {
        exibirMenu();
        opcao = lerInteiro("Opcao: ");

        switch (opcao) {
            case 1: cadastrar(); break;
            case 2: listarOrdenado(); break;
            case 3: pesquisarPorNome(); break;
            case 4: atualizarParcial(); break;
            case 5: excluirComConfirmacao(); break;
            case 6: criarBackup(); break;
            case 7: restaurarBackup(); break;
            case 8: exibirRelatorio(); break;
            case 0: printf("Agenda 2.0 encerrada.\n"); break;
            default: printf("Escolha uma opcao de 0 a 8.\n");
        }
    } while (opcao != 0);

    return 0;
}
