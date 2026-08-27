#include <stdio.h>
#include <string.h>

#define CONTATOS 3
#define TAM 50

void lerTexto(char texto[], int tamanho);

int main(void) {
    char nomes[CONTATOS][TAM];
    char telefones[CONTATOS][TAM];
    char busca[TAM];
    int i, encontrado = -1;

    for (i = 0; i < CONTATOS; i++) {
        printf("Nome do contato %d: ", i + 1);
        lerTexto(nomes[i], TAM);
        printf("Telefone: ");
        lerTexto(telefones[i], TAM);
    }

    printf("\nNome que deseja buscar: ");
    lerTexto(busca, TAM);

    for (i = 0; i < CONTATOS; i++) {
        if (strcmp(nomes[i], busca) == 0) {
            encontrado = i;
            break;
        }
    }

    if (encontrado == -1) {
        printf("Contato nao encontrado.\n");
    } else {
        printf("Telefone de %s: %s\n",
               nomes[encontrado], telefones[encontrado]);
    }
    return 0;
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\n")] = '\0';
}
