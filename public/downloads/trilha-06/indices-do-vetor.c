#include <stdio.h>

int main(void) {
    float notas[4] = {7.5f, 8.0f, 6.5f, 9.0f};

    notas[2] = 7.0f;

    printf("notas[0] = %.1f\n", notas[0]);
    printf("notas[1] = %.1f\n", notas[1]);
    printf("notas[2] = %.1f\n", notas[2]);
    printf("notas[3] = %.1f\n", notas[3]);
    return 0;
}
