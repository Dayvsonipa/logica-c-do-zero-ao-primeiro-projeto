#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[50];
} Produto;

int main(void) {
    Produto produtos[3] = {
        {1, "Teclado mecanico"},
        {2, "Mouse gamer"},
        {3, "Headset"}
    };
    char busca[50];
    int i, encontrado = -1;

    printf("Nome exato do produto: ");
    fgets(busca, sizeof(busca), stdin);
    busca[strcspn(busca, "\n")] = '\0';

    for (i = 0; i < 3; i++) {
        if (strcmp(produtos[i].nome, busca) == 0) {
            encontrado = i;
            break;
        }
    }

    if (encontrado == -1) {
        printf("Produto nao encontrado.\n");
    } else {
        printf("ID encontrado: %d\n", produtos[encontrado].id);
    }
    return 0;
}
