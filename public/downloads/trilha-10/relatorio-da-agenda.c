#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    Contato contatos[4] = {
        {8, "Ana Souza", "3191111-1111"},
        {15, "Bruno Lima", "3192222-2222"},
        {3, "Carolina Fernandes", "3193333-3333"},
        {21, "Diego Alves", "3194444-4444"}
    };
    int menorId = contatos[0].id;
    int maiorId = contatos[0].id;
    int maiorNome = 0;
    int i;

    for (i = 0; i < 4; i++) {
        if (contatos[i].id < menorId) menorId = contatos[i].id;
        if (contatos[i].id > maiorId) maiorId = contatos[i].id;
        if (strlen(contatos[i].nome) > strlen(contatos[maiorNome].nome)) {
            maiorNome = i;
        }
    }

    printf("Total de contatos: 4\n");
    printf("Menor ID: %d\n", menorId);
    printf("Maior ID: %d\n", maiorId);
    printf("Nome mais longo: %s\n", contatos[maiorNome].nome);
    return 0;
}
