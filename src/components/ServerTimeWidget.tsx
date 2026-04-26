"use client";

import { useEffect, useState } from "react";
import { Clock, Calendar, Leaf, Sun, CloudRain, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

interface ServerState {
  day: number;
  month: number;
  year: number;
  date: string;
  season: string;
  seasonName: string;
  seasonColor: string;
  phase: string;
  phaseName: string;
  time24: string;
  hour: number;
  minute: number;
  advancing: boolean;
}

export default function ServerTimeWidget() {
  const [state, setState] = useState<ServerState | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const res = await fetch("https://api.polakcraft.me/state.json", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        setState(data);
        setError(false);
      } catch (err) {
        console.error("Error fetching server time:", err);
        setError(true);
      }
    };

    fetchTime();
    const interval = setInterval(fetchTime, 5000);
    return () => clearInterval(interval);
  }, []);

  if (error) return null;

  if (!state) {
    return (
      <div className="glass-panel rounded-2xl px-5 py-4 border border-white/5 shadow-lg flex items-center justify-center animate-pulse min-h-[140px]">
        <div className="flex items-center gap-3 text-muted-strong">
          <Clock className="animate-spin" size={20} />
          <span className="text-xs font-bold tracking-widest uppercase">Sincronizando reloj...</span>
        </div>
      </div>
    );
  }

  const getSeasonIcon = (season: string) => {
    switch (season) {
      case "spring": return <Leaf size={18} style={{ color: state.seasonColor }} />;
      case "summer": return <Sun size={18} style={{ color: state.seasonColor }} />;
      case "autumn": return <CloudRain size={18} style={{ color: state.seasonColor }} />;
      case "winter": return <Snowflake size={18} style={{ color: state.seasonColor }} />;
      default: return <Leaf size={18} style={{ color: state.seasonColor }} />;
    }
  };

  const translateSeason = (seasonName: string) => {
    const lowerSeason = seasonName.toLowerCase();
    if (lowerSeason.includes("spring")) return "Primavera";
    if (lowerSeason.includes("summer")) return "Verano";
    if (lowerSeason.includes("autumn") || lowerSeason.includes("fall")) return "Otoño";
    if (lowerSeason.includes("winter")) return "Invierno";
    return seasonName;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/5 shadow-lg relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-5">
        <div className="flex items-center gap-1.5 glass-inner px-2.5 py-1 rounded-full bg-black/20">
          <span className="relative flex h-2 w-2">
            {state.advancing && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            )}
            <span className={`relative inline-flex rounded-full h-2 w-2 ${state.advancing ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-yellow-500'}`}></span>
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-muted-strong">Live</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-1.5">
            Estación Actual
          </p>
          <div className="flex items-center gap-2.5">
            <div className="glass-inner p-2.5 rounded-xl bg-black/20 border border-white/5 shadow-inner">
              {getSeasonIcon(state.season)}
            </div>
            <span className="text-xl font-extrabold tracking-tight capitalize" style={{ color: state.seasonColor, textShadow: `0 2px 10px ${state.seasonColor}40` }}>
              {translateSeason(state.seasonName)}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 mt-1">
          <div>
            <div className="flex items-center gap-1.5 text-muted-strong mb-1">
              <Calendar size={13} />
              <p className="text-[9px] font-bold uppercase tracking-[0.2em]">Fecha</p>
            </div>
            <p className="text-base font-bold text-foreground font-mono">{state.date}</p>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-muted-strong mb-1">
              <Clock size={13} />
              <p className="text-[9px] font-bold uppercase tracking-[0.2em]">Hora In-Game</p>
            </div>
            <p className="text-base font-bold text-foreground font-mono">{state.time24}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
