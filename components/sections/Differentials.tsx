"use client";

import { motion } from "motion/react";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Differentials() {
  return (
    <section className="relative border-b px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          index="04"
          eyebrow="Diferenciais"
          title="Por que a Shammah"
          description="Quase quatro décadas de decisões técnicas acumuladas — refletidas em prazo, qualidade e previsibilidade."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-12 sm:mt-20 lg:grid-cols-2">
          {siteConfig.differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: (i % 4) * 0.07 }}
              className="flex items-start gap-5 border-t py-6"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="font-mono text-sm tabular-nums"
                style={{ color: "var(--accent)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold uppercase tracking-tight sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--fg-muted)]">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
