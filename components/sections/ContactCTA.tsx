"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site";
import { getWhatsappLink } from "@/lib/whatsapp";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ContactCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-b px-5 py-24 sm:px-8 sm:py-32"
      style={{ borderColor: "var(--border)", background: "var(--fg)", color: "var(--bg)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-10 select-none font-mono font-bold leading-none opacity-[0.06]"
        style={{ fontSize: "clamp(8rem, 26vw, 22rem)" }}
      >
        06
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.32em] opacity-60">
          <span style={{ color: "var(--accent)" }}>06</span>
          <span className="h-px flex-1" style={{ background: "currentColor", opacity: 0.25 }} />
          <span>Contato</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,8vw,6rem)] font-semibold uppercase leading-[0.98] tracking-tight"
        >
          Seu próximo galpão começa numa prancheta — e numa conversa.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex flex-wrap gap-3">
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
            >
              Conversar no WhatsApp
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 border px-7 py-4 font-mono text-xs uppercase tracking-[0.22em] transition-colors duration-200"
              style={{ borderColor: "currentColor" }}
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>

          <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-70 sm:text-right">
            <p>{siteConfig.contact.address.line1}</p>
            <p>{siteConfig.contact.address.line2}</p>
            <p>{siteConfig.contact.address.cep}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
