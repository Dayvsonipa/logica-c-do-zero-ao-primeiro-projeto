#include <stdio.h>

int totalAcessos = 0;

void registrarAcesso(void);

int main(void) {
    int acessosNestaExecucao = 3;
    int i;

    for (i = 0; i < acessosNestaExecucao; i++) {
        registrarAcesso();
    }

    printf("Total global: %d\n", totalAcessos);
    return 0;
}

void registrarAcesso(void) {
    int mensagemExibida = 1;
    totalAcessos++;
    printf("Acesso %d registrado. Controle local: %d\n",
           totalAcessos, mensagemExibida);
}
