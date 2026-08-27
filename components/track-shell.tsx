"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Braces, Home } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import type { Track } from "@/lib/course";

type TrackShellProps = {
  track: Track;
  previous?: Track;
  next?: Track;
  children: React.ReactNode;
};

export function TrackShell({ track, previous, next, children }: TrackShellProps) {
  const [activeId, setActiveId] = useState(track.topics[0]?.id ?? "");

  useEffect(() => {
    const hashId = window.location.hash.slice(1);
    const initialFrame = window.requestAnimationFrame(() => {
      if (hashId && track.topics.some((topic) => topic.id === hashId)) setActiveId(hashId);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        setActiveId(visible.target.id);
        window.history.replaceState(null, "", `#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -58% 0px", threshold: 0 },
    );

    track.topics.forEach((topic) => {
      const element = document.getElementById(topic.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.cancelAnimationFrame(initialFrame);
      observer.disconnect();
    };
  }, [track]);

  return (
    <SidebarProvider style={{ "--sidebar-width": "18rem" } as React.CSSProperties}>
      <Sidebar collapsible="offcanvas" className="border-r border-sidebar-border">
        <SidebarHeader className="border-b border-sidebar-border p-4">
          <Link href="/" className="flex items-center gap-3 font-bold">
            <span className="logo-mark"><Braces /></span>
            <span>Lógica <span className="text-accent-strong">&amp; C</span></span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="mb-2 text-xs font-black tracking-widest text-sidebar-foreground/60">
              TRILHA {track.number}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {track.topics.map((topic, index) => (
                  <SidebarMenuItem key={topic.id}>
                    <SidebarMenuButton asChild isActive={activeId === topic.id} className="h-auto min-h-10 py-2">
                      <a href={`#${topic.id}`} onClick={() => setActiveId(topic.id)}>
                        <span className="topic-index">{String(index + 1).padStart(2, "0")}</span>
                        <span>{topic.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t border-sidebar-border p-3">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/#trilhas"><Home /> Todas as trilhas</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-w-0 bg-background">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-border bg-background/92 px-4 backdrop-blur-xl sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <SidebarTrigger className="size-9" />
            <div className="min-w-0">
              <p className="text-[10px] font-black tracking-[.16em] text-accent-strong">TRILHA {track.number}</p>
              <p className="truncate text-sm font-bold">{track.title}</p>
            </div>
          </div>
          <ThemeToggle />
        </header>

        <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
          {children}

          <nav className="mt-14 grid gap-3 border-t border-border pt-7 sm:grid-cols-2" aria-label="Navegação entre trilhas">
            {previous ? (
              <Link className="track-nav" href={`/trilhas/${previous.slug}`}>
                <ArrowLeft />
                <span><small>Trilha anterior</small><strong>{previous.number} · {previous.title}</strong></span>
              </Link>
            ) : <span />}
            {next && (
              <Link className="track-nav justify-end text-right" href={`/trilhas/${next.slug}`}>
                <span><small>Próxima trilha</small><strong>{next.number} · {next.title}</strong></span>
                <ArrowRight />
              </Link>
            )}
          </nav>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
