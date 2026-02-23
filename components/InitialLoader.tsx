"use client";
import { useEffect, useState } from "react";

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
        setTimeout(onComplete, 500);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-[10000] flex flex-col items-start justify-center p-8 md:p-24 font-mono text-black">
      <div className="max-w-4xl w-full">
        {lines.map((line, i) => (
          <div key={i} className="mb-2 text-xl md:text-2xl animate-boot-up">
            {line}
          </div>
        ))}
        <div className="mt-4 text-3xl cursor-blink"></div>
      </div>
    </div>
  );
}
