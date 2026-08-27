#include <stdio.h>

int main(void) {
    int idade;
    char estudante;
    float preco = 30.0f;

    printf("Digite a idade: ");
    scanf("%d", &idade);

    printf("E estudante? (S/N): ");
    scanf(" %c", &estudante);

    if (idade < 0 || idade > 120) {
        printf("Idade invalida.\n");
    } else {
        if (idade <= 12) {
            preco = 15.0f;
        } else if (idade >= 60) {
            preco = 12.0f;
        } else if (estudante == 'S' || estudante == 's') {
            preco = 18.0f;
        }

        printf("Valor do ingresso: R$ %.2f\n", preco);
    }
    return 0;
}
