"use client";

import { useState, useEffect } from "react";
import {
  TrendingUp, Shield, BookOpen, BarChart2, Brain, ClipboardList,
  ChevronDown, MessageCircle, Mail, MapPin, CheckCircle, AlertTriangle,
  Target, Activity, Users, Calendar, Zap,
} from "lucide-react";
import { DisclaimerLink } from "./components/DisclaimerModal";

const WHATSAPP = "56997412604";

const weeklyItems = [
  { Icon: BarChart2, label: "Lunes",    title: "Estado del mercado", desc: "Revisión semanal: ¿alcista, corrección o bajista? Define la exposición permitida para la semana." },
  { Icon: Target,    label: "Miércoles", title: "Revisión de setups", desc: "Análisis de acciones con fuerza y momentum. Zonas de entrada, stop loss y objetivos por activo." },
  { Icon: Users,     label: "Viernes",  title: "Q&A en vivo",        desc: "Revisión de dudas, análisis en vivo y seguimiento de operaciones abiertas por los miembros." },
  { Icon: Calendar,  label: "Mensual",  title: "Clase en vivo",       desc: "Webinar con contenido del sistema. Grabado y disponible para todos los miembros activos." },
];

const system = [
  { num:"01", Icon:TrendingUp,    title:"Fuerza del mercado",     desc:"Antes de cualquier operación evaluamos si el mercado permite operar. Alcista, corrección o bajista define la exposición máxima." },
  { num:"02", Icon:BarChart2,     title:"Selección de acciones",  desc:"Buscamos activos con tendencia, fuerza relativa y momentum. No compramos lo barato. Compramos lo fuerte." },
  { num:"03", Icon:Activity,      title:"Análisis técnico",       desc:"Gráficos, medias móviles (EMA21/SMA50/SMA200), RSI, ATR, volumen, soportes, breakouts y pullbacks en la práctica." },
  { num:"04", Icon:Shield,        title:"Gestión de riesgo",      desc:"Stop loss, tamaño de posición (max 20-25% del capital), riesgo por operación (1-2%) y relación R/R mínima 2R." },
  { num:"05", Icon:Target,        title:"Plan de entrada/salida", desc:"Cada operación tiene Nivel 1, 2 y 3 de salida definidos antes de entrar. Sin plan, no se opera." },
  { num:"06", Icon:Brain,         title:"Psicología del trader",  desc:"Disciplina, paciencia y cero FOMO. El sistema funciona si lo sigues. Esto es lo más difícil — y lo más importante." },
];

const modules = [
  { num:"01", title:"Educación Financiera Base",       Icon:BookOpen,      items:["Cómo funciona el mercado financiero","Diferencia entre ahorrar, invertir y especular","Acciones, ETFs y criptomonedas","Perfil de riesgo y errores comunes"] },
  { num:"02", title:"Introducción al Trading",         Icon:Activity,      items:["Qué es swing trading y cómo se diferencia","Cómo funciona Interactive Brokers (IBKR)","10 tipos de órdenes: límite, stop, trailing stop, MIT, MOC","Precio, volumen y liquidez en la práctica"] },
  { num:"03", title:"Análisis Técnico Aplicado",       Icon:BarChart2,     items:["Velas japonesas y lectura de gráficos","Tendencias, soportes y resistencias","EMA21, SMA50, SMA200 aplicadas al sistema","RSI, ATR, volumen, breakouts y pullbacks"] },
  { num:"04", title:"Sistema Swing Trading",           Icon:Target,        items:["Filtro de mercado: alcista, corrección o bajista","Selección de acciones con fuerza y momentum","Setup de entrada y confirmaciones técnicas","Salidas por niveles: N1, N2 y N3"] },
  { num:"05", title:"Gestión de Riesgo Profesional",  Icon:Shield,        items:["Tamaño de posición según capital disponible","Riesgo máximo por operación: 1-2%","R/R mínimo 2R — cómo calcularlo","Cómo sobrevivir a malas rachas sin destruir el capital"] },
  { num:"06", title:"Diario de Trading",               Icon:ClipboardList, items:["Registro estructurado de cada operación","Revisión semanal y mensual","Win rate, R promedio y expected value","Sistema de mejora continua basado en tus datos"] },
];

