#include <stdio.h>

void exibirVetor(const int valores[], int tamanho);
int somarVetor(const int valores[], int tamanho);
void dobrarVetor(int valores[], int tamanho);

int main(void) {
    int numeros[4] = {2, 4, 6, 8};

    printf("Original: ");
    exibirVetor(numeros, 4);
    printf("Soma: %d\n", somarVetor(numeros, 4));

    dobrarVetor(numeros, 4);
    printf("Depois de dobrar: ");
    exibirVetor(numeros, 4);
    return 0;
}

void exibirVetor(const int valores[], int tamanho) {
    int i;
    for (i = 0; i < tamanho; i++) {
        printf("%d ", valores[i]);
    }
    printf("\n");
}

int somarVetor(const int valores[], int tamanho) {
    int soma = 0;
    int i;
    for (i = 0; i < tamanho; i++) {
        soma += valores[i];
    }
    return soma;
}

void dobrarVetor(int valores[], int tamanho) {
    int i;
    for (i = 0; i < tamanho; i++) {
        valores[i] *= 2;
    }
}
