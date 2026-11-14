import { siteConfig } from "@/config/site";

/**
 * Monta o link do WhatsApp a partir do número e mensagem configurados em
 * `config/site.ts`. Use `getWhatsappLink()` para o link padrão ou passe
 * uma mensagem customizada.
 */
export function getWhatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}
