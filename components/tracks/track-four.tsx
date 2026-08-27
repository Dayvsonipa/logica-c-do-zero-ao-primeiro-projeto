import {
  AlertTriangle,
  CheckCircle2,
  CircleStop,
  FileArchive,
  Gauge,
  Lightbulb,
  ListRestart,
  RefreshCw,
  Repeat2,
  RotateCcw,
  Target,
  TerminalSquare,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, ConceptCard, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const firstWhile = `#include <stdio.h>

int main(void) {
    int numero = 1;

    while (numero <= 5) {
        printf("Repeticao numero %d\\n", numero);
        numero++;
    }

    printf("Laco encerrado.\\n");
    return 0;
}`;

const approvalCounter = `#include <stdio.h>

int main(void) {
    int aluno = 1;
    int aprovados = 0;
    float nota;

    while (aluno <= 5) {
        printf("Nota do aluno %d: ", aluno);
        scanf("%f", &nota);

        if (nota >= 7.0f) {
            aprovados++;
        }

        aluno++;
    }

    printf("Total de aprovados: %d\\n", aprovados);
    return 0;
}`;

const accumulatedSum = `#include <stdio.h>

int main(void) {
    int numero = 1;
    int soma = 0;

    while (numero <= 5) {
        soma = soma + numero;
        printf("Somei %d. Total agora: %d\\n", numero, soma);
        numero++;
    }

    printf("Soma final: %d\\n", soma);
    return 0;
}`;

const classAverage = `#include <stdio.h>

int main(void) {
    int quantidade, aluno = 1;
    float nota, soma = 0.0f, media;

    printf("Quantidade de alunos: ");
    scanf("%d", &quantidade);

    if (quantidade <= 0) {
        printf("Quantidade invalida.\\n");
    } else {
        while (aluno <= quantidade) {
            printf("Nota do aluno %d: ", aluno);
            scanf("%f", &nota);
            soma += nota;
            aluno++;
        }

        media = soma / quantidade;
        printf("Media da turma: %.2f\\n", media);
    }
    return 0;
}`;

const countdown = `#include <stdio.h>

int main(void) {
    int numero = 10;

    while (numero >= 0) {
        printf("%d\\n", numero);
        numero--;
    }

    printf("Lancamento!\\n");
    return 0;
}`;

const sentinelSum = `#include <stdio.h>

int main(void) {
    float valor, total = 0.0f;

    printf("Digite um valor ou 0 para encerrar: ");
    scanf("%f", &valor);

    while (valor != 0.0f) {
        total += valor;
        printf("Digite outro valor ou 0 para encerrar: ");
        scanf("%f", &valor);
    }

    printf("Total acumulado: R$ %.2f\\n", total);
    return 0;
}`;

const validationWhile = `#include <stdio.h>

int main(void) {
    float nota;

    printf("Digite uma nota de 0 a 10: ");
    scanf("%f", &nota);

    while (nota < 0.0f || nota > 10.0f) {
        printf("Nota invalida. Digite novamente: ");
        scanf("%f", &nota);
    }

    printf("Nota registrada: %.1f\\n", nota);
    return 0;
}`;

const doWhileMenu = `#include <stdio.h>

int main(void) {
    int opcao;

    do {
        printf("\\n=== MENU ===\\n");
        printf("1 - Exibir mensagem\\n");
        printf("0 - Sair\\n");
        printf("Opcao: ");
        scanf("%d", &opcao);

        if (opcao == 1) {
            printf("Continue praticando C!\\n");
        } else if (opcao != 0) {
            printf("Opcao invalida.\\n");
        }
    } while (opcao != 0);

    printf("Programa encerrado.\\n");
    return 0;
}`;

const multiplicationTable = `#include <stdio.h>

int main(void) {
    int numero, multiplicador;

    printf("Digite um numero: ");
    scanf("%d", &numero);

    for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
        printf("%d x %d = %d\\n",
               numero, multiplicador, numero * multiplicador);
    }
    return 0;
}`;

const evenNumbers = `#include <stdio.h>

int main(void) {
    int numero;

    printf("Numeros pares de 2 a 20:\\n");
    for (numero = 2; numero <= 20; numero += 2) {
        printf("%d ", numero);
    }
    printf("\\n");
    return 0;
}`;

const rectangleNested = `#include <stdio.h>

int main(void) {
    int linha, coluna;

    for (linha = 1; linha <= 4; linha++) {
        for (coluna = 1; coluna <= 8; coluna++) {
            printf("*");
        }
        printf("\\n");
    }
    return 0;
}`;

const tablesNested = `#include <stdio.h>

int main(void) {
    int tabuada, multiplicador;

    for (tabuada = 1; tabuada <= 5; tabuada++) {
        printf("\\n=== TABUADA DO %d ===\\n", tabuada);

        for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
            printf("%d x %d = %d\\n",
                   tabuada, multiplicador, tabuada * multiplicador);
        }
    }
    return 0;
}`;

const breakContinue = `#include <stdio.h>

int main(void) {
    int numero;

    for (numero = 1; numero <= 20; numero++) {
        if (numero == 7) {
            continue;
        }

        if (numero == 13) {
            break;
        }

        printf("%d ", numero);
    }
    printf("\\n");
    return 0;
}`;

const continuousMenu = `#include <stdio.h>

int main(void) {
    int opcao;
    float numero1, numero2;

    do {
        printf("\\n=== CALCULADORA ===\\n");
        printf("1 - Somar\\n");
        printf("2 - Subtrair\\n");
        printf("0 - Sair\\n");
        printf("Opcao: ");
        scanf("%d", &opcao);

        if (opcao == 1 || opcao == 2) {
            printf("Digite dois numeros: ");
            scanf("%f %f", &numero1, &numero2);
        }

        switch (opcao) {
            case 1:
                printf("Resultado: %.2f\\n", numero1 + numero2);
                break;
            case 2:
                printf("Resultado: %.2f\\n", numero1 - numero2);
                break;
            case 0:
                printf("Ate a proxima!\\n");
                break;
            default:
                printf("Opcao invalida.\\n");
        }
    } while (opcao != 0);
    return 0;
}`;

const snackBarProject = `#include <stdio.h>

int main(void) {
    int opcao, quantidade;
    float preco, subtotal, total = 0.0f;

    do {
        printf("\\n=== LANCHONETE LEVELUP ===\\n");
        printf("1 - Hamburguer  R$ 18.00\\n");
        printf("2 - Batata      R$ 10.00\\n");
        printf("3 - Suco        R$  7.00\\n");
        printf("4 - Ver total\\n");
        printf("0 - Fechar pedido\\n");
        printf("Opcao: ");
        scanf("%d", &opcao);

        if (opcao >= 1 && opcao <= 3) {
            printf("Quantidade: ");
            scanf("%d", &quantidade);

            if (quantidade <= 0) {
                printf("Quantidade invalida.\\n");
                continue;
            }

            switch (opcao) {
                case 1: preco = 18.0f; break;
                case 2: preco = 10.0f; break;
                default: preco = 7.0f;
            }

            subtotal = preco * quantidade;
            total += subtotal;
            printf("Item adicionado: R$ %.2f\\n", subtotal);
        } else if (opcao == 4) {
            printf("Total parcial: R$ %.2f\\n", total);
        } else if (opcao != 0) {
            printf("Opcao invalida.\\n");
        }
    } while (opcao != 0);

    printf("Total do pedido: R$ %.2f\\n", total);
    printf("Pedido finalizado. Obrigado!\\n");
    return 0;
}`;

export function TrackFour({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner">
        <div><p className="section-kicker">Materiais da trilha</p><strong>Quinze programas em C preparados para o Dev-C++</strong><span>Exemplos, práticas e projetos reunidos em um único arquivo para download.</span></div>
        <a className="button-primary" href="/downloads/trilha-04/trilha-04-codigos.zip" download><FileArchive /> Baixar todos os códigos</a>
      </div>

      <div className="devcpp-banner"><TerminalSquare /><div><strong>C puro, arquivo .c</strong><p>Crie um novo código-fonte no Dev-C++, salve com extensão <code>.c</code> e utilize <b>Executar → Compilar e Executar</b>.</p></div></div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>Imagine que você precise mostrar a mesma mensagem cem vezes. Copiar cem comandos <code>printf</code> funcionaria, mas deixaria o programa enorme, difícil de corrigir e quase impossível de adaptar. Uma estrutura de repetição, também chamada de <strong>laço</strong>, executa um bloco enquanto uma regra permitir.</p>
        <div className="loop-cycle"><div><span>1</span><strong>Verificar</strong><p>A condição ainda é verdadeira?</p></div><div><span>2</span><strong>Executar</strong><p>Realize as instruções do bloco.</p></div><div><span>3</span><strong>Atualizar</strong><p>Modifique o valor que controla o laço.</p></div><div><RefreshCw /><strong>Repetir</strong><p>Volte ao teste da condição.</p></div></div>
        <CodeBlock code={firstWhile} filename="primeiro-while.c" downloadUrl="/downloads/trilha-04/primeiro-while.c" />
        <div className="loop-anatomy"><span>int numero = 1;</span><strong>while (numero &lt;= 5)</strong><em>numero++;</em></div>
        <div className="line-explanation"><p><code>numero = 1</code><span>Inicialização: define o primeiro valor.</span></p><p><code>numero &lt;= 5</code><span>Condição: decide se haverá outra repetição.</span></p><p><code>numero++</code><span>Atualização: aproxima o laço do encerramento.</span></p></div>
        <Activity title="Acompanhe cada volta" level="guiada"><p>Antes de executar, preencha uma tabela com os valores 1, 2, 3, 4 e 5. Depois teste o programa e marque em qual momento a condição se torna falsa.</p><Reveal title="Revelar o encerramento"><p>Após imprimir 5, o comando <code>numero++</code> transforma a variável em 6. Como <code>6 &lt;= 5</code> é falso, o laço termina.</p></Reveal></Activity>
        <Activity title="Mude o percurso" level="pratica"><p>Altere o programa para mostrar os números de 3 até 9. Depois faça uma contagem de 10 até 1.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>Um <strong>contador</strong> registra quantas vezes algo aconteceu. Normalmente começa em zero e recebe mais um quando a situação procurada ocorre. No código, <code>aprovados++</code> é uma forma curta de escrever <code>aprovados = aprovados + 1</code>.</p>
        <div className="counter-machine"><div><small>ANTES</small><strong>aprovados = 2</strong></div><span>+ 1</span><div><small>DEPOIS</small><strong>aprovados = 3</strong></div></div>
        <CodeBlock code={approvalCounter} filename="contador-aprovados.c" downloadUrl="/downloads/trilha-04/contador-aprovados.c" />
        <div className="learning-callout"><Lightbulb /><div><strong>Existem dois contadores</strong><p><code>aluno</code> controla quantas notas serão lidas. <code>aprovados</code> conta somente as notas maiores ou iguais a 7.</p></div></div>
        <Activity title="Teste de mesa dos aprovados" level="guiada"><div className="table-wrap"><table className="desk-table"><thead><tr><th>Aluno</th><th>Nota</th><th>Aprovado?</th><th>Total de aprovados</th></tr></thead><tbody><tr><td>1</td><td>8</td><td>sim</td><td>1</td></tr><tr><td>2</td><td>5</td><td>não</td><td>1</td></tr><tr><td>3</td><td>7</td><td>sim</td><td>2</td></tr><tr><td>4</td><td>4</td><td>não</td><td>2</td></tr><tr><td>5</td><td>9</td><td>sim</td><td>3</td></tr></tbody></table></div></Activity>
        <Activity title="Conte números negativos" level="desafio"><p>Leia seis números e informe quantos deles são negativos. Tente adaptar o exemplo sem abrir a resposta.</p><Reveal title="Revelar regra principal"><CodeBlock code={`if (numero < 0) {\n    negativos++;\n}`} filename="negativos-trecho.c" /></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p>Um <strong>acumulador</strong> guarda um total que cresce a cada repetição. Diferente do contador, ele não precisa aumentar sempre de um em um: pode receber preços, pontos, distâncias ou qualquer outro valor.</p>
        <div className="concept-grid"><ConceptCard label="CONTADOR" title="Incrementa ocorrências" tone="blue">Geralmente soma 1: <code>quantidade++</code>.</ConceptCard><ConceptCard label="ACUMULADOR" title="Soma valores" tone="amber">Adiciona um dado: <code>total += valor</code>.</ConceptCard><ConceptCard label="MÉDIA" title="Usa os dois" tone="slate">Divide o total acumulado pela quantidade contada.</ConceptCard></div>
        <CodeBlock code={accumulatedSum} filename="soma-acumulada.c" downloadUrl="/downloads/trilha-04/soma-acumulada.c" />
        <div className="table-wrap"><table className="desk-table iteration-table"><thead><tr><th>numero</th><th>soma antes</th><th>operação</th><th>soma depois</th></tr></thead><tbody><tr><td>1</td><td>0</td><td>0 + 1</td><td>1</td></tr><tr><td>2</td><td>1</td><td>1 + 2</td><td>3</td></tr><tr><td>3</td><td>3</td><td>3 + 3</td><td>6</td></tr><tr><td>4</td><td>6</td><td>6 + 4</td><td>10</td></tr><tr><td>5</td><td>10</td><td>10 + 5</td><td>15</td></tr></tbody></table></div>
        <h3 className="lesson-subtitle">Contador + acumulador = média</h3>
        <CodeBlock code={classAverage} filename="media-da-turma.c" downloadUrl="/downloads/trilha-04/media-da-turma.c" />
        <Activity title="Simule três notas" level="guiada"><p>Teste quantidade 3 e notas 7, 8 e 9. A soma deve chegar a 24 e a média a 8. Explique por que <code>soma</code> começa em zero.</p></Activity>
        <Activity title="Total de uma compra" level="pratica"><p>Leia o preço de quatro produtos, acumule os valores e mostre o total com duas casas decimais.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>O <code>while</code> significa “enquanto”. Ele testa a condição <strong>antes</strong> de cada repetição. Se a condição já começar falsa, o bloco não executa nenhuma vez. É indicado quando sabemos a regra de continuidade, mas nem sempre sabemos quantas repetições acontecerão.</p>
        <CodeBlock code={countdown} filename="contagem-regressiva.c" downloadUrl="/downloads/trilha-04/contagem-regressiva.c" />
        <div className="loop-compare"><div><Gauge /><strong>Teste antes</strong><p>O <code>while</code> pergunta primeiro e executa depois.</p></div><div><CircleStop /><strong>Pare corretamente</strong><p>A variável de controle precisa caminhar para tornar a condição falsa.</p></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Cuidado com o laço infinito</strong><p>Se removermos <code>numero--</code>, o valor continuará 10 para sempre. A condição nunca ficará falsa e o programa não chegará ao final.</p></div></div>
        <Activity title="Conte de dois em dois" level="pratica"><p>Mostre os números de 0 até 20 usando <code>while</code> e uma atualização de dois em dois.</p><Reveal title="Revelar atualização"><p>Comece com <code>numero = 0</code>, use <code>numero &lt;= 20</code> e atualize com <code>numero += 2</code>.</p></Reveal></Activity>
        <Activity title="Some de 1 até N" level="desafio"><p>Leia um limite positivo e some todos os inteiros de 1 até esse limite. Para N igual a 5, o resultado deve ser 15.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p>Uma <strong>sentinela</strong> é um valor especial usado para indicar que os dados terminaram. Ela é útil quando não sabemos previamente quantos valores serão informados. No exemplo, o número zero encerra a leitura e não entra na soma.</p>
        <CodeBlock code={sentinelSum} filename="soma-com-sentinela.c" downloadUrl="/downloads/trilha-04/soma-com-sentinela.c" />
        <div className="sentinel-panel"><div><strong>10</strong><span>acumula</span></div><div><strong>25</strong><span>acumula</span></div><div><strong>5</strong><span>acumula</span></div><div className="sentinel-stop"><strong>0</strong><span>encerra</span></div></div>
        <p>Observe que existe uma leitura antes do laço e outra no final do bloco. A primeira fornece o valor para o primeiro teste; a segunda evita que a condição use o mesmo valor eternamente.</p>
        <h3 className="lesson-subtitle">Repetindo até o dado ficar válido</h3>
        <CodeBlock code={validationWhile} filename="validacao-com-while.c" downloadUrl="/downloads/trilha-04/validacao-com-while.c" />
        <Activity title="Teste os limites" level="guiada"><p>Digite, nesta ordem: -3, 12 e 8. O programa deve recusar os dois primeiros valores e aceitar 8. Depois teste exatamente 0 e exatamente 10.</p></Activity>
        <Activity title="Senha de acesso" level="desafio"><p>Peça uma senha numérica até que o usuário digite 1234. Ao final, mostre “Acesso liberado”.</p><Reveal title="Revelar condição"><p>Use <code>while (senha != 1234)</code> e faça uma nova leitura dentro do laço.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>O <code>do while</code> também repete um bloco, mas testa a condição <strong>depois</strong> da execução. Por isso o conteúdo acontece pelo menos uma vez. Essa característica combina naturalmente com menus, pois o usuário precisa ver as opções antes de decidir sair.</p>
        <CodeBlock code={doWhileMenu} filename="menu-do-while.c" downloadUrl="/downloads/trilha-04/menu-do-while.c" />
        <div className="loop-compare"><div><Repeat2 /><strong>while</strong><p>Testa antes e pode executar zero vezes.</p></div><div><RotateCcw /><strong>do while</strong><p>Executa primeiro e testa depois; ocorre ao menos uma vez.</p></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Ponto e vírgula obrigatório</strong><p>No <code>do while</code>, a linha final termina com <code>;</code>: <code>{"} while (condicao);"}</code>.</p></div></div>
        <Activity title="Menu de estudos" level="pratica"><p>Crie as opções 1 — Estudar C, 2 — Fazer exercício e 0 — Sair. O menu deve reaparecer até a escolha zero.</p></Activity>
        <Activity title="Validação com do while" level="desafio"><p>Leia uma idade e repita enquanto ela estiver fora do intervalo de 0 a 120.</p><Reveal title="Revelar estrutura"><CodeBlock code={`do {\n    printf("Idade: ");\n    scanf("%d", &idade);\n} while (idade < 0 || idade > 120);`} filename="idade-do-while-trecho.c" /></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>O <code>for</code> reúne inicialização, condição e atualização em uma única linha. Ele é excelente quando a contagem está bem definida, como repetir dez vezes, percorrer números de 1 a 100 ou construir uma tabuada.</p>
        <div className="for-anatomy"><span>for (</span><strong>i = 1</strong><b>;</b><strong>i &lt;= 10</strong><b>;</b><strong>i++</strong><span>)</span></div>
        <div className="for-labels"><span>inicializa uma vez</span><span>testa antes de cada volta</span><span>atualiza após o bloco</span></div>
        <CodeBlock code={multiplicationTable} filename="tabuada-com-for.c" downloadUrl="/downloads/trilha-04/tabuada-com-for.c" />
        <CodeBlock code={evenNumbers} filename="pares-com-for.c" downloadUrl="/downloads/trilha-04/pares-com-for.c" />
        <Activity title="Escolha a atualização" level="guiada"><ol className="exercise-list"><li>De 1 a 10: <code>i++</code>.</li><li>De 0 a 100, de 10 em 10: qual atualização usar?</li><li>De 10 a 1: qual condição e atualização usar?</li></ol><Reveal title="Revelar respostas"><p>Segundo caso: <code>i += 10</code>. Terceiro caso: comece em 10, use <code>i &gt;= 1</code> e atualize com <code>i--</code>.</p></Reveal></Activity>
        <Activity title="Some somente os pares" level="desafio"><p>Use <code>for</code> para somar os números pares de 2 até 100 e mostre o resultado final.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[7]} number="08">
        <p>Um laço aninhado é uma repetição dentro de outra. Para cada volta do laço externo, o laço interno executa todas as suas voltas. Pense em uma sala: o laço externo percorre as fileiras e o interno percorre as cadeiras de cada fileira.</p>
        <CodeBlock code={rectangleNested} filename="retangulo-com-lacos.c" downloadUrl="/downloads/trilha-04/retangulo-com-lacos.c" />
        <div className="nested-grid-demo" aria-label="Quatro linhas por oito colunas">{Array.from({ length: 32 }, (_, index) => <span key={index}>*</span>)}</div>
        <p>O laço interno imprime oito asteriscos. Quando ele termina, <code>printf("\n")</code> muda de linha. O laço externo repete esse processo quatro vezes.</p>
        <CodeBlock code={tablesNested} filename="tabuadas-aninhadas.c" downloadUrl="/downloads/trilha-04/tabuadas-aninhadas.c" />
        <Activity title="Conte as execuções" level="guiada"><p>Se o laço externo executa 4 vezes e o interno 8 vezes em cada uma, quantas vezes o asterisco é impresso?</p><Reveal title="Revelar cálculo"><p><code>4 × 8 = 32</code> impressões. Multiplicamos as quantidades quando um laço executa completamente dentro do outro.</p></Reveal></Activity>
        <Activity title="Triângulo crescente" level="desafio"><p>Use laços aninhados para imprimir uma linha com 1 asterisco, depois 2, depois 3, até chegar a 5.</p></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[8]} number="09">
        <p>Normalmente um laço termina quando sua condição fica falsa. Em situações específicas, <code>break</code> encerra imediatamente o laço e <code>continue</code> pula apenas a repetição atual, seguindo para a próxima.</p>
        <div className="control-cards"><div><CircleStop /><strong>break</strong><p>Sai completamente do laço.</p></div><div><ListRestart /><strong>continue</strong><p>Pula o restante da volta atual.</p></div></div>
        <CodeBlock code={breakContinue} filename="break-e-continue.c" downloadUrl="/downloads/trilha-04/break-e-continue.c" />
        <div className="terminal-output"><span><TerminalSquare /> RESULTADO</span><code>1 2 3 4 5 6 8 9 10 11 12</code></div>
        <p>O número 7 não aparece porque <code>continue</code> pula o <code>printf</code>. Ao chegar a 13, <code>break</code> encerra tudo; por isso nenhum número posterior é exibido.</p>
        <Activity title="Ignore números negativos" level="pratica"><p>Leia cinco valores. Quando um valor for negativo, use <code>continue</code> para não adicioná-lo à soma.</p></Activity>
        <Activity title="Encontre o primeiro múltiplo" level="desafio"><p>Percorra os números a partir de 1 e encerre com <code>break</code> ao encontrar o primeiro número maior que 20 divisível por 7.</p><Reveal title="Revelar resultado"><p>O primeiro número maior que 20 divisível por 7 é 21.</p></Reveal></Activity>
        <div className="learning-callout"><Lightbulb /><div><strong>Use com intenção</strong><p><code>break</code> e <code>continue</code> são úteis, mas muitos saltos podem dificultar a leitura. Sempre verifique se uma boa condição resolveria o mesmo problema com mais clareza.</p></div></div>
      </TrailSection>

      <TrailSection topic={track.topics[9]} number="10">
        <p>Um menu contínuo combina tudo o que aprendemos: repetição para manter o programa ativo, decisão para interpretar a escolha e validação para impedir opções incorretas. Ele será uma base importante para os sistemas das próximas trilhas.</p>
        <CodeBlock code={continuousMenu} filename="calculadora-menu-continuo.c" downloadUrl="/downloads/trilha-04/calculadora-menu-continuo.c" />
        <div className="menu-cycle"><div><span>1</span><strong>Mostrar opções</strong></div><div><span>2</span><strong>Ler escolha</strong></div><div><span>3</span><strong>Executar ação</strong></div><div><span>4</span><strong>Voltar ao menu</strong></div></div>
        <h3 className="lesson-subtitle">Projeto da trilha — Lanchonete LevelUp</h3>
        <p>Nosso projeto final registra vários itens, calcula subtotais, acumula o total e só encerra quando o usuário fecha o pedido. Ele reúne <code>do while</code>, <code>if</code>, <code>switch</code>, contador implícito de escolhas, acumulador e <code>continue</code>.</p>
        <CodeBlock code={snackBarProject} filename="lanchonete-levelup.c" downloadUrl="/downloads/trilha-04/lanchonete-levelup.c" />
        <div className="project-roadmap"><div><span>1</span><strong>Escolher</strong><p>O menu permanece disponível.</p></div><div><span>2</span><strong>Calcular</strong><p>Preço × quantidade gera o subtotal.</p></div><div><span>3</span><strong>Acumular</strong><p>Cada subtotal entra no total do pedido.</p></div></div>
        <Activity title="Plano de testes da lanchonete" level="guiada"><ol className="exercise-list"><li>Adicione dois hambúrgueres: subtotal R$ 36,00.</li><li>Adicione um suco: total parcial R$ 43,00.</li><li>Tente quantidade zero: o programa deve recusar.</li><li>Use a opção 4 para conferir o total.</li><li>Feche com 0 e confira o valor final.</li></ol></Activity>
        <Activity title="Desafio final — Evolua o cardápio" level="desafio"><p>Adicione uma quarta comida, crie uma opção para aplicar cupom de 10% e conte quantos itens foram vendidos. Planeje as novas variáveis antes de programar.</p><Reveal title="Revelar pistas"><ul className="exercise-list"><li>Crie <code>int totalItens = 0</code>.</li><li>Após validar a quantidade, use <code>totalItens += quantidade</code>.</li><li>Para o cupom, atualize o total com <code>total *= 0.90f</code>.</li><li>Garanta que o desconto não seja aplicado várias vezes sem querer.</li></ul></Reveal></Activity>
        <div className="final-checklist"><div><Target /><h3>Checklist de domínio da Trilha 04</h3></div><ul><li><CheckCircle2 /> Identifico inicialização, condição e atualização.</li><li><CheckCircle2 /> Diferencio contador de acumulador.</li><li><CheckCircle2 /> Escolho entre <code>while</code>, <code>do while</code> e <code>for</code>.</li><li><CheckCircle2 /> Uso sentinelas e valido dados repetidamente.</li><li><CheckCircle2 /> Compreendo laços aninhados, <code>break</code> e <code>continue</code>.</li><li><CheckCircle2 /> Consigo construir um menu que permanece em execução.</li></ul></div>
      </TrailSection>
    </div>
  );
}
