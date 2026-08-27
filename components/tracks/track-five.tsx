import {
  Braces,
  CheckCircle2,
  FileArchive,
  GitMerge,
  Lightbulb,
  PackageOpen,
  RefreshCcw,
  ShieldCheck,
  Target,
  TerminalSquare,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, ConceptCard, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const firstFunction = `#include <stdio.h>

void mostrarBoasVindas(void) {
    printf("==============================\\n");
    printf("  BEM-VINDO AO MUNDO DE C!\\n");
    printf("==============================\\n");
}

int main(void) {
    mostrarBoasVindas();
    printf("Agora o programa pode continuar.\\n");
    return 0;
}`;

const functionPrototype = `#include <stdio.h>

void mostrarMensagem(void);

int main(void) {
    mostrarMensagem();
    return 0;
}

void mostrarMensagem(void) {
    printf("O prototipo apresentou a funcao ao compilador.\\n");
}`;

const parameters = `#include <stdio.h>

void mostrarDobro(int numero);
void desenharLinha(char simbolo, int quantidade);

int main(void) {
    mostrarDobro(7);
    mostrarDobro(12);

    desenharLinha('-', 25);
    desenharLinha('=', 10);
    return 0;
}

void mostrarDobro(int numero) {
    printf("O dobro de %d e %d.\\n", numero, numero * 2);
}

void desenharLinha(char simbolo, int quantidade) {
    int i;
    for (i = 1; i <= quantidade; i++) {
        printf("%c", simbolo);
    }
    printf("\\n");
}`;

const returnSum = `#include <stdio.h>

int somar(int numero1, int numero2);

int main(void) {
    int resultado;

    resultado = somar(8, 5);
    printf("Resultado: %d\\n", resultado);
    printf("Outra soma: %d\\n", somar(20, 7));
    return 0;
}

int somar(int numero1, int numero2) {
    int total = numero1 + numero2;
    return total;
}`;

const calculatorFunctions = `#include <stdio.h>

double somar(double a, double b);
double subtrair(double a, double b);
double multiplicar(double a, double b);
double dividir(double a, double b);

int main(void) {
    double numero1, numero2;

    printf("Digite dois numeros: ");
    scanf("%lf %lf", &numero1, &numero2);

    printf("Soma: %.2f\\n", somar(numero1, numero2));
    printf("Subtracao: %.2f\\n", subtrair(numero1, numero2));
    printf("Multiplicacao: %.2f\\n", multiplicar(numero1, numero2));

    if (numero2 != 0.0) {
        printf("Divisao: %.2f\\n", dividir(numero1, numero2));
    } else {
        printf("Divisao impossivel: divisor igual a zero.\\n");
    }
    return 0;
}

double somar(double a, double b) { return a + b; }
double subtrair(double a, double b) { return a - b; }
double multiplicar(double a, double b) { return a * b; }
double dividir(double a, double b) { return a / b; }`;

const voidProcedure = `#include <stdio.h>

void exibirCabecalho(void);
void exibirSeparador(char simbolo, int tamanho);

int main(void) {
    exibirCabecalho();
    printf("Aluno: Alex\\n");
    printf("Media: 8.50\\n");
    exibirSeparador('-', 30);
    return 0;
}

void exibirCabecalho(void) {
    printf("RELATORIO DO ALUNO\\n");
    exibirSeparador('=', 30);
}

void exibirSeparador(char simbolo, int tamanho) {
    int i;
    for (i = 0; i < tamanho; i++) {
        printf("%c", simbolo);
    }
    printf("\\n");
}`;

const passByValue = `#include <stdio.h>

void tentarAlterar(int numero);

int main(void) {
    int valor = 10;

    printf("Antes da funcao: %d\\n", valor);
    tentarAlterar(valor);
    printf("Depois da funcao: %d\\n", valor);
    return 0;
}

void tentarAlterar(int numero) {
    numero = 99;
    printf("Dentro da funcao: %d\\n", numero);
}`;

const variableScope = `#include <stdio.h>

int totalAcessos = 0;

void registrarAcesso(void);

int main(void) {
    int acessosNestaExecucao = 3;
    int i;

    for (i = 0; i < acessosNestaExecucao; i++) {
        registrarAcesso();
    }

    printf("Total global: %d\\n", totalAcessos);
    return 0;
}

void registrarAcesso(void) {
    int mensagemExibida = 1;
    totalAcessos++;
    printf("Acesso %d registrado. Controle local: %d\\n",
           totalAcessos, mensagemExibida);
}`;

const geometryReuse = `#include <stdio.h>

float areaRetangulo(float base, float altura);
float areaTriangulo(float base, float altura);

int main(void) {
    float base = 8.0f;
    float altura = 5.0f;

    printf("Area do retangulo: %.2f\\n",
           areaRetangulo(base, altura));
    printf("Area do triangulo: %.2f\\n",
           areaTriangulo(base, altura));
    return 0;
}

float areaRetangulo(float base, float altura) {
    return base * altura;
}

float areaTriangulo(float base, float altura) {
    return areaRetangulo(base, altura) / 2.0f;
}`;

const gradeValidation = `#include <stdio.h>

float lerNotaValida(void);

int main(void) {
    float nota1, nota2, media;

    printf("Primeira nota\\n");
    nota1 = lerNotaValida();

    printf("Segunda nota\\n");
    nota2 = lerNotaValida();

    media = (nota1 + nota2) / 2.0f;
    printf("Media: %.2f\\n", media);
    return 0;
}

float lerNotaValida(void) {
    float nota;

    do {
        printf("Digite uma nota de 0 a 10: ");
        scanf("%f", &nota);

        if (nota < 0.0f || nota > 10.0f) {
            printf("Nota invalida. Tente novamente.\\n");
        }
    } while (nota < 0.0f || nota > 10.0f);

    return nota;
}`;

const refactoredMenu = `#include <stdio.h>

void exibirMenu(void);
float somar(float a, float b);
float subtrair(float a, float b);

int main(void) {
    int opcao;
    float numero1, numero2;

    do {
        exibirMenu();
        scanf("%d", &opcao);

        if (opcao == 1 || opcao == 2) {
            printf("Digite dois numeros: ");
            scanf("%f %f", &numero1, &numero2);
        }

        switch (opcao) {
            case 1:
                printf("Resultado: %.2f\\n", somar(numero1, numero2));
                break;
            case 2:
                printf("Resultado: %.2f\\n", subtrair(numero1, numero2));
                break;
            case 0:
                printf("Programa encerrado.\\n");
                break;
            default:
                printf("Opcao invalida.\\n");
        }
    } while (opcao != 0);
    return 0;
}

void exibirMenu(void) {
    printf("\\n=== CALCULADORA ORGANIZADA ===\\n");
    printf("1 - Somar\\n2 - Subtrair\\n0 - Sair\\n");
    printf("Opcao: ");
}

float somar(float a, float b) { return a + b; }
float subtrair(float a, float b) { return a - b; }`;

const levelUpGrades = `#include <stdio.h>

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

    printf("Media final: %.2f\\n", media);
    exibirSituacao(media);
    return 0;
}

void exibirCabecalho(void) {
    printf("================================\\n");
    printf("     SISTEMA DE NOTAS LEVELUP\\n");
    printf("================================\\n");
}

float lerNotaValida(int numero) {
    float nota;
    do {
        printf("Digite a nota %d (0 a 10): ", numero);
        scanf("%f", &nota);
        if (nota < 0.0f || nota > 10.0f) {
            printf("Nota invalida.\\n");
        }
    } while (nota < 0.0f || nota > 10.0f);
    return nota;
}

float calcularMedia(float nota1, float nota2, float nota3) {
    return (nota1 + nota2 + nota3) / 3.0f;
}

void exibirSituacao(float media) {
    if (media >= 7.0f) {
        printf("Situacao: aprovado.\\n");
    } else if (media >= 5.0f) {
        printf("Situacao: recuperacao.\\n");
    } else {
        printf("Situacao: reprovado.\\n");
    }
}`;

const converterChallenge = `#include <stdio.h>

float celsiusParaFahrenheit(float celsius);
float quilometrosParaMilhas(float quilometros);

int main(void) {
    int opcao;
    float valor;

    printf("1 - Celsius para Fahrenheit\\n");
    printf("2 - Quilometros para milhas\\n");
    printf("Opcao: ");
    scanf("%d", &opcao);
    printf("Valor: ");
    scanf("%f", &valor);

    if (opcao == 1) {
        printf("Resultado: %.2f F\\n",
               celsiusParaFahrenheit(valor));
    } else if (opcao == 2) {
        printf("Resultado: %.2f milha(s)\\n",
               quilometrosParaMilhas(valor));
    } else {
        printf("Opcao invalida.\\n");
    }
    return 0;
}

float celsiusParaFahrenheit(float celsius) {
    return celsius * 9.0f / 5.0f + 32.0f;
}

float quilometrosParaMilhas(float quilometros) {
    return quilometros * 0.621371f;
}`;

const snackBarFunctions = `#include <stdio.h>

void exibirCardapio(void);
float obterPreco(int opcao);
int lerQuantidadeValida(void);

int main(void) {
    int opcao, quantidade;
    float preco, total = 0.0f;

    do {
        exibirCardapio();
        scanf("%d", &opcao);

        if (opcao >= 1 && opcao <= 3) {
            preco = obterPreco(opcao);
            quantidade = lerQuantidadeValida();
            total += preco * quantidade;
            printf("Total parcial: R$ %.2f\\n", total);
        } else if (opcao != 0) {
            printf("Opcao invalida.\\n");
        }
    } while (opcao != 0);

    printf("Total final: R$ %.2f\\n", total);
    return 0;
}

void exibirCardapio(void) {
    printf("\\n=== LANCHONETE LEVELUP ===\\n");
    printf("1 - Hamburguer  R$ 18.00\\n");
    printf("2 - Batata      R$ 10.00\\n");
    printf("3 - Suco        R$  7.00\\n");
    printf("0 - Fechar pedido\\nOpcao: ");
}

float obterPreco(int opcao) {
    switch (opcao) {
        case 1: return 18.0f;
        case 2: return 10.0f;
        default: return 7.0f;
    }
}

int lerQuantidadeValida(void) {
    int quantidade;
    do {
        printf("Quantidade: ");
        scanf("%d", &quantidade);
        if (quantidade <= 0) {
            printf("Digite uma quantidade positiva.\\n");
        }
    } while (quantidade <= 0);
    return quantidade;
}`;

export function TrackFive({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner"><div><p className="section-kicker">Materiais da trilha</p><strong>Quatorze programas em C organizados com funções</strong><span>Baixe todos os exemplos, práticas e projetos para abrir no Dev-C++.</span></div><a className="button-primary" href="/downloads/trilha-05/trilha-05-codigos.zip" download><FileArchive /> Baixar todos os códigos</a></div>
      <div className="devcpp-banner"><TerminalSquare /><div><strong>O programa continua sendo C puro</strong><p>Salve cada exemplo com extensão <code>.c</code>. O Dev-C++ será somente nosso ambiente de escrita, compilação e execução.</p></div></div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>Até a trilha anterior, quase todas as instruções ficavam dentro da função <code>main</code>. Isso funciona em programas pequenos, mas se torna confuso quando o código cresce. Uma função reúne instruções responsáveis por uma tarefa específica e recebe um nome que explica essa tarefa.</p>
        <div className="function-benefits"><div><PackageOpen /><strong>Organizar</strong><p>Cada parte cuida de uma responsabilidade.</p></div><div><RefreshCcw /><strong>Reutilizar</strong><p>Uma tarefa pode ser chamada várias vezes.</p></div><div><GitMerge /><strong>Combinar</strong><p>Funções menores formam programas maiores.</p></div></div>
        <div className="before-after-code"><div><small>SEM ORGANIZAÇÃO</small><strong>main faz tudo</strong><p>Entrada, cálculo, menu, validação e saída ficam misturados.</p></div><div><small>COM FUNÇÕES</small><strong>main coordena</strong><p>Cada tarefa recebe um nome e um bloco próprio.</p></div></div>
        <Activity title="Encontre as responsabilidades" level="guiada"><p>Em um sistema de notas, identifique tarefas que poderiam virar funções.</p><Reveal title="Revelar possibilidades"><p>Exibir cabeçalho, ler nota válida, calcular média e mostrar situação são quatro responsabilidades claras.</p></Reveal></Activity>
        <Activity title="Planeje antes de codificar" level="pratica"><p>Escolha um programa da Trilha 04 e anote três partes que poderiam receber nomes de função. Ainda não altere o código.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>Uma função precisa de quatro informações: o tipo de dado que devolve, seu nome, os dados que recebe entre parênteses e o bloco de instruções. Quando não devolve valor, usamos <code>void</code>. Quando não recebe dados, escrevemos <code>void</code> nos parênteses.</p>
        <div className="function-anatomy"><span>void</span><strong>mostrarBoasVindas</strong><em>(void)</em><b>{`{ ... }`}</b></div>
        <div className="function-labels"><span>tipo de retorno</span><span>nome da tarefa</span><span>parâmetros</span><span>corpo</span></div>
        <CodeBlock code={firstFunction} filename="primeira-funcao.c" downloadUrl="/downloads/trilha-05/primeira-funcao.c" />
        <p>Definir a função é escrever o que ela faz. Chamar a função é solicitar sua execução. A linha <code>mostrarBoasVindas();</code> dentro da <code>main</code> realiza essa chamada.</p>
        <Activity title="Siga o fluxo real" level="guiada"><ol className="exercise-list"><li>O programa começa na <code>main</code>.</li><li>A chamada transfere a execução para <code>mostrarBoasVindas</code>.</li><li>As três mensagens são exibidas.</li><li>A execução retorna para a linha posterior à chamada.</li></ol></Activity>
        <Activity title="Crie uma função de despedida" level="pratica"><p>Crie <code>void mostrarDespedida(void)</code>, mostre duas mensagens e faça a chamada antes de <code>return 0</code>.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p>O compilador lê o arquivo de cima para baixo. Se a definição de uma função estiver depois da <code>main</code>, precisamos apresentar sua assinatura antes da primeira chamada. Essa apresentação é o <strong>protótipo</strong>.</p>
        <CodeBlock code={functionPrototype} filename="funcao-com-prototipo.c" downloadUrl="/downloads/trilha-05/funcao-com-prototipo.c" />
        <div className="prototype-map"><div><span>1</span><strong>Protótipo</strong><code>void mostrarMensagem(void);</code><p>Promete que a função existe.</p></div><div><span>2</span><strong>Chamada</strong><code>mostrarMensagem();</code><p>Solicita a execução.</p></div><div><span>3</span><strong>Definição</strong><code>void mostrarMensagem(void) {`{...}`}</code><p>Contém as instruções.</p></div></div>
        <div className="warning-callout"><Braces /><div><strong>Assinaturas precisam combinar</strong><p>Nome, tipo de retorno e parâmetros do protótipo devem ser compatíveis com a definição. Uma diferença faz o compilador reclamar.</p></div></div>
        <Activity title="Complete o protótipo" level="pratica"><p>A função será definida como <code>float calcularDesconto(float valor)</code>. Escreva seu protótipo.</p><Reveal title="Revelar resposta"><CodeBlock code={`float calcularDesconto(float valor);`} filename="prototipo-trecho.c" /></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>Parâmetros são variáveis que recebem dados no momento da chamada. Eles tornam uma função flexível. Em vez de criar uma função para dobrar 7 e outra para dobrar 12, criamos uma única função que recebe qualquer número.</p>
        <CodeBlock code={parameters} filename="funcoes-com-parametros.c" downloadUrl="/downloads/trilha-05/funcoes-com-parametros.c" />
        <div className="argument-flow"><div><small>ARGUMENTO</small><code>mostrarDobro(7)</code></div><span>→</span><div><small>PARÂMETRO</small><code>int numero = 7</code></div><span>→</span><div><small>USO</small><code>numero * 2</code></div></div>
        <p><strong>Argumento</strong> é o valor enviado na chamada. <strong>Parâmetro</strong> é a variável que o recebe dentro da função. A quantidade, a ordem e os tipos precisam ser compatíveis.</p>
        <Activity title="Mensagem personalizada" level="pratica"><p>Crie <code>void mostrarPontuacao(int fase, int pontos)</code> e faça três chamadas com valores diferentes.</p><Reveal title="Revelar função"><CodeBlock code={`void mostrarPontuacao(int fase, int pontos) {\n    printf("Fase %d: %d ponto(s).\\n", fase, pontos);\n}`} filename="pontuacao-trecho.c" /></Reveal></Activity>
        <Activity title="Identifique o erro" level="desafio"><p>Por que <code>desenharLinha(20, '*')</code> está incorreto para o protótipo <code>void desenharLinha(char simbolo, int quantidade)</code>?</p><Reveal title="Revelar explicação"><p>Os argumentos estão invertidos. A chamada correta é <code>desenharLinha('*', 20)</code>.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p>Uma função pode calcular e devolver um resultado usando <code>return</code>. O tipo escrito antes do nome informa o tipo do valor devolvido. Se a função começa com <code>int</code>, seu retorno precisa ser compatível com um inteiro.</p>
        <CodeBlock code={returnSum} filename="funcao-com-retorno.c" downloadUrl="/downloads/trilha-05/funcao-com-retorno.c" />
        <div className="return-flow"><div><strong>Entrada</strong><code>8 e 5</code></div><span>→</span><div><strong>Processamento</strong><code>8 + 5</code></div><span>→</span><div><strong>Retorno</strong><code>13</code></div></div>
        <p>O valor retornado pode ser guardado em uma variável, usado em outra expressão ou enviado diretamente para <code>printf</code>. Após executar <code>return</code>, a função termina naquele ponto.</p>
        <CodeBlock code={calculatorFunctions} filename="calculadora-com-funcoes.c" downloadUrl="/downloads/trilha-05/calculadora-com-funcoes.c" />
        <Activity title="Maior entre dois números" level="pratica"><p>Crie <code>int maior(int a, int b)</code> e devolva o maior valor.</p><Reveal title="Revelar solução"><CodeBlock code={`int maior(int a, int b) {\n    if (a > b) {\n        return a;\n    }\n    return b;\n}`} filename="maior-trecho.c" /></Reveal></Activity>
        <Activity title="Calcule o preço com desconto" level="desafio"><p>Crie uma função que receba preço e percentual, calcule o desconto e devolva o preço final.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>Funções do tipo <code>void</code> executam uma ação, mas não entregam um valor para quem chamou. Também são chamadas de procedimentos em muitos materiais didáticos. Elas são ótimas para exibir menus, cabeçalhos, relatórios e mensagens.</p>
        <CodeBlock code={voidProcedure} filename="procedimentos-void.c" downloadUrl="/downloads/trilha-05/procedimentos-void.c" />
        <div className="concept-grid"><ConceptCard label="RETORNA VALOR" title="float calcularMedia(...)" tone="blue">Produz um dado que será utilizado por outra parte.</ConceptCard><ConceptCard label="EXECUTA AÇÃO" title="void exibirMenu(...)" tone="amber">Realiza uma tarefa sem devolver resultado.</ConceptCard><ConceptCard label="DECISÃO" title="Pergunte o destino" tone="slate">Preciso receber um valor ou apenas executar algo?</ConceptCard></div>
        <Activity title="Classifique as funções" level="guiada"><p>Decida entre <code>void</code> e retorno para: exibir relatório; calcular imposto; verificar maior idade; desenhar separador.</p><Reveal title="Revelar classificação"><p>Exibir relatório e desenhar separador podem ser <code>void</code>. Calcular imposto deve retornar um número. Verificar maior idade pode retornar <code>int</code>: 1 ou 0.</p></Reveal></Activity>
        <Activity title="Crie um recibo" level="pratica"><p>Faça uma função <code>void exibirRecibo(float total)</code> que mostre um cabeçalho e o valor formatado.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>Até aqui, os argumentos simples são passados <strong>por valor</strong>: a função recebe uma cópia. Alterar o parâmetro dentro da função não altera automaticamente a variável original da <code>main</code>.</p>
        <CodeBlock code={passByValue} filename="passagem-por-valor.c" downloadUrl="/downloads/trilha-05/passagem-por-valor.c" />
        <div className="copy-visual"><div><small>ORIGINAL NA MAIN</small><strong>valor = 10</strong></div><span>cópia →</span><div><small>PARÂMETRO NA FUNÇÃO</small><strong>numero = 99</strong></div></div>
        <p>O programa mostra 10, depois 99 dentro da função e novamente 10 ao voltar. Mais adiante aprenderemos outras formas de permitir que funções alterem dados externos. Por enquanto, use o valor de retorno quando precisar devolver um resultado.</p>
        <h3 className="lesson-subtitle">Escopo: onde a variável existe</h3>
        <CodeBlock code={variableScope} filename="escopo-de-variaveis.c" downloadUrl="/downloads/trilha-05/escopo-de-variaveis.c" />
        <div className="scope-zones"><div><strong>Global</strong><p>Declarada fora das funções. Pode ser acessível por várias partes do arquivo.</p></div><div><strong>Local</strong><p>Declarada dentro de uma função ou bloco. Existe somente naquele contexto.</p></div></div>
        <div className="warning-callout"><Lightbulb /><div><strong>Prefira dados locais</strong><p>Variáveis globais podem ser úteis, mas aumentam a quantidade de partes capazes de modificar o mesmo estado. Para iniciantes, parâmetros e retornos deixam o fluxo mais claro.</p></div></div>
      </TrailSection>

      <TrailSection topic={track.topics[7]} number="08">
        <p>Reutilizar não significa apenas chamar a mesma função várias vezes. Uma função também pode aproveitar outra função já existente. Isso evita repetir fórmulas e mantém uma única fonte para cada regra.</p>
        <CodeBlock code={geometryReuse} filename="reutilizacao-geometria.c" downloadUrl="/downloads/trilha-05/reutilizacao-geometria.c" />
        <div className="reuse-tree"><div className="reuse-root"><strong>areaTriangulo</strong><p>precisa da área do retângulo ÷ 2</p></div><div className="reuse-child"><strong>areaRetangulo</strong><p>já calcula base × altura</p></div></div>
        <p>Decompor um problema é transformar uma tarefa grande em pequenas responsabilidades. Uma boa função costuma ter nome de ação, finalidade clara e tamanho suficiente para ser compreendida sem esforço.</p>
        <div className="function-rules"><div><span>1</span><strong>Uma responsabilidade</strong></div><div><span>2</span><strong>Nome que explica</strong></div><div><span>3</span><strong>Entradas explícitas</strong></div><div><span>4</span><strong>Saída previsível</strong></div></div>
        <Activity title="Decomponha um caixa eletrônico" level="desafio"><p>Planeje funções para exibir menu, consultar saldo, depositar, sacar e validar valor. Para cada uma, indique parâmetros e tipo de retorno.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[8]} number="09">
        <p>Quando a mesma validação aparece em vários lugares, podemos transformá-la em uma função. Assim, corrigir a regra uma vez melhora todas as chamadas. A função abaixo só termina quando consegue devolver uma nota válida.</p>
        <CodeBlock code={gradeValidation} filename="funcao-validar-nota.c" downloadUrl="/downloads/trilha-05/funcao-validar-nota.c" />
        <div className="validation-rules"><div><ShieldCheck /><strong>Repete internamente</strong><p>A própria função controla novas tentativas.</p></div><div><PackageOpen /><strong>Esconde a complexidade</strong><p>A <code>main</code> apenas solicita uma nota válida.</p></div><div><RefreshCcw /><strong>Reutiliza</strong><p>A mesma função lê nota 1 e nota 2.</p></div></div>
        <Activity title="Leia idade válida" level="pratica"><p>Crie <code>int lerIdadeValida(void)</code>, aceite somente valores entre 0 e 120 e devolva a idade.</p></Activity>
        <Activity title="Função de opção válida" level="desafio"><p>Crie uma função que receba opção mínima e máxima, repita a leitura e devolva uma opção dentro do intervalo.</p><Reveal title="Revelar protótipo sugerido"><CodeBlock code={`int lerOpcaoValida(int minimo, int maximo);`} filename="opcao-valida-trecho.c" /></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[9]} number="10">
        <p><strong>Refatorar</strong> é reorganizar um programa sem mudar sua finalidade. A calculadora da trilha anterior funcionava, mas agora podemos separar menu e operações. A <code>main</code> fica responsável por coordenar o fluxo.</p>
        <CodeBlock code={refactoredMenu} filename="calculadora-refatorada.c" downloadUrl="/downloads/trilha-05/calculadora-refatorada.c" />
        <div className="refactor-pipeline"><div><small>ANTES</small><strong>Um bloco grande</strong><p>Muitas responsabilidades misturadas.</p></div><span>→</span><div><small>REFATORAÇÃO</small><strong>Separar tarefas</strong><p>Nomes, parâmetros e retornos claros.</p></div><span>→</span><div><small>DEPOIS</small><strong>main coordenadora</strong><p>O fluxo principal pode ser lido rapidamente.</p></div></div>
        <h3 className="lesson-subtitle">Projeto da trilha — Sistema de Notas LevelUp</h3>
        <CodeBlock code={levelUpGrades} filename="sistema-notas-levelup.c" downloadUrl="/downloads/trilha-05/sistema-notas-levelup.c" />
        <div className="project-roadmap"><div><span>1</span><strong>Exibir</strong><p><code>exibirCabecalho</code> apresenta o sistema.</p></div><div><span>2</span><strong>Obter e calcular</strong><p>Funções validam notas e devolvem a média.</p></div><div><span>3</span><strong>Interpretar</strong><p><code>exibirSituacao</code> transforma média em resultado.</p></div></div>
        <Activity title="Teste todas as situações" level="guiada"><div className="table-wrap"><table className="desk-table"><thead><tr><th>Notas</th><th>Média</th><th>Esperado</th></tr></thead><tbody><tr><td>8, 7, 9</td><td>8</td><td>aprovado</td></tr><tr><td>5, 6, 4</td><td>5</td><td>recuperação</td></tr><tr><td>3, 4, 2</td><td>3</td><td>reprovado</td></tr><tr><td>-1, depois 7</td><td>—</td><td>recusar -1</td></tr></tbody></table></div></Activity>
        <Activity title="Desafio 1 — Conversor organizado" level="desafio"><p>Construa conversões como funções com retorno. Tente antes de revelar o programa completo.</p><Reveal title="Revelar programa completo"><CodeBlock code={converterChallenge} filename="desafio-conversor.c" downloadUrl="/downloads/trilha-05/desafio-conversor.c" /></Reveal></Activity>
        <Activity title="Desafio 2 — Refatore a Lanchonete LevelUp" level="desafio"><p>Compare a versão da Trilha 04 com esta versão organizada. Identifique o que saiu da <code>main</code> e qual informação cada função recebe ou devolve.</p><Reveal title="Revelar programa completo"><CodeBlock code={snackBarFunctions} filename="desafio-lanchonete-funcoes.c" downloadUrl="/downloads/trilha-05/desafio-lanchonete-funcoes.c" /></Reveal></Activity>
        <div className="final-checklist"><div><Target /><h3>Checklist de domínio da Trilha 05</h3></div><ul><li><CheckCircle2 /> Sei definir, declarar e chamar uma função.</li><li><CheckCircle2 /> Diferencio argumento de parâmetro.</li><li><CheckCircle2 /> Escolho entre retorno de valor e <code>void</code>.</li><li><CheckCircle2 /> Compreendo passagem por valor e escopo local.</li><li><CheckCircle2 /> Divido um problema em responsabilidades menores.</li><li><CheckCircle2 /> Consigo refatorar uma <code>main</code> extensa.</li></ul></div>
      </TrailSection>
    </div>
  );
}
