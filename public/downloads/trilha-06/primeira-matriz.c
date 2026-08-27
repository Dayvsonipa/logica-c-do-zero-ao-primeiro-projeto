#include <stdio.h>

#define ALUNOS 3
#define NOTAS 2

int main(void) {
    float boletim[ALUNOS][NOTAS] = {
        {8.0f, 7.5f},
        {6.0f, 9.0f},
        {7.0f, 8.5f}
    };

    printf("Aluno 1, nota 1: %.1f\n", boletim[0][0]);
    printf("Aluno 2, nota 2: %.1f\n", boletim[1][1]);
    printf("Aluno 3, nota 1: %.1f\n", boletim[2][0]);
    return 0;
}
