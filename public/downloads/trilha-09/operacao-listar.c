#include <stdio.h>

#define ARQUIVO "contatos.txt"

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    Contato contato;
    int quantidade = 0;

    if (arquivo == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return 0;
    }

    printf("ID | NOME                       | TELEFONE\n");
    printf("----------------------------------------------\n");
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &contato.id, contato.nome, contato.telefone) == 3) {
            printf("%2d | %-26s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            quantidade++;
        }
    }

    fclose(arquivo);
    printf("Total: %d contato(s).\n", quantidade);
    return 0;
}
