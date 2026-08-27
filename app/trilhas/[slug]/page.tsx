import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckCircle2, Download, Lightbulb, TerminalSquare } from "lucide-react";

import { CodeBlock } from "@/components/code-block";
import { TrackShell } from "@/components/track-shell";
import { TrackOne } from "@/components/tracks/track-one";
import { TrackFour } from "@/components/tracks/track-four";
import { TrackFive } from "@/components/tracks/track-five";
import { TrackSix } from "@/components/tracks/track-six";
import { TrackSeven } from "@/components/tracks/track-seven";
import { TrackEight } from "@/components/tracks/track-eight";
import { TrackNine } from "@/components/tracks/track-nine";
import { TrackTen } from "@/components/tracks/track-ten";
import { TrackThree } from "@/components/tracks/track-three";
import { TrackTwo } from "@/components/tracks/track-two";
import { findTrack, tracks, type Track } from "@/lib/course";

type PageProps = { params: Promise<{ slug: string }> };

const helloWorld = `#include <stdio.h>

int main(void) {
    printf("Ola, mundo!\\n");
    return 0;
}`;

export function generateStaticParams() {
  return tracks.map((track) => ({ slug: track.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const track = findTrack((await params).slug);
  return track ? { title: `Trilha ${track.number} — ${track.title}`, description: track.summary } : {};
}

export default async function TrackPage({ params }: PageProps) {
  const track = findTrack((await params).slug);
  if (!track) notFound();

  const index = tracks.findIndex((item) => item.slug === track.slug);
  const previous = tracks[index - 1];
  const next = tracks[index + 1];

  return (
    <TrackShell track={track} previous={previous} next={next}>
      <div className="track-hero">
        <p className="section-kicker">Trilha {track.number} · acesso livre</p>
        <h1 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">{track.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{track.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold">
          <span className="meta-pill">{track.topics.length} tópicos</span>
          <span className="meta-pill">50–60 min por aula</span>
          <span className="meta-pill">Prática guiada</span>
        </div>
      </div>

      {track.number === "00" ? (
        <TrackZero track={track} />
      ) : track.number === "01" ? (
        <TrackOne track={track} />
      ) : track.number === "02" ? (
        <TrackTwo track={track} />
      ) : track.number === "03" ? (
        <TrackThree track={track} />
      ) : track.number === "04" ? (
        <TrackFour track={track} />
      ) : track.number === "05" ? (
        <TrackFive track={track} />
      ) : track.number === "06" ? (
        <TrackSix track={track} />
      ) : track.number === "07" ? (
        <TrackSeven track={track} />
      ) : track.number === "08" ? (
        <TrackEight track={track} />
      ) : track.number === "09" ? (
        <TrackNine track={track} />
      ) : track.number === "10" ? (
        <TrackTen track={track} />
      ) : (
        <TrackOverview track={track} />
      )}
    </TrackShell>
  );
}

function TrackZero({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      <LessonSection topic={track.topics[0]}>
        <p>Você não precisa saber programar para começar. Nesta trilha, vamos preparar o ambiente e provar que seu computador já pode entender instruções escritas em C.</p>
        <div className="learning-callout"><CheckCircle2 /><div><strong>Nosso destino</strong><p>Ao final, você terá criado, compilado e executado seu primeiro arquivo <code>.c</code>.</p></div></div>
      </LessonSection>

      <LessonSection topic={track.topics[1]}>
        <p>Programar é descrever uma solução em passos tão claros que o computador consiga executá-los. A lógica ajuda você a organizar esses passos antes de pensar na sintaxe.</p>
        <div className="logic-flow" aria-label="Fluxo de um programa">
          <span>Entrada</span><b>→</b><span>Processamento</span><b>→</b><span>Saída</span>
        </div>
      </LessonSection>

      <LessonSection topic={track.topics[2]}>
        <p>C é uma linguagem direta, rápida e excelente para compreender o que acontece por trás de muitos programas. Aqui, cada conceito será praticado em códigos pequenos antes de chegar ao projeto final.</p>
        <div className="learning-callout"><Lightbulb /><div><strong>Pense assim</strong><p>A linguagem é o vocabulário; a lógica é a maneira de organizar as ideias.</p></div></div>
      </LessonSection>

      <LessonSection topic={track.topics[3]}>
        <p>O aplicativo Dev-C++ também cria projetos em C++, mas neste curso todos os nossos arquivos terão extensão <code>.c</code> e serão compilados como linguagem C.</p>
        <div className="compare-grid"><div><small>NO CURSO</small><strong>programa.c</strong><span>Linguagem C</span></div><div><small>FORA DO ESCOPO</small><strong>programa.cpp</strong><span>Outra linguagem</span></div></div>
      </LessonSection>

      <LessonSection topic={track.topics[4]}>
        <ol className="step-list">
          <li><span>1</span><div><strong>Abra o Dev-C++</strong><p>Escolha a criação de um novo arquivo de código-fonte.</p></div></li>
          <li><span>2</span><div><strong>Salve antes de compilar</strong><p>Use um nome simples e confirme a extensão <code>.c</code>.</p></div></li>
          <li><span>3</span><div><strong>Compile e execute</strong><p>Se não houver erros, o terminal mostrará o resultado.</p></div></li>
        </ol>
      </LessonSection>

      <LessonSection topic={track.topics[5]}>
        <p>Digite o código abaixo. Depois, use o botão para baixar exatamente o mesmo arquivo e comparar com o seu.</p>
        <CodeBlock code={helloWorld} filename="ola-mundo.c" downloadUrl="/downloads/trilha-00/ola-mundo.c" />
        <div className="terminal-output"><span><TerminalSquare /> RESULTADO ESPERADO</span><code>Ola, mundo!</code></div>
        <div className="line-explanation">
          <p><code>#include &lt;stdio.h&gt;</code><span>Disponibiliza funções de entrada e saída, incluindo <code>printf</code>.</span></p>
          <p><code>int main(void)</code><span>Define o ponto em que o programa começa.</span></p>
          <p><code>printf(...)</code><span>Exibe uma mensagem na tela.</span></p>
          <p><code>return 0;</code><span>Informa que o programa terminou corretamente.</span></p>
        </div>
      </LessonSection>

      <LessonSection topic={track.topics[6]}>
        <div className="warning-callout"><AlertTriangle /><div><strong>O compilador aponta pistas</strong><p>Confira primeiro o ponto e vírgula, as aspas, os parênteses e as chaves. Um erro em uma linha pode ser causado pela linha anterior.</p></div></div>
      </LessonSection>

      <LessonSection topic={track.topics[7]}>
        <p>Altere o programa para mostrar seu nome e uma frase dizendo por que você quer aprender programação. Tente compilar antes de abrir a resposta.</p>
        <details className="reveal-box">
          <summary>Tente antes de revelar</summary>
          <div>
            <pre><code>{`#include <stdio.h>\n\nint main(void) {\n    printf("Meu nome e Dayvson.\\n");\n    printf("Quero aprender a programar!\\n");\n    return 0;\n}`}</code></pre>
            <a className="reveal-download" href="/downloads/trilha-00/desafio-apresentacao.c" download><Download /> Baixar desafio-apresentacao.c</a>
          </div>
        </details>
        <a className="button-secondary mt-5" href="/downloads/trilha-00/ola-mundo.c" download><Download /> Baixar código da trilha</a>
      </LessonSection>
    </div>
  );
}

function TrackOverview({ track }: { track: Track }) {
  return (
    <div className="mt-10 space-y-5">
      {track.topics.map((topic, index) => (
        <LessonSection key={topic.id} topic={topic}>
          <p>{topic.description}</p>
          <div className="learning-callout"><Lightbulb /><div><strong>Passo {index + 1} da trilha</strong><p>Este conteúdo será desenvolvido com explicação, exemplo prático, atividade e arquivos para download.</p></div></div>
        </LessonSection>
      ))}
    </div>
  );
}

function LessonSection({ topic, children }: { topic: Track["topics"][number]; children: React.ReactNode }) {
  return (
    <section id={topic.id} className="lesson-section scroll-mt-24">
      <p className="section-kicker">{topic.title}</p>
      <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{topic.title}</h2>
      <div className="lesson-copy mt-5 space-y-4">{children}</div>
    </section>
  );
}
