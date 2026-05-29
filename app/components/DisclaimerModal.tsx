"use client";

import { useState } from "react";
import { X, Shield, AlertTriangle, CheckCircle } from "lucide-react";

export function DisclaimerLink({ label = "Aviso legal y sobre mí" }: { label?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="underline underline-offset-2 decoration-dashed hover:text-white transition text-current cursor-pointer"
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-10 overflow-y-auto">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(false)} />

          <div className="relative z-10 w-full max-w-3xl bg-[#0f0f0f] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl mb-12">

            {/* Header */}
            <div className="flex items-start justify-between p-7 border-b border-zinc-800/60">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield size={18} className="text-amber-400" />
                </div>
                <div>
                  <h2 className="font-black text-base">Quién soy y de dónde viene todo esto</h2>
                  <p className="text-zinc-500 text-xs mt-0.5">Roberto Santander · Swing Trader Club · Chile Financiero</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-zinc-600 hover:text-white transition p-1">
                <X size={20} />
              </button>
            </div>

            <div className="p-7 space-y-7 text-sm leading-relaxed">

              {/* La historia */}
              <div className="space-y-4 text-zinc-400">
                <p>
                  Mira, te voy a contar algo que pocas veces se dice así de directo:
                  yo no tenía un manual cuando empecé. Tenía ganas, muchas preguntas y una cabeza
                  que procesaba todo al mismo tiempo — negocios, finanzas, proyectos, ideas nuevas —
                  sin saber muy bien cómo ordenar todo eso.
                </p>
                <p>
                  Con el tiempo entendí que eso tiene nombre:{" "}
                  <strong className="text-white">doble excepcionalidad</strong>. Significa que puedes
                  conectar cosas que otros no conectan, aprender de forma transversal, ver el sistema
                  detrás de algo antes de que alguien te lo explique. Pero también significa que a veces
                  tu cabeza es un caos productivo — y que organizarla requiere trabajo.
                </p>
                <p>
                  Fue en terapia donde bajé las ideas al papel. Y ahí nació{" "}
                  <strong className="text-white">CANOPIA</strong>.
                </p>
                <p>
                  CANOPIA es, literalmente,{" "}
                  <strong className="text-white">la copa del árbol</strong> — esa parte de arriba donde
                  todo converge, donde las ramas se encuentran, donde la luz llega primero. Así quería
                  que fuera: el lugar donde todo lo que sé y hago tiene sentido junto. El paraguas de mis
                  proyectos, mi conocimiento y lo que quiero compartir.
                </p>
                <p>
                  Tomé todo lo que aprendí — y lo puse en la licuadora. Años trabajando en{" "}
                  <strong className="text-white">Banco BCI, BanChile y MetLife</strong>, entendiendo
                  cómo funciona el sistema financiero desde adentro. Emprendiendo con{" "}
                  <strong className="text-white">Galpón 3</strong> en plena pandemia —
                  sí, abrir un gimnasio justo antes del cierre total, así de valiente o así de loco,
                  tú decides. Importando con <strong className="text-white">El Mercante</strong>:
                  empecé con un curso de importación, identifiqué una oportunidad en sensores de CO₂
                  (gracias a mi papá, que me lo mencionó sin saber lo que iba a pasar),
                  importé más de 2.300 unidades y saqué casi 8 veces lo invertido por producto.
                  No fue suerte — fue información, timing y acción.
                </p>
                <p>
                  También cofundé <strong className="text-white">Bloom Studio</strong>, tengo{" "}
                  <strong className="text-white">Japi Fiesta</strong> con la que ponemos la experiencia
                  gastronómica en eventos, y en el camino exploré bienes raíces, impuestos a la herencia
                  por experiencia personal, estructuración de empresas, y hasta un proyecto de{" "}
                  <strong className="text-white">forraje hidropónico</strong> durante la pandemia
                  — eso no llegó a ejecutarse por falta de recursos en ese momento, pero el proceso
                  de investigación me enseñó más de sistemas productivos que cualquier libro.
                </p>
                <p>
                  Soy además <strong className="text-white">miembro del Club de Trading</strong>,
                  cuyos integrantes están certificados como asesores de inversiones por la{" "}
                  <strong className="text-white">CMF (Comisión para el Mercado Financiero)</strong>.
                  Eso me da el marco técnico — no el título de tu asesor personal.
                </p>
              </div>

              {/* Por qué lo hace */}
              <div className="bg-zinc-900/60 border border-zinc-800/50 rounded-2xl p-6 space-y-3 text-zinc-400">
                <p className="text-white font-semibold text-sm">¿Por qué hago esto entonces?</p>
                <p>
                  Porque yo fui esa persona que no sabía por dónde empezar. Que buscaba información
                  y encontraba demasiado ruido o demasiados que te quieren vender algo.
                  Que tenía las ganas pero no tenía el mapa.
                </p>
                <p>
                  Hoy tengo herramientas que antes no existían — o que existían pero no estaban
                  al alcance de todos. La información hoy es inmediata, comprobable casi al instante.
                  Esa es la herramienta más valiosa que existe. Y yo la usé para construir CANOPIA,
                  para ordenar mis negocios, para aprender a operar en mercados financieros con método.
                </p>
                <p>
                  Lo que no te puedo cobrar — lo doy gratis, porque creo que hay cosas que deben
                  llegar a todos. Lo que requiere tiempo, seguimiento y un nivel de compromiso mayor —
                  eso tiene un costo, porque es un servicio real con un perfil específico de persona.
                </p>
                <p className="text-white">
                  No te vendo un sueño. Te muestro lo que aprendí, cómo lo apliqué, y te doy las
                  herramientas para que tú lo hagas a tu manera, según tus capacidades y tu ritmo.
                  Yo te escucho. Te ayudo donde puedo. Pero las decisiones son tuyas.
                </p>
              </div>

              {/* Disclaimer legal */}
              <div className="bg-amber-500/5 border border-amber-500/15 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle size={15} className="text-amber-400 flex-shrink-0" />
                  <p className="text-amber-300 text-xs font-bold uppercase tracking-wider">Aviso legal — léelo, es importante</p>
                </div>
                <div className="text-zinc-500 text-xs space-y-2 leading-relaxed">
                  <p>
                    Todo el contenido de Swing Trader Club y Chile Financiero es{" "}
                    <strong className="text-zinc-300">educativo e informativo</strong>. No es asesoría
                    financiera, bursátil ni de inversiones. No constituye una recomendación personalizada
                    de compra o venta de ningún instrumento financiero.
                  </p>
                  <p>
                    Invertir en mercados financieros conlleva{" "}
                    <strong className="text-zinc-300">riesgo real de pérdida parcial o total del capital</strong>.
                    Resultados pasados no garantizan resultados futuros. Cada persona debe evaluar su
                    situación y, si lo necesita, consultar con un profesional autorizado por la CMF.
                  </p>
                  <p>
                    Al usar este contenido, aceptas que Roberto Santander Hoffmann, Swing Trader Club
                    y Chile Financiero{" "}
                    <strong className="text-zinc-300">no asumen responsabilidad</strong> por decisiones
                    de inversión tomadas en base a este material, ni por pérdidas derivadas de las mismas.
                  </p>
                </div>
              </div>

              {/* Credenciales rápidas */}
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Ejecutivo en Banco BCI, BanChile y MetLife",
                  "Miembro del Club de Trading — certificados por la CMF",
                  "Co-fundador Galpón 3 SPA — centro deportivo en Ñuñoa",
                  "Dueño Japi Fiesta SPA — experiencias gastronómicas",
                  "Co-fundador Bloom Studio — productora",
                  "El Mercante — importación, ecommerce y marketing digital",
                  "Experiencia en bienes raíces, tributaria y estructuración de empresas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-zinc-500 text-xs">
                    <CheckCircle size={12} className="text-amber-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-zinc-700 text-xs text-center border-t border-zinc-800/50 pt-5">
                © 2026 Roberto Santander Hoffmann · CANOPIA · Swing Trader Club · Chile Financiero
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
