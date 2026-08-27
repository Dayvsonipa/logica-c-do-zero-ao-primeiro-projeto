#include <stdio.h>

int main(void) {
    int tabuada, multiplicador;

    for (tabuada = 1; tabuada <= 5; tabuada++) {
        printf("\n=== TABUADA DO %d ===\n", tabuada);

        for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
            printf("%d x %d = %d\n",
                   tabuada, multiplicador, tabuada * multiplicador);
        }
    }
    return 0;
}
