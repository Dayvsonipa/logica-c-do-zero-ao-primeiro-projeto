#include <stdio.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

int main(void) {
    FILE *origem = fopen("contatos.txt", "r");
    FILE *temporario;
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("Nenhum contato salvo.\n");
        return 0;
    }

    temporario = fopen("contatos.tmp", "w");
    if (temporario == NULL) {
        printf("Erro ao criar arquivo temporario.\n");
        fclose(origem);
        return 1;
    }

    printf("ID que deseja excluir: ");
    scanf("%d", &idProcurado);

    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (sscanf(linha, "%d;%59[^;];%24[^\n]",
                   &contato.id, contato.nome, contato.telefone) == 3) {
            if (contato.id == idProcurado) {
                encontrado = 1;
            } else {
                fprintf(temporario, "%d;%s;%s\n",
                        contato.id, contato.nome, contato.telefone);
            }
        }
    }

    fclose(origem);
    fclose(temporario);

    if (!encontrado) {
        remove("contatos.tmp");
        printf("Contato nao encontrado.\n");
        return 0;
    }

    remove("contatos.bak");
    if (rename("contatos.txt", "contatos.bak") != 0) {
        printf("Erro ao proteger o arquivo original.\n");
        remove("contatos.tmp");
        return 1;
    }

    if (rename("contatos.tmp", "contatos.txt") != 0) {
        rename("contatos.bak", "contatos.txt");
        printf("Erro ao substituir. O original foi restaurado.\n");
        return 1;
    }

    remove("contatos.bak");
    printf("Contato excluido.\n");
    return 0;
}
