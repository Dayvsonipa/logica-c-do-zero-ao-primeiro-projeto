#include <stdio.h>

#define ARQUIVO "contatos.txt"

int idExiste(int idProcurado);

int main(void) {
    int id;

    printf("ID que deseja testar: ");
    scanf("%d", &id);

    if (idExiste(id)) {
        printf("Esse ID ja esta cadastrado.\n");
    } else {
        printf("ID disponivel para cadastro.\n");
    }
    return 0;
}

int idExiste(int idProcurado) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    int id;

    if (arquivo == NULL) {
        return 0;
    }

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;", &id) == 1 && id == idProcurado) {
            fclose(arquivo);
            return 1;
        }
    }

    fclose(arquivo);
    return 0;
}
