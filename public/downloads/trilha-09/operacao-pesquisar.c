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
    int idProcurado;
    int encontrado = 0;

    if (arquivo == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return 0;
    }

    printf("ID procurado: ");
    scanf("%d", &idProcurado);

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &contato.id, contato.nome, contato.telefone) == 3 &&
            contato.id == idProcurado) {
            printf("%d | %s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            encontrado = 1;
            break;
        }
    }

    fclose(arquivo);
    if (!encontrado) printf("Contato nao encontrado.\n");
    return 0;
}
