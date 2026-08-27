#include <stdio.h>
#include <ctype.h>

int main(void) {
    char caractere;

    printf("Digite um caractere: ");
    scanf(" %c", &caractere);

    if (isalpha((unsigned char) caractere)) {
        printf("E uma letra.\n");
        printf("Maiuscula: %c\n", toupper((unsigned char) caractere));
        printf("Minuscula: %c\n", tolower((unsigned char) caractere));
    } else if (isdigit((unsigned char) caractere)) {
        printf("E um algarismo.\n");
    } else {
        printf("E um simbolo.\n");
    }
    return 0;
}
