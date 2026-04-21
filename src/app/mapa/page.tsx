"use client";

import { motion } from "framer-motion";

export default function MapaPage() {
  return (
    <div className="pb-10 pt-24 md:pt-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel-strong relative overflow-hidden rounded-[2.5rem] p-3"
        >
          <div className="absolute left-6 top-6 z-10 flex flex-wrap items-center gap-3">
            <div className="glass-panel inline-flex items-center gap-3 rounded-full px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
              <span className="text-sm font-semibold text-foreground">Mapa en vivo</span>
            </div>
            <a
              href="http://46.101.222.114:8100"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel inline-flex rounded-full px-4 py-2.5 text-sm font-medium text-muted-strong transition-colors hover:text-foreground"
            >
              Pantalla completa
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <iframe
              src="http://46.101.222.114:8100"
              className="h-[78vh] min-h-[640px] w-full border-none bg-background"
              title="PolakCraft BlueMap"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
