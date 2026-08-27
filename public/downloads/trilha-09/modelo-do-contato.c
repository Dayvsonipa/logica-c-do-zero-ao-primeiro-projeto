#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    Contato contato = {15, "Marina Alves", "3199999-2026"};

    printf("Registro na memoria:\n");
    printf("ID: %d\nNome: %s\nTelefone: %s\n",
           contato.id, contato.nome, contato.telefone);

    printf("\nLinha que sera salva:\n");
    printf("%d;%s;%s\n",
           contato.id, contato.nome, contato.telefone);
    return 0;
}
