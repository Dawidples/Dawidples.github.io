import { Flame, Bomb, Skull, ShieldAlert } from "lucide-react";

const atentados = [
  {
    title: "Túnel Eslavo, Autopista G1",
    date: "Noviembre 2110",
    desc: "Se descubrieron grandes daños en el túnel tras días de inactividad, todo el túnel estaba dañado por explosivos colocados en su interior.",
    icon: Bomb,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  },
  {
    title: "Atentado de Viena",
    date: "13.03.2111 (Actual spawn)",
    desc: "Una gran explosión causada por el exlíder mexica derribó el único edificio construido durante el entierro de Lucio I.",
    icon: Flame,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  },
  {
    title: "Atentado de A Coruña",
    date: "22.10.2112",
    desc: "Durante el conflicto de a Coruña, poco antes de la invasión catalana, un edificio cercano a la frontera sufre una gran explosión en su fachada, dañando varios pisos.",
    icon: ShieldAlert,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    title: "Incidente Explosivo de Tenoch",
    date: "04.12.2112 (Imp Mexica)",
    desc: "El exgobernante polaco activó sin querer un mecanismo explosivo destruyendo parte de la ciudad.",
    icon: Bomb,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  },
  {
    title: "Sabotaje de Tenoch",
    date: "17.12.2112 (Imp Mexica)",
    desc: "Durante la Toma de Tenoch, el exgobernante de Imp Mexica comenzó unas explosiones en su ciudad antes de fallecer.",
    icon: Flame,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  },
  {
    title: "Atentado del Parking",
    date: "Febrero 2113 (Diyghu, Reino Polaco)",
    desc: "Se descubrió un boquete en el aparcamiento local y carteles provocativos.",
    icon: Bomb,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    title: "Bombardeo de Diyghu",
    date: "09.06.2113 (Reino Polaco)",
    desc: "Venadista hizo un ataque aéreo y bombardeo dañando dos casas, el parking y destruyendo la Torreta Norte.",
    icon: Bomb,
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  },
  {
    title: "Asesinato de Vicky",
    date: "08.01.2114 (Cementerio Global)",
    desc: "El gobernante de Buenos Ayres ataca a Vicky hasta la muerte durante el saqueo de la tumba de Iker la noche después de su entierro.",
    icon: Skull,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    title: "Autoataque de Vicky",
    date: "15.01.2114 (Rosa Negra)",
    desc: "Vicky delira y comienza a destruir su ciudad antes de morir para siempre.",
    icon: Skull,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    title: "Explosiones de Buenos Ayres",
    date: "25.02.2114 (Vieja Buenos Ayres)",
    desc: "Unas explosiones destruyen la ciudad y hacen que se desplace la ciudad a la otra punta del mundo.",
    icon: Bomb,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20"
  }
];

export default function LorePage() {
  return (
    <div className="max-w-none">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Lore y Atentados</h1>
        <p className="text-lg text-muted max-w-3xl">
          La historia de PolakCraft no solo se construye con diplomacia, sino a menudo con fuego y destrucción. Aquí se documentan los mayores incidentes y eventos explosivos registrados.
        </p>
      </div>

      <div className="relative border-l-2 border-white/5 ml-6 md:ml-10 space-y-12 py-6">
        {atentados.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="relative pl-10 md:pl-16">
              <div className={`absolute -left-7 md:-left-7 top-1 w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center backdrop-blur-md shadow-lg`}>
                <Icon size={24} className={item.color} />
              </div>
              
              <div className="glass-panel p-8 rounded-[2rem] hover:bg-white/5 transition-colors border border-white/5 shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                  <span className="inline-flex px-3.5 py-1.5 rounded-full bg-black/40 border border-white/5 text-xs font-mono font-bold text-muted-strong uppercase tracking-wider whitespace-nowrap shadow-inner">
                    {item.date}
                  </span>
                </div>
                <p className="text-muted text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}