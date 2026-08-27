#include <stdio.h>

int main(void) {
    int id = 12;
    char nome[] = "Marina Alves";
    char resposta;

    printf("Contato localizado: %d | %s\n", id, nome);
    printf("Confirmar exclusao? (S/N): ");
    scanf(" %c", &resposta);

    if (resposta == 'S' || resposta == 's') {
        printf("Exclusao autorizada.\n");
    } else {
        printf("Operacao cancelada. Nenhum dado foi alterado.\n");
    }
    return 0;
}
