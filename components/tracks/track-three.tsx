import {
  AlertTriangle,
  CheckCircle2,
  FileArchive,
  GitBranch,
  Lightbulb,
  ListChecks,
  Route,
  ShieldCheck,
  Signpost,
  Target,
  TerminalSquare,
} from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { Activity, ConceptCard, Reveal, TrailSection } from "@/components/tracks/lesson-parts";
import type { Track } from "@/lib/course";

const firstDecision = `#include <stdio.h>

int main(void) {
    int temperatura;

    printf("Digite a temperatura atual: ");
    scanf("%d", &temperatura);

    if (temperatura > 30) {
        printf("Dia quente: beba bastante agua!\\n");
    }

    printf("Programa encerrado.\\n");
    return 0;
}`;

const relationalExpressions = `#include <stdio.h>

int main(void) {
    int a = 10;
    int b = 6;

    printf("a > b  : %d\\n", a > b);
    printf("a < b  : %d\\n", a < b);
    printf("a == b : %d\\n", a == b);
    printf("a != b : %d\\n", a != b);
    printf("a >= 10: %d\\n", a >= 10);
    printf("b <= 6 : %d\\n", b <= 6);
    return 0;
}`;

const logicalOperators = `#include <stdio.h>

int main(void) {
    int idade = 20;
    int possuiIngresso = 1;
    int acompanhado = 0;

    printf("Maior e com ingresso: %d\\n",
           idade >= 18 && possuiIngresso == 1);
    printf("Pode entrar acompanhado: %d\\n",
           idade >= 18 || acompanhado == 1);
    printf("Nao esta acompanhado: %d\\n", !acompanhado);
    return 0;
}`;

const simpleIf = `#include <stdio.h>

int main(void) {
    float saldo, valorCompra;

    printf("Informe seu saldo: R$ ");
    scanf("%f", &saldo);

    printf("Informe o valor da compra: R$ ");
    scanf("%f", &valorCompra);

    if (saldo >= valorCompra) {
        printf("Compra autorizada!\\n");
    }

    printf("Obrigado por usar o sistema.\\n");
    return 0;
}`;

const ifElse = `#include <stdio.h>

int main(void) {
    int numero;

    printf("Digite um numero inteiro: ");
    scanf("%d", &numero);

    if (numero % 2 == 0) {
        printf("O numero e par.\\n");
    } else {
        printf("O numero e impar.\\n");
    }
    return 0;
}`;

const elseIf = `#include <stdio.h>

int main(void) {
    float media;

    printf("Digite a media do aluno: ");
    scanf("%f", &media);

    if (media >= 7.0f) {
        printf("Situacao: aprovado.\\n");
    } else if (media >= 5.0f) {
        printf("Situacao: recuperacao.\\n");
    } else {
        printf("Situacao: reprovado.\\n");
    }
    return 0;
}`;

const nestedDecision = `#include <stdio.h>

int main(void) {
    int usuarioCorreto, senhaCorreta;

    printf("Usuario correto? (1-Sim / 0-Nao): ");
    scanf("%d", &usuarioCorreto);

    printf("Senha correta? (1-Sim / 0-Nao): ");
    scanf("%d", &senhaCorreta);

    if (usuarioCorreto == 1) {
        if (senhaCorreta == 1) {
            printf("Acesso liberado.\\n");
        } else {
            printf("Senha incorreta.\\n");
        }
    } else {
        printf("Usuario nao encontrado.\\n");
    }
    return 0;
}`;

const switchMenu = `#include <stdio.h>

int main(void) {
    int opcao;

    printf("=== MENU DE JOGOS ===\\n");
    printf("1 - Iniciar jogo\\n");
    printf("2 - Ver instrucoes\\n");
    printf("3 - Sair\\n");
    printf("Escolha uma opcao: ");
    scanf("%d", &opcao);

    switch (opcao) {
        case 1:
            printf("Preparando a partida...\\n");
            break;
        case 2:
            printf("Use as setas para movimentar.\\n");
            break;
        case 3:
            printf("Ate a proxima!\\n");
            break;
        default:
            printf("Opcao invalida.\\n");
    }
    return 0;
}`;

