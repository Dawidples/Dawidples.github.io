import { Flag, Castle, Map, Users } from "lucide-react";

const nations = [
  {
    name: "Nova Garnatah",
    icon: Castle,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    events: [
      { date: "09.01.2110", text: "Creación de Al-Ándalus por Alx0613I de Garnatah y Nova Garnatah en Iberia." },
      { date: "Abr 2110", text: "Abandono de la zona." },
      { date: "05.07.2110", text: "Atentado amoroso de Nova Garnatah." },
      { date: "17.06.2112", text: "Tormenta Solar de Iberia 30+." },
      { date: "17.09.2112", text: "Invasión Venadista, cambio de poder." },
      { date: "26.01.2113", text: "Se consolida capital Venadista." },
      { date: "15.06.2113", text: "Caída del Venadismo y anexión por parte de Rosa Negra." },
      { date: "20.09.2113", text: "Proclamación del Venadismo Federal." },
      { date: "12.11.2113", text: "Fin del Venadismo Federal." },
      { date: "30.12.2113", text: "Atentados de fin de año causan daños perpetrados por Vicky." },
      { date: "15.01.2114", text: "Caída de Rosa Negra y su respectiva independencia de la zona." }
    ]
  },
  {
    name: "Garnatah",
    icon: Map,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    events: [
      { date: "09.01.2110", text: "Creación de Al-Ándalus por Alx0613I de Garnatah y Nova Garnatah en Iberia." },
      { date: "Abr 2110", text: "Abandono de la zona." },
      { date: "15.05.2113", text: "Creación del Imperio Español y renombrado por España." },
      { date: "16.12.2113", text: "Importante nevada cae sobre la ciudad, manteniéndose hasta final de la primavera." }
    ]
  },
  {
    name: "Reino Polaco",
    icon: Flag,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    events: [
      { date: "03.05.2110", text: "Fundación de Reino Polaco." },
      { date: "01.10.2111", text: "Inauguración del Aepto Polska (Juan Pablo II)." },
      { date: "15.12.2111", text: "Primera conexión con la Autopista G1." },
      { date: "09.03.2112", text: "Granizada hace daños en la ciudad." },
      { date: "20.03.2112", text: "Anexión de Países Altos e incorporación de Diyghu dentro del Reino." },
      { date: "25.09.2112", text: "Primeras elecciones dando como ganador a elbelgajunior." },
      { date: "Oct-Nov 2112", text: "Crisis política polaca (27.10 al 02.11.2112)." },
      { date: "Nov 2112", text: "Participación en la Toma de Tenoch." },
      { date: "Dic 2112", text: "Nochevieja Mundial 2112 con Sede en Polska." },
      { date: "02.01.2113", text: "Dimisión de elbelgajunior." },
      { date: "09.06.2113", text: "Bombardeo de Diyghu." },
      { date: "12.06.2113", text: "Captura de esteban por la ONU." },
      { date: "Dic 2113", text: "Nochevieja Mundial 2113 con Sede en Polska." }
    ]
  },
  {
    name: "Imperio Mexica",
    icon: Users,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    events: [
      { date: "24.11.2110", text: "Creación del Imperio Mexica." },
      { date: "19.04.2111", text: "Se inaugura el Aepto de Tenoch." },
      { date: "09.07.2111", text: "La aldea de Teotihuacán sufre una oleada de zombies." },
      { date: "Jul 2111", text: "Se recibe a los aldeanos evacuados de Arica." },
      { date: "Nov 2112", text: "Toma de Tenoch." }
    ]
  }
];

export default function NacionesPage() {
  return (
    <div className="max-w-none">
      <div className="mb-14 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Naciones del Mundo</h1>
        <p className="text-lg text-muted max-w-3xl">
          El control del territorio es la base del poder. Las fronteras representan la influencia y soberanía de cada país. A continuación se documenta la cronología de las grandes naciones.
        </p>
      </div>

      <div className="grid gap-12">
        {nations.map((nation) => {
          const Icon = nation.icon;
          return (
            <div key={nation.name} className="glass-panel p-8 md:p-12 rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5">
              {/* Abstract background flare */}
              <div className={`absolute top-0 right-0 w-80 h-80 rounded-full ${nation.bg} blur-[80px] -mr-20 -mt-20 pointer-events-none opacity-60`}></div>
              
              <div className="flex items-center gap-5 mb-10 relative z-10">
                <div className={`p-4 rounded-[1.25rem] ${nation.bg} border ${nation.border} shadow-lg`}>
                  <Icon size={32} className={nation.color} />
                </div>
                <h2 className="text-4xl font-bold text-foreground tracking-tight">{nation.name}</h2>
              </div>

              <div className="relative border-l-2 border-white/10 ml-6 space-y-8 pb-4 z-10">
                {nation.events.map((event, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-10">
                    <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/30 border-2 border-background ring-4 ring-background`}></div>
                    <div className="flex flex-col sm:flex-row sm:gap-6 sm:items-baseline">
                      <span className="font-mono text-[13px] font-bold uppercase tracking-wider text-muted-strong min-w-[120px] mb-2 sm:mb-0">
                        {event.date}
                      </span>
                      <span className="text-muted text-[15px] leading-relaxed">
                        {event.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-16 text-center">
        <p className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-panel text-sm text-muted-strong font-bold border border-white/5 shadow-lg">
          <span className="text-yellow-400">🚧</span> Más naciones e historia en desarrollo...
        </p>
      </div>
    </div>
  );
}