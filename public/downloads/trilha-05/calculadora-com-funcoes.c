#include <stdio.h>

double somar(double a, double b);
double subtrair(double a, double b);
double multiplicar(double a, double b);
double dividir(double a, double b);

int main(void) {
    double numero1, numero2;

    printf("Digite dois numeros: ");
    scanf("%lf %lf", &numero1, &numero2);

    printf("Soma: %.2f\n", somar(numero1, numero2));
    printf("Subtracao: %.2f\n", subtrair(numero1, numero2));
    printf("Multiplicacao: %.2f\n", multiplicar(numero1, numero2));

    if (numero2 != 0.0) {
        printf("Divisao: %.2f\n", dividir(numero1, numero2));
    } else {
        printf("Divisao impossivel: divisor igual a zero.\n");
    }
    return 0;
}

double somar(double a, double b) { return a + b; }
double subtrair(double a, double b) { return a - b; }
double multiplicar(double a, double b) { return a * b; }
double dividir(double a, double b) { return a / b; }
