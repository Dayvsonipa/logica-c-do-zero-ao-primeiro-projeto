#include <stdio.h>
#include <string.h>

#define ARQUIVO "contatos.txt"

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);
int idExiste(int idProcurado);

int main(void) {
    Contato contato;
    FILE *arquivo;

    printf("ID positivo: ");
    scanf("%d", &contato.id);
    limparEntrada();

    if (contato.id <= 0 || idExiste(contato.id)) {
        printf("ID invalido ou ja cadastrado.\n");
        return 0;
    }

    printf("Nome: ");
    lerTexto(contato.nome, 60);
    printf("Telefone: ");
    lerTexto(contato.telefone, 25);

    arquivo = fopen(ARQUIVO, "a");
    if (arquivo == NULL) {
        printf("Nao foi possivel abrir a agenda.\n");
        return 1;
    }

    fprintf(arquivo, "%d;%s;%s\n",
            contato.id, contato.nome, contato.telefone);
    fclose(arquivo);
    printf("Contato cadastrado.\n");
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\n' && caractere != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\n")] = '\0';
}

int idExiste(int idProcurado) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    int id;

    if (arquivo == NULL) return 0;
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (sscanf(linha, "%d;", &id) == 1 && id == idProcurado) {
            fclose(arquivo);
            return 1;
        }
    }
    fclose(arquivo);
    return 0;
}
