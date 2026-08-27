#include <stdio.h>

int main(void) {
    int usuarioCorreto, senhaCorreta;

    printf("Usuario correto? (1-Sim / 0-Nao): ");
    scanf("%d", &usuarioCorreto);

    printf("Senha correta? (1-Sim / 0-Nao): ");
    scanf("%d", &senhaCorreta);

    if (usuarioCorreto == 1) {
        if (senhaCorreta == 1) {
            printf("Acesso liberado.\n");
        } else {
            printf("Senha incorreta.\n");
        }
    } else {
        printf("Usuario nao encontrado.\n");
    }
    return 0;
}
