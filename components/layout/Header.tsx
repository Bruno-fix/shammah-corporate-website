"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 pr-28 sm:pr-40 lg:pr-48">
      <div
        className="border-b backdrop-blur-md transition-colors duration-500"
        style={{
          background: "color-mix(in srgb, var(--bg) 72%, transparent)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3 sm:px-8">
          <a href="#topo" className="shrink-0 rounded-sm bg-[#f5f4f1] px-3 py-2 shadow-sm">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={170}
              height={45}
              priority
              className="h-6 w-auto sm:h-7"
            />
          </a>

          <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.22em] text-[var(--fg-muted)] lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-200 hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.22em] transition-colors duration-200 hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Solicitar orçamento
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className="h-px w-6 bg-current transition-transform duration-300"
              style={{ transform: open ? "translateY(3.5px) rotate(45deg)" : "none" }}
            />
            <span
              className="h-px w-6 bg-current transition-transform duration-300"
              style={{ transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>

        {open ? (
          <nav
            className="flex flex-col border-t px-5 py-4 font-mono text-sm uppercase tracking-[0.22em] text-[var(--fg-muted)] lg:hidden"
            style={{ borderColor: "var(--border)" }}
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b py-3 transition-colors duration-200 last:border-none hover:text-[var(--accent)]"
                style={{ borderColor: "var(--border)" }}
              >
                {item.label}
              </a>
            ))}
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 border px-5 py-3 text-xs"
              style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
            >
              Solicitar orçamento
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
