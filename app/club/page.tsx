"use client";

import { useEffect, useState } from "react";
import { getSession } from "../lib/auth";
import { MODULES } from "../lib/modules";
import { Clock, BookOpen, ArrowRight, TrendingUp, BarChart2 } from "lucide-react";

const weeklyUpdates = [
  { day: "LUN", label: "Estado del mercado", status: "Próximamente", color: "amber" },
  { day: "MIÉ", label: "Revisión de setups",  status: "Próximamente", color: "amber" },
  { day: "VIE", label: "Q&A en vivo",          status: "Próximamente", color: "amber" },
  { day: "MES", label: "Clase mensual",         status: "Próximamente", color: "amber" },
];

export default function ClubDashboard() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => { setUser(getSession()); }, []);

  const firstName = user?.name?.split(" ")[0] ?? "";
  const totalLessons = MODULES.reduce((a, m) => a + m.lessons.length, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Greeting */}
      <div className="mb-10">
        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-2 font-mono">// BIENVENIDO</p>
        <h1 className="text-3xl font-black uppercase tracking-tight">
          {firstName}. <span className="text-amber-400">Operemos con sistema.</span>
        </h1>
        <p className="text-zinc-600 text-sm mt-2 font-mono">
          {MODULES.length} módulos · {totalLessons} clases · Club activo
        </p>
      </div>

      {/* Weekly activity */}
      <div className="mb-10">
        <p className="text-zinc-600 text-xs font-mono mb-4">// ACTIVIDAD SEMANAL</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {weeklyUpdates.map(({ day, label, status }) => (
            <div key={day} className="bg-zinc-950 border border-zinc-800/60 rounded-2xl p-4">
              <span className="text-amber-400 text-xs font-bold font-mono bg-amber-500/8 border border-amber-500/15 px-2 py-0.5 rounded">{day}</span>
              <p className="text-white text-xs font-semibold mt-3 mb-1">{label}</p>
              <p className="text-zinc-700 text-xs">{status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="bg-zinc-950 border border-zinc-800/50 rounded-2xl p-5 mb-10 flex items-center gap-6">
        <div className="flex-1">
          <div className="flex justify-between mb-2">
            <span className="text-white text-xs font-semibold font-mono">PROGRESO</span>
            <span className="text-zinc-700 text-xs font-mono">0 / {totalLessons} clases</span>
          </div>
          <div className="w-full h-1 bg-zinc-800 rounded-full">
            <div className="h-1 bg-amber-500 rounded-full" style={{ width: "0%" }} />
          </div>
        </div>
        <BarChart2 size={18} className="text-zinc-800 flex-shrink-0" />
      </div>

      {/* Modules */}
      <p className="text-zinc-600 text-xs font-mono mb-4">// MÓDULOS</p>
      <div className="grid lg:grid-cols-2 gap-4">
        {MODULES.map((mod) => {
          const total = mod.lessons.reduce((a, l) => a + parseInt(l.duration), 0);
          return (
            <a key={mod.id} href={`/club/${mod.id}`}
              className="group bg-zinc-950 border border-zinc-800/60 rounded-2xl p-6 hover:border-amber-500/25 transition-all block">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-amber-400/40 font-black text-xl font-mono">{mod.id}</span>
                  <span className="text-amber-400 text-xs font-bold font-mono bg-amber-500/8 border border-amber-500/15 px-2 py-0.5 rounded">
                    {mod.tag}
                  </span>
                </div>
                <ArrowRight size={14} className="text-amber-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h2 className="text-white font-bold text-sm leading-snug mb-2">{mod.title}</h2>
              <p className="text-zinc-600 text-xs leading-relaxed mb-4 line-clamp-2">{mod.desc}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50">
                <div className="flex items-center gap-1.5 text-zinc-700 text-xs font-mono">
                  <BookOpen size={11} />{mod.lessons.length} clases
                </div>
                <div className="flex items-center gap-1.5 text-zinc-700 text-xs font-mono">
                  <Clock size={11} />~{total} min
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <p className="text-zinc-800 text-xs text-center mt-12 font-mono">
        SWING TRADER CLUB · Educación financiera · No recomendaciones de inversión
      </p>
    </div>
  );
}
