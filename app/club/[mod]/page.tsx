"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { MODULES } from "../../lib/modules";
import { ArrowLeft, Clock, Play, BookOpen } from "lucide-react";

export default function ModulePage({ params }: { params: Promise<{ mod: string }> }) {
  const { mod: modId } = use(params);
  const module = MODULES.find((m) => m.id === modId);
  if (!module) notFound();

  const total = module.lessons.reduce((a, l) => a + parseInt(l.duration), 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <a href="/club" className="inline-flex items-center gap-2 text-zinc-600 hover:text-amber-400 transition text-xs font-mono mb-8">
        <ArrowLeft size={13} /> VOLVER AL CLUB
      </a>

      {/* Header */}
      <div className="border border-amber-500/15 bg-zinc-950 rounded-2xl p-7 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-amber-400/30 font-black text-2xl font-mono">{module.id}</span>
          <span className="text-amber-400 text-xs font-bold font-mono bg-amber-500/8 border border-amber-500/15 px-2.5 py-1 rounded">
            {module.tag}
          </span>
        </div>
        <h1 className="text-xl lg:text-2xl font-black uppercase tracking-tight mb-3">{module.title}</h1>
        <p className="text-zinc-500 text-sm leading-relaxed mb-6">{module.desc}</p>
        <div className="flex items-center gap-5 pt-4 border-t border-zinc-800/50">
          <div className="flex items-center gap-2 text-zinc-600 text-xs font-mono">
            <BookOpen size={12} /> {module.lessons.length} CLASES
          </div>
          <div className="flex items-center gap-2 text-zinc-600 text-xs font-mono">
            <Clock size={12} /> ~{total} MIN TOTAL
          </div>
        </div>
      </div>

      {/* Lessons */}
      <p className="text-zinc-700 text-xs font-mono mb-4">// CLASES DEL MÓDULO</p>
      <div className="space-y-2">
        {module.lessons.map((lesson, i) => (
          <div key={i}
            className="group bg-zinc-950 border border-zinc-800/50 rounded-xl px-5 py-4 flex items-center justify-between gap-4 hover:border-amber-500/20 transition cursor-pointer">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-amber-500/8 border border-amber-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400/60 font-bold text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-zinc-300 text-sm font-medium leading-snug truncate group-hover:text-white transition">{lesson.title}</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-zinc-700 text-xs font-mono">{lesson.duration}</span>
              <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Play size={10} className="text-black fill-black ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-zinc-950 border border-zinc-800/40 rounded-xl p-5 text-center">
        <p className="text-zinc-700 text-xs font-mono">
          CONTENIDO EN VIDEO · PRÓXIMAMENTE ·{" "}
          <a href="mailto:rsantanderh@gmail.com" className="text-amber-400 hover:text-amber-300 transition">
            rsantanderh@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
