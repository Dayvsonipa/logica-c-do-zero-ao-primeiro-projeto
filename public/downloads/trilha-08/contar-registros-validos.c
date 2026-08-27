#include <stdio.h>

int main(void) {
    FILE *arquivo = fopen("contatos.txt", "r");
    char linha[120];
    int id;
    char nome[60];
    char telefone[25];
    int validos = 0;
    int invalidos = 0;

    if (arquivo == NULL) {
        printf("Nenhum contato salvo.\n");
        return 0;
    }

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &id, nome, telefone) == 3) {
            validos++;
        } else {
            invalidos++;
        }
    }

    fclose(arquivo);
    printf("Registros validos: %d\n", validos);
    printf("Linhas ignoradas: %d\n", invalidos);
    return 0;
}
