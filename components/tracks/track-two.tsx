import {
  Calculator,
  CheckCircle2,
  FileArchive,
  Keyboard,
  Lightbulb,
  ShieldCheck,
  Target,
  TerminalSquare,
  TriangleAlert,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, ConceptCard, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const studentVariables = `#include <stdio.h>

int main(void) {
    int idade = 16;
    float media = 8.5f;
    char turma = 'A';
    const int ANO_ATUAL = 2026;

    printf("Idade: %d anos\\n", idade);
    printf("Media: %.1f\\n", media);
    printf("Turma: %c\\n", turma);
    printf("Ano atual: %d\\n", ANO_ATUAL);
    return 0;
}`;

const basicTypes = `#include <stdio.h>

int main(void) {
    int quantidade = 12;
    float preco = 39.90f;
    double distancia = 123456.789;
    char categoria = 'B';

    printf("Quantidade: %d\\n", quantidade);
    printf("Preco: %.2f\\n", preco);
    printf("Distancia: %.3f\\n", distancia);
    printf("Categoria: %c\\n", categoria);

    printf("int ocupa %zu byte(s).\\n", sizeof(int));
    printf("float ocupa %zu byte(s).\\n", sizeof(float));
    printf("double ocupa %zu byte(s).\\n", sizeof(double));
    printf("char ocupa %zu byte(s).\\n", sizeof(char));
    return 0;
}`;

const formattedOutput = `#include <stdio.h>

int main(void) {
    float preco = 129.9f;
    int estoque = 7;
    char setor = 'G';

    printf("=== FICHA DO PRODUTO ===\\n");
    printf("Produto : Teclado mecanico\\n");
    printf("Preco   : R$ %.2f\\n", preco);
    printf("Estoque : %d unidade(s)\\n", estoque);
    printf("Setor   : %c\\n", setor);
    return 0;
}`;

const dataInput = `#include <stdio.h>

int main(void) {
    int idade;
    float altura;
    char turma;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    printf("Digite sua altura em metros: ");
    scanf("%f", &altura);

    printf("Digite a letra da turma: ");
    scanf(" %c", &turma);

    printf("Idade: %d | Altura: %.2f | Turma: %c\\n",
           idade, altura, turma);
    return 0;
}`;

const arithmeticOperators = `#include <stdio.h>

int main(void) {
    int a = 17;
    int b = 5;

    printf("Soma: %d\\n", a + b);
    printf("Subtracao: %d\\n", a - b);
    printf("Multiplicacao: %d\\n", a * b);
    printf("Divisao inteira: %d\\n", a / b);
    printf("Resto da divisao: %d\\n", a % b);
    return 0;
}`;

const precedence = `#include <stdio.h>

int main(void) {
    int semParenteses = 10 + 2 * 3;
    int comParenteses = (10 + 2) * 3;
    float nota1 = 7.0f;
    float nota2 = 8.0f;
    float nota3 = 9.0f;
    float media = (nota1 + nota2 + nota3) / 3.0f;

    printf("10 + 2 * 3 = %d\\n", semParenteses);
    printf("(10 + 2) * 3 = %d\\n", comParenteses);
    printf("Media: %.2f\\n", media);
    return 0;
}`;

const typeConversion = `#include <stdio.h>

int main(void) {
    int totalPontos = 7;
    int jogadores = 2;
    float mediaIncorreta;
    float mediaCorreta;

    mediaIncorreta = totalPontos / jogadores;
    mediaCorreta = (float) totalPontos / jogadores;

    printf("Sem conversao: %.1f\\n", mediaIncorreta);
    printf("Com conversao: %.1f\\n", mediaCorreta);
    return 0;
}`;

const saferInput = `#include <stdio.h>

int main(void) {
    int idade;
    char resposta;

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    printf("Deseja continuar? (S/N): ");
    scanf(" %c", &resposta);

    printf("Idade informada: %d\\n", idade);
    printf("Resposta informada: %c\\n", resposta);
    return 0;
}`;

const basicCalculator = `#include <stdio.h>

int main(void) {
    double numero1, numero2;
    double soma, subtracao, multiplicacao, divisao;

    printf("Digite o primeiro numero: ");
    scanf("%lf", &numero1);

    printf("Digite o segundo numero, diferente de zero: ");
    scanf("%lf", &numero2);

    soma = numero1 + numero2;
    subtracao = numero1 - numero2;
    multiplicacao = numero1 * numero2;
    divisao = numero1 / numero2;

    printf("Soma: %.2f\\n", soma);
    printf("Subtracao: %.2f\\n", subtracao);
    printf("Multiplicacao: %.2f\\n", multiplicacao);
    printf("Divisao: %.2f\\n", divisao);
    return 0;
}`;

const purchaseTotal = `#include <stdio.h>

int main(void) {
    int quantidade;
    float precoUnitario, total;

    printf("Quantidade de produtos: ");
    scanf("%d", &quantidade);

    printf("Preco unitario: R$ ");
    scanf("%f", &precoUnitario);

    total = quantidade * precoUnitario;

    printf("Total da compra: R$ %.2f\\n", total);
    return 0;
}`;

const temperatureConverter = `#include <stdio.h>

int main(void) {
    float celsius, fahrenheit;

    printf("Temperatura em Celsius: ");
    scanf("%f", &celsius);

    fahrenheit = celsius * 9.0f / 5.0f + 32.0f;

    printf("Temperatura em Fahrenheit: %.2f\\n", fahrenheit);
    return 0;
}`;

export function TrackTwo({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner">
        <div>
          <p className="section-kicker">Materiais da trilha</p>
          <strong>Onze programas em C preparados para o Dev-C++</strong>
          <span>Salve sempre como arquivo .c para que o compilador utilize a linguagem C.</span>
        </div>
        <a className="button-primary" href="/downloads/trilha-02/trilha-02-codigos.zip" download>
          <FileArchive /> Baixar todos os códigos
        </a>
      </div>

      <div className="devcpp-banner">
        <TerminalSquare />
        <div><strong>Ambiente oficial: Dev-C++</strong><p>Crie um novo arquivo de código-fonte, salve com extensão <code>.c</code> e utilize <strong>Executar → Compilar e Executar</strong>. O nome do aplicativo inclui “C++”, mas nosso curso utiliza somente C.</p></div>
      </div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>
          Uma variável é um espaço identificado na memória do computador. Ela guarda um valor que o programa poderá
          consultar ou alterar. Pense em uma caixa com etiqueta: a etiqueta é o nome da variável, a caixa é o espaço
          reservado e o conteúdo é o valor armazenado.
        </p>
        <div className="variable-memory" aria-label="Representação de variáveis na memória">
          <div><small>NOME</small><strong>idade</strong><span>16</span><em>int</em></div>
          <div><small>NOME</small><strong>media</strong><span>8.5</span><em>float</em></div>
          <div><small>NOME</small><strong>turma</strong><span>&apos;A&apos;</span><em>char</em></div>
        </div>
        <p>
          A declaração <code>int idade;</code> reserva espaço para um número inteiro. A atribuição <code>idade = 16;</code>
          coloca o valor 16 nesse espaço. Podemos fazer as duas ações juntas: <code>int idade = 16;</code>.
        </p>

        <h3 className="lesson-subtitle">Regras para nomes de variáveis</h3>
        <div className="compare-grid">
          <div><small>BONS NOMES</small><strong>idadeAluno</strong><span>Começa com letra, não possui espaços e explica o conteúdo.</span></div>
          <div><small>EVITE</small><strong>2 idade / média</strong><span>Não comece com número, não use espaço nem acento.</span></div>
        </div>
        <p>C diferencia letras maiúsculas e minúsculas: <code>idade</code>, <code>Idade</code> e <code>IDADE</code> seriam três nomes diferentes.</p>

        <h3 className="lesson-subtitle">Constantes: valores que não devem mudar</h3>
        <p>
          Ao escrever <code>const int ANO_ATUAL = 2026;</code>, avisamos ao compilador que esse valor não poderá ser
          alterado depois. Usaremos letras maiúsculas em constantes para identificá-las rapidamente.
        </p>
        <CodeBlock code={studentVariables} filename="variaveis-aluno.c" downloadUrl="/downloads/trilha-02/variaveis-aluno.c" />

        <Activity title="Atividade guiada — monte as caixas" level="guiada">
          <p>Escolha nomes e valores iniciais para guardar: idade de uma pessoa, preço de um ingresso, letra da sala e quantidade de vidas em um jogo.</p>
          <Reveal title="Revelar uma possível declaração">
            <pre className="pseudo-block"><code>{`int idade = 17;\nfloat precoIngresso = 25.50f;\nchar sala = 'B';\nint quantidadeVidas = 3;`}</code></pre>
            <p>O sufixo <code>f</code> indica que o número decimal é um <code>float</code>. Caracteres usam aspas simples.</p>
          </Reveal>
        </Activity>

        <Activity title="Caça ao erro nos nomes" level="pratica">
          <p>Quais nomes são inválidos ou inadequados: <code>nota1</code>, <code>1nota</code>, <code>preço</code>, <code>valor total</code>, <code>totalCompra</code>?</p>
          <Reveal title="Conferir respostas">
            <p><code>1nota</code> começa com número; <code>preço</code> possui acento; <code>valor total</code> possui espaço. <code>nota1</code> e <code>totalCompra</code> são válidos e claros.</p>
          </Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>
          O tipo informa que espécie de dado uma variável armazenará. Isso permite que o compilador reserve memória e
          escolha operações adequadas. Não existe um tipo único para tudo: números inteiros, números decimais e
          caracteres são representados de maneiras diferentes.
        </p>
        <div className="concept-grid">
          <ConceptCard label="INT" title="Números inteiros" tone="blue">Idade, quantidade, pontos e anos. Não possui parte decimal.</ConceptCard>
          <ConceptCard label="FLOAT / DOUBLE" title="Números decimais" tone="amber">Preço, altura, média e distância. <code>double</code> oferece maior precisão.</ConceptCard>
          <ConceptCard label="CHAR" title="Um caractere" tone="slate">Letra, símbolo ou dígito isolado, escrito entre aspas simples.</ConceptCard>
        </div>

        <div className="table-wrap">
          <table className="desk-table type-table">
            <thead><tr><th>Tipo</th><th>Exemplo</th><th>Uso comum</th><th>printf</th><th>scanf</th></tr></thead>
            <tbody>
              <tr><td><code>int</code></td><td>42</td><td>Contagens e inteiros</td><td><code>%d</code></td><td><code>%d</code></td></tr>
              <tr><td><code>float</code></td><td>8.5f</td><td>Decimais simples</td><td><code>%f</code></td><td><code>%f</code></td></tr>
              <tr><td><code>double</code></td><td>8.5</td><td>Maior precisão</td><td><code>%f</code></td><td><code>%lf</code></td></tr>
              <tr><td><code>char</code></td><td>&apos;A&apos;</td><td>Um caractere</td><td><code>%c</code></td><td><code>%c</code></td></tr>
            </tbody>
          </table>
        </div>
        <div className="learning-callout"><Lightbulb /><div><strong>O tamanho pode variar</strong><p>O padrão C não obriga todos os computadores a usar o mesmo número de bytes para cada tipo. O operador <code>sizeof</code> permite conferir no seu compilador.</p></div></div>
        <CodeBlock code={basicTypes} filename="tipos-basicos.c" downloadUrl="/downloads/trilha-02/tipos-basicos.c" />

        <Activity title="Escolha o tipo correto" level="guiada">
          <p>Escolha entre <code>int</code>, <code>float</code>, <code>double</code> e <code>char</code> para: número de alunos, peso, distância astronômica e letra da turma.</p>
          <Reveal title="Revelar respostas comentadas"><p>Número de alunos: <code>int</code>. Peso: <code>float</code>. Distância que exige maior precisão: <code>double</code>. Letra da turma: <code>char</code>.</p></Reveal>
        </Activity>

        <Activity title="Verdadeiro ou falso" level="pratica">
          <ul className="exercise-list"><li><code>int</code> armazena 7.5 sem perder informação.</li><li><code>char</code> pode guardar &apos;K&apos;.</li><li><code>double</code> normalmente oferece mais precisão que <code>float</code>.</li></ul>
          <Reveal title="Conferir"><p>Falso, verdadeiro e verdadeiro. Um <code>int</code> não guarda a parte decimal.</p></Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p>
          A função <code>printf</code> envia informações para o terminal. O primeiro argumento é um texto de formato.
          Dentro dele, marcadores como <code>%d</code> reservam o lugar em que o valor de uma variável será exibido.
        </p>
        <div className="format-anatomy"><span>printf(</span><strong>&quot;Idade: %d\n&quot;</strong><span>,</span><em> idade</em><span>);</span></div>
        <div className="line-explanation">
          <p><code>&quot;Idade: %d\n&quot;</code><span>Texto de formato. <code>%d</code> espera um inteiro e <code>\n</code> quebra a linha.</span></p>
          <p><code>idade</code><span>Valor que substituirá o marcador <code>%d</code>.</span></p>
        </div>
        <div className="format-grid">
          <span><code>%d</code><small>inteiro</small></span><span><code>%f</code><small>decimal</small></span><span><code>%.2f</code><small>duas casas</small></span><span><code>%c</code><small>caractere</small></span><span><code>\n</code><small>nova linha</small></span><span><code>\t</code><small>tabulação</small></span>
        </div>
        <CodeBlock code={formattedOutput} filename="saida-formatada.c" downloadUrl="/downloads/trilha-02/saida-formatada.c" />
        <div className="terminal-output"><span><TerminalSquare /> RESULTADO ESPERADO</span><code>{`=== FICHA DO PRODUTO ===\nProduto : Teclado mecanico\nPreco   : R$ 129.90\nEstoque : 7 unidade(s)\nSetor   : G`}</code></div>

        <Activity title="Atividade guiada — ficha de um jogo" level="guiada">
          <p>Crie três variáveis: ano de lançamento, nota e classificação. Depois mostre uma ficha organizada usando <code>printf</code>.</p>
          <Reveal title="Revelar exemplo"><pre className="pseudo-block"><code>{`int ano = 2024;\nfloat nota = 9.2f;\nchar classificacao = 'L';\n\nprintf("Ano: %d\\n", ano);\nprintf("Nota: %.1f\\n", nota);\nprintf("Classificacao: %c\\n", classificacao);`}</code></pre></Reveal>
        </Activity>

        <Activity title="Corrija os marcadores" level="desafio">
          <p>Um aluno tentou exibir <code>float preco</code> com <code>%d</code> e <code>int quantidade</code> com <code>%f</code>. O que deve ser trocado?</p>
          <Reveal title="Revelar correção"><p>O preço deve usar <code>%f</code> ou <code>%.2f</code>; a quantidade deve usar <code>%d</code>. O marcador precisa combinar com o tipo.</p></Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>
          Até agora os valores estavam escritos dentro do programa. Com <code>scanf</code>, o usuário pode digitar um
          valor enquanto o programa está em execução. A função precisa saber o tipo esperado e o endereço em que o
          valor será guardado.
        </p>
        <div className="format-anatomy"><span>scanf(</span><strong>&quot;%d&quot;</strong><span>,</span><em> &amp;idade</em><span>);</span></div>
        <div className="line-explanation">
          <p><code>%d</code><span>Informa que esperamos um número inteiro.</span></p>
          <p><code>&amp;idade</code><span>O símbolo <code>&amp;</code> fornece o endereço da variável para que <code>scanf</code> saiba onde guardar o valor.</span></p>
        </div>
        <div className="warning-callout"><TriangleAlert /><div><strong>Não esqueça o &amp;</strong><p>Nesta fase, use <code>&amp;</code> antes das variáveis numéricas e de um único caractere. Sem ele, o programa pode falhar ou produzir comportamento imprevisível.</p></div></div>
        <CodeBlock code={dataInput} filename="entrada-dados.c" downloadUrl="/downloads/trilha-02/entrada-dados.c" />
        <div className="learning-callout"><Keyboard /><div><strong>Por que existe um espaço antes de %c?</strong><p>Em <code>scanf(" %c", &amp;turma)</code>, o espaço manda ignorar quebras de linha e outros espaços deixados pelas leituras anteriores.</p></div></div>

        <Activity title="Teste no Dev-C++" level="guiada">
          <ol className="exercise-list"><li>Baixe ou digite <code>entrada-dados.c</code>.</li><li>Salve confirmando a extensão <code>.c</code>.</li><li>Compile e execute.</li><li>Teste com 17, 1.75 e B.</li><li>Altere os valores e observe a saída.</li></ol>
        </Activity>

        <Activity title="Complete a leitura" level="pratica">
          <p>Complete os comandos para ler <code>int pontos</code>, <code>float altura</code> e <code>char nivel</code>.</p>
          <Reveal title="Revelar comandos"><pre className="pseudo-block"><code>{`scanf("%d", &pontos);\nscanf("%f", &altura);\nscanf(" %c", &nivel);`}</code></pre></Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p>
          Operadores aritméticos transformam valores. Em C usamos <code>+</code>, <code>-</code>, <code>*</code>,
          <code>/</code> e <code>%</code>. Os três primeiros são familiares; divisão e resto exigem mais atenção.
        </p>
        <div className="operator-grid">
          <span><b>+</b><small>soma</small></span><span><b>-</b><small>subtração</small></span><span><b>*</b><small>multiplicação</small></span><span><b>/</b><small>divisão</small></span><span><b>%</b><small>resto inteiro</small></span>
        </div>
        <CodeBlock code={arithmeticOperators} filename="operadores-aritmeticos.c" downloadUrl="/downloads/trilha-02/operadores-aritmeticos.c" />
        <div className="terminal-output"><span><TerminalSquare /> COM a = 17 e b = 5</span><code>{`Soma: 22\nSubtracao: 12\nMultiplicacao: 85\nDivisao inteira: 3\nResto da divisao: 2`}</code></div>
        <p>
          Como <code>a</code> e <code>b</code> são inteiros, <code>17 / 5</code> produz 3: a parte decimal é descartada.
          O operador <code>%</code> mostra o resto 2. Ele funciona com operandos inteiros.
        </p>

        <Activity title="Atividade guiada — preveja antes de executar" level="guiada">
          <p>Calcule manualmente: <code>20 + 4</code>, <code>20 - 4</code>, <code>20 * 4</code>, <code>20 / 4</code> e <code>20 % 4</code>.</p>
          <Reveal title="Revelar resultados"><p>24, 16, 80, 5 e 0. O resto é zero porque 20 é divisível por 4.</p></Reveal>
        </Activity>

        <Activity title="Desafio — total da compra" level="desafio">
          <p>Leia quantidade e preço unitário, multiplique os valores e mostre o total com duas casas decimais.</p>
          <Reveal title="Revelar solução completa em C"><CodeBlock code={purchaseTotal} filename="desafio-total-compra.c" downloadUrl="/downloads/trilha-02/desafio-total-compra.c" /></Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>
          C segue regras de precedência semelhantes às da matemática. Multiplicação, divisão e resto são realizados
          antes de soma e subtração. Operações entre parênteses têm prioridade.
        </p>
        <div className="precedence-stack">
          <div><span>1º</span><strong>( )</strong><p>Parênteses</p></div>
          <div><span>2º</span><strong>* / %</strong><p>Multiplicação, divisão e resto</p></div>
          <div><span>3º</span><strong>+ -</strong><p>Soma e subtração</p></div>
        </div>
        <div className="compare-grid">
          <div><small>SEM PARÊNTESES</small><strong>10 + 2 × 3 = 16</strong><span>A multiplicação acontece primeiro.</span></div>
          <div><small>COM PARÊNTESES</small><strong>(10 + 2) × 3 = 36</strong><span>A soma foi priorizada.</span></div>
        </div>
        <CodeBlock code={precedence} filename="precedencia-media.c" downloadUrl="/downloads/trilha-02/precedencia-media.c" />
        <div className="warning-callout"><TriangleAlert /><div><strong>Erro clássico da média</strong><p>Escrever <code>nota1 + nota2 + nota3 / 3</code> divide somente a terceira nota. Use <code>(nota1 + nota2 + nota3) / 3.0f</code>.</p></div></div>

        <Activity title="Resolva na ordem correta" level="guiada">
          <ul className="exercise-list"><li><code>5 + 3 * 2</code></li><li><code>(5 + 3) * 2</code></li><li><code>20 / 5 + 2</code></li><li><code>20 / (5 + 5)</code></li></ul>
          <Reveal title="Revelar resultados"><p>11, 16, 6 e 2.</p></Reveal>
        </Activity>

        <Activity title="Desafio — temperatura" level="desafio">
          <p>Converta Celsius para Fahrenheit usando <code>F = C × 9 / 5 + 32</code>. Use valores decimais para impedir uma divisão inteira indesejada.</p>
          <Reveal title="Revelar solução completa em C"><CodeBlock code={temperatureConverter} filename="desafio-temperatura.c" downloadUrl="/downloads/trilha-02/desafio-temperatura.c" /></Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>
          Quando uma operação envolve somente valores inteiros, o resultado também segue as regras dos inteiros.
          Assim, <code>7 / 2</code> produz 3, não 3.5. Para preservar a parte decimal, pelo menos um dos valores precisa
          participar da operação como tipo decimal.
        </p>
        <div className="conversion-demo">
          <div><small>DIVISÃO INTEIRA</small><code>7 / 2</code><strong>3</strong><span>Parte decimal descartada</span></div>
          <div><small>CONVERSÃO EXPLÍCITA</small><code>(float) 7 / 2</code><strong>3.5</strong><span>Resultado decimal preservado</span></div>
        </div>
        <p>
          A expressão <code>(float) totalPontos</code> realiza uma conversão explícita, também chamada de <em>cast</em>.
          Ela cria uma versão decimal do valor apenas para aquela operação; a variável original continua sendo <code>int</code>.
        </p>
        <CodeBlock code={typeConversion} filename="conversao-tipos.c" downloadUrl="/downloads/trilha-02/conversao-tipos.c" />
        <div className="terminal-output"><span><TerminalSquare /> RESULTADO ESPERADO</span><code>{`Sem conversao: 3.0\nCom conversao: 3.5`}</code></div>

        <Activity title="Atividade guiada — média de pontos" level="guiada">
          <p>Três jogadores fizeram juntos 10 pontos. Qual expressão produz uma média decimal correta?</p>
          <Reveal title="Revelar resposta"><p><code>media = (float) totalPontos / jogadores;</code> produz aproximadamente 3.33 quando <code>totalPontos</code> vale 10 e <code>jogadores</code> vale 3.</p></Reveal>
        </Activity>

        <Activity title="Explique com suas palavras" level="pratica">
          <p>Por que <code>5 / 2</code> e <code>5.0 / 2.0</code> produzem resultados diferentes?</p>
          <Reveal title="Ver explicação esperada"><p>No primeiro caso, os dois operandos são inteiros e a divisão inteira descarta a parte decimal. No segundo, existem valores decimais e o resultado é 2.5.</p></Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[7]} number="08">
        <p>
          Uma leitura correta depende de três combinações: marcador compatível, endereço da variável e dado digitado
          no formato esperado. Muitos “bugs misteriosos” de iniciantes são apenas uma dessas combinações incorretas.
        </p>
        <div className="safety-grid">
          <div><ShieldCheck /><strong>Marcador correto</strong><p><code>%d</code> para <code>int</code>, <code>%f</code> para <code>float</code> e <code>%lf</code> para <code>double</code>.</p></div>
          <div><ShieldCheck /><strong>Endereço correto</strong><p>Use <code>&amp;variavel</code> nos exemplos desta trilha.</p></div>
          <div><ShieldCheck /><strong>Entrada compatível</strong><p>Quando o programa pedir número, digite número. A validação de texto virá com decisões.</p></div>
        </div>
        <CodeBlock code={saferInput} filename="entrada-segura.c" downloadUrl="/downloads/trilha-02/entrada-segura.c" />
        <h3 className="lesson-subtitle">O problema da quebra de linha</h3>
        <p>
          Ao pressionar Enter depois de um número, uma quebra de linha fica aguardando no fluxo de entrada. O marcador
          <code>%c</code> aceita qualquer caractere, inclusive essa quebra. Por isso usamos um espaço antes dele:
          <code>scanf(" %c", &amp;resposta);</code>.
        </p>
        <div className="warning-callout"><TriangleAlert /><div><strong>Limite desta etapa</strong><p>Se o usuário digitar letras onde deveria digitar um número, <code>scanf</code> poderá falhar. Na Trilha 03 aprenderemos a verificar resultados e repetir a pergunta; na Trilha 06 estudaremos <code>fgets</code> para textos.</p></div></div>

        <Activity title="Diagnóstico de quatro erros" level="guiada">
          <ol className="exercise-list"><li><code>scanf("%f", &amp;idade);</code> para um <code>int</code>.</li><li><code>scanf("%d", nota);</code> sem <code>&amp;</code>.</li><li><code>scanf("%lf", &amp;preco);</code> para um <code>float</code>.</li><li><code>scanf("%c", &amp;letra);</code> logo depois de ler um número.</li></ol>
          <Reveal title="Revelar correções"><p>1. Use <code>%d</code>. 2. Use <code>&amp;nota</code>. 3. Para <code>float</code>, use <code>%f</code>. 4. Use <code>" %c"</code> com espaço inicial.</p></Reveal>
        </Activity>

        <Activity title="Teste controlado no Dev-C++" level="pratica">
          <p>Execute <code>entrada-segura.c</code> duas vezes. Digite 18 e S; depois, 30 e N. Confirme que a resposta de caractere não é pulada.</p>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[8]} number="09">
        <p>
          Chegou a hora de reunir variáveis, tipos, entrada, processamento e saída. Nossa calculadora receberá dois
          números e apresentará soma, subtração, multiplicação e divisão.
        </p>
        <div className="project-roadmap">
          <div><span>1</span><strong>Entrada</strong><p>Ler dois valores <code>double</code>.</p></div>
          <div><span>2</span><strong>Processamento</strong><p>Executar quatro operações.</p></div>
          <div><span>3</span><strong>Saída</strong><p>Mostrar resultados com duas casas.</p></div>
        </div>
        <div className="learning-callout"><Calculator /><div><strong>Por que o segundo número não pode ser zero?</strong><p>A divisão por zero não é válida. Como as decisões serão ensinadas na próxima trilha, nesta versão peça um segundo número diferente de zero. Depois evoluiremos a calculadora para verificar isso sozinha.</p></div></div>
        <CodeBlock code={basicCalculator} filename="calculadora-basica.c" downloadUrl="/downloads/trilha-02/calculadora-basica.c" />
        <div className="terminal-output"><span><TerminalSquare /> EXEMPLO COM 10 E 4</span><code>{`Soma: 14.00\nSubtracao: 6.00\nMultiplicacao: 40.00\nDivisao: 2.50`}</code></div>

        <h3 className="lesson-subtitle">Construção guiada no Dev-C++</h3>
        <ol className="step-list">
          <li><span>1</span><div><strong>Crie e salve</strong><p>Novo arquivo de código-fonte → salve como <code>calculadora-basica.c</code>.</p></div></li>
          <li><span>2</span><div><strong>Digite por partes</strong><p>Primeiro declaração, depois entradas, cálculos e saídas.</p></div></li>
          <li><span>3</span><div><strong>Compile a cada etapa</strong><p>Erros pequenos ficam mais fáceis de localizar.</p></div></li>
          <li><span>4</span><div><strong>Teste vários valores</strong><p>Use positivos, negativos e decimais; mantenha o divisor diferente de zero.</p></div></li>
        </ol>

        <Activity title="Evolução 1 — identifique cada parte" level="guiada">
          <p>No código da calculadora, marque em seu caderno quais linhas representam declaração, entrada, processamento e saída.</p>
          <Reveal title="Revelar classificação"><p><strong>Declaração:</strong> linhas com <code>double</code>. <strong>Entrada:</strong> perguntas e <code>scanf</code>. <strong>Processamento:</strong> quatro atribuições com operadores. <strong>Saída:</strong> últimos quatro <code>printf</code>.</p></Reveal>
        </Activity>

        <Activity title="Evolução 2 — acrescente a média" level="pratica">
          <p>Adicione uma variável <code>media</code>, calcule a média dos dois números e mostre o resultado.</p>
          <Reveal title="Revelar as três linhas necessárias"><pre className="pseudo-block"><code>{`double media;\nmedia = (numero1 + numero2) / 2.0;\nprintf("Media: %.2f\\n", media);`}</code></pre></Reveal>
        </Activity>

        <Activity title="Desafio final — personalize a calculadora" level="desafio">
          <p>Acrescente pelo menos duas operações: dobro do primeiro número, quadrado do segundo ou resto da divisão usando duas novas variáveis inteiras.</p>
          <Reveal title="Ver orientações"><p>O dobro pode ser calculado com <code>numero1 * 2</code>; o quadrado com <code>numero2 * numero2</code>. O operador <code>%</code> exige operandos inteiros, então crie uma versão separada com variáveis <code>int</code>.</p></Reveal>
        </Activity>

        <div className="final-checklist">
          <div><Target /><h3>Checklist da Trilha 02</h3></div>
          <ul>
            <li><CheckCircle2 /> Sei declarar e inicializar variáveis.</li>
            <li><CheckCircle2 /> Diferencio <code>int</code>, <code>float</code>, <code>double</code> e <code>char</code>.</li>
            <li><CheckCircle2 /> Uso marcadores corretos em <code>printf</code> e <code>scanf</code>.</li>
            <li><CheckCircle2 /> Entendo por que <code>scanf</code> recebe o endereço com <code>&amp;</code>.</li>
            <li><CheckCircle2 /> Utilizo operadores e parênteses corretamente.</li>
            <li><CheckCircle2 /> Reconheço uma divisão inteira e sei aplicar conversão.</li>
            <li><CheckCircle2 /> Consigo construir e testar a calculadora no Dev-C++.</li>
          </ul>
        </div>
      </TrailSection>
    </div>
  );
}
