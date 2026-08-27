#include <stdio.h>

#define QUANTIDADE 3

typedef struct {
    int id;
    char nome[50];
    float preco;
} Produto;

int main(void) {
    Produto produtos[QUANTIDADE] = {
        {1, "Teclado", 180.0f},
        {2, "Mouse", 90.0f},
        {3, "Headset", 220.0f}
    };
    int i;

    for (i = 0; i < QUANTIDADE; i++) {
        printf("%d | %-12s | R$ %7.2f\n",
               produtos[i].id,
               produtos[i].nome,
               produtos[i].preco);
    }
    return 0;
}
