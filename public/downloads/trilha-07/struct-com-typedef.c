#include <stdio.h>

typedef struct {
    int matricula;
    char nome[60];
    float media;
} Aluno;

int main(void) {
    Aluno aluno = {202601, "Marina Alves", 8.5f};

    printf("Matricula: %d\n", aluno.matricula);
    printf("Nome: %s\n", aluno.nome);
    printf("Media: %.1f\n", aluno.media);
    return 0;
}
