import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swing Trader Club — Aprende a Operar Acciones con Sistema",
  description:
    "Educación financiera, análisis técnico y metodología de swing trading para aprender a operar acciones con método, riesgo controlado y disciplina.",
  keywords:
    "swing trading Chile, clases de trading, análisis técnico, gestión de riesgo, IBKR, acciones USA, educación financiera trading",
  openGraph: {
    title: "Swing Trader Club",
    description: "Aprende a invertir con método, riesgo controlado y mentalidad de trader.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
