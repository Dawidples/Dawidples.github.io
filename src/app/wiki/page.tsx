import Link from "next/link";
import { Compass, Flame, Flag, CalendarDays } from "lucide-react";

export default function WikiPage() {
  return (
    <div className="max-w-none">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Wiki de PolakCraft</h1>
        <p className="text-lg text-muted max-w-3xl leading-relaxed">
          Bienvenido a la enciclopedia oficial. Aquí encontrarás toda la información necesaria para entender las mecánicas, la historia, la economía y la geopolítica que dan vida a nuestro servidor.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <Link href="/wiki/guia" className="glass-panel p-8 rounded-[2.5rem] group hover:bg-white/5 transition-all border border-white/5 shadow-xl">
          <div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center border border-blue-500/20 mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Compass size={24} className="text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">Guía del Servidor</h3>
          <p className="text-muted text-[15px] leading-relaxed">Aprende sobre la economía de diamantes, conexión, mecánicas básicas, pesca y cómo instalar el paquete de vehículos.</p>
        </Link>
        
        <Link href="/wiki/lore" className="glass-panel p-8 rounded-[2.5rem] group hover:bg-white/5 transition-all border border-white/5 shadow-xl">
          <div className="bg-orange-500/10 w-14 h-14 rounded-2xl flex items-center justify-center border border-orange-500/20 mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Flame size={24} className="text-orange-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">Lore y Atentados</h3>
          <p className="text-muted text-[15px] leading-relaxed">Explora la historia del mundo, conflictos y los eventos explosivos que marcaron el servidor para siempre.</p>
        </Link>
        
        <Link href="/wiki/naciones" className="glass-panel p-8 rounded-[2.5rem] group hover:bg-white/5 transition-all border border-white/5 shadow-xl">
          <div className="bg-emerald-500/10 w-14 h-14 rounded-2xl flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <Flag size={24} className="text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">Naciones</h3>
          <p className="text-muted text-[15px] leading-relaxed">Cronología de la formación, expansión y caída de los imperios, reinos y repúblicas en PolakCraft.</p>
        </Link>
        
        <Link href="/wiki/calendario" className="glass-panel p-8 rounded-[2.5rem] group hover:bg-white/5 transition-all border border-white/5 shadow-xl">
          <div className="bg-purple-500/10 w-14 h-14 rounded-2xl flex items-center justify-center border border-purple-500/20 mb-6 group-hover:scale-110 transition-transform shadow-lg">
            <CalendarDays size={24} className="text-purple-400" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-foreground">Calendario y Estaciones</h3>
          <p className="text-muted text-[15px] leading-relaxed">El tiempo avanza constantemente. Descubre cómo las estaciones afectan tus cultivos, velocidad y supervivencia.</p>
        </Link>
      </div>
    </div>
  );
}