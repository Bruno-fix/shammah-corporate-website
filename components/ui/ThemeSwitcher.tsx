"use client";

import { useEffect, useState } from "react";

/**
 * Seletor TEMPORÁRIO de variação de cor (Claro / Escuro / Cinza).
 *
 * Objetivo: apoiar a decisão interna sobre a paleta antes da entrega final.
 *
 * COMO REMOVER DEPOIS DA DECISÃO:
 * 1. Apague este arquivo.
 * 2. Remova a importação e o uso de `<ThemeSwitcher />` em `app/layout.tsx`.
 * 3. Defina o tema escolhido fixo em `app/layout.tsx`, trocando
 *    `data-theme="dark"` (ou "light"/"gray") e removendo o script
 *    `themeInitScript` (que só existe para evitar flash de tema).
 * 4. Os tokens de cor continuam centralizados em `app/globals.css`
 *    (`:root`, `[data-theme="light"]`, `[data-theme="gray"]`) — mantenha
 *    apenas o bloco do tema escolhido, se desejar simplificar.
 */

type Theme = "dark" | "light" | "gray";

const OPTIONS: { value: Theme; label: string }[] = [
  { value: "light", label: "Claro" },
  { value: "dark", label: "Escuro" },
  { value: "gray", label: "Cinza" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("shammah-theme") as Theme | null;
    if (stored === "light" || stored === "dark" || stored === "gray") {
      setTheme(stored);
    }
    setMounted(true);
  }, []);

  function applyTheme(value: Theme) {
    setTheme(value);
    document.documentElement.setAttribute("data-theme", value);
    window.localStorage.setItem("shammah-theme", value);
  }

  return (
    <div
      className="fixed right-4 top-4 z-50 flex items-center gap-0.5 rounded-full border p-1 font-mono text-[10px] uppercase tracking-[0.18em] shadow-lg backdrop-blur transition-opacity duration-500 sm:right-6 sm:top-6 sm:text-xs"
      style={{
        background: "color-mix(in srgb, var(--bg-elevated) 75%, transparent)",
        borderColor: "var(--border)",
        opacity: mounted ? 1 : 0,
      }}
      role="group"
      aria-label="Variação de cor (temporário)"
    >
      {OPTIONS.map((opt) => {
        const active = theme === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => applyTheme(opt.value)}
            aria-pressed={active}
            className="relative rounded-full px-2.5 py-1.5 transition-colors duration-300 sm:px-3"
            style={{
              color: active ? "var(--accent-fg)" : "var(--fg-muted)",
              background: active ? "var(--accent)" : "transparent",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
