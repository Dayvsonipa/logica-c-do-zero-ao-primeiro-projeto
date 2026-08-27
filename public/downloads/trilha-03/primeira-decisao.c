#include <stdio.h>

int main(void) {
    int temperatura;

    printf("Digite a temperatura atual: ");
    scanf("%d", &temperatura);

    if (temperatura > 30) {
        printf("Dia quente: beba bastante agua!\n");
    }

    printf("Programa encerrado.\n");
    return 0;
}
