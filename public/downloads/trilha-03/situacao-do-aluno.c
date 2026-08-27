#include <stdio.h>

int main(void) {
    float media;

    printf("Digite a media do aluno: ");
    scanf("%f", &media);

    if (media >= 7.0f) {
        printf("Situacao: aprovado.\n");
    } else if (media >= 5.0f) {
        printf("Situacao: recuperacao.\n");
    } else {
        printf("Situacao: reprovado.\n");
    }
    return 0;
}
