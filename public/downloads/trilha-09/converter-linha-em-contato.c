#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int linhaParaContato(const char linha[], Contato *contato);

int main(void) {
    char linha[] = "21;Eduardo Nunes;3197777-4321";
    Contato contato;

    if (linhaParaContato(linha, &contato)) {
        printf("%d | %s | %s\n",
               contato.id, contato.nome, contato.telefone);
    } else {
        printf("Registro invalido.\n");
    }
    return 0;
}

int linhaParaContato(const char linha[], Contato *contato) {
    return sscanf(linha, "%d;%59[^;];%24[^\n]",
                  &contato->id,
                  contato->nome,
                  contato->telefone) == 3;
}
