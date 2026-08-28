import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur-xl">
      <div className="site-header-inner mx-auto max-w-7xl px-5 md:px-8">
        <Link href="/" className="site-brand" aria-label="Página inicial do Professor Dayvson">
          <span className="brand-mark" aria-hidden="true">D</span>
          <span className="brand-copy">
            <strong className="brand-title">Professor Dayvson</strong>
            <small className="brand-subtitle">Central de Aulas</small>
          </span>
        </Link>
        <nav className="main-navigation" aria-label="Navegação principal">
          <Link href="/#como-estudar" className="nav-link">Como estudar</Link>
          <Link href="/#trilhas" className="nav-link">Trilhas</Link>
          <Link href="/trilhas/primeiro-projeto-crud" className="nav-link">Projeto final</Link>
        </nav>
        <div className="header-controls"><ThemeToggle /></div>
      </div>
    </header>
  );
}