const validatedGrade = `#include <stdio.h>

int main(void) {
    float nota;

    printf("Digite uma nota de 0 a 10: ");
    scanf("%f", &nota);

    if (nota < 0.0f || nota > 10.0f) {
        printf("Erro: a nota deve estar entre 0 e 10.\\n");
    } else if (nota >= 7.0f) {
        printf("Aluno aprovado.\\n");
    } else if (nota >= 5.0f) {
        printf("Aluno em recuperacao.\\n");
    } else {
        printf("Aluno reprovado.\\n");
    }
    return 0;
}`;

const ticketProject = `#include <stdio.h>

int main(void) {
    int idade;
    char estudante;
    float preco = 30.0f;

    printf("Digite a idade: ");
    scanf("%d", &idade);

    printf("E estudante? (S/N): ");
    scanf(" %c", &estudante);

    if (idade < 0 || idade > 120) {
        printf("Idade invalida.\\n");
    } else {
        if (idade <= 12) {
            preco = 15.0f;
        } else if (idade >= 60) {
            preco = 12.0f;
        } else if (estudante == 'S' || estudante == 's') {
            preco = 18.0f;
        }

        printf("Valor do ingresso: R$ %.2f\\n", preco);
    }
    return 0;
}`;

const bmiChallenge = `#include <stdio.h>

int main(void) {
    float peso, altura, imc;

    printf("Peso em kg: ");
    scanf("%f", &peso);
    printf("Altura em metros: ");
    scanf("%f", &altura);

    if (peso <= 0 || altura <= 0) {
        printf("Dados invalidos.\\n");
    } else {
        imc = peso / (altura * altura);
        printf("IMC: %.2f\\n", imc);

        if (imc < 18.5f) {
            printf("Classificacao: abaixo do peso.\\n");
        } else if (imc < 25.0f) {
            printf("Classificacao: peso adequado.\\n");
        } else if (imc < 30.0f) {
            printf("Classificacao: sobrepeso.\\n");
        } else {
            printf("Classificacao: obesidade.\\n");
        }
    }
    return 0;
}`;

const shippingChallenge = `#include <stdio.h>

int main(void) {
    float valorCompra, frete;
    int regiao;

    printf("Valor da compra: R$ ");
    scanf("%f", &valorCompra);
    printf("Regiao (1-Sudeste, 2-Sul, 3-Outras): ");
    scanf("%d", &regiao);

    if (valorCompra < 0) {
        printf("Valor de compra invalido.\\n");
    } else if (valorCompra >= 200.0f) {
        printf("Frete gratis!\\n");
    } else {
        switch (regiao) {
            case 1: frete = 15.0f; break;
            case 2: frete = 20.0f; break;
            case 3: frete = 30.0f; break;
            default: frete = -1.0f;
        }

        if (frete < 0) {
            printf("Regiao invalida.\\n");
        } else {
            printf("Frete: R$ %.2f\\n", frete);
            printf("Total: R$ %.2f\\n", valorCompra + frete);
        }
    }
    return 0;
}`;

