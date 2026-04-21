import { Terminal, Diamond, Map, Fish, Car, Disc as DiscordIcon, AlertTriangle } from "lucide-react";

export default function GuiaPage() {
  return (
    <div className="max-w-none">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Guía del Servidor</h1>
        <p className="text-lg text-muted">Todo lo que necesitas saber para empezar a jugar y prosperar en PolakCraft.</p>
      </div>

      {/* Connection Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="glass-inner p-2.5 rounded-xl"><Terminal size={22} className="text-foreground" /></div>
          <h2 className="text-2xl font-bold text-foreground">Conexión al Servidor</h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 mb-10">
          <div className="glass-panel p-6 rounded-[2rem] border border-white/5 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2 flex items-center gap-2 text-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] shrink-0"></span> Java Edition
              </h3>
              <p className="text-sm text-muted mb-6">Conéctate usando la IP principal.</p>
            </div>
            <div className="w-full mt-auto pt-4">
              <code className="block w-full bg-black/40 border border-white/5 px-4 py-3.5 rounded-xl text-sm font-mono text-foreground font-bold select-all text-center whitespace-nowrap overflow-x-auto no-scrollbar">
                mc.polakcraft.me
              </code>
            </div>
          </div>
          <div className="glass-panel p-6 rounded-[2rem] border border-white/5 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-bold mb-2 flex items-center gap-2 text-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] shrink-0"></span> Bedrock Edition
              </h3>
              <p className="text-sm text-muted mb-6">Usa la IP y el puerto para entrar.</p>
            </div>
            <div className="flex flex-col gap-2 w-full mt-auto pt-4">
              <code className="block w-full bg-black/40 border border-white/5 px-4 py-3.5 rounded-xl text-sm font-mono text-foreground font-bold select-all text-center whitespace-nowrap overflow-x-auto no-scrollbar">
                mc.polakcraft.me
              </code>
              <code className="block w-full bg-black/40 border border-white/5 px-4 py-3.5 rounded-xl text-sm font-mono text-muted-strong font-bold select-all text-center whitespace-nowrap overflow-x-auto no-scrollbar">
                Puerto: 19132
              </code>
            </div>
          </div>
        </div>

        {/* Discord Verification */}
        <div className="glass-panel-strong border-l-4 border-l-[#5865F2] p-8 rounded-[2rem] shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#5865F2]/10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none"></div>
          <h3 className="text-[#5865F2] font-bold mb-3 flex items-center gap-2 text-xl relative z-10">
            <DiscordIcon size={24} /> Conexión Minecraft ↔ Discord
          </h3>
          <p className="text-muted mb-6 text-lg relative z-10">
            Al entrar al servidor por primera vez os aparecerá un <strong>código de 4 cifras</strong> en el chat. Para poder jugar correctamente debes vincular tu cuenta:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 relative z-10">
            <div className="glass-panel bg-black/20 p-5 rounded-2xl border border-white/5">
              <div className="w-8 h-8 rounded-full bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2] font-bold mb-3">1</div>
              <p className="text-sm text-muted-strong">Copia el código de 4 cifras que sale en el chat.</p>
            </div>
            <div className="glass-panel bg-black/20 p-5 rounded-2xl border border-white/5">
              <div className="w-8 h-8 rounded-full bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2] font-bold mb-3">2</div>
              <p className="text-sm text-muted-strong">Envíalo por mensaje directo (DM) al bot de Discord.</p>
            </div>
            <div className="glass-panel bg-black/20 p-5 rounded-2xl border border-white/5">
              <div className="w-8 h-8 rounded-full bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2] font-bold mb-3">3</div>
              <p className="text-sm text-muted-strong">Una vez verificado, podrás usar el chat en <span className="font-mono text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded ml-1">#💬・X-players-online</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanics Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <section className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 shrink-0">
            <div className="glass-inner p-2.5 rounded-xl"><Map size={22} className="text-foreground" /></div>
            <h2 className="text-2xl font-bold text-foreground">Dinámica General</h2>
          </div>
          <div className="glass-panel p-8 rounded-[2.5rem] flex-1 border border-white/5 shadow-xl">
            <p className="text-muted text-[15px] leading-relaxed mb-6">
              PolakCraft es un servidor geopolítico y económico. Su dinámica combina mecánicas de juego avanzadas con decisiones diplomáticas en un mundo vivo.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[15px] text-muted-strong font-medium"><div className="w-2 h-2 rounded-full bg-white/40"></div> Towny (Ciudades y Naciones)</li>
              <li className="flex items-center gap-3 text-[15px] text-muted-strong font-medium"><div className="w-2 h-2 rounded-full bg-white/40"></div> ONU (Regulación geopolítica)</li>
              <li className="flex items-center gap-3 text-[15px] text-muted-strong font-medium"><div className="w-2 h-2 rounded-full bg-white/40"></div> Sistema temporal con estaciones</li>
              <li className="flex items-center gap-3 text-[15px] text-muted-strong font-medium"><div className="w-2 h-2 rounded-full bg-white/40"></div> Desastres naturales dinámicos</li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 shrink-0">
            <div className="glass-inner p-2.5 rounded-xl"><Diamond size={22} className="text-cyan-400" /></div>
            <h2 className="text-2xl font-bold text-foreground">La Economía</h2>
          </div>
          <div className="glass-panel p-8 rounded-[2.5rem] flex-1 border border-white/5 relative overflow-hidden shadow-xl">
            <div className="absolute right-0 top-0 w-48 h-48 bg-cyan-400/5 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>
            <p className="text-muted text-[15px] leading-relaxed mb-6 relative z-10">
              La economía es el eje central. Todo gira en torno al comercio y la gestión de recursos en una economía pensada a largo plazo.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
              <div className="bg-black/30 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-1">Moneda</p>
                <p className="font-bold text-foreground flex items-center gap-1.5"><Diamond size={14} className="text-cyan-400"/> Diamante</p>
              </div>
              <div className="bg-black/30 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-1">Inicio</p>
                <p className="font-bold text-foreground">100 diamantes</p>
              </div>
            </div>
            <p className="text-sm text-muted-strong bg-cyan-500/10 p-4 rounded-2xl border border-cyan-500/20 relative z-10 leading-relaxed">
              Usa <code className="text-cyan-300 font-bold px-1">/shop</code> para comprar y <code className="text-cyan-300 font-bold px-1">/sellgui</code> para vender (al 20–25% del valor).
            </p>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 shrink-0">
            <div className="glass-inner p-2.5 rounded-xl"><Fish size={22} className="text-blue-400" /></div>
            <h2 className="text-2xl font-bold text-foreground">Pesca</h2>
          </div>
          <div className="glass-panel p-8 rounded-[2.5rem] flex-1 border border-white/5 shadow-xl">
            <p className="text-muted text-[15px] leading-relaxed mb-4">
              El sistema de pesca recompensa la actividad del jugador mediante la venta de peces valiosos en <code className="text-blue-300 font-bold">/fishshop</code> y la obtención ocasional de ítems útiles como cañas y pan.
            </p>
            <p className="text-[15px] text-muted-strong leading-relaxed bg-black/20 p-4 rounded-2xl border border-white/5">A veces se activan campeonatos (<code className="text-blue-300 font-bold">/fishcontest</code>) donde los mejores pescadores reciben recompensas económicas.</p>
          </div>
        </section>

        <section className="flex flex-col">
          <div className="flex items-center gap-3 mb-6 shrink-0">
            <div className="glass-inner p-2.5 rounded-xl"><Car size={22} className="text-yellow-400" /></div>
            <h2 className="text-2xl font-bold text-foreground">Vehículos</h2>
          </div>
          <div className="glass-panel p-8 rounded-[2.5rem] flex-1 border border-white/5 shadow-xl">
            <p className="text-muted text-[15px] leading-relaxed mb-6">
              El servidor utiliza un paquete de recursos para ver correctamente coches y camiones.
            </p>
            <ol className="space-y-3 text-[15px] text-muted-strong list-decimal pl-5">
              <li>Descarga el archivo <code className="text-yellow-300 font-bold">.zip</code> del servidor (No lo descomprimas).</li>
              <li>Abre <code>.minecraft</code> (Windows + R: <code>%appdata%\.minecraft</code>).</li>
              <li>Mueve el archivo a la carpeta <code>resourcepacks</code>.</li>
              <li>En Opciones &gt; Paquetes de recursos, actívalo.</li>
            </ol>
          </div>
        </section>
      </div>

      <section className="mt-16">
        <div className="glass-panel border border-red-500/30 bg-gradient-to-r from-red-500/10 to-transparent p-8 md:p-10 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center shadow-xl">
          <div className="bg-red-500/20 p-5 rounded-full text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
            <AlertTriangle size={36} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-3">Recordatorio Crítico: Inventarios</h3>
            <p className="text-red-200/80 text-[15px] leading-relaxed max-w-2xl">
              Si mueres <strong>fuera de claims</strong> (zonas protegidas por Towny), <strong>NO se guarda el inventario</strong>. Explora bajo tu propio riesgo y asegúrate de reclamar tu territorio antes de construir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}