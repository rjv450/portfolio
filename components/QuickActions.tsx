"use client";
import { useState } from "react";

export default function QuickActions() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[10000] flex flex-col items-end space-y-4">
            {isOpen && (
                <div className="flex flex-col space-y-4 animate-boot-up">
                    <a
                        href="/docs/Rijo_varughese_resume-2026.pdf"
                        target="_blank"
                        className="bg-black text-white px-6 py-2 retro-border-heavy font-mono hover:bg-white hover:text-black transition-colors"
                    >
                        [ GET_RESUME ]
                    </a>
                    <a
                        href="mailto:rijovarghese450@gmail.com"
                        className="bg-black text-white px-6 py-2 retro-border-heavy font-mono hover:bg-white hover:text-black transition-colors"
                    >
                        [ CONTACT_ME ]
                    </a>
                    <a
                        href="tel:+919605718477"
                        className="bg-black text-white px-6 py-2 retro-border-heavy font-mono hover:bg-white hover:text-black transition-colors"
                    >
                        [ CALL_NOW ]
                    </a>
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-none border-4 border-black flex items-center justify-center font-black text-2xl transition-all ${isOpen ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'
                    }`}
            >
                {isOpen ? 'X' : '?'}
            </button>
        </div>
    );
}
