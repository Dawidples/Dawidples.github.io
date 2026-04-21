import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel-strong rounded-[2.5rem] px-8 py-10 md:px-12 md:py-12">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            <div className="flex max-w-sm flex-col gap-4">
              <Link href="/" className="group flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tighter text-foreground">
                  Polak<span className="text-muted font-medium">Craft</span>
                </span>
              </Link>
              <p className="text-sm font-light leading-relaxed text-muted">
                Naciones, economia, estaciones y conflictos politicos en una experiencia de Minecraft diseñada para durar.
              </p>
              <div className="glass-panel inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium text-muted-strong">
                <span className="h-2 w-2 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.25)]" />
                Beta oficial activa
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16">
              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-foreground">Servidor</h4>
                <nav className="flex flex-col gap-2">
                  <Link href="/wiki" className="text-sm font-light text-muted transition-colors hover:text-foreground">Wiki</Link>
                  <Link href="/wiki/reglas" className="text-sm font-light text-muted transition-colors hover:text-foreground">Reglas</Link>
                  <Link href="/mapa" className="text-sm font-light text-muted transition-colors hover:text-foreground">Mapa</Link>
                </nav>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-foreground">Comunidad</h4>
                <nav className="flex flex-col gap-2">
                  <a href="https://discord.gg/pNFYPNdsfM" className="text-sm font-light text-muted transition-colors hover:text-foreground">Discord Oficial</a>
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-panel-border/60 pt-6 text-[11px] tracking-[0.18em] text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 PolakCraft. No afiliado con Mojang AB.</p>
            <div className="flex gap-6">
              <span>Privacidad</span>
              <span>Terminos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
