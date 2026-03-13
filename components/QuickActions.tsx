"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, Phone, Plus, X, HelpCircle } from "lucide-react";

export default function QuickActions() {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        { icon: <Download size={20} />, label: "GET_RESUME", href: "/docs/Resume%20-%20Rijo%20Varughese%20(1).pdf", target: "_blank" },
        { icon: <Mail size={20} />, label: "CONTACT_ME", href: "mailto:rijovarghese450@gmail.com" },
        { icon: <Phone size={20} />, label: "CALL_NOW", href: "tel:+919605718477" },
    ];

    return (
        <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[10000] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="flex flex-col gap-3 mb-2"
                    >
                        {actions.map((action, i) => (
                            <motion.a
                                key={i}
                                href={action.href}
                                target={action.target}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-black text-white px-4 py-3 md:px-6 md:py-2 retro-border-heavy font-mono hover:bg-white hover:text-black transition-all flex items-center justify-between gap-4 group min-w-[180px]"
                            >
                                <span className="text-xs md:text-sm font-bold tracking-tighter">[{action.label}]</span>
                                {action.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-none border-4 border-black flex items-center justify-center font-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${isOpen ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'
                    }`}
            >
                {isOpen ? <X size={32} /> : <HelpCircle size={32} />}
            </motion.button>
        </div>
    );
}
