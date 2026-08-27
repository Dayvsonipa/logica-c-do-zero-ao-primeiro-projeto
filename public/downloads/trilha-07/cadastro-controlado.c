#include <stdio.h>
#include <string.h>

#define LIMITE 5

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

void limparEntrada(void);

int main(void) {
    Produto produtos[LIMITE];
    int quantidade = 0;
    char continuar;

    do {
        if (quantidade == LIMITE) {
            printf("Limite de cadastros atingido.\n");
            break;
        }

        printf("Codigo: ");
        scanf("%d", &produtos[quantidade].id);
        limparEntrada();

        printf("Nome: ");
        fgets(produtos[quantidade].nome, 50, stdin);
        produtos[quantidade].nome[
            strcspn(produtos[quantidade].nome, "\n")
        ] = '\0';

        printf("Preco: R$ ");
        scanf("%f", &produtos[quantidade].preco);
        quantidade++;

        printf("Cadastrar outro? (S/N): ");
        scanf(" %c", &continuar);
    } while (continuar == 'S' || continuar == 's');

    printf("Quantidade cadastrada: %d\n", quantidade);
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\n' && caractere != EOF) {
    }
}
