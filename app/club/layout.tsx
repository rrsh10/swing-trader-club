"use client";

import { useEffect } from "react";

// El club real (acciones americanas + Formación) vive en el portal de Canopia.
// Esta área /club era un mock antiguo con sesión local: ahora solo redirige.
export default function ClubLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => { window.location.replace("https://canopia.cl/portal"); }, []);

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center gap-4 text-center px-6">
      <div className="w-5 h-5 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
      <p className="text-zinc-400 text-sm">Llevándote al área de miembros…</p>
      <a href="https://canopia.cl/portal" className="text-amber-400 text-xs hover:text-amber-300 transition">
        Si no avanza, entra aquí →
      </a>
      <div className="hidden">{children}</div>
    </div>
  );
}
