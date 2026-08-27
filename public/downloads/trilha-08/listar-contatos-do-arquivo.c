#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    FILE *arquivo = fopen("contatos.txt", "r");
    char linha[120];
    Contato contato;
    int camposLidos;
    int quantidade = 0;

    if (arquivo == NULL) {
        printf("Nenhum contato salvo.\n");
        return 0;
    }

    printf("ID | NOME                       | TELEFONE\n");
    printf("----------------------------------------------\n");

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        camposLidos = sscanf(linha, "%d;%59[^;];%24[^\n]",
                             &contato.id, contato.nome, contato.telefone);
        if (camposLidos == 3) {
            printf("%2d | %-26s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            quantidade++;
        }
    }

    fclose(arquivo);
    printf("Total: %d contato(s).\n", quantidade);
    return 0;
}
