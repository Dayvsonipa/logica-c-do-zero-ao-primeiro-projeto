#include <stdio.h>

void exibirCabecalho(void);
float lerNotaValida(int numero);
float calcularMedia(float nota1, float nota2, float nota3);
void exibirSituacao(float media);

int main(void) {
    float nota1, nota2, nota3, media;

    exibirCabecalho();
    nota1 = lerNotaValida(1);
    nota2 = lerNotaValida(2);
    nota3 = lerNotaValida(3);
    media = calcularMedia(nota1, nota2, nota3);

    printf("Media final: %.2f\n", media);
    exibirSituacao(media);
    return 0;
}

void exibirCabecalho(void) {
    printf("================================\n");
    printf("     SISTEMA DE NOTAS LEVELUP\n");
    printf("================================\n");
}

float lerNotaValida(int numero) {
    float nota;
    do {
        printf("Digite a nota %d (0 a 10): ", numero);
        scanf("%f", &nota);
        if (nota < 0.0f || nota > 10.0f) {
            printf("Nota invalida.\n");
        }
    } while (nota < 0.0f || nota > 10.0f);
    return nota;
}

float calcularMedia(float nota1, float nota2, float nota3) {
    return (nota1 + nota2 + nota3) / 3.0f;
}

void exibirSituacao(float media) {
    if (media >= 7.0f) {
        printf("Situacao: aprovado.\n");
    } else if (media >= 5.0f) {
        printf("Situacao: recuperacao.\n");
    } else {
        printf("Situacao: reprovado.\n");
    }
}
