import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Braces,
  CheckCircle2,
  Clock3,
  Code2,
  Download,
  FileCode2,
  FolderOpen,
  Laptop,
  MousePointerClick,
  Route,
  TerminalSquare,
  Trophy,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { tracks } from "@/lib/course";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="hero-grid border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.12fr_.88fr] md:px-8 md:py-16 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="eyebrow">
              <TerminalSquare aria-hidden="true" />
              Sua primeira linha. Seu primeiro projeto.
            </div>
            <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Aprenda lógica construindo de verdade com{" "}
              <span className="text-accent-strong">linguagem C.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Uma trilha clara e prática para sair do zero, entender como um
              programa pensa e chegar ao seu primeiro CRUD com arquivo de texto.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary" href="/trilhas/preparando-o-ambiente">
                Começar pela Trilha 00
                <ArrowRight aria-hidden="true" />
              </Link>
              <a className="button-secondary" href="#trilhas">
                Ver todas as trilhas
                <Route aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat icon={<Route />} value="11" label="trilhas livres" />
              <Stat icon={<Clock3 />} value="50–60" label="min por aula" />
              <Stat icon={<FileCode2 />} value=".c" label="para baixar" />
              <Stat icon={<CheckCircle2 />} value="1" label="CRUD final" />
            </div>
          </div>

          <div className="terminal-card self-center" aria-label="Exemplo de código em C">
            <div className="terminal-bar">
              <div className="flex gap-2" aria-hidden="true">
                <span className="terminal-dot bg-red-400" />
                <span className="terminal-dot bg-amber-400" />
                <span className="terminal-dot bg-slate-400" />
              </div>
              <span>ola-mundo.c</span>
              <span className="font-mono text-amber-400">C</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[15px] leading-7 sm:p-7 sm:text-base">
              <code>
                <span className="code-pink">#include</span>{" "}
                <span className="code-amber">&lt;stdio.h&gt;</span>{"\n\n"}
                <span className="code-blue">int</span>{" "}
                <span className="text-white">main</span>
                <span className="text-slate-300">(</span>
                <span className="code-blue">void</span>
                <span className="text-slate-300">) {`{`}</span>{"\n"}
                {"  "}<span className="text-white">printf</span>
                <span className="text-slate-300">(</span>
                <span className="code-amber">&quot;Ola, mundo!\\n&quot;</span>
                <span className="text-slate-300">);</span>{"\n"}
                {"  "}<span className="code-pink">return</span>{" "}
                <span className="code-blue">0</span>
                <span className="text-slate-300">;</span>{"\n"}
                <span className="text-slate-300">{`}`}</span>
              </code>
            </pre>
            <div className="terminal-result">
              <span className="text-amber-400">$</span> Ola, mundo!
            </div>
          </div>
        </div>
      </section>

      <section id="como-estudar" className="border-b border-border bg-surface-subtle scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <p className="section-kicker">Seu jeito de estudar</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Entenda, pratique e só depois confira
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Cada aula combina explicação passo a passo, exemplos executáveis,
              atividades guiadas e desafios. Você pode seguir a ordem recomendada
              ou consultar qualquer trilha quando precisar.
            </p>
          </div>

          <div className="study-steps mt-9">
            <StudyStep number="01" icon={<BookOpenCheck />} title="Leia com calma">
              Observe a lógica antes da sintaxe. Os exemplos mostram o que o
              programa recebe, processa e devolve.
            </StudyStep>
            <StudyStep number="02" icon={<Laptop />} title="Execute no Dev-C++">
              Crie ou abra o arquivo com extensão <code>.c</code>. O aplicativo se
              chama Dev-C++, mas o curso usa somente linguagem C.
            </StudyStep>
            <StudyStep number="03" icon={<MousePointerClick />} title="Tente primeiro">
              Faça a atividade sem olhar a resposta. Se travar, volte ao exemplo,
              teste uma parte menor e então use o botão de revelar.
            </StudyStep>
            <StudyStep number="04" icon={<FolderOpen />} title="Baixe e organize">
              Todos os códigos usados no curso estão disponíveis para download,
              por aula e também em pacotes completos por trilha.
            </StudyStep>
          </div>

          <div className="devc-note mt-7">
            <TerminalSquare aria-hidden="true" />
            <div>
              <strong>Regra de ouro no Dev-C++</strong>
              <p>
                Salve sempre como <code>nome-do-programa.c</code>. A extensão
                <code>.cpp</code> pertence ao C++ e não será utilizada neste curso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="trilhas" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 md:px-8 md:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-kicker">Rota recomendada · acesso livre</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Do primeiro algoritmo ao CRUD
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-right">
            Siga a ordem para uma evolução tranquila ou abra diretamente a
            trilha de que precisa.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <Link key={track.slug} href={`/trilhas/${track.slug}`} className="track-card group">
              <div className="flex items-start justify-between gap-4">
                <div className="track-number">{track.number}</div>
                <span className="track-icon" aria-hidden="true">
                  <Braces />
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{track.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                {track.summary}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm font-semibold">
                <span>{track.topics.length} tópicos</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-subtle">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-3 md:px-8">
          <Feature icon={<Code2 />} title="Código explicado">
            Exemplos curtos, comentários úteis e resultado esperado no terminal.
          </Feature>
          <Feature icon={<Download />} title="Tudo para download">
            Cada código apresentado possui seu arquivo .c correspondente.
          </Feature>
          <Feature icon={<CheckCircle2 />} title="Tente antes de revelar">
            Desafios com soluções escondidas para você praticar de verdade.
          </Feature>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <p className="section-kicker">Projeto evolutivo</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Cada conceito prepara o próximo
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Você não aprende comandos soltos. O curso transforma pequenas
              soluções em um sistema completo de cadastro, consulta, alteração e
              exclusão com dados salvos em arquivo de texto.
            </p>
            <Link className="button-secondary mt-6" href="/trilhas/primeiro-projeto-crud">
              Conhecer o projeto final
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <ol className="journey-list">
            <JourneyItem number="1" title="Pensar como um programa">
              Algoritmos, entrada, processamento e saída.
            </JourneyItem>
            <JourneyItem number="2" title="Tomar decisões e repetir">
              Condições, operadores, menus e estruturas de repetição.
            </JourneyItem>
            <JourneyItem number="3" title="Organizar informações">
              Funções, vetores, strings e registros com <code>struct</code>.
            </JourneyItem>
            <JourneyItem number="4" title="Persistir os dados">
              Leitura e escrita segura em arquivos de texto.
            </JourneyItem>
            <JourneyItem number="5" title="Entregar a Agenda LevelUp">
              Um CRUD completo, testado e depois evoluído para uma versão modular.
            </JourneyItem>
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-surface-subtle">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="home-package">
          <div className="flex min-w-0 gap-4">
            <span className="package-icon" aria-hidden="true"><Trophy /></span>
            <div>
            <p className="section-kicker">Curso completo · 11 trilhas</p>
            <h2>Guarde o portal inteiro com você</h2>
            <p>O pacote final reúne as páginas, todos os materiais e os códigos em C do primeiro programa ao CRUD persistente.</p>
            </div>
          </div>
          <a className="button-primary" href="/downloads/PORTAL-LOGICA-C-COMPLETO.zip" download>
            <Download /> Baixar portal completo
          </a>
        </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8">
        <span>Lógica e C · Do Zero ao Primeiro Projeto</span>
        <span>Aprenda. Pratique. Construa.</span>
      </footer>
    </main>
  );
}

function StudyStep({ number, icon, title, children }: { number: string; icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <article className="study-card">
      <div className="flex items-center justify-between gap-3">
        <span className="study-icon" aria-hidden="true">{icon}</span>
        <small>{number}</small>
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function JourneyItem({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <li>
      <span>{number}</span>
      <div>
        <strong>{title}</strong>
        <p>{children}</p>
      </div>
    </li>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="stat-card">
      <span aria-hidden="true">{icon}</span>
      <strong>{value}</strong>
      <small>{label}</small>
    </div>
  );
}

function Feature({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <article className="flex gap-4">
      <span className="feature-icon" aria-hidden="true">{icon}</span>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{children}</p>
      </div>
    </article>
  );
}
