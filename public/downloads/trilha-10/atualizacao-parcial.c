#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    Contato contato = {7, "Bruno Lima", "3198888-7654"};
    char novoNome[60];
    char novoTelefone[25];

    printf("Atual: %s | %s\n", contato.nome, contato.telefone);
    printf("Novo nome (Enter mantem): ");
    fgets(novoNome, sizeof(novoNome), stdin);
    novoNome[strcspn(novoNome, "\n")] = '\0';

    printf("Novo telefone (Enter mantem): ");
    fgets(novoTelefone, sizeof(novoTelefone), stdin);
    novoTelefone[strcspn(novoTelefone, "\n")] = '\0';

    if (strlen(novoNome) > 0) {
        strcpy(contato.nome, novoNome);
    }
    if (strlen(novoTelefone) > 0) {
        strcpy(contato.telefone, novoTelefone);
    }

    printf("Depois: %s | %s\n", contato.nome, contato.telefone);
    return 0;
}
