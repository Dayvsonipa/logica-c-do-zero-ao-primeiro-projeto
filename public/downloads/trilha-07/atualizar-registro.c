#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

int buscarPorId(const Produto produtos[], int quantidade, int id);
void limparEntrada(void);

int main(void) {
    Produto produtos[3] = {
        {1, "Teclado", 180.0f},
        {2, "Mouse", 90.0f},
        {3, "Headset", 220.0f}
    };
    int id, indice;

    printf("ID que deseja atualizar: ");
    scanf("%d", &id);
    limparEntrada();

    indice = buscarPorId(produtos, 3, id);
    if (indice == -1) {
        printf("Produto nao encontrado.\n");
    } else {
        printf("Novo nome: ");
        fgets(produtos[indice].nome, 50, stdin);
        produtos[indice].nome[
            strcspn(produtos[indice].nome, "\n")
        ] = '\0';

        printf("Novo preco: R$ ");
        scanf("%f", &produtos[indice].preco);
        printf("Produto atualizado: %s | R$ %.2f\n",
               produtos[indice].nome, produtos[indice].preco);
    }
    return 0;
}

int buscarPorId(const Produto produtos[], int quantidade, int id) {
    int i;
    for (i = 0; i < quantidade; i++) {
        if (produtos[i].id == id) return i;
    }
    return -1;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\n' && caractere != EOF) {
    }
}
