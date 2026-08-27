#include <stdio.h>

int main(void) {
    float nota;

    printf("Digite uma nota de 0 a 10: ");
    scanf("%f", &nota);

    while (nota < 0.0f || nota > 10.0f) {
        printf("Nota invalida. Digite novamente: ");
        scanf("%f", &nota);
    }

    printf("Nota registrada: %.1f\n", nota);
    return 0;
}
