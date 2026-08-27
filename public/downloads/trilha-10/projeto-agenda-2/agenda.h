#ifndef AGENDA_H
#define AGENDA_H

#define MAX_CONTATOS 500

typedef struct {
    int id;
    char nome[60];
    char telefone[25];
} Contato;

void exibirMenu(void);
int lerInteiro(const char mensagem[]);
void cadastrar(void);
void listarOrdenado(void);
void pesquisarPorNome(void);
void atualizarParcial(void);
void excluirComConfirmacao(void);
void criarBackup(void);
void restaurarBackup(void);
void exibirRelatorio(void);

#endif
