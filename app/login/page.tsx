"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, AlertCircle } from "lucide-react";
import { login, saveSession } from "../lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const user = login(email, password);
    if (!user) {
      setError("Email o contraseña incorrectos.");
      setLoading(false);
      return;
    }
    saveSession(user);
    router.push("/club");
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col">

      <header className="px-8 py-5 flex items-center justify-between border-b border-white/5">
        <a href="/" className="font-black text-base tracking-tight">
          Swing<span className="text-amber-400">Trader</span>Club
        </a>
        <a href="/" className="text-zinc-600 text-xs hover:text-white transition">← Volver al inicio</a>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">

          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-amber-500 rounded-full" />
            <div>
              <p className="text-white font-bold text-sm">Área de miembros</p>
              <p className="text-zinc-600 text-xs">Swing Trader Club · Acceso privado</p>
            </div>
          </div>

          <h1 className="text-3xl font-black mb-2 leading-tight uppercase tracking-tight">
            Accede<br /><span className="text-amber-400">al club.</span>
          </h1>
          <p className="text-zinc-500 text-sm mb-8">Ingresa con tus credenciales de miembro.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-zinc-600 text-xs uppercase tracking-widest block mb-2 font-semibold">Email</label>
              <div className="relative">
                <Mail size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@email.com" required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-3.5 text-white text-sm placeholder-zinc-700 focus:border-amber-500/50 focus:outline-none transition" />
              </div>
            </div>
            <div>
              <label className="text-zinc-600 text-xs uppercase tracking-widest block mb-2 font-semibold">Contraseña</label>
              <div className="relative">
                <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-3.5 text-white text-sm placeholder-zinc-700 focus:border-amber-500/50 focus:outline-none transition" />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-3 bg-red-500/8 border border-red-500/20 rounded-xl px-4 py-3">
                <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
                <p className="text-red-300 text-xs">{error}</p>
              </div>
            )}

            <button type="submit" disabled={loading}
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed transition text-black rounded-xl py-3.5 font-bold text-sm flex items-center justify-center gap-2 mt-2">
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  Verificando...
                </span>
              ) : (
                <span className="flex items-center gap-2">Entrar al club <ArrowRight size={14} /></span>
              )}
            </button>
          </form>

          <p className="text-zinc-700 text-xs text-center mt-8">
            ¿No tienes acceso?{" "}
            <a href="mailto:rsantanderh@gmail.com" className="text-amber-400 hover:text-amber-300 transition">rsantanderh@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
