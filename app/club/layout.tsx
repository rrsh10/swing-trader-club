"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getSession, clearSession } from "../lib/auth";
import { LogOut, Home, TrendingUp } from "lucide-react";

export default function ClubLayout({ children }: { children: React.ReactNode }) {
  const router   = useRouter();
  const pathname = usePathname();
  const [user, setUser]   = useState<{ name: string; email: string } | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = getSession();
    if (!session) { router.replace("/login"); }
    else { setUser(session); setReady(true); }
  }, [router]);

  if (!ready) return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col">
      <header className="border-b border-white/5 sticky top-0 z-50 bg-[#09090b]/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-13 py-3 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="/" className="font-black text-sm tracking-tight">Swing<span className="text-amber-400">Trader</span>Club</a>
            <span className="text-zinc-800 text-xs hidden sm:block">|</span>
            <span className="text-zinc-600 text-xs hidden sm:block">Área de miembros</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/club" className={`text-xs font-semibold flex items-center gap-1.5 transition ${pathname === "/club" ? "text-amber-400" : "text-zinc-600 hover:text-white"}`}>
              <Home size={12} /> Club
            </a>
            <div className="h-3 w-px bg-zinc-800" />
            <span className="text-zinc-600 text-xs hidden sm:block">{user?.name}</span>
            <button onClick={() => { clearSession(); router.push("/"); }}
              className="flex items-center gap-1.5 text-xs text-zinc-700 hover:text-amber-400 transition">
              <LogOut size={12} /> Salir
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
