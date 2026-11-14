"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AuthorityStrip() {
  return (
    <section className="relative border-b" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            className="group relative border-b border-r px-6 py-10 last:border-r-0 sm:px-8 sm:py-12 lg:py-16"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--fg-faint)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="mt-4 flex items-baseline gap-2 font-display leading-none">
              <span className="text-[clamp(2.75rem,6vw,4.5rem)] font-semibold tracking-tight">
                {stat.value}
              </span>
              <span
                className="font-mono text-sm uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                {stat.unit}
              </span>
            </div>
            <p className="mt-4 max-w-[28ch] text-sm text-[var(--fg-muted)]">{stat.label}</p>

            <span
              className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full"
              aria-hidden
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
