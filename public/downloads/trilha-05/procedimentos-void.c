#include <stdio.h>

void exibirCabecalho(void);
void exibirSeparador(char simbolo, int tamanho);

int main(void) {
    exibirCabecalho();
    printf("Aluno: Alex\n");
    printf("Media: 8.50\n");
    exibirSeparador('-', 30);
    return 0;
}

void exibirCabecalho(void) {
    printf("RELATORIO DO ALUNO\n");
    exibirSeparador('=', 30);
}

void exibirSeparador(char simbolo, int tamanho) {
    int i;
    for (i = 0; i < tamanho; i++) {
        printf("%c", simbolo);
    }
    printf("\n");
}
