#include <stdio.h>

int main(void) {
    int idade;
    float altura;
    char turma;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    printf("Digite sua altura em metros: ");
    scanf("%f", &altura);

    printf("Digite a letra da turma: ");
    scanf(" %c", &turma);

    printf("Idade: %d | Altura: %.2f | Turma: %c\n",
           idade, altura, turma);
    return 0;
}
