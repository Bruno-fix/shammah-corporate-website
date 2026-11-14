import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-big-shoulders",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: `${siteConfig.shortName} Estruturas Metálicas — Projeto, Fabricação e Montagem`,
  description: siteConfig.description,
};

// Evita flash de tema incorreto: lê a preferência salva antes da hidratação.
const themeInitScript = `
  (function () {
    try {
      var stored = localStorage.getItem("shammah-theme");
      var theme = stored === "light" || stored === "gray" ? stored : "dark";
      document.documentElement.setAttribute("data-theme", theme);
    } catch (e) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${bigShoulders.variable} ${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
        <WhatsAppButton />
        <ThemeSwitcher />
      </body>
    </html>
  );
}
