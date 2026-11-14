"use client";

import { motion } from "motion/react";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  return (
    <section id="servicos" className="relative border-b px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          index="01"
          eyebrow="Serviços"
          title="Soluções completas, da prancheta ao aço de pé"
          description="Projeto, fabricação e montagem operam sob a mesma estrutura — sem repasses entre fornecedores, sem perda de informação entre etapas."
        />

        <div className="mt-14 sm:mt-20">
          {siteConfig.services.map((service, i) => (
            <motion.div
              key={service.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="group grid grid-cols-1 items-start gap-4 border-t py-8 transition-colors duration-300 sm:grid-cols-12 sm:gap-8 sm:py-10"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="sm:col-span-3">
                <span
                  className="font-display text-6xl font-semibold leading-none tracking-tight transition-colors duration-300 sm:text-7xl lg:text-8xl"
                  style={{
                    WebkitTextStroke: "1.5px var(--fg-faint)",
                    color: "transparent",
                  }}
                >
                  {service.code}
                </span>
              </div>
              <div className="sm:col-span-4">
                <h3 className="font-display text-2xl font-semibold uppercase tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-3xl">
                  {service.title}
                </h3>
              </div>
              <div className="sm:col-span-5">
                <p className="text-sm text-[var(--fg-muted)] sm:text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
