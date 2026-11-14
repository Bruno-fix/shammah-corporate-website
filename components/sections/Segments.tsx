"use client";

import { motion } from "motion/react";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Segments() {
  return (
    <section id="segmentos" className="relative border-b px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          index="03"
          eyebrow="Segmentos atendidos"
          title="Estruturas para operações de qualquer porte"
          align="right"
        />

        <div className="mt-14 grid grid-cols-2 border-l border-t sm:mt-20 sm:grid-cols-4" style={{ borderColor: "var(--border)" }}>
          {siteConfig.segments.map((segment, i) => (
            <motion.div
              key={segment.code}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: (i % 4) * 0.06 }}
              className="group relative flex aspect-square flex-col justify-between border-b border-r p-4 transition-colors duration-300 hover:bg-[var(--surface)] sm:p-6"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="font-mono text-xs uppercase tracking-[0.3em] transition-colors duration-300 group-hover:text-[var(--accent)]"
                style={{ color: "var(--fg-faint)" }}
              >
                {segment.code}
              </span>
              <span className="font-display text-lg font-semibold uppercase leading-[1.05] tracking-tight sm:text-xl lg:text-2xl">
                {segment.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
