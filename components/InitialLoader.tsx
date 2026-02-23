"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield } from "lucide-react";

export default function InitialLoader({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const bootSequence = [
    "> INITIALIZING SYSTEM_V3.0...",
    "> LOADING KERNEL MODULES...",
    "> CHECKING PERIPHERALS...",
    "> ESTABLISHING SECURE PROTOCOLS...",
    "> MOUNTING FILE SYSTEMS...",
    "> OPTIMIZING UI_ENGINE...",
    "> SYSTEM READY."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-[20000] flex flex-col items-center justify-center p-8 md:p-24 font-mono text-black overflow-hidden"
    >
      <div className="max-w-4xl w-full border-4 border-black p-6 md:p-12 relative bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center gap-2 mb-8 border-b-4 border-black pb-4">
          <Terminal size={24} />
          <span className="text-xl md:text-2xl font-black">RIJO_OS_BOOT_SEQUENCE</span>
        </div>

        <div className="space-y-3">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm md:text-xl flex items-center gap-2"
            >
              <Shield size={16} className={i === bootSequence.length - 1 ? "text-green-600" : "text-black"} />
              <span className={i === bootSequence.length - 1 ? "font-bold text-green-600" : ""}>{line}</span>
            </motion.div>
          ))}
          <div className="text-2xl cursor-blink mt-4">_</div>
        </div>

        <div className="absolute bottom-4 right-4 text-[10px] opacity-30 uppercase">
          Authorization: REQUIRED // Level: ADMIN
        </div>
      </div>
    </motion.div>
  );
}
