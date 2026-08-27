#include <stdio.h>
#include <string.h>

#define ARQUIVO "contatos.txt"
#define TEMPORARIO "contatos.tmp"
#define BACKUP_TROCA "contatos.bak"
#define BACKUP_USUARIO "contatos-backup.txt"

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void exibirMenu(void);
int lerInteiro(const char mensagem[]);
void lerTexto(const char mensagem[], char texto[], int tamanho);
int linhaParaContato(const char linha[], Contato *contato);
int idExiste(int idProcurado);
int substituirArquivo(void);
void cadastrar(void);
void listar(void);
void pesquisar(void);
void atualizar(void);
void excluir(void);
void criarBackup(void);

int main(void) {
    int opcao;

    do {
        exibirMenu();
        opcao = lerInteiro("Opcao: ");

        switch (opcao) {
            case 1: cadastrar(); break;
            case 2: listar(); break;
            case 3: pesquisar(); break;
            case 4: atualizar(); break;
            case 5: excluir(); break;
            case 6: criarBackup(); break;
            case 0: printf("Agenda encerrada. Ate logo!\n"); break;
            default: printf("Opcao invalida. Escolha de 0 a 6.\n");
        }
    } while (opcao != 0);

    return 0;
}

void exibirMenu(void) {
    printf("\n================================\n");
    printf("       AGENDA LEVELUP\n");
    printf("================================\n");
    printf("1 - Cadastrar contato\n");
    printf("2 - Listar contatos\n");
    printf("3 - Pesquisar por ID\n");
    printf("4 - Atualizar contato\n");
    printf("5 - Excluir contato\n");
    printf("6 - Criar backup\n");
    printf("0 - Sair\n");
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

int linhaParaContato(const char linha[], Contato *contato) {
    return sscanf(linha, "%d;%59[^;];%24[^\n]",
                  &contato->id,
                  contato->nome,
                  contato->telefone) == 3;
}

int idExiste(int idProcurado) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    Contato contato;

    if (arquivo == NULL) return 0;

    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (linhaParaContato(linha, &contato) &&
            contato.id == idProcurado) {
            fclose(arquivo);
            return 1;
        }
    }

    fclose(arquivo);
    return 0;
}

int substituirArquivo(void) {
    remove(BACKUP_TROCA);

    if (rename(ARQUIVO, BACKUP_TROCA) != 0) {
        remove(TEMPORARIO);
        return 0;
    }

    if (rename(TEMPORARIO, ARQUIVO) != 0) {
        rename(BACKUP_TROCA, ARQUIVO);
        return 0;
    }

    remove(BACKUP_TROCA);
    return 1;
}

void cadastrar(void) {
    Contato contato;
    FILE *arquivo;

    contato.id = lerInteiro("ID positivo: ");
    if (contato.id <= 0) {
        printf("O ID precisa ser maior que zero.\n");
        return;
    }
    if (idExiste(contato.id)) {
        printf("Esse ID ja esta cadastrado.\n");
        return;
    }

    lerTexto("Nome: ", contato.nome, 60);
    lerTexto("Telefone: ", contato.telefone, 25);

    arquivo = fopen(ARQUIVO, "a");
    if (arquivo == NULL) {
        printf("Nao foi possivel abrir a agenda.\n");
        return;
    }

    fprintf(arquivo, "%d;%s;%s\n",
            contato.id, contato.nome, contato.telefone);
    fclose(arquivo);
    printf("Contato cadastrado com sucesso.\n");
}

void listar(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    Contato contato;
    int quantidade = 0;
    int invalidos = 0;

    if (arquivo == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return;
    }

    printf("\nID | NOME                       | TELEFONE\n");
    printf("----------------------------------------------\n");
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (linhaParaContato(linha, &contato)) {
            printf("%2d | %-26s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            quantidade++;
        } else {
            invalidos++;
        }
    }

    fclose(arquivo);
    printf("Total: %d contato(s).\n", quantidade);
    if (invalidos > 0) {
        printf("Aviso: %d linha(s) invalida(s) ignorada(s).\n", invalidos);
    }
}

void pesquisar(void) {
    FILE *arquivo = fopen(ARQUIVO, "r");
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (arquivo == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return;
    }

    idProcurado = lerInteiro("ID procurado: ");
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        if (linhaParaContato(linha, &contato) &&
            contato.id == idProcurado) {
            printf("Encontrado: %d | %s | %s\n",
                   contato.id, contato.nome, contato.telefone);
            encontrado = 1;
            break;
        }
    }

    fclose(arquivo);
    if (!encontrado) printf("Contato nao encontrado.\n");
}

void atualizar(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return;
    }

    destino = fopen(TEMPORARIO, "w");
    if (destino == NULL) {
        fclose(origem);
        printf("Erro ao criar arquivo temporario.\n");
        return;
    }

    idProcurado = lerInteiro("ID que deseja atualizar: ");
    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (!linhaParaContato(linha, &contato)) {
            fputs(linha, destino);
            continue;
        }

        if (contato.id == idProcurado) {
            printf("Contato atual: %s | %s\n",
                   contato.nome, contato.telefone);
            lerTexto("Novo nome: ", contato.nome, 60);
            lerTexto("Novo telefone: ", contato.telefone, 25);
            encontrado = 1;
        }

        fprintf(destino, "%d;%s;%s\n",
                contato.id, contato.nome, contato.telefone);
    }

    fclose(origem);
    fclose(destino);

    if (!encontrado) {
        remove(TEMPORARIO);
        printf("Contato nao encontrado.\n");
    } else if (substituirArquivo()) {
        printf("Contato atualizado com sucesso.\n");
    } else {
        printf("Falha na troca. O arquivo original foi preservado.\n");
    }
}

void excluir(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    char linha[120];
    Contato contato;
    int idProcurado;
    int encontrado = 0;

    if (origem == NULL) {
        printf("A agenda ainda esta vazia.\n");
        return;
    }

    destino = fopen(TEMPORARIO, "w");
    if (destino == NULL) {
        fclose(origem);
        printf("Erro ao criar arquivo temporario.\n");
        return;
    }

    idProcurado = lerInteiro("ID que deseja excluir: ");
    while (fgets(linha, sizeof(linha), origem) != NULL) {
        if (linhaParaContato(linha, &contato) &&
            contato.id == idProcurado) {
            encontrado = 1;
        } else {
            fputs(linha, destino);
        }
    }

    fclose(origem);
    fclose(destino);

    if (!encontrado) {
        remove(TEMPORARIO);
        printf("Contato nao encontrado.\n");
    } else if (substituirArquivo()) {
        printf("Contato excluido com sucesso.\n");
    } else {
        printf("Falha na troca. O arquivo original foi preservado.\n");
    }
}

void criarBackup(void) {
    FILE *origem = fopen(ARQUIVO, "r");
    FILE *destino;
    int caractere;

    if (origem == NULL) {
        printf("Nenhum arquivo para copiar.\n");
        return;
    }

    destino = fopen(BACKUP_USUARIO, "w");
    if (destino == NULL) {
        fclose(origem);
        printf("Erro ao criar o backup.\n");
        return;
    }

    while ((caractere = fgetc(origem)) != EOF) {
        fputc(caractere, destino);
    }

    fclose(origem);
    fclose(destino);
    printf("Backup criado em %s.\n", BACKUP_USUARIO);
}
