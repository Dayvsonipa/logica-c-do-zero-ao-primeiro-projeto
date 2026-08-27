#include <stdio.h>

#define LINHAS 3
#define COLUNAS 3

int main(void) {
    int matriz[LINHAS][COLUNAS];
    int linha, coluna, soma = 0;

    for (linha = 0; linha < LINHAS; linha++) {
        for (coluna = 0; coluna < COLUNAS; coluna++) {
            printf("Valor [%d][%d]: ", linha, coluna);
            scanf("%d", &matriz[linha][coluna]);
            soma += matriz[linha][coluna];
        }
    }

    printf("\nMatriz informada:\n");
    for (linha = 0; linha < LINHAS; linha++) {
        for (coluna = 0; coluna < COLUNAS; coluna++) {
            printf("%4d", matriz[linha][coluna]);
        }
        printf("\n");
    }
    printf("Soma de todos os valores: %d\n", soma);
    return 0;
}
