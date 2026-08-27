#include <stdio.h>
#include <string.h>
#include <ctype.h>

void paraMinusculas(const char origem[], char destino[], int tamanho);

int main(void) {
    char nomes[4][40] = {
        "Ana Souza", "BRUNO LIMA",
        "Mariana Alves", "Carlos Santos"
    };
    char busca[40];
    char buscaNormalizada[40];
    char nomeNormalizado[40];
    int i;

    printf("Parte do nome: ");
    fgets(busca, sizeof(busca), stdin);
    busca[strcspn(busca, "\n")] = '\0';
    paraMinusculas(busca, buscaNormalizada, 40);

    for (i = 0; i < 4; i++) {
        paraMinusculas(nomes[i], nomeNormalizado, 40);
        if (strstr(nomeNormalizado, buscaNormalizada) != NULL) {
            printf("Encontrado: %s\n", nomes[i]);
        }
    }
    return 0;
}

void paraMinusculas(const char origem[], char destino[], int tamanho) {
    int i = 0;
    while (origem[i] != '\0' && i < tamanho - 1) {
        destino[i] = (char) tolower((unsigned char) origem[i]);
        i++;
    }
    destino[i] = '\0';
}
