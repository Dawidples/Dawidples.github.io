"use client";

import { useState } from "react";
import { Copy, Check, Server } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface CopyIPButtonProps {
  ip: string;
  port?: string;
  className?: string;
  label?: string;
}

export default function CopyIPButton({ ip, port, className, label = "Copiar IP" }: CopyIPButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(port ? `${ip}:${port}` : ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className={twMerge(
        clsx(
          "text-sm font-semibold",
          copied
            ? "inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white text-slate-950 px-6 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
            : "btn-primary px-6 py-3",
          className
        )
      )}
    >
      <Server size={18} />
      <span>
        {copied ? "¡IP Copiada!" : label}
      </span>
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </motion.button>
  );
}
