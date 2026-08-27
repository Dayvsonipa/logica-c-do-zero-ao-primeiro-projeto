#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    char linha[120] = "7;Bruno Lima;3198888-7654";
    Contato contato;
    int camposLidos;

    camposLidos = sscanf(linha, "%d;%59[^;];%24[^\n]",
                         &contato.id, contato.nome, contato.telefone);

    if (camposLidos == 3) {
        printf("ID: %d\n", contato.id);
        printf("Nome: %s\n", contato.nome);
        printf("Telefone: %s\n", contato.telefone);
    } else {
        printf("Linha em formato invalido.\n");
    }
    return 0;
}
