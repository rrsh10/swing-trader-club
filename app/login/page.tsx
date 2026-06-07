"use client";

import { useEffect } from "react";

// El área de miembros del Swing Trader Club vive en el portal de Canopia
// (acciones americanas + Formación). Esta ruta solo redirige allí; ya no usa
// la autenticación local antigua.
const PORTAL = "https://canopia.cl/portal";

export default function LoginRedirect() {
  useEffect(() => { window.location.replace(PORTAL); }, []);

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center gap-4 text-center px-6">
      <div className="w-5 h-5 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
      <p className="text-zinc-400 text-sm">
        Llevándote al área de miembros…
      </p>
      <a href={PORTAL} className="text-amber-400 text-xs hover:text-amber-300 transition">
        Si no avanza, entra aquí →
      </a>
    </div>
  );
}
