"use client";

import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CodeBlock({ code, filename, downloadUrl }: { code: string; filename: string; downloadUrl?: string }) {
  const [copied, setCopied] = useState(false);
  const resolvedDownloadUrl = downloadUrl ?? `data:text/plain;charset=utf-8,${encodeURIComponent(code)}`;

  async function copyCode() {
    let copied = false;

    try {
      if (window.isSecureContext && navigator.clipboard) {
        await navigator.clipboard.writeText(code);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      const textArea = document.createElement("textarea");
      textArea.value = code;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      copied = document.execCommand("copy");
      textArea.remove();
    }

    if (!copied) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="code-block">
      <div className="code-block-toolbar">
        <span className="font-mono text-xs font-bold">{filename}</span>
        <div className="flex flex-wrap gap-2">
          <Button type="button" size="sm" variant="ghost" onClick={copyCode}>
            {copied ? <Check /> : <Copy />}
            {copied ? "Copiado" : "Copiar"}
          </Button>
          <Button size="sm" variant="ghost" asChild>
            <a href={resolvedDownloadUrl} download={filename}>
              <Download /> Baixar .c
            </a>
          </Button>
        </div>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7 sm:p-6 sm:text-base"><code>{code}</code></pre>
    </div>
  );
}
