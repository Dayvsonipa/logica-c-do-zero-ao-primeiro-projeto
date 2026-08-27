#include <stdio.h>
#include <string.h>

#define ARQUIVO "contatos.txt"

int main(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    char busca[60];
    char nome[60];
    char telefone[25];
    int id;
    int encontrados = 0;

    if (arquivo == NULL) {
        printf("Agenda vazia.\n");
        return 0;
    }

    printf("Parte exata do nome: ");
    fgets(busca, sizeof(busca), stdin);
    busca[strcspn(busca, "\n")] = '\0';

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &id, nome, telefone) == 3 &&
            strstr(nome, busca) != NULL) {
            printf("%d | %s | %s\n", id, nome, telefone);
            encontrados++;
        }
    }

    fclose(arquivo);
    printf("Resultado(s): %d\n", encontrados);
    return 0;
}
