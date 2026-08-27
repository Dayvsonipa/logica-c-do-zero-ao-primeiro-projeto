#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[60];
    float preco;
    int estoque;
} Produto;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);

int main(void) {
    Produto produto;

    printf("Codigo: ");
    scanf("%d", &produto.id);
    limparEntrada();

    printf("Nome do produto: ");
    lerTexto(produto.nome, 60);

    printf("Preco: R$ ");
    scanf("%f", &produto.preco);
    printf("Estoque: ");
    scanf("%d", &produto.estoque);

    printf("\n=== PRODUTO CADASTRADO ===\n");
    printf("%d | %s | R$ %.2f | %d un.\n",
           produto.id, produto.nome, produto.preco, produto.estoque);
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\n' && caractere != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\n")] = '\0';
}
