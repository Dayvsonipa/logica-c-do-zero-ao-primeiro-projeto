#include <stdio.h>

int main(void) {
    int quantidade, aluno = 1;
    float nota, soma = 0.0f, media;

    printf("Quantidade de alunos: ");
    scanf("%d", &quantidade);

    if (quantidade <= 0) {
        printf("Quantidade invalida.\n");
    } else {
        while (aluno <= quantidade) {
            printf("Nota do aluno %d: ", aluno);
            scanf("%f", &nota);
            soma += nota;
            aluno++;
        }

        media = soma / quantidade;
        printf("Media da turma: %.2f\n", media);
    }
    return 0;
}