const faqs = [
  { q:"¿Esto es copy trading o señales?",           a:"No. Swing Trader Club es educación. No te digo qué comprar ni cuándo. Te enseño el sistema para que tú puedas decidirlo. El objetivo es que no dependas de nadie para operar." },
  { q:"¿Necesito experiencia previa?",               a:"No. El Módulo 01 parte desde educación financiera base. Lo que sí necesitas es una cuenta de broker — recomendamos Interactive Brokers (IBKR)." },
  { q:"¿Cuánto capital necesito?",                   a:"Para practicar el sistema: mínimo USD 2.000–3.000. Con menos, las comisiones afectan la gestión de riesgo. Puedes practicar en paper trading (demo) mientras acumulas capital." },
  { q:"¿Qué diferencia el swing trading de la inversión pasiva?", a:"La inversión pasiva compra ETFs de índice y los mantiene años. El swing trading busca capturar movimientos de precio en días o semanas con análisis técnico activo y gestión de riesgo por operación." },
  { q:"¿Hay garantía?",                              a:"7 días de garantía total. Si no es lo que esperabas, te devolvemos el 100% sin preguntas. Después cancelas el mes que quieras." },
  { q:"¿Puedo combinarlo con Chile Financiero?",     a:"Sí y es el camino natural. Chile Financiero (gratis) te da la base del sistema financiero chileno. Swing Trader Club te da el sistema para operar en mercados financieros." },
];

