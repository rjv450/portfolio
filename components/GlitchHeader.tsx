"use client";
import { motion } from "framer-motion";
import { Terminal, Download, Send } from "lucide-react";

export default function GlitchHeader() {
    return (
        <header className="p-8 md:p-12 border-b-4 border-black relative z-10 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1
                        className="font-black pixel-text animate-glitch tracking-tighter cursor-default fluid-h1 mb-4"
                        data-text="RIJO VARUGHESE"
                    >
                        RIJO VARUGHESE
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl font-mono bg-black text-white px-4 py-2 cursor-blink flex items-center gap-2"
                >
                    <Terminal size={20} className="text-terminal-green" />
                    <span>&GT; LOAD_SYSTEM_V3.0_FULLSTACK_ENG</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4"
                >
                    <a
                        href="/docs/Rijo_varughese_resume-2026.pdf"
                        target="_blank"
                        className="retro-border invert-hover px-8 py-3 font-mono transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                        <Download size={18} />
                        <span>[ DOWNLOAD_DOSSIER ]</span>
                    </a>
                    <a
                        href="mailto:rijovarghese450@gmail.com"
                        className="retro-border invert-hover px-8 py-3 font-mono transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 text-sm md:text-base"
                    >
                        <Send size={18} />
                        <span>[ SECURE_CONTACT ]</span>
                    </a>
                </motion.div>
            </div>
        </header>
    );
}
