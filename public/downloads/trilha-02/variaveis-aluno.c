#include <stdio.h>

int main(void) {
    int idade = 16;
    float media = 8.5f;
    char turma = 'A';
    const int ANO_ATUAL = 2026;

    printf("Idade: %d anos\n", idade);
    printf("Media: %.1f\n", media);
    printf("Turma: %c\n", turma);
    printf("Ano atual: %d\n", ANO_ATUAL);
    return 0;
}
