#include <stdio.h>
#include <string.h>

int main(void) {
    char usuario[30] = "dayvson";
    char tentativa[30];
    char copia[30];

    printf("Digite o usuario: ");
    fgets(tentativa, sizeof(tentativa), stdin);
    tentativa[strcspn(tentativa, "\n")] = '\0';

    strcpy(copia, tentativa);

    printf("Tamanho: %zu\n", strlen(tentativa));
    printf("Copia: %s\n", copia);

    if (strcmp(usuario, tentativa) == 0) {
        printf("Usuario encontrado.\n");
    } else {
        printf("Usuario diferente.\n");
    }
    return 0;
}
