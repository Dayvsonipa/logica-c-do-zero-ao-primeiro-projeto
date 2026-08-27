#include <stdio.h>
#include <string.h>

int lerInteiro(const char mensagem[]);
void lerTexto(const char mensagem[], char texto[], int tamanho);

int main(void) {
    int id = lerInteiro("ID: ");
    char nome[60];

    lerTexto("Nome: ", nome, 60);
    printf("Recebido: %d | %s\n", id, nome);
    return 0;
}

int lerInteiro(const char mensagem[]) {
    char linha[100];
    char extra;
    int valor;

    while (1) {
        printf("%s", mensagem);
        if (fgets(linha, sizeof(linha), stdin) != NULL &&
            sscanf(linha, "%d %c", &valor, &extra) == 1) {
            return valor;
        }
        printf("Digite um numero inteiro valido.\n");
    }
}

void lerTexto(const char mensagem[], char texto[], int tamanho) {
    while (1) {
        printf("%s", mensagem);
        if (fgets(texto, tamanho, stdin) == NULL) {
            texto[0] = '\0';
        }
        texto[strcspn(texto, "\n")] = '\0';

        if (strlen(texto) == 0) {
            printf("O texto nao pode ficar vazio.\n");
        } else if (strchr(texto, ';') != NULL) {
            printf("Nao use ponto e virgula.\n");
        } else {
            return;
        }
    }
}
