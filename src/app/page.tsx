"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Coins,
  Globe,
  Map,
  Server,
  Shield,
  Sparkles,
  Activity
} from "lucide-react";
import Link from "next/link";
import CopyIPButton from "@/components/CopyIPButton";
import ServerTimeWidget from "@/components/ServerTimeWidget";

const featureCards = [
  {
    title: "Naciones que dejan huella",
    description:
      "Crea alianzas, reclama fronteras y decide si tu historia se escribirá con diplomacia o con guerra declarada.",
    icon: Globe,
    image: "/images/naciones-feature.png",
    className: "md:col-span-2 md:row-span-2 min-h-[430px]",
  },
  {
    title: "Economía progresiva",
    description:
      "El diamante es el centro del comercio. El progreso llega negociando, construyendo y manteniendo viva tu ciudad.",
    icon: Coins,
    className: "min-h-[240px]",
  },
  {
    title: "Estaciones reales",
    description:
      "Primavera, verano, otoño e invierno alteran cultivos, movilidad y la supervivencia.",
    icon: Shield,
    className: "min-h-[240px]",
  },
  {
    title: "Mapa y mundo vivo",
    description:
      "BlueMap en directo, vehículos funcionales y un mundo que cambia según lo que hace la comunidad.",
    icon: Map,
    image: "/images/mapa-feature.png",
    className: "md:col-span-2 min-h-[260px]",
  },
];

const quickStats = [
  { label: "Java y Bedrock", value: "Crossplay" },
  { label: "Moneda central", value: "Diamantes" },
  { label: "Ciclo diario", value: "20 min" },
];

export default function Home() {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="section-shell">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="glass-panel-strong mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-bold tracking-[0.2em] text-muted-strong uppercase border border-white/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.4)]"></span>
                </span>
                Beta oficial online
              </div>

              <h1 className="hero-title max-w-4xl text-5xl font-bold text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight">
                Un servidor con ambición de <span className="text-gradient">mundo persistente.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
                PolakCraft mezcla naciones, economía basada en diamantes, estaciones dinámicas y una política emergente en una experiencia geopolítica pensada para durar.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CopyIPButton ip="mc.polakcraft.me" label="Copiar IP Java" />
                <Link
                  href="/mapa"
                  className="btn-secondary glass-panel glass-panel-hover px-7 py-3.5 text-sm font-bold shadow-xl"
                >
                  <Map size={17} />
                  Abrir BlueMap
                </Link>
              </div>

              <div className="mt-10 flex flex-col gap-6">
                <ServerTimeWidget />
                
                <div className="grid gap-4 sm:grid-cols-3">
                  {quickStats.map((item) => (
                    <div key={item.label} className="glass-panel rounded-2xl px-5 py-4 border border-white/5 shadow-lg">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">{item.label}</p>
                      <p className="mt-1.5 text-lg font-bold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="ambient-ring right-[-4rem] top-[2rem] h-52 w-52 bg-white/10" />
              <div className="ambient-ring bottom-[-2rem] left-[-2rem] h-48 w-48 bg-white/8" />

              <div className="glass-panel-strong image-card image-card-soft relative overflow-hidden rounded-[3rem] p-3 shadow-2xl border border-white/10">
                <div
                  className="relative h-[520px] rounded-[2.25rem] bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/hero-bg.png')",
                  }}
                >
                  <div className="absolute inset-x-0 top-0 flex flex-wrap items-start justify-between gap-2 p-5">
                    <div className="glass-panel rounded-full px-4 py-2.5 text-xs font-bold text-foreground backdrop-blur-xl bg-black/40 border-white/10">
                      Java <span className="text-muted-strong font-mono ml-1">mc.polakcraft.me</span>
                    </div>
                    <div className="glass-panel rounded-full px-4 py-2.5 text-xs font-bold text-foreground backdrop-blur-xl bg-black/40 border-white/10">
                      Bedrock <span className="text-muted-strong font-mono ml-1">19132</span>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="glass-panel-strong rounded-[2rem] p-6 backdrop-blur-2xl bg-black/40 border-white/10 shadow-2xl">
                      <div className="flex items-center gap-2.5 text-sm font-bold text-foreground">
                        <Sparkles size={16} className="text-yellow-400" />
                        Mundo geopolítico persistente
                      </div>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-strong">
                        Towny, mapa en vivo, estaciones, economía y decisiones de jugadores convertidas en historia.
                      </p>
                      <Link
                        href="/wiki"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-foreground hover:opacity-80 transition-opacity"
                      >
                        Explorar la Wiki
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <div className="section-shell">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel mb-4 border border-white/5 shadow-md">
                <Activity size={14} className="text-foreground" />
                <span className="text-[10px] font-bold tracking-widest text-muted-strong uppercase">Experiencia</span>
              </div>
              <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl leading-tight">
                Diseñado para sentirse premium, sin perder la tensión del servidor.
              </h2>
            </div>
            <Link href="/wiki/reglas" className="inline-flex items-center gap-2 text-sm font-bold text-foreground bg-white/5 hover:bg-white/10 px-5 py-3.5 rounded-full transition-colors border border-white/5 shadow-md">
              Ver normativas
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid auto-rows-[minmax(240px,auto)] gap-6 md:grid-cols-3">
            {featureCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className={`glass-panel-strong glass-panel-hover group relative overflow-hidden rounded-[2.5rem] p-8 border border-white/5 shadow-xl ${card.className}`}
                >
                  {card.image ? (
                    <div
                      className="image-card absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />
                  ) : null}

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="glass-inner flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg border border-white/10">
                      <Icon size={24} className="text-foreground" />
                    </div>

                    <div className="mt-16 max-w-lg">
                      <h3 className="text-2xl font-bold tracking-tight text-foreground">{card.title}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-strong">{card.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-32">
        <div className="section-shell">
          <div className="glass-panel-strong relative overflow-hidden rounded-[3rem] px-8 py-16 md:px-16 md:py-20 border border-white/10 shadow-2xl">
            {/* Background glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-muted-strong uppercase mb-4">Entrada al servidor</p>
                <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl leading-tight">
                  Todo listo para entrar y empezar a construir tu nación.
                </h2>
                <p className="mt-6 text-muted text-lg leading-relaxed">
                  Únete desde cualquier dispositivo. PolakCraft soporta conexión simultánea entre Java y Bedrock.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="glass-panel rounded-[2rem] p-6 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="glass-inner flex h-12 w-12 items-center justify-center rounded-2xl bg-black/20 shrink-0">
                      <Server size={20} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">Java Edition</p>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-muted-strong uppercase mt-0.5">IP Principal</p>
                    </div>
                  </div>
                  <div className="w-full mt-auto pt-4">
                    <div className="w-full p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-center overflow-x-auto no-scrollbar">
                      <p className="text-sm font-bold text-foreground select-all whitespace-nowrap">mc.polakcraft.me</p>
                    </div>
                  </div>
                </div>

                <div className="glass-panel rounded-[2rem] p-6 backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="glass-inner flex h-12 w-12 items-center justify-center rounded-2xl bg-black/20 shrink-0">
                      <Map size={20} className="text-foreground" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground">Bedrock</p>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-muted-strong uppercase mt-0.5">IP + Puerto</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full mt-auto pt-4">
                    <div className="w-full p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-center overflow-x-auto no-scrollbar">
                      <p className="text-sm font-bold text-foreground select-all whitespace-nowrap">mc.polakcraft.me</p>
                    </div>
                    <div className="w-full p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-center overflow-x-auto no-scrollbar">
                      <p className="text-sm font-bold text-muted-strong select-all whitespace-nowrap">Puerto: 19132</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}