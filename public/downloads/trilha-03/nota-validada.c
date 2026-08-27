#include <stdio.h>

int main(void) {
    float nota;

    printf("Digite uma nota de 0 a 10: ");
    scanf("%f", &nota);

    if (nota < 0.0f || nota > 10.0f) {
        printf("Erro: a nota deve estar entre 0 e 10.\n");
    } else if (nota >= 7.0f) {
        printf("Aluno aprovado.\n");
    } else if (nota >= 5.0f) {
        printf("Aluno em recuperacao.\n");
    } else {
        printf("Aluno reprovado.\n");
    }
    return 0;
}
