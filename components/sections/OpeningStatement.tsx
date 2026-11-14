"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { getWhatsappLink } from "@/lib/whatsapp";

const headlineLines = ["Projetamos.", "Fabricamos.", "Erguemos."];

const ease = [0.16, 1, 0.3, 1] as const;

export default function OpeningStatement() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col overflow-hidden border-b"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Malha técnica de fundo */}
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="bg-grain absolute inset-0" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 100%, var(--bg-elevated) 0%, transparent 60%)",
        }}
      />

      {/* Numeral monumental de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-4 select-none font-mono font-bold leading-none opacity-[0.05] sm:top-8"
        style={{ fontSize: "clamp(9rem, 30vw, 26rem)", color: "var(--fg)" }}
      >
        39
      </div>

      {/* Viga vertical */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.15 }}
        className="absolute right-[14%] top-0 hidden h-full w-[6px] origin-top sm:block"
        style={{ background: "var(--accent)" }}
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.25 }}
        className="absolute right-[14%] top-0 hidden h-full w-px origin-top translate-x-3 sm:block"
        style={{ background: "var(--border)" }}
      />

      {/* Corte diagonal — referência à logo */}
      <div
        className="absolute left-0 top-0 h-14 w-14 sm:h-20 sm:w-20"
        style={{ background: "var(--accent)", clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pb-8 pt-28 sm:px-8 sm:pt-32 lg:pt-40">
        {/* Linha superior: identificação do "memorial" */}
        <div className="flex flex-wrap items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--fg-muted)] sm:text-xs">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
          >
            Memorial descritivo — Shammah Estruturas Metálicas
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.6 }}
            className="hidden flex-col items-end gap-1 sm:flex"
          >
            <span>Desde 1987</span>
            <span>Abadia de Goiás — GO</span>
          </motion.div>
        </div>

        {/* Headline editorial */}
        <div className="mt-auto flex flex-col gap-10 pb-14 pt-20 sm:pt-28 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pb-20">
          <h1 className="font-display text-[clamp(3.4rem,12vw,9.5rem)] font-semibold uppercase leading-[0.9] tracking-tight">
            {headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.35 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
            className="flex max-w-sm flex-col gap-6 lg:items-end lg:text-right"
          >
            <p className="text-base text-[var(--fg-muted)] sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
              >
                Solicitar orçamento
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 border px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{ borderColor: "var(--border)" }}
              >
                Ver projetos
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tarja inferior — título de prancha */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 1.1 }}
        className="relative z-10 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--fg-faint)] sm:px-8 sm:text-xs">
          <span>Projeto / Fabricação / Montagem</span>
          <span className="text-[var(--accent)]">39 anos &#183; 1,3M m² construídos</span>
        </div>
      </motion.div>
    </section>
  );
}
