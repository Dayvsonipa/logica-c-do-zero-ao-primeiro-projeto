import Link from "next/link";
import { Braces } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3 font-bold" aria-label="Página inicial">
          <span className="logo-mark" aria-hidden="true"><Braces /></span>
          <span className="truncate">Lógica <span className="text-accent-strong">&amp; C</span></span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold sm:flex" aria-label="Navegação principal">
          <Link href="/#como-estudar" className="nav-link">Como estudar</Link>
          <Link href="/#trilhas" className="nav-link">Trilhas</Link>
          <Link href="/trilhas/primeiro-projeto-crud" className="nav-link">Projeto final</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
