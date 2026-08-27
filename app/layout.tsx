import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lógica e C — Do Zero ao Primeiro Projeto",
    template: "%s | Lógica e C",
  },
  description:
    "Aprenda lógica de programação e linguagem C do zero até seu primeiro CRUD com arquivo de texto.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem('logica-c-theme');
    document.documentElement.dataset.theme = savedTheme === 'dark' ? 'dark' : 'light';
  } catch (_) {
    document.documentElement.dataset.theme = 'light';
  }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
