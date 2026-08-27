#include <stdio.h>

int main(void) {
    int aluno = 1;
    int aprovados = 0;
    float nota;

    while (aluno <= 5) {
        printf("Nota do aluno %d: ", aluno);
        scanf("%f", &nota);

        if (nota >= 7.0f) {
            aprovados++;
        }

        aluno++;
    }

    printf("Total de aprovados: %d\n", aprovados);
    return 0;
}
