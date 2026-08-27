#include <stdio.h>

float lerNotaValida(void);

int main(void) {
    float nota1, nota2, media;

    printf("Primeira nota\n");
    nota1 = lerNotaValida();

    printf("Segunda nota\n");
    nota2 = lerNotaValida();

    media = (nota1 + nota2) / 2.0f;
    printf("Media: %.2f\n", media);
    return 0;
}

float lerNotaValida(void) {
    float nota;

    do {
        printf("Digite uma nota de 0 a 10: ");
        scanf("%f", &nota);

        if (nota < 0.0f || nota > 10.0f) {
            printf("Nota invalida. Tente novamente.\n");
        }
    } while (nota < 0.0f || nota > 10.0f);

    return nota;
}
