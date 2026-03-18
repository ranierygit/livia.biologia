import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lívia Oliveira — Professora de Biologia em Garanhuns/PE",
  description:
    "Professora de Biologia licenciada oferece reforço escolar de Ciências, Biologia e Química para Ensino Fundamental e Médio, além de substituição em escolas de Garanhuns/PE.",
  keywords:
    "professora biologia Garanhuns, reforço escolar ciências PE, aulas biologia ensino médio, professora substituta Garanhuns",
  openGraph: {
    title: "Lívia Oliveira — Professora de Biologia",
    description:
      "Aulas de reforço e substituição em Garanhuns/PE. Metodologias ativas, material próprio e preparação para ENEM e SSA.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3D7A4F" />
      </head>
      <body className="antialiased bg-bg text-text selection:bg-primary/20">
        {children}
      </body>
    </html>
  );
}
