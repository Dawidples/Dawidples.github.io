import { CalendarDays, Sun, CloudRain, Snowflake, Leaf } from "lucide-react";

export default function CalendarioPage() {
  return (
    <div className="max-w-none">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Calendario y Estaciones</h1>
        <p className="text-lg text-muted max-w-3xl">
          El tiempo en PolakCraft afecta directamente tus mecánicas de juego, cultivos y habilidades de supervivencia.
        </p>
      </div>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="glass-inner p-2.5 rounded-xl"><CalendarDays size={22} className="text-foreground" /></div>
          <h2 className="text-2xl font-bold text-foreground">El Sistema Temporal</h2>
        </div>
        <p className="text-muted mb-6 leading-relaxed text-[15px]">
          El servidor utiliza el plugin <code className="bg-white/5 px-1.5 py-0.5 rounded font-mono text-muted-strong border border-white/10">SupperSeason</code>. En la pantalla se muestra la <strong>fecha</strong> junto a una <strong>línea segmentada</strong> que representa el avance del día de derecha a izquierda.
        </p>
        
        <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5 shadow-xl mb-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl shadow-inner shrink-0">⏱️</div>
              <div>
                <p className="font-bold text-foreground mb-1">Duración del ciclo</p>
                <p className="text-sm text-muted">Un día completo en el juego dura <strong>20 minutos reales</strong>.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl shadow-inner shrink-0">🌅</div>
              <div>
                <p className="font-bold text-foreground mb-1">Franja horaria</p>
                <p className="text-sm text-muted">El día va desde las <strong>06:00 AM</strong> hasta las <strong>05:59 AM</strong> del día siguiente.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl shadow-inner shrink-0">💤</div>
              <div>
                <p className="font-bold text-foreground mb-1">Dormir está desactivado</p>
                <p className="text-sm text-muted"><strong>La noche no se puede saltar.</strong> Las camas funcionan solo como respawn.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl shadow-inner shrink-0">🎁</div>
              <div>
                <p className="font-bold text-foreground mb-1">Recompensa diaria</p>
                <p className="text-sm text-muted">Cada amanecer el servidor otorga <strong>4 diamantes</strong> a los conectados.</p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-[13px] text-muted-strong bg-white/5 p-4 rounded-xl border border-white/10 shadow-inner inline-block">
          <strong>Aclaración:</strong> Los eventos nocturnos que ocurran durante la madrugada según <code className="text-cyan-300">/time</code> pertenecen al día siguiente del mostrado en la interfaz visual.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-foreground mb-6">Estaciones del Año</h2>
        <p className="text-muted text-[15px] mb-8 leading-relaxed max-w-3xl">
          El calendario está dividido en 12 meses con 30 días cada uno. Hay 4 estaciones, cada una con efectos que afectan la jugabilidad.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Primavera */}
          <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-[50px] -mr-10 -mt-10 rounded-full"></div>
            <h3 className="text-2xl font-bold text-green-400 mb-2 flex items-center gap-3">
              <Leaf size={24} /> Primavera
            </h3>
            <p className="text-[11px] font-bold text-muted-strong uppercase tracking-[0.15em] mb-6">Enero • Febrero • Marzo</p>
            <ul className="space-y-3 text-[14px] text-muted-strong relative z-10">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div> Duplica la recolección de cultivos</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div> Efecto de Regeneración pasiva</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div> Visión Nocturna constante</li>
            </ul>
          </div>

          {/* Verano */}
          <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] -mr-10 -mt-10 rounded-full"></div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2 flex items-center gap-3">
              <Sun size={24} /> Verano
            </h3>
            <p className="text-[11px] font-bold text-muted-strong uppercase tracking-[0.15em] mb-6">Abril • Mayo • Junio</p>
            <ul className="space-y-3 text-[14px] text-muted-strong relative z-10">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Duplica la recolección de cultivos</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></div> <span><strong>Clima Cálido:</strong> Ardes sin protección adecuada</span></li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></div> <span>Armadura completa genera sudoración y debilidad</span></li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 shrink-0"></div> <span><strong>Arena Ardiente:</strong> Genera daño al pisarla</span></li>
            </ul>
          </div>

          {/* Otoño */}
          <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] -mr-10 -mt-10 rounded-full"></div>
            <h3 className="text-2xl font-bold text-orange-400 mb-2 flex items-center gap-3">
              <CloudRain size={24} /> Otoño
            </h3>
            <p className="text-[11px] font-bold text-muted-strong uppercase tracking-[0.15em] mb-6">Julio • Agosto • Septiembre</p>
            <ul className="space-y-3 text-[14px] text-muted-strong relative z-10">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div> Duplica la recolección de minerales</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 shrink-0"></div> <span><strong>Agua Fría:</strong> Provoca lentitud</span></li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div> Aumenta velocidad de movimiento de día</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div> Crecimiento de cultivos más lento</li>
            </ul>
          </div>

          {/* Invierno */}
          <div className="glass-panel p-8 rounded-[2.5rem] border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] -mr-10 -mt-10 rounded-full"></div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2 flex items-center gap-3">
              <Snowflake size={24} /> Invierno
            </h3>
            <p className="text-[11px] font-bold text-muted-strong uppercase tracking-[0.15em] mb-6">Octubre • Noviembre • Diciembre</p>
            <ul className="space-y-3 text-[14px] text-muted-strong relative z-10">
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></div> <span><strong>Clima Congelado:</strong> Lentitud sin protección</span></li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></div> <span><strong>Agua Fría:</strong> Lentitud y se genera hielo</span></li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Muerte en plantas (Planta muerta)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Semillas deshabilitadas para plantar</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-[13px] text-muted text-center italic opacity-80">
          * Los efectos descritos pueden variar según la situación, equipamiento o zona del mapa.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">Comandos Útiles</h2>
        <div className="flex flex-wrap gap-4">
          <code className="glass-panel px-5 py-2.5 rounded-xl font-bold text-cyan-300 border border-white/10 shadow-md">/time</code>
          <code className="glass-panel px-5 py-2.5 rounded-xl font-bold text-cyan-300 border border-white/10 shadow-md">/season</code>
          <code className="glass-panel px-5 py-2.5 rounded-xl font-bold text-cyan-300 border border-white/10 shadow-md">/day</code>
        </div>
      </section>
    </div>
  );
}