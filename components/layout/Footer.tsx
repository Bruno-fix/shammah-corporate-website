import Image from "next/image";
import { siteConfig } from "@/config/site";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.25.06 2.1.25 2.85.55.77.3 1.42.7 2.07 1.35.65.65 1.05 1.3 1.35 2.07.3.75.49 1.6.55 2.85.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.06 1.25-.25 2.1-.55 2.85-.3.77-.7 1.42-1.35 2.07-.65.65-1.3 1.05-2.07 1.35-.75.3-1.6.49-2.85.55-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.25-.06-2.1-.25-2.85-.55-.77-.3-1.42-.7-2.07-1.35-.65-.65-1.05-1.3-1.35-2.07-.3-.75-.49-1.6-.55-2.85C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.06-1.25.25-2.1.55-2.85.3-.77.7-1.42 1.35-2.07.65-.65 1.3-1.05 2.07-1.35.75-.3 1.6-.49 2.85-.55C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-1.02.05-1.57.21-1.94.36-.49.19-.83.42-1.2.78-.36.37-.59.71-.78 1.2-.15.37-.31.92-.36 1.94C2.9 9.48 2.9 9.85 2.9 13s0 3.52.07 4.76c.05 1.02.21 1.57.36 1.94.19.49.42.83.78 1.2.37.36.71.59 1.2.78.37.15.92.31 1.94.36C8.48 21.9 8.85 21.9 12 21.9s3.52 0 4.76-.07c1.02-.05 1.57-.21 1.94-.36.49-.19.83-.42 1.2-.78.36-.37.59-.71.78-1.2.15-.37.31-.92.36-1.94.07-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.05-1.02-.21-1.57-.36-1.94a3.2 3.2 0 0 0-.78-1.2 3.2 3.2 0 0 0-1.2-.78c-.37-.15-.92-.31-1.94-.36C15.52 4 15.15 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.8-2.55a1.07 1.07 0 1 1 0 2.14 1.07 1.07 0 0 1 0-2.14Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M4.98 3.5C4.98 4.88 3.91 6 2.5 6S0 4.88 0 3.5 1.07 1 2.48 1s2.5 1.12 2.5 2.5ZM.24 8.25h4.5V23H.24V8.25ZM8.27 8.25h4.31v2.01h.06c.6-1.13 2.07-2.33 4.26-2.33 4.55 0 5.4 3 5.4 6.9V23h-4.5v-6.27c0-1.5-.03-3.42-2.08-3.42-2.08 0-2.4 1.63-2.4 3.31V23h-4.5V8.25Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative px-5 py-16 sm:px-8 sm:py-20" id="empresa">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="inline-block rounded-sm bg-[#f5f4f1] px-3 py-2">
              <Image src="/logo.png" alt={siteConfig.name} width={170} height={45} className="h-7 w-auto" />
            </div>
            <p className="mt-6 max-w-md text-sm text-[var(--fg-muted)]">{siteConfig.description}</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Shammah"
                className="flex h-10 w-10 items-center justify-center border transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{ borderColor: "var(--border)" }}
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Shammah"
                className="flex h-10 w-10 items-center justify-center border transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                style={{ borderColor: "var(--border)" }}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--fg-faint)]">Endereço</h3>
            <address className="mt-4 not-italic text-sm leading-relaxed text-[var(--fg-muted)]">
              {siteConfig.contact.address.line1}
              <br />
              {siteConfig.contact.address.line2}
              <br />
              {siteConfig.contact.address.cep}
            </address>
            <a
              href={siteConfig.contact.address.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:text-[var(--accent)]"
              style={{ color: "var(--accent)" }}
            >
              Ver no mapa →
            </a>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.32em] text-[var(--fg-faint)]">Contato</h3>
            <div className="mt-4 flex flex-col gap-2 text-sm text-[var(--fg-muted)]">
              <a href={siteConfig.contact.phoneHref} className="transition-colors duration-200 hover:text-[var(--accent)]">
                {siteConfig.contact.phoneDisplay}
              </a>
              <nav className="mt-4 flex flex-col gap-2 font-mono text-xs uppercase tracking-[0.2em]">
                {siteConfig.nav.map((item) => (
                  <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-[var(--accent)]">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div
          className="mt-14 flex flex-col gap-2 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--fg-faint)] sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--border)" }}
        >
          <span>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</span>
          <span>Projeto, fabricação e montagem de estruturas metálicas</span>
        </div>
      </div>
    </footer>
  );
}
