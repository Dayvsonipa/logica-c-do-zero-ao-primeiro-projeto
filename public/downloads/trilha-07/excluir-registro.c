#include <stdio.h>

typedef struct {
    int id;
    char nome[40];
} Produto;

int buscarPorId(const Produto produtos[], int quantidade, int id);
int excluirProduto(Produto produtos[], int quantidade, int id);

int main(void) {
    Produto produtos[4] = {
        {1, "Teclado"}, {2, "Mouse"},
        {3, "Headset"}, {4, "Webcam"}
    };
    int quantidade = 4;
    int id, i;

    printf("ID que deseja excluir: ");
    scanf("%d", &id);

    quantidade = excluirProduto(produtos, quantidade, id);

    printf("\nRegistros restantes:\n");
    for (i = 0; i < quantidade; i++) {
        printf("%d | %s\n", produtos[i].id, produtos[i].nome);
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

int excluirProduto(Produto produtos[], int quantidade, int id) {
    int indice = buscarPorId(produtos, quantidade, id);
    int i;

    if (indice == -1) {
        printf("Produto nao encontrado.\n");
        return quantidade;
    }

    for (i = indice; i < quantidade - 1; i++) {
        produtos[i] = produtos[i + 1];
    }

    printf("Produto excluido.\n");
    return quantidade - 1;
}
