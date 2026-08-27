#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    Contato contato = {1, "Ana Souza", "3199999-1234"};
    FILE *arquivo = fopen("contatos.txt", "w");

    if (arquivo == NULL) {
        printf("Erro ao criar contatos.txt.\n");
        return 1;
    }

    fprintf(arquivo, "%d;%s;%s\n",
            contato.id, contato.nome, contato.telefone);
    fclose(arquivo);

    printf("Contato salvo.\n");
    return 0;
}
