#include <stdio.h>

int main(void) {
    int id = 101;
    char nome[] = "Teclado mecanico";
    float preco = 249.90f;
    int estoque = 12;
    FILE *arquivo = fopen("produto.txt", "w");

    if (arquivo == NULL) {
        printf("Erro ao criar produto.txt.\n");
        return 1;
    }

    fputs("=== PRODUTO ===\n", arquivo);
    fprintf(arquivo, "Codigo: %d\n", id);
    fprintf(arquivo, "Nome: %s\n", nome);
    fprintf(arquivo, "Preco: %.2f\n", preco);
    fprintf(arquivo, "Estoque: %d\n", estoque);
    fclose(arquivo);

    printf("Dados gravados.\n");
    return 0;
}
