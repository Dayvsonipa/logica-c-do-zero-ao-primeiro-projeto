import {
  AlertTriangle,
  ArrowDown,
  BrainCircuit,
  CheckCircle2,
  FileArchive,
  Lightbulb,
  Puzzle,
  Table2,
  Target,
  TerminalSquare,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, ConceptCard, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const morningSequence = `#include <stdio.h>

int main(void) {
    printf("1. Desligar o despertador.\\n");
    printf("2. Levantar da cama.\\n");
    printf("3. Escovar os dentes.\\n");
    printf("4. Tomar cafe da manha.\\n");
    printf("5. Ir para a aula.\\n");
    return 0;
}`;

const rectangleArea = `#include <stdio.h>

int main(void) {
    float base, altura, area;

    printf("Digite a base: ");
    scanf("%f", &base);

    printf("Digite a altura: ");
    scanf("%f", &altura);

    area = base * altura;

    printf("Area do retangulo: %.2f\\n", area);
    return 0;
}`;

const timeConverter = `#include <stdio.h>

int main(void) {
    int totalMinutos, horas, minutosRestantes;

    printf("Digite o total de minutos: ");
    scanf("%d", &totalMinutos);

    horas = totalMinutos / 60;
    minutosRestantes = totalMinutos % 60;

    printf("%d minuto(s) = %d hora(s) e %d minuto(s).\\n",
           totalMinutos, horas, minutosRestantes);
    return 0;
}`;

const averageConsumption = `#include <stdio.h>

int main(void) {
    float distancia, litros, consumo;

    printf("Distancia percorrida em km: ");
    scanf("%f", &distancia);

    printf("Combustivel gasto em litros: ");
    scanf("%f", &litros);

    consumo = distancia / litros;

    printf("Consumo medio: %.2f km/l\\n", consumo);
    return 0;
}`;

export function TrackOne({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner">
        <div>
          <p className="section-kicker">Materiais da trilha</p>
          <strong>Quatro programas prontos para estudar e modificar</strong>
          <span>Você também poderá baixar cada código separadamente ao longo das aulas.</span>
        </div>
        <a className="button-primary" href="/downloads/trilha-01/trilha-01-codigos.zip" download>
          <FileArchive /> Baixar todos os códigos
        </a>
      </div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>
          Todo programa existe para transformar alguma coisa. Ele recebe informações, trabalha com
          elas e entrega um resultado. Essa sequência recebe o nome de <strong>entrada, processamento e saída</strong>.
          Antes de escrever código, precisamos aprender a enxergar essas três partes em qualquer problema.
        </p>

        <div className="learning-callout">
          <Lightbulb />
          <div>
            <strong>Imagine uma lanchonete</strong>
            <p>O pedido do cliente é a entrada, a preparação do lanche é o processamento e o lanche pronto é a saída.</p>
          </div>
        </div>

        <div className="concept-grid">
          <ConceptCard label="ENTRADA" title="O que chega" tone="blue">
            Dados que o programa precisa receber: nome, preço, quantidade, nota ou uma opção escolhida.
          </ConceptCard>
          <ConceptCard label="PROCESSAMENTO" title="O que acontece" tone="amber">
            Operações realizadas com os dados: calcular, comparar, organizar, contar ou transformar.
          </ConceptCard>
          <ConceptCard label="SAÍDA" title="O que é entregue" tone="slate">
            Resultado mostrado ao usuário: total da compra, média, mensagem, relatório ou confirmação.
          </ConceptCard>
        </div>

        <h3 className="lesson-subtitle">Exemplo resolvido: compra de ingressos</h3>
        <p>
          Uma pessoa informa que deseja comprar <strong>3 ingressos</strong> de <strong>R$ 20</strong>. O sistema
          multiplica a quantidade pelo preço e mostra <strong>R$ 60</strong>. Observe que o resultado não apareceu
          por mágica: ele foi produzido a partir das entradas.
        </p>
        <div className="logic-flow" aria-label="Entrada, processamento e saída da compra de ingressos">
          <span>3 ingressos<br />R$ 20 cada</span><b>→</b><span>3 × 20</span><b>→</b><span>Total: R$ 60</span>
        </div>

        <Activity title="Atividade guiada — descubra as três partes" level="guiada">
          <p>Em uma escola, o sistema recebe três notas, calcula a média e mostra o resultado. Identifique:</p>
          <ol className="exercise-list">
            <li>Quais são as entradas?</li>
            <li>Qual é o processamento?</li>
            <li>Qual é a saída?</li>
          </ol>
          <Reveal title="Revelar resposta comentada">
            <p><strong>Entrada:</strong> as três notas.</p>
            <p><strong>Processamento:</strong> somar as notas e dividir o resultado por três.</p>
            <p><strong>Saída:</strong> a média calculada.</p>
            <p>A palavra “calcula” costuma indicar processamento; “recebe” sugere entrada; “mostra” indica saída.</p>
          </Reveal>
        </Activity>

        <Activity title="Sua vez — três situações" level="pratica">
          <p>Separe entrada, processamento e saída nos seguintes casos:</p>
          <ul className="exercise-list">
            <li>Aplicativo calcula o valor de uma corrida usando distância e tarifa.</li>
            <li>Caixa eletrônico recebe um valor, desconta do saldo e informa o novo saldo.</li>
            <li>Jogo recebe a pontuação de três fases, soma os pontos e mostra o total.</li>
          </ul>
          <Reveal title="Conferir as respostas">
            <p><strong>Corrida:</strong> distância e tarifa → multiplicação/cálculo → valor da corrida.</p>
            <p><strong>Caixa:</strong> saldo e valor retirado → subtração → novo saldo.</p>
            <p><strong>Jogo:</strong> pontos das fases → soma → pontuação total.</p>
          </Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>
          Um algoritmo é uma sequência finita de instruções para resolver um problema. A palavra
          <strong> sequência</strong> é importante: o computador executa as instruções na ordem em que foram escritas.
          Ele não adivinha a ordem que você pretendia usar.
        </p>

        <div className="learning-callout">
          <BrainCircuit />
          <div>
            <strong>Receita fora de ordem dá problema</strong>
            <p>Não faz sentido colocar o bolo no forno, depois misturar os ingredientes e só então escolher a forma. Com algoritmos acontece o mesmo.</p>
          </div>
        </div>

        <div className="sequence-lane" aria-label="Sequência correta de uma rotina matinal">
          {[
            "Desligar o despertador",
            "Levantar da cama",
            "Escovar os dentes",
            "Tomar café",
            "Ir para a aula",
          ].map((step, index) => (
            <div key={step}><span>{index + 1}</span><strong>{step}</strong>{index < 4 && <ArrowDown />}</div>
          ))}
        </div>

        <h3 className="lesson-subtitle">A mesma sequência escrita em C</h3>
        <p>
          O programa abaixo ainda não toma decisões. Ele apenas executa cada <code>printf</code> de cima para baixo.
          Troque a ordem das linhas e o resultado também mudará de ordem.
        </p>
        <CodeBlock code={morningSequence} filename="sequencia-manha.c" downloadUrl="/downloads/trilha-01/sequencia-manha.c" />
        <div className="terminal-output">
          <span><TerminalSquare /> RESULTADO ESPERADO</span>
          <code>{`1. Desligar o despertador.\n2. Levantar da cama.\n3. Escovar os dentes.\n4. Tomar cafe da manha.\n5. Ir para a aula.`}</code>
        </div>

        <Activity title="Caça ao erro — sanduíche impossível" level="guiada">
          <p>Estas instruções estão fora de ordem: comer, fechar o pão, colocar o recheio, separar o pão. Reescreva a sequência correta.</p>
          <Reveal title="Revelar uma sequência possível">
            <ol className="exercise-list"><li>Separar o pão.</li><li>Colocar o recheio.</li><li>Fechar o pão.</li><li>Comer o sanduíche.</li></ol>
            <p>Alguns problemas aceitam mais de uma sequência correta. O importante é que cada passo respeite aquilo de que depende.</p>
          </Reveal>
        </Activity>

        <Activity title="Desafio rápido — robô escovando os dentes" level="desafio">
          <p>Escreva instruções detalhadas para um robô escovar os dentes. Não use a frase “escove os dentes”; o robô precisa das ações menores.</p>
          <Reveal title="Ver exemplo de solução">
            <ol className="exercise-list"><li>Pegar a escova.</li><li>Abrir a pasta.</li><li>Colocar pasta na escova.</li><li>Abrir a torneira.</li><li>Molhar a escova.</li><li>Fechar a torneira.</li><li>Escovar cada região dos dentes.</li><li>Enxaguar a boca e a escova.</li></ol>
          </Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p>
          Problemas grandes assustam porque tentamos resolvê-los de uma vez. A <strong>decomposição</strong> consiste
          em quebrar um problema maior em partes menores. Cada parte fica mais simples de entender, testar e corrigir.
        </p>

        <h3 className="lesson-subtitle">Exemplo: organizar um campeonato escolar</h3>
        <p>“Organizar um campeonato” é amplo demais. Ao decompor, surgem tarefas menores e objetivas:</p>
        <div className="decomposition-tree">
          <div className="tree-root"><Puzzle /> Organizar campeonato</div>
          <div className="tree-branches">
            <span>Cadastrar equipes</span><span>Montar partidas</span><span>Registrar resultados</span><span>Exibir campeão</span>
          </div>
        </div>
        <p>
          Perceba que cada parte pode ser resolvida separadamente. Mais adiante, em C, utilizaremos funções para
          transformar essa forma de pensar em organização do código.
        </p>

        <Activity title="Atividade guiada — aplicativo de entrega" level="guiada">
          <p>Decomponha o problema “realizar uma entrega de comida” em pelo menos cinco partes menores.</p>
          <Reveal title="Comparar com uma possível decomposição">
            <ol className="exercise-list"><li>Receber o pedido.</li><li>Confirmar os itens.</li><li>Calcular o total.</li><li>Preparar o pedido.</li><li>Definir o endereço.</li><li>Realizar a entrega.</li><li>Confirmar o recebimento.</li></ol>
          </Reveal>
        </Activity>

        <Activity title="Prática independente — biblioteca da escola" level="pratica">
          <p>Quebre “criar um sistema de biblioteca” em partes menores. Pense no que o sistema precisará cadastrar, pesquisar, emprestar e devolver.</p>
          <Reveal title="Ver pistas e resposta">
            <p><strong>Pistas:</strong> livros, estudantes, empréstimos e devoluções são grupos importantes.</p>
            <p><strong>Possível resposta:</strong> cadastrar livros; cadastrar estudantes; pesquisar livro; registrar empréstimo; registrar devolução; listar atrasos.</p>
          </Reveal>
        </Activity>

        <div className="warning-callout"><AlertTriangle /><div><strong>Decompor não é complicar</strong><p>Se uma parte ainda parece grande, divida novamente. Pare quando cada tarefa tiver um objetivo claro e executável.</p></div></div>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>
          O <strong>pseudocódigo</strong> descreve um algoritmo com palavras próximas da linguagem humana. Ele não é
          executado pelo computador; serve para organizar a solução antes de enfrentar regras de uma linguagem de programação.
        </p>
        <div className="compare-grid">
          <div><small>LINGUAGEM HUMANA</small><strong>Calcule a área</strong><span>Pode deixar detalhes implícitos.</span></div>
          <div><small>PSEUDOCÓDIGO</small><strong>area ← base × altura</strong><span>Explicita dados e operação.</span></div>
        </div>

        <h3 className="lesson-subtitle">Exemplo passo a passo: área de um retângulo</h3>
        <pre className="pseudo-block"><code>{`INÍCIO\n    LEIA base\n    LEIA altura\n    area ← base × altura\n    ESCREVA area\nFIM`}</code></pre>
        <div className="line-explanation">
          <p><code>INÍCIO</code><span>Marca onde o algoritmo começa.</span></p>
          <p><code>LEIA</code><span>Indica dados que precisam ser fornecidos: as entradas.</span></p>
          <p><code>area ← base × altura</code><span>Calcula e guarda o resultado: o processamento.</span></p>
          <p><code>ESCREVA</code><span>Apresenta o resultado: a saída.</span></p>
          <p><code>FIM</code><span>Marca o encerramento do algoritmo.</span></p>
        </div>

        <Activity title="Atividade guiada — média de três notas" level="guiada">
          <p>Complete as lacunas: ler três notas, calcular a média e mostrá-la.</p>
          <pre className="pseudo-block muted"><code>{`INÍCIO\n    ______ nota1, nota2, nota3\n    media ← ____________________\n    ______ media\nFIM`}</code></pre>
          <Reveal title="Revelar pseudocódigo completo">
            <pre className="pseudo-block"><code>{`INÍCIO\n    LEIA nota1, nota2, nota3\n    media ← (nota1 + nota2 + nota3) ÷ 3\n    ESCREVA media\nFIM`}</code></pre>
            <p>Os parênteses garantem que a soma seja realizada antes da divisão.</p>
          </Reveal>
        </Activity>

        <Activity title="Prática em três níveis" level="pratica">
          <div className="level-grid">
            <div><span>BÁSICO</span><p>Escreva o pseudocódigo que lê um nome e mostra uma mensagem de boas-vindas.</p></div>
            <div><span>INTERMEDIÁRIO</span><p>Leia preço e quantidade, calcule e mostre o total de uma compra.</p></div>
            <div><span>DESAFIO</span><p>Leia dias, converta para horas e mostre o resultado. Considere 24 horas por dia.</p></div>
          </div>
          <Reveal title="Conferir as três soluções">
            <pre className="pseudo-block"><code>{`1) LEIA nome → ESCREVA "Bem-vindo", nome\n\n2) LEIA preco, quantidade → total ← preco × quantidade → ESCREVA total\n\n3) LEIA dias → horas ← dias × 24 → ESCREVA horas`}</code></pre>
          </Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p>
          Um <strong>fluxograma</strong> representa o algoritmo com símbolos e setas. Ele ajuda a enxergar o caminho
          das informações e a ordem das ações. Cada símbolo possui uma função específica.
        </p>

        <div className="symbol-grid">
          <div><span className="shape terminal-shape">Início</span><strong>Início ou fim</strong><p>Marca os limites do algoritmo.</p></div>
          <div><span className="shape input-shape">Ler</span><strong>Entrada ou saída</strong><p>Recebe ou apresenta dados.</p></div>
          <div><span className="shape process-shape">Calcular</span><strong>Processamento</strong><p>Executa uma ação ou cálculo.</p></div>
          <div><span className="shape decision-shape"><b>?</b></span><strong>Decisão</strong><p>Abre caminhos diferentes. Será aprofundada na Trilha 03.</p></div>
        </div>

        <h3 className="lesson-subtitle">Fluxograma da área do retângulo</h3>
        <div className="flowchart-column" aria-label="Fluxograma para calcular área de um retângulo">
          <span className="shape terminal-shape">Início</span><ArrowDown />
          <span className="shape input-shape">Ler base e altura</span><ArrowDown />
          <span className="shape process-shape">área = base × altura</span><ArrowDown />
          <span className="shape input-shape">Mostrar área</span><ArrowDown />
          <span className="shape terminal-shape">Fim</span>
        </div>
        <p>Compare esse desenho com o pseudocódigo anterior: são duas representações diferentes da mesma solução.</p>

        <Activity title="Atividade guiada — escolha o símbolo" level="guiada">
          <p>Qual símbolo deve representar cada instrução?</p>
          <ol className="exercise-list"><li>Mostrar “Olá”.</li><li>Somar dois valores.</li><li>Iniciar o algoritmo.</li><li>Verificar se a idade é maior que 18.</li></ol>
          <Reveal title="Revelar respostas">
            <p>1. Entrada/saída. 2. Processamento. 3. Início/fim. 4. Decisão.</p>
          </Reveal>
        </Activity>

        <Activity title="Desafio de desenho — total da compra" level="desafio">
          <p>Em uma folha, desenhe um fluxograma que leia preço e quantidade, calcule o total e mostre o resultado. Só depois compare.</p>
          <Reveal title="Ver sequência esperada">
            <div className="flowchart-column compact"><span className="shape terminal-shape">Início</span><ArrowDown /><span className="shape input-shape">Ler preço e quantidade</span><ArrowDown /><span className="shape process-shape">total = preço × quantidade</span><ArrowDown /><span className="shape input-shape">Mostrar total</span><ArrowDown /><span className="shape terminal-shape">Fim</span></div>
          </Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>
          O <strong>teste de mesa</strong> é uma simulação feita à mão. Escolhemos valores de entrada e acompanhamos
          cada passo do algoritmo, registrando como os dados mudam. Ele permite encontrar erros antes mesmo de compilar.
        </p>

        <div className="learning-callout"><Table2 /><div><strong>Você será o computador</strong><p>Execute uma instrução por vez, sem pular etapas e sem corrigir mentalmente o algoritmo.</p></div></div>

        <h3 className="lesson-subtitle">Teste de mesa: área do retângulo</h3>
        <p>Vamos testar com base igual a 8 e altura igual a 5.</p>
        <div className="table-wrap">
          <table className="desk-table">
            <thead><tr><th>Passo</th><th>Instrução</th><th>base</th><th>altura</th><th>área</th><th>Saída</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Ler base</td><td>8</td><td>—</td><td>—</td><td>—</td></tr>
              <tr><td>2</td><td>Ler altura</td><td>8</td><td>5</td><td>—</td><td>—</td></tr>
              <tr><td>3</td><td>área ← base × altura</td><td>8</td><td>5</td><td>40</td><td>—</td></tr>
              <tr><td>4</td><td>Escrever área</td><td>8</td><td>5</td><td>40</td><td>40</td></tr>
            </tbody>
          </table>
        </div>
        <p>O traço significa “ainda não possui valor”. A cada instrução, atualizamos apenas aquilo que realmente mudou.</p>

        <Activity title="Atividade guiada — total de camisetas" level="guiada">
          <p>Execute o algoritmo com quantidade 4 e preço 25: <code>total ← quantidade × preço</code>.</p>
          <div className="table-wrap">
            <table className="desk-table"><thead><tr><th>quantidade</th><th>preço</th><th>total</th></tr></thead><tbody><tr><td>4</td><td>25</td><td>?</td></tr></tbody></table>
          </div>
          <Reveal title="Revelar resultado e raciocínio"><p><strong>total = 4 × 25 = 100.</strong> A saída será R$ 100.</p></Reveal>
        </Activity>

        <Activity title="Encontre o erro com teste de mesa" level="desafio">
          <p>Um algoritmo deveria calcular o dobro de um número, mas escreveu <code>resultado ← numero + 2</code>. Teste com o número 5. Qual saída aparece e qual deveria aparecer?</p>
          <Reveal title="Revelar diagnóstico">
            <p>O algoritmo incorreto produz 7, pois calcula 5 + 2. O dobro de 5 é 10; a instrução correta seria <code>resultado ← numero × 2</code>.</p>
          </Reveal>
        </Activity>

        <div className="warning-callout"><AlertTriangle /><div><strong>Um caso não é suficiente</strong><p>Faça o teste de mesa com valores diferentes, incluindo zero e números maiores. Um algoritmo pode funcionar para um caso e falhar em outro.</p></div></div>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>
          Agora vamos ligar as representações. O problema, o pseudocódigo, o fluxograma e o programa C descrevem a
          mesma solução em níveis diferentes. A lógica vem primeiro; a linguagem C transforma essa lógica em instruções executáveis.
        </p>

        <div className="mapping-grid">
          <div><small>PSEUDOCÓDIGO</small><code>LEIA base</code><span>→</span><code>scanf("%f", &amp;base);</code><small>LINGUAGEM C</small></div>
          <div><small>PSEUDOCÓDIGO</small><code>area ← base × altura</code><span>→</span><code>area = base * altura;</code><small>LINGUAGEM C</small></div>
          <div><small>PSEUDOCÓDIGO</small><code>ESCREVA area</code><span>→</span><code>printf("%.2f", area);</code><small>LINGUAGEM C</small></div>
        </div>

        <div className="learning-callout"><Lightbulb /><div><strong>Uma prévia da próxima trilha</strong><p>Os tipos <code>float</code>, a leitura com <code>scanf</code> e os operadores serão estudados com profundidade na Trilha 02. Aqui, observe como a lógica foi traduzida.</p></div></div>

        <h3 className="lesson-subtitle">Programa completo: área do retângulo</h3>
        <CodeBlock code={rectangleArea} filename="area-retangulo.c" downloadUrl="/downloads/trilha-01/area-retangulo.c" />
        <div className="terminal-output"><span><TerminalSquare /> EXEMPLO DE EXECUÇÃO</span><code>{`Digite a base: 8\nDigite a altura: 5\nArea do retangulo: 40.00`}</code></div>
        <div className="line-explanation">
          <p><code>float base, altura, area;</code><span>Reserva três espaços para números que podem possuir casas decimais.</span></p>
          <p><code>scanf("%f", &amp;base);</code><span>Lê o valor digitado e o guarda em <code>base</code>.</span></p>
          <p><code>area = base * altura;</code><span>Executa o processamento planejado no pseudocódigo.</span></p>
          <p><code>printf(..., area);</code><span>Mostra a saída com duas casas decimais.</span></p>
        </div>

        <Activity title="Desafio 1 — conversor de tempo" level="desafio">
          <p>Crie um algoritmo que receba uma quantidade total de minutos e informe quantas horas e minutos restam. Exemplo: 135 minutos correspondem a 2 horas e 15 minutos.</p>
          <ol className="exercise-list"><li>Identifique entrada, processamento e saída.</li><li>Escreva o pseudocódigo.</li><li>Faça um teste de mesa com 135.</li><li>Só então tente escrever ou completar o código C.</li></ol>
          <Reveal title="Revelar solução completa em C">
            <CodeBlock code={timeConverter} filename="conversor-tempo.c" downloadUrl="/downloads/trilha-01/conversor-tempo.c" />
            <p>A divisão inteira encontra as horas. O operador <code>%</code> encontra o resto da divisão, ou seja, os minutos que sobraram.</p>
          </Reveal>
        </Activity>

        <Activity title="Desafio 2 — consumo médio da viagem" level="desafio">
          <p>Um carro percorreu determinada distância e gastou certa quantidade de combustível. Planeje um algoritmo que calcule quantos quilômetros ele percorreu por litro.</p>
          <ol className="exercise-list"><li>Use a fórmula <code>consumo = distância ÷ litros</code>.</li><li>Faça um teste de mesa com 420 km e 35 litros.</li><li>O resultado esperado é 12 km/l.</li></ol>
          <Reveal title="Revelar solução completa em C">
            <CodeBlock code={averageConsumption} filename="consumo-medio.c" downloadUrl="/downloads/trilha-01/consumo-medio.c" />
          </Reveal>
        </Activity>

        <div className="final-checklist">
          <div><Target /><h3>Checklist da trilha</h3></div>
          <ul>
            <li><CheckCircle2 /> Consigo separar entrada, processamento e saída.</li>
            <li><CheckCircle2 /> Entendo por que a ordem das instruções importa.</li>
            <li><CheckCircle2 /> Sei decompor um problema grande.</li>
            <li><CheckCircle2 /> Consigo escrever um pseudocódigo simples.</li>
            <li><CheckCircle2 /> Reconheço os principais símbolos de fluxograma.</li>
            <li><CheckCircle2 /> Sei executar um teste de mesa.</li>
            <li><CheckCircle2 /> Consigo relacionar um algoritmo com um programa C.</li>
          </ul>
        </div>
      </TrailSection>
    </div>
  );
}
