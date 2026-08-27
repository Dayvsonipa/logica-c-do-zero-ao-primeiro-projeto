#include <stdio.h>

int main(void) {
    int totalMinutos, horas, minutosRestantes;

    printf("Digite o total de minutos: ");
    scanf("%d", &totalMinutos);

    horas = totalMinutos / 60;
    minutosRestantes = totalMinutos % 60;

    printf("%d minuto(s) = %d hora(s) e %d minuto(s).\n",
           totalMinutos, horas, minutosRestantes);
    return 0;
}
