import type { ReactNode } from "react";
import { ListChecks, Play, Target } from "lucide-react";

import type { Track } from "@/lib/course";

export function TrailSection({ topic, number, children }: { topic: Track["topics"][number]; number: string; children: ReactNode }) {
  return (
    <section id={topic.id} className="lesson-section scroll-mt-24">
      <p className="section-kicker">Aula {number} · {topic.title}</p>
      <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{topic.title}</h2>
      <div className="lesson-copy mt-5 space-y-5">{children}</div>
    </section>
  );
}

export function ConceptCard({ label, title, tone, children }: { label: string; title: string; tone: string; children: ReactNode }) {
  return <article className={`concept-card concept-${tone}`}><small>{label}</small><strong>{title}</strong><p>{children}</p></article>;
}

export function Activity({ title, level, children }: { title: string; level: "guiada" | "pratica" | "desafio"; children: ReactNode }) {
  const icons = { guiada: <ListChecks />, pratica: <Play />, desafio: <Target /> };
  const labels = { guiada: "FAÇA COMIGO", pratica: "PRATIQUE", desafio: "DESAFIO" };
  return (
    <div className={`activity-box activity-${level}`}>
      <div className="activity-heading"><span>{icons[level]}</span><div><small>{labels[level]}</small><h3>{title}</h3></div></div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function Reveal({ title, children }: { title: string; children: ReactNode }) {
  return <details className="reveal-box"><summary>{title}</summary><div className="reveal-content">{children}</div></details>;
}
