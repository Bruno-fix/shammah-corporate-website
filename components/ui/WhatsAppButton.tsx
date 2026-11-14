"use client";

import { motion } from "motion/react";
import { getWhatsappLink } from "@/lib/whatsapp";

/**
 * Botão flutuante de WhatsApp — fixo no canto inferior direito.
 *
 * O número/mensagem vêm de `config/site.ts` (ver `whatsapp.number`).
 * Troque o número assim que o WhatsApp comercial definitivo estiver disponível.
 */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span
        className="pointer-events-none hidden translate-x-2 items-center rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:flex"
        style={{
          background: "var(--bg-elevated)",
          borderColor: "var(--border)",
          color: "var(--fg)",
        }}
      >
        Falar no WhatsApp
      </span>

      <span
        className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_30px_rgba(252,76,4,0.35)] transition-shadow duration-300 group-hover:shadow-[0_8px_40px_rgba(252,76,4,0.55)]"
        style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-30" />
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="relative h-7 w-7 fill-current"
        >
          <path d="M16.04 2.667c-7.36 0-13.333 5.973-13.333 13.333 0 2.351.616 4.646 1.787 6.666l-1.894 6.927a1 1 0 0 0 1.225 1.225l6.97-1.882a13.27 13.27 0 0 0 5.245 1.064h.006c7.36 0 13.333-5.973 13.333-13.333S23.4 2.667 16.04 2.667Zm0 24.297h-.005a11.04 11.04 0 0 1-5.62-1.54l-.403-.24-4.137 1.117 1.135-4.153-.262-.426a11.02 11.02 0 0 1-1.7-5.871c0-6.103 4.965-11.067 11.07-11.067 2.957 0 5.736 1.153 7.827 3.246a10.99 10.99 0 0 1 3.24 7.83c0 6.104-4.965 11.067-11.07 11.067l-.075-.013Zm6.07-8.287c-.332-.166-1.965-.97-2.27-1.08-.305-.111-.527-.166-.748.167-.222.333-.857 1.08-1.05 1.302-.194.222-.388.25-.72.083-.332-.167-1.402-.517-2.67-1.65-.987-.881-1.654-1.97-1.847-2.302-.194-.333-.02-.513.146-.679.15-.15.332-.39.498-.585.166-.194.222-.333.332-.555.111-.222.056-.417-.027-.583-.083-.167-.748-1.804-1.025-2.47-.27-.65-.544-.562-.748-.572l-.637-.011a1.224 1.224 0 0 0-.886.416c-.305.333-1.163 1.137-1.163 2.773s1.19 3.218 1.357 3.44c.166.222 2.34 3.572 5.668 5.008.792.342 1.41.546 1.892.699.795.253 1.518.217 2.09.132.638-.095 1.965-.804 2.243-1.581.277-.777.277-1.443.194-1.581-.083-.139-.305-.222-.637-.389Z" />
        </svg>
      </span>
    </motion.a>
  );
}