export function TrackThree({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <div className="track-download-banner">
        <div>
          <p className="section-kicker">Materiais da trilha</p>
          <strong>Doze programas em C para praticar decisões no Dev-C++</strong>
          <span>Baixe o conjunto completo ou utilize o botão presente em cada exemplo.</span>
        </div>
        <a className="button-primary" href="/downloads/trilha-03/trilha-03-codigos.zip" download>
          <FileArchive /> Baixar todos os códigos
        </a>
      </div>

      <div className="devcpp-banner">
        <TerminalSquare />
        <div><strong>Continue criando arquivos .c</strong><p>No Dev-C++, use <b>Executar → Compilar e Executar</b>. Embora o aplicativo tenha C++ no nome, todo o conteúdo desta trilha continua sendo linguagem C.</p></div>
      </div>

      <TrailSection topic={track.topics[0]} number="01">
        <p>Até agora nossos programas executavam praticamente o mesmo caminho do início ao fim. Mas sistemas reais precisam observar uma situação e escolher o que fazer. Um aplicativo bancário, por exemplo, só autoriza uma compra quando existe saldo suficiente.</p>
        <p>Uma <strong>estrutura de decisão</strong> permite que determinadas instruções sejam executadas apenas quando uma condição é verdadeira. Em C, o valor <code>0</code> representa falso; qualquer valor diferente de zero representa verdadeiro.</p>
        <div className="decision-map" aria-label="Caminhos de uma decisão">
          <div><span>1</span><strong>Observar</strong><p>O programa recebe ou consulta um dado.</p></div>
          <div><span>2</span><strong>Comparar</strong><p>Uma pergunta lógica produz verdadeiro ou falso.</p></div>
          <div><span>3</span><strong>Escolher</strong><p>Somente o caminho correspondente é executado.</p></div>
        </div>
        <CodeBlock code={firstDecision} filename="primeira-decisao.c" downloadUrl="/downloads/trilha-03/primeira-decisao.c" />
        <div className="terminal-output"><span><TerminalSquare /> TESTE DUAS VEZES</span><code>Digite 35 e depois 25. Observe qual mensagem aparece somente no primeiro teste.</code></div>
        <Activity title="Faça o computador tomar a primeira decisão" level="guiada">
          <ol className="exercise-list"><li>Digite e execute o programa com temperatura igual a 35.</li><li>Execute novamente usando 25.</li><li>Troque o operador <code>&gt;</code> por <code>&gt;=</code> e teste exatamente 30.</li></ol>
        </Activity>
        <Activity title="Preveja antes de executar" level="pratica">
          <p>Se a condição fosse <code>temperatura &lt; 18</code>, quais mensagens apareceriam ao digitar 12? E ao digitar 24?</p>
          <Reveal title="Revelar raciocínio"><p>Com 12, aparecem a mensagem do bloco e “Programa encerrado”. Com 24, apenas “Programa encerrado”, pois essa linha está fora do <code>if</code>.</p></Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[1]} number="02">
        <p>Para construir uma condição, comparamos dois valores. O resultado não é um novo número calculado, mas uma resposta lógica: verdadeiro ou falso. Os operadores relacionais são as palavras de comparação da linguagem C.</p>
        <div className="table-wrap"><table className="desk-table relation-table"><thead><tr><th>Operador</th><th>Leitura</th><th>Exemplo</th><th>Resultado</th></tr></thead><tbody>
          <tr><td><code>&gt;</code></td><td>maior que</td><td><code>8 &gt; 3</code></td><td>verdadeiro</td></tr>
          <tr><td><code>&lt;</code></td><td>menor que</td><td><code>8 &lt; 3</code></td><td>falso</td></tr>
          <tr><td><code>&gt;=</code></td><td>maior ou igual</td><td><code>8 &gt;= 8</code></td><td>verdadeiro</td></tr>
          <tr><td><code>&lt;=</code></td><td>menor ou igual</td><td><code>5 &lt;= 4</code></td><td>falso</td></tr>
          <tr><td><code>==</code></td><td>igual a</td><td><code>6 == 6</code></td><td>verdadeiro</td></tr>
          <tr><td><code>!=</code></td><td>diferente de</td><td><code>6 != 2</code></td><td>verdadeiro</td></tr>
        </tbody></table></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Um símbolo que muda tudo</strong><p><code>=</code> atribui um valor a uma variável. <code>==</code> compara dois valores. Em uma condição, confundir os dois pode criar um erro difícil de perceber.</p></div></div>
        <CodeBlock code={relationalExpressions} filename="expressoes-relacionais.c" downloadUrl="/downloads/trilha-03/expressoes-relacionais.c" />
        <Activity title="Laboratório verdadeiro ou falso" level="guiada">
          <p>Antes de executar, anote o resultado esperado de cada comparação. Depois confira os valores <code>1</code> e <code>0</code> mostrados pelo programa.</p>
        </Activity>
        <Activity title="Construa seis comparações" level="pratica">
          <p>Crie as variáveis <code>idade</code> e <code>idadeMinima</code>. Mostre na tela o resultado de comparações que usem os seis operadores da tabela.</p>
          <Reveal title="Ver uma possibilidade"><CodeBlock code={`printf("Maior: %d\\n", idade > idadeMinima);\nprintf("Menor: %d\\n", idade < idadeMinima);\nprintf("Maior ou igual: %d\\n", idade >= idadeMinima);\nprintf("Menor ou igual: %d\\n", idade <= idadeMinima);\nprintf("Igual: %d\\n", idade == idadeMinima);\nprintf("Diferente: %d\\n", idade != idadeMinima);`} filename="comparacoes-trecho.c" /></Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[2]} number="03">
        <p>Às vezes uma única comparação não descreve toda a regra. Para entrar em um evento, por exemplo, a pessoa pode precisar ter idade mínima <strong>e</strong> possuir ingresso. Os operadores lógicos conectam ou invertem condições.</p>
        <div className="logic-operator-grid">
          <ConceptCard label="E" title="&& — todas verdadeiras" tone="blue">Só produz verdadeiro quando as duas condições são verdadeiras.</ConceptCard>
          <ConceptCard label="OU" title="|| — pelo menos uma" tone="amber">Produz verdadeiro quando uma ou as duas condições são verdadeiras.</ConceptCard>
          <ConceptCard label="NÃO" title="! — inversão" tone="slate">Transforma verdadeiro em falso e falso em verdadeiro.</ConceptCard>
        </div>
        <div className="table-wrap"><table className="desk-table truth-table"><thead><tr><th>A</th><th>B</th><th>A &amp;&amp; B</th><th>A || B</th></tr></thead><tbody><tr><td>F</td><td>F</td><td>F</td><td>F</td></tr><tr><td>F</td><td>V</td><td>F</td><td>V</td></tr><tr><td>V</td><td>F</td><td>F</td><td>V</td></tr><tr><td>V</td><td>V</td><td>V</td><td>V</td></tr></tbody></table></div>
        <CodeBlock code={logicalOperators} filename="operadores-logicos.c" downloadUrl="/downloads/trilha-03/operadores-logicos.c" />
        <Activity title="Traduza regras para C" level="pratica">
          <ol className="exercise-list"><li>Idade entre 18 e 60: <code>idade &gt;= 18 &amp;&amp; idade &lt;= 60</code>.</li><li>Pagamento em dinheiro ou Pix.</li><li>Usuário não está bloqueado.</li></ol>
          <Reveal title="Revelar traduções"><CodeBlock code={`forma == 1 || forma == 2\n!bloqueado`} filename="regras-logicas-trecho.c" /></Reveal>
        </Activity>
        <div className="warning-callout"><AlertTriangle /><div><strong>Não encadeie comparações como na matemática</strong><p>Em C, escreva <code>idade &gt;= 18 &amp;&amp; idade &lt;= 60</code>. A forma <code>18 &lt;= idade &lt;= 60</code> não representa corretamente essa regra.</p></div></div>
      </TrailSection>

      <TrailSection topic={track.topics[3]} number="04">
        <p>O <code>if</code> significa “se”. O programa testa a expressão entre parênteses e entra no bloco entre chaves somente quando o resultado é verdadeiro. Se a condição for falsa, o bloco é ignorado e a execução continua depois dele.</p>
        <div className="condition-anatomy"><span>if</span><strong>(saldo &gt;= valorCompra)</strong><em>{`{ ação quando verdadeiro }`}</em></div>
        <CodeBlock code={simpleIf} filename="compra-com-if.c" downloadUrl="/downloads/trilha-03/compra-com-if.c" />
        <div className="branch-grid"><div><GitBranch /><strong>Condição verdadeira</strong><p>Executa “Compra autorizada!” e segue adiante.</p></div><div><Route /><strong>Condição falsa</strong><p>Pula o bloco e segue diretamente para o agradecimento.</p></div></div>
        <Activity title="Teste de mesa da compra" level="guiada">
          <div className="table-wrap"><table className="desk-table"><thead><tr><th>Saldo</th><th>Compra</th><th>Condição</th><th>Mensagem</th></tr></thead><tbody><tr><td>100</td><td>80</td><td>verdadeira</td><td>autorizada</td></tr><tr><td>50</td><td>70</td><td>falsa</td><td>não aparece</td></tr><tr><td>90</td><td>90</td><td>verdadeira</td><td>autorizada</td></tr></tbody></table></div>
        </Activity>
        <Activity title="Desconto para compra grande" level="desafio">
          <p>Leia o valor de uma compra. Se ele for maior ou igual a R$ 200, mostre “Frete grátis”. A mensagem “Pedido registrado” deve aparecer sempre.</p>
          <Reveal title="Tente antes de revelar"><CodeBlock code={`if (valorCompra >= 200.0f) {\n    printf("Frete gratis!\\n");\n}\nprintf("Pedido registrado.\\n");`} filename="desconto-trecho.c" /></Reveal>
        </Activity>
      </TrailSection>

      <TrailSection topic={track.topics[4]} number="05">
        <p>Quando precisamos escolher exatamente um entre dois caminhos, usamos <code>if</code> e <code>else</code>. Se a condição for verdadeira, o primeiro bloco executa; caso contrário, o segundo executa. Os dois blocos nunca são executados na mesma passagem.</p>
        <div className="two-paths"><div><span>VERDADEIRO</span><strong>Executa o bloco do if</strong></div><div><span>FALSO</span><strong>Executa o bloco do else</strong></div></div>
        <CodeBlock code={ifElse} filename="numero-par-ou-impar.c" downloadUrl="/downloads/trilha-03/numero-par-ou-impar.c" />
        <p>O operador <code>%</code> fornece o resto da divisão. Todo número par deixa resto zero quando dividido por 2; por isso a condição é <code>numero % 2 == 0</code>.</p>
        <Activity title="Positivo ou não positivo" level="pratica">
          <p>Leia um número. Mostre “positivo” quando ele for maior que zero e “zero ou negativo” nos demais casos.</p>
          <Reveal title="Revelar estrutura"><CodeBlock code={`if (numero > 0) {\n    printf("Positivo.\\n");\n} else {\n    printf("Zero ou negativo.\\n");\n}`} filename="positivo-trecho.c" /></Reveal>
        </Activity>
        <Activity title="Pode votar?" level="desafio"><p>Leia a idade e informe se a pessoa já alcançou a idade mínima de 16 anos usada neste exercício.</p><Reveal title="Revelar condição"><p>A condição principal pode ser <code>idade &gt;= 16</code>. Crie uma mensagem diferente no <code>else</code>.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[5]} number="06">
        <p>Alguns problemas possuem três ou mais resultados possíveis. O encadeamento <code>else if</code> testa as condições de cima para baixo. Assim que uma delas é verdadeira, seu bloco executa e toda a sequência restante é ignorada.</p>
        <CodeBlock code={elseIf} filename="situacao-do-aluno.c" downloadUrl="/downloads/trilha-03/situacao-do-aluno.c" />
        <div className="priority-ladder"><div><span>1º</span><code>media &gt;= 7</code><p>Aprovado</p></div><div><span>2º</span><code>media &gt;= 5</code><p>Recuperação</p></div><div><span>3º</span><code>else</code><p>Reprovado</p></div></div>
        <div className="learning-callout"><Lightbulb /><div><strong>A ordem faz parte da lógica</strong><p>A média 8 também é maior que 5, mas a primeira condição verdadeira já encerra a sequência. Por isso começamos pela faixa mais alta.</p></div></div>
        <Activity title="Classifique uma pontuação" level="pratica"><p>Crie as faixas: 90 ou mais = Ouro; 70 a 89 = Prata; 50 a 69 = Bronze; abaixo de 50 = Continue treinando.</p><Reveal title="Revelar solução"><CodeBlock code={`if (pontos >= 90) {\n    printf("Ouro\\n");\n} else if (pontos >= 70) {\n    printf("Prata\\n");\n} else if (pontos >= 50) {\n    printf("Bronze\\n");\n} else {\n    printf("Continue treinando\\n");\n}`} filename="classificacao-trecho.c" /></Reveal></Activity>
        <Activity title="Encontre o erro de ordem" level="desafio"><p>O que acontece se testarmos <code>media &gt;= 5</code> antes de <code>media &gt;= 7</code>?</p><Reveal title="Revelar explicação"><p>Uma média 9 já satisfaz <code>media &gt;= 5</code>. O programa mostraria recuperação e nunca chegaria ao teste de aprovação.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[6]} number="07">
        <p>Uma decisão aninhada é um <code>if</code> dentro de outro. Ela é útil quando a segunda pergunta só faz sentido depois que a primeira foi atendida. No exemplo, só verificamos a senha quando o usuário existe.</p>
        <CodeBlock code={nestedDecision} filename="acesso-aninhado.c" downloadUrl="/downloads/trilha-03/acesso-aninhado.c" />
        <div className="nested-visual"><div><span>PERGUNTA EXTERNA</span><strong>O usuário está correto?</strong><div><span>PERGUNTA INTERNA</span><strong>A senha está correta?</strong></div></div></div>
        <Activity title="Percorra todos os caminhos" level="guiada"><ol className="exercise-list"><li>Usuário 1 e senha 1.</li><li>Usuário 1 e senha 0.</li><li>Usuário 0 e senha 1.</li><li>Explique por que a senha não importa no terceiro teste.</li></ol></Activity>
        <Activity title="Entrada em brinquedo" level="desafio"><p>Primeiro verifique se a altura é pelo menos 1,40 m. Apenas quando for, verifique se a pessoa possui ingresso. Mostre uma mensagem específica para cada impedimento.</p><Reveal title="Revelar estrutura"><CodeBlock code={`if (altura >= 1.40f) {\n    if (possuiIngresso == 1) {\n        printf("Entrada liberada.\\n");\n    } else {\n        printf("Apresente o ingresso.\\n");\n    }\n} else {\n    printf("Altura insuficiente.\\n");\n}`} filename="brinquedo-trecho.c" /></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[7]} number="08">
        <p>O <code>switch</code> é indicado quando uma única variável pode assumir valores exatos e cada valor corresponde a uma opção. Ele deixa menus numéricos mais organizados do que uma longa sequência de comparações de igualdade.</p>
        <CodeBlock code={switchMenu} filename="menu-com-switch.c" downloadUrl="/downloads/trilha-03/menu-com-switch.c" />
        <div className="case-grid"><div><code>case</code><p>Marca um valor possível.</p></div><div><code>break</code><p>Encerra o caso atual.</p></div><div><code>default</code><p>Trata valores não previstos.</p></div></div>
        <div className="warning-callout"><AlertTriangle /><div><strong>Não esqueça o break</strong><p>Sem ele, a execução continua nos casos seguintes. Esse comportamento existe na linguagem, mas costuma ser um erro em menus de iniciantes.</p></div></div>
        <Activity title="Menu de bebidas" level="pratica"><p>Crie as opções 1 — Água, 2 — Suco, 3 — Refrigerante. Mostre a bebida escolhida ou “Opção inválida”.</p><Reveal title="Revelar núcleo da solução"><CodeBlock code={`switch (opcao) {\n    case 1: printf("Agua\\n"); break;\n    case 2: printf("Suco\\n"); break;\n    case 3: printf("Refrigerante\\n"); break;\n    default: printf("Opcao invalida\\n");\n}`} filename="bebidas-trecho.c" /></Reveal></Activity>
        <Activity title="Escolha a estrutura correta" level="desafio"><p>Você usaria <code>switch</code> ou <code>if/else if</code> para classificar temperatura em faixas? Justifique.</p><Reveal title="Revelar resposta"><p><code>if/else if</code>, pois trabalhamos com intervalos como “maior que 30”. O <code>switch</code> compara valores exatos.</p></Reveal></Activity>
      </TrailSection>

      <TrailSection topic={track.topics[8]} number="09">
        <p>Uma entrada digitada pelo usuário pode estar fora do intervalo esperado. Validar significa conferir o dado antes de utilizá-lo. Nesta etapa ainda não repetiremos a pergunta; isso será aprendido na próxima trilha. Por enquanto, o programa detectará e explicará o problema.</p>
        <CodeBlock code={validatedGrade} filename="nota-validada.c" downloadUrl="/downloads/trilha-03/nota-validada.c" />
        <div className="validation-rules"><div><ShieldCheck /><strong>1. Valide primeiro</strong><p>Detecte valores impossíveis antes de classificar.</p></div><div><Signpost /><strong>2. Organize as faixas</strong><p>Teste da condição mais restritiva para a mais ampla.</p></div><div><ListChecks /><strong>3. Teste os limites</strong><p>Experimente valores abaixo, iguais e acima de cada fronteira.</p></div></div>
        <h3 className="lesson-subtitle">Mini projeto — Bilheteria inteligente</h3>
        <p>O programa recebe idade e situação de estudante, valida a idade e calcula o preço do ingresso. Observe que as prioridades estão claras: criança, pessoa idosa, estudante e, por último, preço inteiro.</p>
        <CodeBlock code={ticketProject} filename="bilheteria-inteligente.c" downloadUrl="/downloads/trilha-03/bilheteria-inteligente.c" />
        <div className="project-roadmap"><div><span>1</span><strong>Entrada</strong><p>Idade e situação de estudante.</p></div><div><span>2</span><strong>Decisão</strong><p>Validação e escolha da faixa correta.</p></div><div><span>3</span><strong>Saída</strong><p>Preço final formatado com duas casas.</p></div></div>
        <Activity title="Plano de testes da bilheteria" level="guiada"><div className="table-wrap"><table className="desk-table"><thead><tr><th>Idade</th><th>Estudante</th><th>Resultado esperado</th></tr></thead><tbody><tr><td>-2</td><td>N</td><td>idade inválida</td></tr><tr><td>10</td><td>N</td><td>R$ 15,00</td></tr><tr><td>20</td><td>S</td><td>R$ 18,00</td></tr><tr><td>35</td><td>N</td><td>R$ 30,00</td></tr><tr><td>65</td><td>S</td><td>R$ 12,00</td></tr></tbody></table></div></Activity>
        <Activity title="Desafio 1 — Classificador de IMC" level="desafio"><p>Valide peso e altura, calcule o IMC e classifique o resultado em faixas. Tente construir sozinho antes de revelar.</p><Reveal title="Revelar programa completo"><CodeBlock code={bmiChallenge} filename="desafio-imc.c" downloadUrl="/downloads/trilha-03/desafio-imc.c" /></Reveal></Activity>
        <Activity title="Desafio 2 — Calculadora de frete" level="desafio"><p>Frete grátis a partir de R$ 200. Abaixo disso, escolha o valor pela região usando <code>switch</code>. Este desafio reúne validação, <code>else if</code>, <code>switch</code> e decisões aninhadas.</p><Reveal title="Revelar programa completo"><CodeBlock code={shippingChallenge} filename="desafio-frete.c" downloadUrl="/downloads/trilha-03/desafio-frete.c" /></Reveal></Activity>
        <div className="final-checklist"><div><Target /><h3>Checklist de domínio da Trilha 03</h3></div><ul><li><CheckCircle2 /> Sei transformar regras em condições.</li><li><CheckCircle2 /> Diferencio <code>=</code> de <code>==</code>.</li><li><CheckCircle2 /> Uso <code>&amp;&amp;</code>, <code>||</code> e <code>!</code>.</li><li><CheckCircle2 /> Escolho entre <code>if</code>, <code>if/else</code>, <code>else if</code> e <code>switch</code>.</li><li><CheckCircle2 /> Testo limites e entradas inválidas.</li></ul></div>
      </TrailSection>
    </div>
  );
}
