#include <stdio.h>
#include <string.h>

#define JOGADORES 3
#define TAM_NOME 40

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);

int main(void) {
    char nomes[JOGADORES][TAM_NOME];
    int pontos[JOGADORES];
    int i, indiceMelhor = 0;

    printf("=== RANKING LEVELUP ===\n");
    for (i = 0; i < JOGADORES; i++) {
        printf("\nNome do jogador %d: ", i + 1);
        lerTexto(nomes[i], TAM_NOME);

        printf("Pontuacao: ");
        scanf("%d", &pontos[i]);
        limparEntrada();

        if (pontos[i] > pontos[indiceMelhor]) {
            indiceMelhor = i;
        }
    }

    printf("\n=== CLASSIFICACAO ===\n");
    for (i = 0; i < JOGADORES; i++) {
        printf("%d. %-20s %d ponto(s)\n",
               i + 1, nomes[i], pontos[i]);
    }

    printf("\nDestaque: %s com %d ponto(s)!\n",
           nomes[indiceMelhor], pontos[indiceMelhor]);
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\n' && caractere != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\n")] = '\0';
}
