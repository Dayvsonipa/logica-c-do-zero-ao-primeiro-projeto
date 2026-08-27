#include <stdio.h>
#include <string.h>

int main(void) {
    char nome[50];

    printf("Digite seu nome completo: ");
    fgets(nome, sizeof(nome), stdin);

    nome[strcspn(nome, "\n")] = '\0';

    printf("Ola, %s!\n", nome);
    printf("Seu texto possui %zu caractere(s).\n", strlen(nome));
    return 0;
}
