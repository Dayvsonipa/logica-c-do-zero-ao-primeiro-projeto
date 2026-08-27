#include <stdio.h>

int main(void) {
    int linha, coluna;

    for (linha = 1; linha <= 4; linha++) {
        for (coluna = 1; coluna <= 8; coluna++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
