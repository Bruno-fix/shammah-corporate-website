import { siteConfig } from "@/config/site";

export default function Clients() {
  const items = [...siteConfig.clients, ...siteConfig.clients];

  return (
    <section className="relative border-b py-10 sm:py-14" style={{ borderColor: "var(--border)" }}>
      <div className="mb-6 px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--fg-faint)]">
          05 — Operações já entregues para
        </span>
      </div>

      <div className="group overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 sm:gap-24">
          {items.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="flex shrink-0 items-center gap-16 font-display text-3xl font-semibold uppercase tracking-tight text-[var(--fg-muted)] sm:gap-24 sm:text-4xl lg:text-5xl"
            >
              {client}
              <span aria-hidden style={{ color: "var(--accent)" }}>
                +
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
