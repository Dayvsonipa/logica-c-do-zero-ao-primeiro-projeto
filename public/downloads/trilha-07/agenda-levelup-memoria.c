#include <stdio.h>
#include <string.h>

#define LIMITE 10

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);
void exibirMenu(void);
int buscarPorId(const Contato contatos[], int quantidade, int id);
int cadastrar(Contato contatos[], int quantidade);
void listar(const Contato contatos[], int quantidade);
void pesquisar(const Contato contatos[], int quantidade);
void atualizar(Contato contatos[], int quantidade);
int excluir(Contato contatos[], int quantidade);

int main(void) {
    Contato contatos[LIMITE];
    int quantidade = 0;
    int opcao;

    do {
        exibirMenu();
        scanf("%d", &opcao);

        switch (opcao) {
            case 1: quantidade = cadastrar(contatos, quantidade); break;
            case 2: listar(contatos, quantidade); break;
            case 3: pesquisar(contatos, quantidade); break;
            case 4: atualizar(contatos, quantidade); break;
            case 5: quantidade = excluir(contatos, quantidade); break;
            case 0: printf("Programa encerrado.\n"); break;
            default: printf("Opcao invalida.\n");
        }
    } while (opcao != 0);
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

void exibirMenu(void) {
    printf("\n=== AGENDA LEVELUP ===\n");
    printf("1 - Cadastrar\n2 - Listar\n3 - Pesquisar\n");
    printf("4 - Atualizar\n5 - Excluir\n0 - Sair\nOpcao: ");
}

int buscarPorId(const Contato contatos[], int quantidade, int id) {
    int i;
    for (i = 0; i < quantidade; i++) {
        if (contatos[i].id == id) return i;
    }
    return -1;
}

int cadastrar(Contato contatos[], int quantidade) {
    if (quantidade == LIMITE) {
        printf("Agenda cheia.\n");
        return quantidade;
    }

    printf("ID: ");
    scanf("%d", &contatos[quantidade].id);
    limparEntrada();

    if (buscarPorId(contatos, quantidade, contatos[quantidade].id) != -1) {
        printf("Esse ID ja esta em uso.\n");
        return quantidade;
    }

    printf("Nome: ");
    lerTexto(contatos[quantidade].nome, 60);
    printf("Telefone: ");
    lerTexto(contatos[quantidade].telefone, 25);
    printf("Contato cadastrado.\n");
    return quantidade + 1;
}

void listar(const Contato contatos[], int quantidade) {
    int i;
    if (quantidade == 0) {
        printf("Agenda vazia.\n");
        return;
    }
    for (i = 0; i < quantidade; i++) {
        printf("%d | %-25s | %s\n", contatos[i].id,
               contatos[i].nome, contatos[i].telefone);
    }
}

void pesquisar(const Contato contatos[], int quantidade) {
    int id, indice;
    printf("ID procurado: ");
    scanf("%d", &id);
    indice = buscarPorId(contatos, quantidade, id);
    if (indice == -1) printf("Contato nao encontrado.\n");
    else printf("%s | %s\n", contatos[indice].nome,
                contatos[indice].telefone);
}

void atualizar(Contato contatos[], int quantidade) {
    int id, indice;
    printf("ID que deseja atualizar: ");
    scanf("%d", &id);
    limparEntrada();
    indice = buscarPorId(contatos, quantidade, id);
    if (indice == -1) {
        printf("Contato nao encontrado.\n");
        return;
    }
    printf("Novo nome: ");
    lerTexto(contatos[indice].nome, 60);
    printf("Novo telefone: ");
    lerTexto(contatos[indice].telefone, 25);
    printf("Contato atualizado.\n");
}

int excluir(Contato contatos[], int quantidade) {
    int id, indice, i;
    printf("ID que deseja excluir: ");
    scanf("%d", &id);
    indice = buscarPorId(contatos, quantidade, id);
    if (indice == -1) {
        printf("Contato nao encontrado.\n");
        return quantidade;
    }
    for (i = indice; i < quantidade - 1; i++) {
        contatos[i] = contatos[i + 1];
    }
    printf("Contato excluido.\n");
    return quantidade - 1;
}
