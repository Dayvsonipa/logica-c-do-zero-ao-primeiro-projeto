#include <stdio.h>

int main(void) {
    int semParenteses = 10 + 2 * 3;
    int comParenteses = (10 + 2) * 3;
    float nota1 = 7.0f;
    float nota2 = 8.0f;
    float nota3 = 9.0f;
    float media = (nota1 + nota2 + nota3) / 3.0f;

    printf("10 + 2 * 3 = %d\n", semParenteses);
    printf("(10 + 2) * 3 = %d\n", comParenteses);
    printf("Media: %.2f\n", media);
    return 0;
}
