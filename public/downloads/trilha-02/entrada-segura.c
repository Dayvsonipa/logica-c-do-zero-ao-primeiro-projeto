#include <stdio.h>

int main(void) {
    int idade;
    char resposta;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    printf("Deseja continuar? (S/N): ");
    scanf(" %c", &resposta);

    printf("Idade informada: %d\n", idade);
    printf("Resposta informada: %c\n", resposta);
    return 0;
}
