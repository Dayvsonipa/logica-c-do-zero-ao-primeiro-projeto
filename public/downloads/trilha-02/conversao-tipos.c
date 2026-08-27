#include <stdio.h>

int main(void) {
    int totalPontos = 7;
    int jogadores = 2;
    float mediaIncorreta;
    float mediaCorreta;

    mediaIncorreta = totalPontos / jogadores;
    mediaCorreta = (float) totalPontos / jogadores;

    printf("Sem conversao: %.1f\n", mediaIncorreta);
    printf("Com conversao: %.1f\n", mediaCorreta);
    return 0;
}
