#include <stdio.h>
#include <string.h>

int main(void) {
    char nomes[4][40] = {
        "Ana Souza", "Bruno Lima",
        "Mariana Alves", "Carlos Santos"
    };
    char busca[40];
    int encontrados = 0;
    int i;

    printf("Parte do nome: ");
    fgets(busca, sizeof(busca), stdin);
    busca[strcspn(busca, "\n")] = '\0';

    for (i = 0; i < 4; i++) {
        if (strstr(nomes[i], busca) != NULL) {
            printf("Encontrado: %s\n", nomes[i]);
            encontrados++;
        }
    }

    printf("Total: %d resultado(s).\n", encontrados);
    return 0;
}
