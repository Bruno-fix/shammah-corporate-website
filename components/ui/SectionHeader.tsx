interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "right";
}

/**
 * Cabeçalho de seção no estilo "prancha técnica": índice numérico,
 * legenda mono e título em display, com régua horizontal.
 */
export default function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isRight = align === "right";

  return (
    <div className={isRight ? "text-right" : "text-left"}>
      <div
        className={`flex items-center gap-4 font-mono text-xs uppercase tracking-[0.32em] text-[var(--fg-faint)] ${
          isRight ? "flex-row-reverse" : ""
        }`}
      >
        <span className="text-[var(--accent)]">{index}</span>
        <span className="h-px flex-1 bg-[var(--border)]" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-5 font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base text-[var(--fg-muted)] sm:text-lg ${
            isRight ? "ml-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
