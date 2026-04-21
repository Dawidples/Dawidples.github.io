"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  BookOpen, 
  Compass, 
  Flame, 
  Flag, 
  CalendarDays, 
  Globe, 
  ShieldAlert 
} from "lucide-react";
import { clsx } from "clsx";

const sidebarLinks = [
  { name: "Inicio Wiki", href: "/wiki", icon: BookOpen },
  { name: "Guía", href: "/wiki/guia", icon: Compass },
  { name: "Lore", href: "/wiki/lore", icon: Flame },
  { name: "Naciones", href: "/wiki/naciones", icon: Flag },
  { name: "Calendario", href: "/wiki/calendario", icon: CalendarDays },
  { name: "ONU", href: "/wiki/onu", icon: Globe },
  { name: "Reglas", href: "/wiki/reglas", icon: ShieldAlert },
];

export default function WikiLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen pt-28 md:pt-36 pb-24">
      <div className="section-shell">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="md:w-72 flex-shrink-0">
            <div className="glass-panel-strong rounded-[2rem] p-6 md:sticky md:top-32 border border-white/5 shadow-xl">
              <h3 className="text-xs font-bold text-muted-strong uppercase tracking-[0.15em] mb-5 px-3">
                Navegación
              </h3>
              <nav className="flex flex-col gap-1.5">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={clsx(
                        "flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200",
                        isActive 
                          ? "bg-foreground text-background shadow-lg scale-[1.02]" 
                          : "text-muted hover:text-foreground hover:bg-white/5"
                      )}
                    >
                      <Icon size={18} className={clsx(isActive ? "text-background" : "text-muted-strong")} />
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 glass-panel rounded-[3rem] p-8 md:p-14 border border-white/5 shadow-2xl relative overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}