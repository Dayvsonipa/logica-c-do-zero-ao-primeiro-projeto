#include <stdio.h>

int main(void) {
    char curso[] = "Linguagem C";
    int i = 0;

    printf("Texto completo: %s\n", curso);

    while (curso[i] != '\0') {
        printf("curso[%d] = %c\n", i, curso[i]);
        i++;
    }

    printf("Quantidade de caracteres: %d\n", i);
    return 0;
}
