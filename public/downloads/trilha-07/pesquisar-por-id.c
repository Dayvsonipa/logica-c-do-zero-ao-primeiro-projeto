#include <stdio.h>

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

int buscarPorId(const Produto produtos[], int quantidade, int id);

int main(void) {
    Produto produtos[3] = {
        {101, "Teclado", 180.0f},
        {205, "Mouse", 90.0f},
        {310, "Headset", 220.0f}
    };
    int id, indice;

    printf("ID procurado: ");
    scanf("%d", &id);

    indice = buscarPorId(produtos, 3, id);

    if (indice == -1) {
        printf("Produto nao encontrado.\n");
    } else {
        printf("Encontrado: %s | R$ %.2f\n",
               produtos[indice].nome, produtos[indice].preco);
    }
    return 0;
}

int buscarPorId(const Produto produtos[], int quantidade, int id) {
    int i;
    for (i = 0; i < quantidade; i++) {
        if (produtos[i].id == id) {
            return i;
        }
    }
    return -1;
}
