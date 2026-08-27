import {
  AlertTriangle,
  CheckCircle2,
  FileArchive,
  Hash,
  Keyboard,
  Lightbulb,
  ListOrdered,
  Search,
  ShieldCheck,
  Target,
  TerminalSquare,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, ConceptCard, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const vectorIntroduction = `#include <stdio.h>

int main(void) {
    int pontos[5] = {10, 25, 18, 30, 22};

    printf("Primeiro valor: %d\\n", pontos[0]);
    printf("Terceiro valor: %d\\n", pontos[2]);
    printf("Ultimo valor: %d\\n", pontos[4]);
    return 0;
}`;

const vectorIndexes = `#include <stdio.h>

int main(void) {
    float notas[4] = {7.5f, 8.0f, 6.5f, 9.0f};

    notas[2] = 7.0f;

    printf("notas[0] = %.1f\\n", notas[0]);
    printf("notas[1] = %.1f\\n", notas[1]);
    printf("notas[2] = %.1f\\n", notas[2]);
    printf("notas[3] = %.1f\\n", notas[3]);
    return 0;
}`;

const vectorInput = `#include <stdio.h>

#define TAMANHO 5

int main(void) {
    int numeros[TAMANHO];
    int i;

    for (i = 0; i < TAMANHO; i++) {
        printf("Digite o valor da posicao %d: ", i);
        scanf("%d", &numeros[i]);
    }

    printf("\\nValores armazenados:\\n");
    for (i = 0; i < TAMANHO; i++) {
        printf("numeros[%d] = %d\\n", i, numeros[i]);
    }
    return 0;
}`;

const vectorStatistics = `#include <stdio.h>

#define TAMANHO 5

int main(void) {
    float valores[TAMANHO] = {12.5f, 8.0f, 19.5f, 6.0f, 14.0f};
    float soma = 0.0f;
    float maior = valores[0];
    float menor = valores[0];
    int i;

    for (i = 0; i < TAMANHO; i++) {
        soma += valores[i];

        if (valores[i] > maior) {
            maior = valores[i];
        }
        if (valores[i] < menor) {
            menor = valores[i];
        }
    }

    printf("Soma: %.2f\\n", soma);
    printf("Media: %.2f\\n", soma / TAMANHO);
    printf("Maior: %.2f\\n", maior);
    printf("Menor: %.2f\\n", menor);
    return 0;
}`;

const linearSearch = `#include <stdio.h>

#define TAMANHO 6

int main(void) {
    int codigos[TAMANHO] = {104, 205, 310, 412, 518, 620};
    int procurado, posicao = -1;
    int i;

    printf("Digite o codigo procurado: ");
    scanf("%d", &procurado);

    for (i = 0; i < TAMANHO; i++) {
        if (codigos[i] == procurado) {
            posicao = i;
            break;
        }
    }

    if (posicao == -1) {
        printf("Codigo nao encontrado.\\n");
    } else {
        printf("Codigo encontrado no indice %d.\\n", posicao);
    }
    return 0;
}`;

const vectorFunctions = `#include <stdio.h>

void exibirVetor(const int valores[], int tamanho);
int somarVetor(const int valores[], int tamanho);
void dobrarVetor(int valores[], int tamanho);

int main(void) {
    int numeros[4] = {2, 4, 6, 8};

    printf("Original: ");
    exibirVetor(numeros, 4);
    printf("Soma: %d\\n", somarVetor(numeros, 4));

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
    printf("\\n");
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
}`;

const gradeMatrix = `#include <stdio.h>

#define ALUNOS 3
#define NOTAS 2

int main(void) {
    float boletim[ALUNOS][NOTAS] = {
        {8.0f, 7.5f},
        {6.0f, 9.0f},
        {7.0f, 8.5f}
    };

    printf("Aluno 1, nota 1: %.1f\\n", boletim[0][0]);
    printf("Aluno 2, nota 2: %.1f\\n", boletim[1][1]);
    printf("Aluno 3, nota 1: %.1f\\n", boletim[2][0]);
    return 0;
}`;

const matrixTraversal = `#include <stdio.h>

#define LINHAS 3
#define COLUNAS 3

int main(void) {
    int matriz[LINHAS][COLUNAS];
    int linha, coluna, soma = 0;

    for (linha = 0; linha < LINHAS; linha++) {
        for (coluna = 0; coluna < COLUNAS; coluna++) {
            printf("Valor [%d][%d]: ", linha, coluna);
            scanf("%d", &matriz[linha][coluna]);
            soma += matriz[linha][coluna];
        }
    }

    printf("\\nMatriz informada:\\n");
    for (linha = 0; linha < LINHAS; linha++) {
        for (coluna = 0; coluna < COLUNAS; coluna++) {
            printf("%4d", matriz[linha][coluna]);
        }
        printf("\\n");
    }
    printf("Soma de todos os valores: %d\\n", soma);
    return 0;
}`;

const characterAscii = `#include <stdio.h>

int main(void) {
    char letra = 'A';

    printf("Caractere: %c\\n", letra);
    printf("Codigo numerico: %d\\n", letra);

    letra++;
    printf("Proximo caractere: %c\\n", letra);
    return 0;
}`;

const characterClassification = `#include <stdio.h>
#include <ctype.h>

int main(void) {
    char caractere;

    printf("Digite um caractere: ");
    scanf(" %c", &caractere);

    if (isalpha((unsigned char) caractere)) {
        printf("E uma letra.\\n");
        printf("Maiuscula: %c\\n", toupper((unsigned char) caractere));
        printf("Minuscula: %c\\n", tolower((unsigned char) caractere));
    } else if (isdigit((unsigned char) caractere)) {
        printf("E um algarismo.\\n");
    } else {
        printf("E um simbolo.\\n");
    }
    return 0;
}`;

const simpleString = `#include <stdio.h>

int main(void) {
    char curso[] = "Linguagem C";
    int i = 0;

    printf("Texto completo: %s\\n", curso);

    while (curso[i] != '\\0') {
        printf("curso[%d] = %c\\n", i, curso[i]);
        i++;
    }

    printf("Quantidade de caracteres: %d\\n", i);
    return 0;
}`;

const safeFgets = `#include <stdio.h>
#include <string.h>

int main(void) {
    char nome[50];

    printf("Digite seu nome completo: ");
    fgets(nome, sizeof(nome), stdin);

    nome[strcspn(nome, "\\n")] = '\\0';

    printf("Ola, %s!\\n", nome);
    printf("Seu texto possui %zu caractere(s).\\n", strlen(nome));
    return 0;
}`;

const stringLibrary = `#include <stdio.h>
#include <string.h>

int main(void) {
    char usuario[30] = "dayvson";
    char tentativa[30];
    char copia[30];

    printf("Digite o usuario: ");
    fgets(tentativa, sizeof(tentativa), stdin);
    tentativa[strcspn(tentativa, "\\n")] = '\\0';

    strcpy(copia, tentativa);

    printf("Tamanho: %zu\\n", strlen(tentativa));
    printf("Copia: %s\\n", copia);

    if (strcmp(usuario, tentativa) == 0) {
        printf("Usuario encontrado.\\n");
    } else {
        printf("Usuario diferente.\\n");
    }
    return 0;
}`;

const vowelCounter = `#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void) {
    char texto[100];
    int vogais = 0;
    int i;

    printf("Digite uma frase: ");
    fgets(texto, sizeof(texto), stdin);
    texto[strcspn(texto, "\\n")] = '\\0';

    for (i = 0; texto[i] != '\\0'; i++) {
        char letra = (char) tolower((unsigned char) texto[i]);
        if (letra == 'a' || letra == 'e' || letra == 'i' ||
            letra == 'o' || letra == 'u') {
            vogais++;
        }
    }

    printf("Quantidade de vogais sem acento: %d\\n", vogais);
    return 0;
}`;

const rankingProject = `#include <stdio.h>
#include <string.h>

#define JOGADORES 3
#define TAM_NOME 40

void limparEntrada(void);
void lerTexto(char texto[], int tamanho);

int main(void) {
    char nomes[JOGADORES][TAM_NOME];
    int pontos[JOGADORES];
    int i, indiceMelhor = 0;

    printf("=== RANKING LEVELUP ===\\n");
    for (i = 0; i < JOGADORES; i++) {
        printf("\\nNome do jogador %d: ", i + 1);
        lerTexto(nomes[i], TAM_NOME);

        printf("Pontuacao: ");
        scanf("%d", &pontos[i]);
        limparEntrada();

        if (pontos[i] > pontos[indiceMelhor]) {
            indiceMelhor = i;
        }
    }

    printf("\\n=== CLASSIFICACAO ===\\n");
    for (i = 0; i < JOGADORES; i++) {
        printf("%d. %-20s %d ponto(s)\\n",
               i + 1, nomes[i], pontos[i]);
    }

    printf("\\nDestaque: %s com %d ponto(s)!\\n",
           nomes[indiceMelhor], pontos[indiceMelhor]);
    return 0;
}

void limparEntrada(void) {
    int caractere;
    while ((caractere = getchar()) != '\\n' && caractere != EOF) {
    }
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\\n")] = '\\0';
}`;

const contactChallenge = `#include <stdio.h>
#include <string.h>

#define CONTATOS 3
#define TAM 50

void lerTexto(char texto[], int tamanho);

int main(void) {
    char nomes[CONTATOS][TAM];
    char telefones[CONTATOS][TAM];
    char busca[TAM];
    int i, encontrado = -1;

    for (i = 0; i < CONTATOS; i++) {
        printf("Nome do contato %d: ", i + 1);
        lerTexto(nomes[i], TAM);
        printf("Telefone: ");
        lerTexto(telefones[i], TAM);
    }

    printf("\\nNome que deseja buscar: ");
    lerTexto(busca, TAM);

    for (i = 0; i < CONTATOS; i++) {
        if (strcmp(nomes[i], busca) == 0) {
            encontrado = i;
            break;
        }
    }

    if (encontrado == -1) {
        printf("Contato nao encontrado.\\n");
    } else {
        printf("Telefone de %s: %s\\n",
               nomes[encontrado], telefones[encontrado]);
    }
    return 0;
}

void lerTexto(char texto[], int tamanho) {
    fgets(texto, tamanho, stdin);
    texto[strcspn(texto, "\\n")] = '\\0';
}`;

export function TrackSix({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner"><div><p className="section-kicker">Materiais da trilha</p><strong>Dezesseis programas em C sobre coleções e textos</strong><span>Todos os exemplos e projetos podem ser abertos diretamente no Dev-C++.</span></div><a className="button-primary" href="/downloads/trilha-06/trilha-06-codigos.zip" download><FileArchive /> Baixar todos os códigos</a></div>
      <div className="devcpp-banner"><TerminalSquare /><div><strong>Continue salvando como .c</strong><p>Utilizaremos recursos da biblioteca padrão da linguagem C. Não há código C++ nesta trilha.</p></div></div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>Uma variável comum guarda um valor. Quando precisamos armazenar várias notas, pontuações ou idades do mesmo tipo, podemos criar um <strong>vetor</strong>: uma sequência de espaços identificados por um único nome.</p>
        <div className="array-visual" aria-label="Vetor de cinco posições">{[10,25,18,30,22].map((value,index)=><div key={index}><small>pontos[{index}]</small><strong>{value}</strong></div>)}</div>
        <CodeBlock code={vectorIntroduction} filename="primeiro-vetor.c" downloadUrl="/downloads/trilha-06/primeiro-vetor.c" />
        <div className="concept-grid"><ConceptCard label="TIPO" title="int" tone="blue">Todos os elementos deste vetor são inteiros.</ConceptCard><ConceptCard label="NOME" title="pontos" tone="amber">Identifica a coleção inteira.</ConceptCard><ConceptCard label="TAMANHO" title="[5]" tone="slate">Reserva exatamente cinco posições.</ConceptCard></div>
        <Activity title="Leia a declaração" level="guiada"><p>Explique com suas palavras a declaração <code>float precos[8];</code>.</p><Reveal title="Revelar interpretação"><p>Cria um vetor chamado <code>precos</code> com oito posições, e cada posição armazena um valor do tipo <code>float</code>.</p></Reveal></Activity>
        <Activity title="Crie sua primeira coleção" level="pratica"><p>Declare um vetor com as temperaturas de cinco dias, inicialize os valores e mostre a primeira e a última temperatura.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>As posições de um vetor são chamadas de <strong>índices</strong>. Em C, a contagem começa em zero. Portanto, um vetor de tamanho 4 possui os índices 0, 1, 2 e 3. O último índice sempre é tamanho menos um.</p>
        <div className="index-ruler">{[0,1,2,3].map(index=><div key={index}><small>ÍNDICE {index}</small><strong>{[7.5,8.0,7.0,9.0][index].toFixed(1)}</strong></div>)}</div>
        <CodeBlock code={vectorIndexes} filename="indices-do-vetor.c" downloadUrl="/downloads/trilha-06/indices-do-vetor.c" />
        <div className="warning-callout"><AlertTriangle /><div><strong>Não ultrapasse os limites</strong><p>Em <code>float notas[4]</code>, acessar <code>notas[4]</code> é incorreto. A linguagem C não protege automaticamente esse limite e o comportamento pode ser imprevisível.</p></div></div>
        <Activity title="Descubra o último índice" level="guiada"><div className="table-wrap"><table className="desk-table"><thead><tr><th>Tamanho</th><th>Primeiro índice</th><th>Último índice</th></tr></thead><tbody><tr><td>5</td><td>0</td><td>4</td></tr><tr><td>10</td><td>0</td><td>9</td></tr><tr><td>100</td><td>0</td><td>99</td></tr></tbody></table></div></Activity>
        <Activity title="Corrija o laço" level="desafio"><p>Para um vetor de tamanho 5, por que <code>for (i = 0; i &lt;= 5; i++)</code> está errado?</p><Reveal title="Revelar correção"><p>Ele tenta acessar o índice 5, que não existe. Use <code>i &lt; 5</code>.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p>Vetores e laços trabalham juntos. A variável de controle do <code>for</code> pode ser usada como índice, permitindo preencher ou mostrar todas as posições sem repetir comandos manualmente.</p>
        <CodeBlock code={vectorInput} filename="preencher-e-exibir-vetor.c" downloadUrl="/downloads/trilha-06/preencher-e-exibir-vetor.c" />
        <div className="array-loop-flow"><div><span>i = 0</span><p>acessa <code>numeros[0]</code></p></div><div><span>i = 1</span><p>acessa <code>numeros[1]</code></p></div><div><span>...</span><p>continua avançando</p></div><div><span>i = 4</span><p>acessa <code>numeros[4]</code></p></div></div>
        <p>A constante <code>TAMANHO</code> evita espalhar o número 5 pelo programa. Se o vetor crescer, alteramos a constante e os laços continuam coerentes.</p>
        <Activity title="Mostre na ordem inversa" level="pratica"><p>Depois de preencher o vetor, crie um segundo laço que mostre os valores do índice 4 até o índice 0.</p><Reveal title="Revelar laço"><CodeBlock code={`for (i = TAMANHO - 1; i >= 0; i--) {\n    printf("%d ", numeros[i]);\n}`} filename="vetor-inverso-trecho.c" /></Reveal></Activity>
        <Activity title="Dobre cada posição" level="desafio"><p>Percorra o vetor, multiplique cada elemento por 2 e depois mostre o resultado.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>Ao percorrer um vetor, podemos acumular, contar, comparar e procurar. Para encontrar maior e menor, começamos com o primeiro elemento real — não com zero — pois todos os valores poderiam ser negativos.</p>
        <CodeBlock code={vectorStatistics} filename="estatisticas-do-vetor.c" downloadUrl="/downloads/trilha-06/estatisticas-do-vetor.c" />
        <div className="analysis-cards"><div><Hash /><strong>Somar e calcular média</strong><p>Acumule cada elemento e divida pela quantidade.</p></div><div><ListOrdered /><strong>Maior e menor</strong><p>Compare cada elemento com o melhor valor atual.</p></div><div><Search /><strong>Buscar</strong><p>Percorra até encontrar o valor desejado.</p></div></div>
        <CodeBlock code={linearSearch} filename="busca-linear.c" downloadUrl="/downloads/trilha-06/busca-linear.c" />
        <p>A variável <code>posicao</code> começa em -1 porque nenhum índice válido possui esse valor. Ela funciona como uma marca de “não encontrado”.</p>
        <Activity title="Conte valores acima da média" level="desafio"><p>Calcule primeiro a média. Depois faça um segundo percurso e conte quantos elementos estão acima dela.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p>Um vetor pode ser enviado para uma função junto com seu tamanho. A função precisa do tamanho porque o parâmetro não informa automaticamente quantas posições devem ser percorridas.</p>
        <CodeBlock code={vectorFunctions} filename="vetores-em-funcoes.c" downloadUrl="/downloads/trilha-06/vetores-em-funcoes.c" />
        <div className="vector-function-map"><div><small>SOMENTE LEITURA</small><code>const int valores[]</code><p>A função promete não modificar os elementos.</p></div><div><small>PODE MODIFICAR</small><code>int valores[]</code><p>Alterações feitas nas posições atingem o vetor original.</p></div><div><small>LIMITE</small><code>int tamanho</code><p>Informa quantas posições são válidas.</p></div></div>
        <div className="learning-callout"><Lightbulb /><div><strong>Vetores não se comportam como números simples</strong><p>Quando uma função altera <code>valores[i]</code>, o vetor original também muda. Use <code>const</code> quando a função deve apenas consultar.</p></div></div>
        <Activity title="Crie calcularMaior" level="pratica"><p>Faça <code>int calcularMaior(const int valores[], int tamanho)</code> e devolva o maior elemento.</p></Activity>
        <Activity title="Normalize pontuações" level="desafio"><p>Crie uma função que receba um vetor e limite todos os valores acima de 100 para exatamente 100.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>Uma matriz organiza valores em linhas e colunas. Ela pode representar notas de alunos, assentos de cinema, pixels de uma imagem ou uma tabela de vendas. Para acessar um elemento, usamos dois índices: <code>matriz[linha][coluna]</code>.</p>
        <div className="matrix-visual"><div></div><small>N1</small><small>N2</small><strong>Aluno 1</strong><span>8.0</span><span>7.5</span><strong>Aluno 2</strong><span>6.0</span><span>9.0</span><strong>Aluno 3</strong><span>7.0</span><span>8.5</span></div>
        <CodeBlock code={gradeMatrix} filename="primeira-matriz.c" downloadUrl="/downloads/trilha-06/primeira-matriz.c" />
        <div className="condition-anatomy"><span>float</span><strong>boletim[3][2]</strong><em>3 linhas × 2 colunas</em></div>
        <Activity title="Localize a célula" level="guiada"><p>Qual expressão acessa a segunda nota do terceiro aluno?</p><Reveal title="Revelar resposta"><p><code>boletim[2][1]</code>: o terceiro aluno está na linha 2 e a segunda nota na coluna 1.</p></Reveal></Activity>
        <Activity title="Planeje uma sala" level="pratica"><p>Declare uma matriz de inteiros com 5 fileiras e 6 assentos por fileira. Quantos elementos ela possui?</p><Reveal title="Revelar total"><p><code>int assentos[5][6];</code> possui <code>5 × 6 = 30</code> elementos.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>Para percorrer uma matriz, usamos laços aninhados: o laço externo escolhe a linha e o interno percorre todas as colunas daquela linha. Depois o laço externo avança para a próxima linha.</p>
        <CodeBlock code={matrixTraversal} filename="percorrer-matriz.c" downloadUrl="/downloads/trilha-06/percorrer-matriz.c" />
        <div className="matrix-route" aria-label="Ordem de percurso de uma matriz 3 por 3">{[1,2,3,4,5,6,7,8,9].map(value=><span key={value}>{value}</span>)}</div>
        <p>Os números representam a ordem do percurso: primeiro toda a linha 0, depois a linha 1 e, por fim, a linha 2.</p>
        <Activity title="Some a diagonal principal" level="pratica"><p>Em uma matriz 3 × 3, some as posições <code>[0][0]</code>, <code>[1][1]</code> e <code>[2][2]</code>.</p><Reveal title="Revelar regra geral"><p>Dentro dos laços, some quando <code>linha == coluna</code>.</p></Reveal></Activity>
        <Activity title="Maior valor da matriz" level="desafio"><p>Encontre o maior elemento e mostre também a linha e a coluna em que ele aparece.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[7]} number="08">
        <p>O tipo <code>char</code> guarda um código numérico que representa um caractere. Por isso podemos mostrar a mesma variável com <code>%c</code>, como símbolo, ou com <code>%d</code>, como número.</p>
        <CodeBlock code={characterAscii} filename="caractere-e-codigo.c" downloadUrl="/downloads/trilha-06/caractere-e-codigo.c" />
        <div className="char-card"><div><small>VALOR ARMAZENADO</small><strong>65</strong></div><span>↔</span><div><small>REPRESENTAÇÃO</small><strong>A</strong></div></div>
        <p>A biblioteca <code>ctype.h</code> oferece funções para classificar e converter caracteres. O código abaixo diferencia letra, algarismo e símbolo.</p>
        <CodeBlock code={characterClassification} filename="classificar-caractere.c" downloadUrl="/downloads/trilha-06/classificar-caractere.c" />
        <Activity title="Conte algarismos em uma sequência" level="desafio"><p>Crie um vetor de caracteres e use <code>isdigit</code> para contar quantas posições contêm algarismos.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[8]} number="09">
        <p>Em C, uma string não é um tipo separado: é um vetor de caracteres terminado pelo marcador especial <code>'\0'</code>. Esse terminador informa onde o texto acaba e não aparece na tela.</p>
        <div className="string-memory">{['C','u','r','s','o','\\0'].map((char,index)=><div key={index}><small>[{index}]</small><strong>{char}</strong></div>)}</div>
        <CodeBlock code={simpleString} filename="string-como-vetor.c" downloadUrl="/downloads/trilha-06/string-como-vetor.c" />
        <div className="warning-callout"><AlertTriangle /><div><strong>Espaço para o terminador</strong><p>O texto “Curso” possui cinco letras, mas precisa de seis posições: cinco caracteres e o <code>'\0'</code>.</p></div></div>
        <Activity title="Percorra letra por letra" level="pratica"><p>Crie a string “LevelUp” e mostre cada caractere em uma linha até encontrar <code>'\0'</code>.</p></Activity>
        <Activity title="Conte espaços" level="desafio"><p>Percorra uma frase e conte quantas posições possuem o caractere espaço <code>' '</code>.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[9]} number="10">
        <p>A biblioteca <code>string.h</code> oferece ferramentas para trabalhar com textos. Como strings são vetores, não devemos compará-las com <code>==</code> nem copiá-las usando uma atribuição comum.</p>
        <div className="string-functions"><div><code>strlen</code><strong>mede</strong><p>Conta caracteres antes de <code>'\0'</code>.</p></div><div><code>strcmp</code><strong>compara</strong><p>Retorna zero quando os textos são iguais.</p></div><div><code>strcpy</code><strong>copia</strong><p>Copia uma string para um destino com espaço suficiente.</p></div><div><code>strcspn</code><strong>localiza</strong><p>Ajuda a encontrar a quebra de linha do <code>fgets</code>.</p></div></div>
        <CodeBlock code={stringLibrary} filename="funcoes-de-string.c" downloadUrl="/downloads/trilha-06/funcoes-de-string.c" />
        <div className="warning-callout"><ShieldCheck /><div><strong>O destino precisa caber</strong><p>Antes de copiar um texto, confirme que o vetor de destino possui espaço para todos os caracteres e para o terminador <code>'\0'</code>.</p></div></div>
        <CodeBlock code={vowelCounter} filename="contador-de-vogais.c" downloadUrl="/downloads/trilha-06/contador-de-vogais.c" />
        <Activity title="Compare uma senha textual" level="pratica"><p>Leia uma senha com <code>fgets</code>, remova <code>\n</code> e use <code>strcmp</code> para compará-la com “levelup”.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[10]} number="11">
        <p>Para ler frases e nomes completos, preferimos <code>fgets</code>. Ela recebe o vetor, o limite máximo e a origem da entrada. Diferente de <code>scanf("%s")</code>, consegue preservar espaços e respeitar o tamanho informado.</p>
        <CodeBlock code={safeFgets} filename="entrada-segura-com-fgets.c" downloadUrl="/downloads/trilha-06/entrada-segura-com-fgets.c" />
        <div className="safe-input-flow"><div><Keyboard /><strong>fgets lê</strong><p>Recebe no máximo o espaço disponível.</p></div><div><Search /><strong>strcspn encontra</strong><p>Localiza a quebra de linha armazenada.</p></div><div><ShieldCheck /><strong>'\0' substitui</strong><p>Remove a quebra e encerra o texto ali.</p></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Não use fflush(stdin)</strong><p>Esse uso não é definido pela linguagem C. Ao alternar <code>scanf</code> e <code>fgets</code>, limpe os caracteres restantes com uma função baseada em <code>getchar</code>, como no projeto abaixo.</p></div></div>
        <h3 className="lesson-subtitle">Projeto da trilha — Ranking LevelUp</h3>
        <p>O projeto usa uma matriz de caracteres para nomes, um vetor de pontos, funções de entrada e busca do maior resultado. Ele prepara o caminho para registros estruturados na próxima trilha.</p>
        <CodeBlock code={rankingProject} filename="ranking-levelup.c" downloadUrl="/downloads/trilha-06/ranking-levelup.c" />
        <div className="project-roadmap"><div><span>1</span><strong>Armazenar</strong><p>Nomes e pontos ocupam coleções correspondentes.</p></div><div><span>2</span><strong>Percorrer</strong><p>Laços cadastram, listam e comparam.</p></div><div><span>3</span><strong>Destacar</strong><p>O índice conecta o melhor nome à melhor pontuação.</p></div></div>
        <Activity title="Teste nomes com espaço" level="guiada"><p>Cadastre “Ana Clara”, “João Pedro” e “Maria Luiza”. Confirme que os nomes completos permanecem no relatório.</p></Activity>
        <Activity title="Desafio final — Agenda temporária" level="desafio"><p>Cadastre três nomes e telefones em matrizes de caracteres. Depois procure um nome e mostre o telefone correspondente.</p><Reveal title="Revelar programa completo"><CodeBlock code={contactChallenge} filename="desafio-agenda-temporaria.c" downloadUrl="/downloads/trilha-06/desafio-agenda-temporaria.c" /></Reveal></Activity>
        <div className="final-checklist"><div><Target /><h3>Checklist de domínio da Trilha 06</h3></div><ul><li><CheckCircle2 /> Sei declarar, preencher e percorrer vetores.</li><li><CheckCircle2 /> Respeito índices de 0 até tamanho menos um.</li><li><CheckCircle2 /> Busco, somo e comparo elementos.</li><li><CheckCircle2 /> Percorro matrizes com laços aninhados.</li><li><CheckCircle2 /> Entendo string como vetor terminado por <code>'\0'</code>.</li><li><CheckCircle2 /> Leio textos com <code>fgets</code> e limite de tamanho.</li></ul></div>
      </TrailSection>
    </div>
  );
}
