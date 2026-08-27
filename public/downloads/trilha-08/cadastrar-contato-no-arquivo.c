#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);

int main(void) {
    Contato contato;
    FILE *arquivo;

    printf("ID: ");
    scanf("%d", &contato.id);
    limparEntrada();

    printf("Nome: ");
    lerTexto(contato.nome, 60);
    printf("Telefone: ");
    lerTexto(contato.telefone, 25);

    arquivo = fopen("contatos.txt", "a");
    if (arquivo == NULL) {
        printf("Erro ao abrir contatos.txt.\n");
        return 1;
    }

    fprintf(arquivo, "%d;%s;%s\n",
            contato.id, contato.nome, contato.telefone);
    fclose(arquivo);
    printf("Contato acrescentado.\n");
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
