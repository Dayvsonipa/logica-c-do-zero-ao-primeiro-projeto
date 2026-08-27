#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void) {
    char texto[100];
    int vogais = 0;
    int i;

    printf("Digite uma frase: ");
    fgets(texto, sizeof(texto), stdin);
    texto[strcspn(texto, "\n")] = '\0';

    for (i = 0; texto[i] != '\0'; i++) {
        char letra = (char) tolower((unsigned char) texto[i]);
        if (letra == 'a' || letra == 'e' || letra == 'i' ||
            letra == 'o' || letra == 'u') {
            vogais++;
        }
    }

    printf("Quantidade de vogais sem acento: %d\n", vogais);
    return 0;
}
