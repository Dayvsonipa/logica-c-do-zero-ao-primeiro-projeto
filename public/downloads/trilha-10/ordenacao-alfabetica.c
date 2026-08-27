#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[50];
} Contato;

int main(void) {
    Contato contatos[4] = {
        {4, "Marina Alves"},
        {2, "Ana Souza"},
        {1, "Carlos Santos"},
        {3, "Bruno Lima"}
    };
    Contato temporario;
    int i, j;

    for (i = 0; i < 4 - 1; i++) {
        for (j = 0; j < 4 - 1 - i; j++) {
            if (strcmp(contatos[j].nome, contatos[j + 1].nome) > 0) {
                temporario = contatos[j];
                contatos[j] = contatos[j + 1];
                contatos[j + 1] = temporario;
            }
        }
    }

    printf("CONTATOS EM ORDEM ALFABETICA\n");
    for (i = 0; i < 4; i++) {
        printf("%d | %s\n", contatos[i].id, contatos[i].nome);
    }
    return 0;
}
