"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

const links = [
  { name: "Inicio", href: "/" },
  { name: "Wiki", href: "/wiki" },
  { name: "Mapa", href: "/mapa" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  
  const [pillPath, setPillPath] = useState<string | null>(pathname);
  const [isDragging, setIsDragging] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const pillPathRef = useRef(pillPath);
  const pathnameRef = useRef(pathname);
  const isDraggingRef = useRef(isDragging);

  useEffect(() => { pillPathRef.current = pillPath; }, [pillPath]);
  useEffect(() => { pathnameRef.current = pathname; }, [pathname]);
  useEffect(() => { isDraggingRef.current = isDragging; }, [isDragging]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerUp = () => {
      if (isDraggingRef.current) {
        setIsDragging(false);
        setTimeout(() => setIsClicking(false), 250);
        
        if (pillPathRef.current && pillPathRef.current !== pathnameRef.current) {
          router.push(pillPathRef.current);
        }
      } else {
        setIsClicking(false);
      }
    };
    window.addEventListener("pointerup", handlePointerUp);
    return () => window.removeEventListener("pointerup", handlePointerUp);
  }, [router]);

  const isActiveState = isDragging || isClicking;
  const isDark = resolvedTheme !== "light";
  const displayPillPath = isActiveState ? pillPath : pathname;

  return (
    <div className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300 flex justify-center pointer-events-none">
      <nav 
        className={`w-full max-w-5xl transition-all duration-500 ease-in-out pointer-events-auto ${
          scrolled 
            ? "glass-panel-strong rounded-[2rem] py-2.5 px-4 md:px-5" 
            : "bg-transparent rounded-full py-4 px-2"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-1 group relative z-10">
              <span className="text-xl font-bold tracking-tight text-foreground group-hover:opacity-80 transition-opacity">
                Polak<span className="text-muted font-medium">Craft</span>
              </span>
            </Link>
          </div>
          
          {/* Liquid Glass Selector (Mac/iOS Style) */}
          <div 
            className="glass-chip relative hidden select-none items-center space-x-1 rounded-full p-0.5 md:flex"
            onPointerLeave={() => {
              if (isDragging) setIsDragging(false);
            }}
          >
            {links.map((link) => {
              const isPillHere = displayPillPath === link.href;
              const textColorClass = isPillHere 
                ? (isActiveState ? (isDark ? "text-white" : "text-black") : "text-black")
                : "text-muted hover:text-foreground";

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onPointerDown={() => {
                    setIsDragging(true);
                    setIsClicking(true);
                    setPillPath(link.href);
                  }}
                  onPointerEnter={() => {
                    if (isDragging) {
                      setPillPath(link.href);
                    }
                  }}
                  onClick={(e) => {
                    if (isDraggingRef.current) {
                      e.preventDefault();
                    }
                  }}
                  className={clsx(
                    "relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 z-10",
                    textColorClass
                  )}
                  draggable={false}
                >
                  {isPillHere && (
                    <motion.div
                      layoutId="liquid-pill"
                      className="absolute inset-0 rounded-full -z-10"
                      initial={false}
                      animate={{
                        scale: isActiveState ? 1.15 : 1,
                        backgroundColor: isActiveState 
                          ? (isDark ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.86)") 
                          : (isDark ? "rgba(255,255,255,0.78)" : "rgba(255,255,255,0.9)"),
                        backdropFilter: "blur(12px)",
                        boxShadow: isActiveState 
                          ? (isDark ? "0 4px 10px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.22)" : "0 4px 10px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)")
                          : (isDark ? "0 3px 8px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.18)" : "0 3px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.78)"),
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                        mass: 1,
                        backgroundColor: { duration: 0.15 },
                        backdropFilter: { duration: 0.15 },
                        boxShadow: { duration: 0.15 },
                        scale: { type: "spring", stiffness: 420, damping: 24 }
                      }}
                    />
                  )}
                  <motion.span
                    className="relative z-20"
                    initial={false}
                    animate={{ scale: isPillHere && isActiveState ? 1.02 : 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              );
            })}
          </div>
          
          <div className="hidden md:flex items-center gap-4 relative z-10">
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2 relative z-10">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass-chip rounded-full p-2 text-foreground focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="glass-panel pointer-events-auto absolute left-4 right-4 top-full mt-2 overflow-hidden rounded-[2rem] md:hidden"
            >
              <div className="flex flex-col py-4 px-2">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative overflow-hidden text-lg font-medium px-6 py-4 rounded-2xl transition-all ${
                        isActive ? "text-background bg-foreground" : "text-muted hover:text-foreground hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