export default function SwingTraderClub() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq]       = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [form, setForm]             = useState({ name:"", email:"", phone:"", level:"", goal:"" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    const els = document.querySelectorAll<HTMLElement>("[data-anim]");
    els.forEach((el) => {
      el.style.opacity = "0"; el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.7s ease ${el.dataset.delay ?? "0ms"}, transform 0.7s ease ${el.dataset.delay ?? "0ms"}`;
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "translateY(0)"; io.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  const sendWhatsApp = () => {
    const t = `Hola Roberto, soy ${form.name}. Nivel: ${form.level}. ${form.goal}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`, "_blank");
  };
  const sendEmail = () => {
    const s = encodeURIComponent(`Swing Trader Club — ${form.name}`);
    const b = encodeURIComponent(`Nombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone}\nNivel: ${form.level}\nObjetivo: ${form.goal}`);
    window.open(`mailto:rsantanderh@gmail.com?subject=${s}&body=${b}`);
  };

  const navLinks: [string, string][] = [["El sistema","#sistema"],["Actividad","#actividad"],["Módulos","#modulos"],["Entrar","#contacto"]];

  return (
    <>
      <div className="min-h-screen bg-[#09090b] text-[#e4e4e7] antialiased overflow-x-hidden">

        {/* DISCLAIMER */}
        <div className="bg-amber-500/8 border-b border-amber-500/15 px-6 py-2.5 text-center text-xs text-amber-700/80 leading-relaxed">
          <strong className="text-amber-500">Aviso:</strong> Swing Trader Club es educación financiera. No entregamos recomendaciones de inversión. Invertir conlleva riesgo de pérdida.
        </div>

        {/* NAV */}
        <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#09090b]/90 backdrop-blur-2xl border-b border-white/5" : ""}`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-black text-lg tracking-tight select-none">Swing<span className="text-amber-400">Trader</span>Club</a>
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} className="text-sm text-zinc-400 hover:text-white transition font-medium">{label}</a>
              ))}
              <a href="/login" className="text-sm border border-zinc-700 hover:border-amber-500/50 text-zinc-400 hover:text-amber-400 transition px-4 py-2 rounded-full font-mono text-xs">MIS CLASES</a>
              <a href="#contacto" className="text-sm bg-amber-500 hover:bg-amber-400 transition text-black px-5 py-2.5 rounded-full font-bold">Quiero entrar</a>
            </nav>
            <button onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menú" className="lg:hidden flex flex-col gap-1.5 p-1">
              <span className={`w-6 h-px bg-white block transition-all origin-center ${mobileMenu ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-px bg-white block transition-all ${mobileMenu ? "opacity-0" : ""}`} />
              <span className={`w-6 h-px bg-white block transition-all origin-center ${mobileMenu ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
          {mobileMenu && (
            <div className="lg:hidden bg-[#09090b]/95 backdrop-blur-2xl border-t border-white/5 px-6 py-6 space-y-1">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMobileMenu(false)} className="block py-3 text-zinc-400 hover:text-white transition text-sm border-b border-white/5">{label}</a>
              ))}
              <a href="#contacto" onClick={() => setMobileMenu(false)} className="block mt-4 bg-amber-500 text-black text-center py-3.5 rounded-2xl font-bold text-sm">Quiero entrar</a>
            </div>
          )}
        </header>

        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_60%)]" />
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 w-full">
            <div className="max-w-4xl">
              <p data-anim data-delay="0ms" className="text-amber-400 uppercase tracking-[0.4em] text-xs font-bold mb-6">Swing Trading · Educación · Comunidad</p>
              <h1 data-anim data-delay="100ms" className="font-black leading-none tracking-tight uppercase" style={{ fontSize:"clamp(2.8rem, 8vw, 7rem)" }}>
                Opera con<br /><span className="text-zinc-600">sistema.</span><br /><span className="text-amber-400">No con suerte.</span>
              </h1>
              <p data-anim data-delay="200ms" className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
                Un club donde aprendes a operar acciones USA con análisis técnico, gestión de riesgo y metodología de swing trading a mediano plazo. Sin señales. Sin copy trading. Solo el sistema — para que tú decidas.
              </p>
              <div data-anim data-delay="300ms" className="flex flex-wrap gap-4 mt-12">
                <a href="#contacto" className="bg-amber-500 hover:bg-amber-400 transition text-black px-8 py-4 rounded-full font-bold text-sm">Quiero entrar al club</a>
                <a href="#sistema" className="border border-white/15 hover:border-white/40 text-zinc-300 hover:text-white transition px-8 py-4 rounded-full font-bold text-sm">Ver el sistema</a>
              </div>
              <div data-anim data-delay="450ms" className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[["Mediano plazo","días a semanas/operación"],["6 módulos","educación estructurada"],["Sin señales","tú decides cada operación"],["Sistema real","el mismo que usa Roberto"]].map(([num, label]) => (
                  <div key={label}><p className="text-lg font-black text-amber-400">{num}</p><p className="text-zinc-600 text-xs uppercase tracking-widest mt-1">{label}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ACTIVIDAD */}
        <section id="actividad" className="border-t border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <div data-anim className="mb-16">
              <p className="text-amber-400 uppercase tracking-[0.35em] text-xs font-bold mb-4">Qué pasa dentro del club</p>
              <h2 className="text-4xl lg:text-6xl font-black uppercase">Activo.<br /><span className="text-zinc-600">Cada semana.</span></h2>
              <p className="mt-4 text-zinc-500 text-sm max-w-lg">No es un curso que se compra y se olvida. El club tiene actividad continua: revisión de mercado, análisis de setups, clases en vivo y comunidad activa.</p>
            </div>
            <div className="grid lg:grid-cols-4 gap-5">
              {weeklyItems.map(({ Icon, label, title, desc }, i) => (
                <div key={title} data-anim data-delay={`${i * 80}ms`} className="bg-[#09090b] border border-zinc-800/50 rounded-3xl p-7 hover:border-amber-500/30 transition-all duration-500">
                  <span className="text-amber-400/50 text-xs font-bold uppercase tracking-widest">{label}</span>
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center my-4"><Icon size={18} className="text-amber-400" /></div>
                  <h3 className="font-bold text-sm mb-2">{title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SISTEMA */}
        <section id="sistema" className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <div data-anim className="mb-16">
              <p className="text-amber-400 uppercase tracking-[0.35em] text-xs font-bold mb-4">La metodología</p>
              <h2 className="text-4xl lg:text-6xl font-black uppercase">6 pasos.<br /><span className="text-zinc-600">Primero el capital.</span></h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {system.map(({ num, Icon, title, desc }, i) => (
                <div key={title} data-anim data-delay={`${i * 80}ms`} className="group bg-zinc-950 border border-zinc-800/50 rounded-3xl p-7 hover:border-amber-500/30 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-amber-400/30 font-black text-2xl font-mono">{num}</span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center"><Icon size={16} className="text-amber-400" /></div>
                  </div>
                  <h3 className="font-bold text-sm mb-3">{title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUÉ INCLUYE */}
        <section className="border-t border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <div data-anim className="mb-16">
              <p className="text-amber-400 uppercase tracking-[0.35em] text-xs font-bold mb-4">Qué incluye</p>
              <h2 className="text-4xl lg:text-5xl font-black uppercase">Todo lo que necesitas<br /><span className="text-zinc-600">para operar con sistema.</span></h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 max-w-4xl">
              {[
                { Icon:BookOpen,   title:"6 módulos de formación",      desc:"Desde educación financiera base hasta el sistema completo de swing trading. Acceso permanente mientras seas miembro." },
                { Icon:Zap,       title:"Herramienta de gestión",       desc:"Sistema con las reglas del método: evalúa cada activo, calcula tamaño de posición, define stop loss y planifica la salida." },
                { Icon:BarChart2, title:"Revisión semanal de mercado",  desc:"Cada semana: estado del mercado (alcista, corrección o bajista) y qué acciones tienen estructura técnica válida." },
                { Icon:Users,     title:"Comunidad activa",              desc:"Grupo privado, Q&A semanal, webinar mensual y seguimiento de tu proceso de aprendizaje." },
              ].map(({ Icon, title, desc }, i) => (
                <div key={title} data-anim data-delay={`${i * 80}ms`} className="flex gap-5 bg-[#09090b] border border-zinc-800/50 rounded-3xl p-7 hover:border-amber-500/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center flex-shrink-0"><Icon size={18} className="text-amber-400" /></div>
                  <div><h3 className="font-bold text-sm mb-2">{title}</h3><p className="text-zinc-500 text-xs leading-relaxed">{desc}</p></div>
                </div>
              ))}
            </div>

            {/* Precio */}
            <div data-anim className="mt-16 max-w-md">
              <div className="bg-[#09090b] border border-amber-500/25 rounded-3xl p-8">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Acceso mensual</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-white">$14.900</span>
                  <span className="text-zinc-500 text-sm">/mes CLP</span>
                </div>
                <p className="text-amber-400 text-xs mb-6">7 días de garantía total · cancela cuando quieras</p>
                <a href="#contacto" className="block text-center bg-amber-500 hover:bg-amber-400 transition text-black rounded-2xl py-4 font-bold text-sm">Quiero entrar al club</a>
              </div>
            </div>
          </div>
        </section>

        {/* MÓDULOS */}
        <section id="modulos" className="border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6 py-28">
            <div data-anim className="mb-16">
              <p className="text-amber-400 uppercase tracking-[0.35em] text-xs font-bold mb-4">El programa</p>
              <h2 className="text-4xl lg:text-6xl font-black uppercase">6 módulos.<br /><span className="text-zinc-600">De cero al sistema.</span></h2>
            </div>
            <div className="space-y-3">
              {modules.map((mod, i) => (
                <div key={mod.num} data-anim data-delay={`${i * 60}ms`} className="border border-zinc-800/60 rounded-2xl overflow-hidden">
                  <button onClick={() => setOpenModule(openModule === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-white/2 transition">
                    <div className="flex items-center gap-5">
                      <span className="text-amber-400/40 font-black text-xl font-mono w-10">{mod.num}</span>
                      <div className="flex items-center gap-3"><mod.Icon size={16} className="text-amber-400 flex-shrink-0" /><span className="font-bold text-sm">{mod.title}</span></div>
                    </div>
                    <ChevronDown size={16} className={`text-amber-400 flex-shrink-0 transition-transform duration-300 ${openModule === i ? "rotate-180" : ""}`} />
                  </button>
                  {openModule === i && (
                    <div className="px-6 pb-6 pl-[4.5rem]">
                      <ul className="space-y-2">
                        {mod.items.map(item => (
                          <li key={item} className="flex items-start gap-3 text-zinc-400 text-sm"><CheckCircle size={13} className="text-amber-400 flex-shrink-0 mt-0.5" />{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROBERTO */}
        <section className="border-t border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <p data-anim className="text-amber-400 uppercase tracking-[0.35em] text-xs font-bold mb-5">Quién enseña</p>
                <h2 data-anim data-delay="100ms" className="text-4xl lg:text-5xl font-black uppercase leading-tight">Roberto<br /><span className="text-zinc-600">Santander.</span></h2>
                <div data-anim data-delay="200ms" className="mt-8 space-y-4 text-zinc-400 text-[15px] leading-relaxed">
                  <p>Emprendedor, trader y ex ejecutivo financiero. Experiencia en <strong className="text-white">banca, seguros e inversiones</strong>. Fundador de Galpón 3, Japi Fiesta y El Mercante.</p>
                  <p>Enseño el mismo sistema con el que opero mi propio capital — sin prometer rentabilidades, sin decirte qué comprar. Solo el método. Las decisiones son tuyas.</p>
                </div>
              </div>
              <div data-anim data-delay="150ms">
                <div className="bg-amber-500/5 border border-amber-500/15 rounded-3xl p-8">
                  <AlertTriangle size={20} className="text-amber-400 mb-5" />
                  <p className="text-amber-200/80 text-sm font-semibold mb-3">Lo que esto NO es:</p>
                  <ul className="space-y-2 mb-6">
                    {["No es señales ni copy trading","No entregamos recomendaciones de inversión","No prometemos rentabilidades ni resultados","No somos asesores financieros"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-zinc-400 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-amber-400/40 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                  <p className="text-amber-200/80 text-sm font-semibold mb-3">Lo que SÍ es:</p>
                  <ul className="space-y-2">
                    {["Educación financiera aplicada al swing trading","Sistema claro con reglas y metodología","Comunidad activa de traders en formación","Herramientas para que tú tomes tus decisiones"].map(item => (
                      <li key={item} className="flex items-center gap-3 text-zinc-300 text-sm"><CheckCircle size={13} className="text-amber-400 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 py-28">
            <div data-anim className="text-center mb-16">
              <p className="text-amber-400 uppercase tracking-[0.35em] text-xs font-bold mb-4">FAQ</p>
              <h2 className="text-4xl font-black uppercase">Lo que todos preguntan.</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} data-anim data-delay={`${i * 60}ms`} className="border border-zinc-800/60 rounded-2xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-white/2 transition">
                    <span className="font-semibold text-sm pr-4">{faq.q}</span>
                    <ChevronDown size={16} className={`text-amber-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-6 pb-6 text-zinc-500 text-sm leading-relaxed">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="border-t border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6 py-28">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <p data-anim className="text-amber-400 uppercase tracking-[0.35em] text-xs font-bold mb-5">Entrar al club</p>
                <h2 data-anim data-delay="100ms" className="text-4xl lg:text-5xl font-black uppercase leading-tight">Agenda tu<br /><span className="text-zinc-600">primera reunión.</span></h2>
                <p data-anim data-delay="200ms" className="mt-6 text-zinc-500 text-[15px] leading-relaxed max-w-sm">Cuéntame en qué etapa estás y qué quieres aprender. Te explico cómo funciona el club.</p>
                <div data-anim data-delay="300ms" className="mt-10 space-y-3 text-zinc-500 text-sm">
                  <div className="flex items-center gap-3"><Mail size={15} className="text-amber-400" /><span>rsantanderh@gmail.com</span></div>
                  <div className="flex items-center gap-3"><MapPin size={15} className="text-amber-400" /><span>Santiago, Chile — club online</span></div>
                </div>
              </div>
              <div data-anim data-delay="150ms" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[{l:"Nombre",k:"name",t:"text",p:"Tu nombre"},{l:"Email",k:"email",t:"email",p:"tu@email.com"}].map(({l,k,t,p}) => (
                    <div key={k}>
                      <label className="text-zinc-500 text-xs uppercase tracking-widest block mb-2">{l}</label>
                      <input type={t} value={form[k as keyof typeof form]} onChange={e => setForm({...form,[k]:e.target.value})} placeholder={p}
                        className="w-full bg-[#09090b] border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm placeholder-zinc-700 focus:border-amber-500 focus:outline-none transition" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-zinc-500 text-xs uppercase tracking-widest block mb-2">Teléfono <span className="normal-case text-zinc-700">(opcional)</span></label>
                  <input type="tel" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="+56 9 XXXX XXXX"
                    className="w-full bg-[#09090b] border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm placeholder-zinc-700 focus:border-amber-500 focus:outline-none transition" />
                </div>
                <div>
                  <label className="text-zinc-500 text-xs uppercase tracking-widest block mb-2">¿Tienes experiencia invirtiendo?</label>
                  <select value={form.level} onChange={e => setForm({...form,level:e.target.value})}
                    className="w-full bg-[#09090b] border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm focus:border-amber-500 focus:outline-none transition appearance-none">
                    <option value="">Selecciona tu situación</option>
                    <option>Nunca he invertido</option><option>Tengo cuenta pero sin sistema</option>
                    <option>Ya opero, quiero mejorar</option><option>Tengo experiencia, busco metodología</option>
                  </select>
                </div>
                <div>
                  <label className="text-zinc-500 text-xs uppercase tracking-widest block mb-2">¿Qué quieres lograr?</label>
                  <textarea rows={3} value={form.goal} onChange={e => setForm({...form,goal:e.target.value})} placeholder="Ej: Aprender a operar desde cero, mejorar mi gestión de riesgo..."
                    className="w-full bg-[#09090b] border border-zinc-800 rounded-2xl px-5 py-4 text-white text-sm placeholder-zinc-700 focus:border-amber-500 focus:outline-none transition resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button onClick={sendWhatsApp} className="bg-[#25D366] hover:bg-[#1ebe5d] transition rounded-2xl py-4 font-bold text-black text-sm flex items-center justify-center gap-2"><MessageCircle size={16} /> WhatsApp</button>
                  <button onClick={sendEmail} className="bg-amber-500 hover:bg-amber-400 transition text-black rounded-2xl py-4 font-bold text-sm flex items-center justify-center gap-2"><Mail size={16} /> Email</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 bg-[#09090b]">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-8 mb-8 border-b border-white/5">
              <div>
                <p className="font-black text-xl">Swing<span className="text-amber-400">Trader</span>Club</p>
                <p className="text-zinc-600 text-xs mt-1">Por Roberto Santander Hoffmann · CANOPIA</p>
              </div>
              <nav className="flex flex-wrap gap-6 text-zinc-600 text-sm">
                {[["Chile Financiero (gratis)","#"],["canopia.cl","https://canopia.cl"],["Instagram","https://instagram.com/rsantanderh"]].map(([l,h]) => (
                  <a key={l} href={h} target={h.startsWith("http")?"_blank":undefined} rel={h.startsWith("http")?"noopener noreferrer":undefined} className="hover:text-white transition">{l}</a>
                ))}
              </nav>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-3 text-zinc-700 text-xs">
              <p>Swing Trader Club es educación financiera. No entrega recomendaciones de inversión. Invertir conlleva riesgo de pérdida de capital.</p>
              <DisclaimerLink label="Aviso legal y sobre Roberto →" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
