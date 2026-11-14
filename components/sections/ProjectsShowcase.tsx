"use client";

import { motion } from "motion/react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { projectImages } from "@/config/images";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ProjectsShowcase() {
  return (
    <section id="projetos" className="relative border-b px-5 py-20 sm:px-8 sm:py-28" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHeader
          index="02"
          eyebrow="Projetos"
          title="Escala em execução"
          description="Uma amostra do tipo de obra que projetamos, fabricamos e montamos. Imagens ilustrativas — substituíveis por fotos reais de obra (ver config/images.ts)."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {projectImages.map((project, i) => (
            <motion.figure
              key={project.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className={`group relative overflow-hidden border ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : "lg:col-span-2"
              }`}
              style={{ borderColor: "var(--border)" }}
            >
              <div className={`relative ${i === 0 ? "aspect-[4/3] lg:aspect-square" : "aspect-[4/3]"}`}>
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
                <div>
                  <p className="font-display text-xl font-semibold uppercase tracking-tight text-[#f5f4f1] sm:text-2xl">
                    {project.caption}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#fc4c04] sm:text-xs">
                    {project.meta}
                  </p>
                </div>
              </figcaption>
              <span
                className="absolute right-0 top-0 h-10 w-10 origin-top-right scale-0 transition-transform duration-300 group-hover:scale-100"
                style={{ background: "var(--accent)", clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                aria-hidden
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
