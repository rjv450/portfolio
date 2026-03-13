"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Github, Linkedin, HelpCircle, ShieldCheck } from "lucide-react";

export default function TerminalFooter() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const scrollRef = useRef<HTMLDivElement>(null);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    const commands = ["help", "contact", "email", "phone", "whoami", "github", "linkedin", "resume", "clear", "skills", "projects", "experience"];

    useEffect(() => {
        if (terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [output]);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (history.length > 0) {
                const nextIndex = historyIndex + 1;
                if (nextIndex < history.length) {
                    setHistoryIndex(nextIndex);
                    setInput(history[history.length - 1 - nextIndex]);
                }
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex > 0) {
                const nextIndex = historyIndex - 1;
                setHistoryIndex(nextIndex);
                setInput(history[history.length - 1 - nextIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        } else if (e.key === "Tab") {
            e.preventDefault();
            if (input.trim()) {
                const matches = commands.filter(c => c.startsWith(input.toLowerCase()));
                if (matches.length > 0) {
                    setInput(matches[0]);
                }
            }
        } else if (e.key === "Enter") {
            const cmd = input.toLowerCase().trim();
            if (cmd) {
                setHistory((prev) => [...prev, input]);
                setHistoryIndex(-1);
            }
            const newOutput = [...output, `rijo@portfolio:~$ ${input}`];

            let response = "";
            if (cmd === "help") {
                response = "> AVAILABLE: HELP, CONTACT, PHONE, WHOAMI, GITHUB, LINKEDIN, RESUME, SKILLS, PROJECTS, EXPERIENCE, CLEAR";
            } else if (cmd === "whoami") {
                response = "> RIJO VARUGHESE: A PASSIONATE FULL-STACK ENGINEER WITH 3.5+ YEARS OF EXPERIENCE IN ARCHITECTING SCALABLE SOLUTIONS AND CRAFTING INTUITIVE USER EXPERIENCES. SPECIALIZING IN NEXT.JS, NODE.JS, AND CLOUD ARCHITECTURES. DRIVEN BY PRECISION AND INNOVATION.";
            } else if (cmd === "skills") {
                response = "> EXECUTING SKILLS_SCAN... LOADED: NEXT.JS, REACT, NODE.JS, TYPESCRIPT, AWS, SNOWFLAKE, DOCKER, KUBERNETES...";
            } else if (cmd === "projects") {
                response = "> QUERYING PROJECT_DATABASE... MOST RECENT: MOSAIC (B2B CAMERA HUB), CALLNDR, DENTCARE...";
            } else if (cmd === "experience") {
                response = "> RETRIEVING CAREER_CHRONOLOGY... CURRENT: SENIOR FULL-STACK ENGINEER | PAST: IROID TECHNOLOGIES, INNOVATURE LABS.";
            } else if (cmd === "phone" || cmd === "call") {
                response = "> MOBILE_ID: +919605718477 (KOCHI, INDIA). INITIATING PHONE_BRIDGE...";
                setTimeout(() => {
                    window.location.href = "tel:+919605718477";
                }, 1500);
            } else if (cmd === "contact" || cmd === "message" || cmd === "email") {
                response = "> INITIATING SECURE CHANNEL... MAIL: rijovarghese450@gmail.com | MOB: +919605718477";
                setTimeout(() => {
                    window.location.href = "mailto:rijovarghese450@gmail.com";
                }, 1500);
            } else if (cmd === "github") {
                response = "> OPENING REPOSITORY...";
                setTimeout(() => window.open("https://github.com/rjv450", "_blank"), 500);
            } else if (cmd === "linkedin") {
                response = "> ESTABLISHING PROFESSIONAL CONNECTION...";
                setTimeout(() => window.open("https://www.linkedin.com/in/rijo-v-b376aaaa/", "_blank"), 500);
            } else if (cmd === "resume") {
                response = "> DOWNLOADING SYSTEM_DOSSIER.PDF (UPDATED_RESUME)...";
                setTimeout(() => window.open("/docs/Resume%20-%20Rijo%20Varughese%20(1).pdf", "_blank"), 500);
            } else if (cmd === "clear") {
                setOutput([]);
                setInput("");
                return;
            } else {
                response = `> COMMAND NOT FOUND: ${cmd}`;
            }

            setOutput([...newOutput, response]);
            setInput("");
        }
    };

    return (
        <footer className="bg-black text-green-500 p-4 md:p-12 font-mono mt-20">
            <div className="max-w-4xl mx-auto border-4 border-green-900/30 p-4 md:p-6 bg-green-950/10">
                <div className="flex items-center justify-between mb-4 border-b border-green-900/50 pb-2">
                    <div className="flex items-center gap-2">
                        <Terminal size={14} />
                        <span className="text-xs md:text-sm">RIJO_OS_TERMINAL_V1.0</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-600"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-600"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-600"></div>
                    </div>
                </div>

                <div className="mb-6 space-y-2 h-[300px] md:h-[400px] overflow-y-auto scrollbar-hide text-xs md:text-base">
                    <p className="flex items-center gap-2"><ShieldCheck size={14} /> INITIALIZING SYSTEM...</p>
                    <p>&gt; LOGIN SUCCESSFUL. WELCOME, USER.</p>
                    <p className="text-zinc-500 flex items-center gap-2"><HelpCircle size={14} /> Type &apos;HELP&apos; to see protocols.</p>
                    <p className="text-zinc-500 opacity-60">[ type &apos;resume&apos; | type &apos;phone&apos; | type &apos;contact&apos; ]</p>
                    {output.map((line, i) => (
                        <p key={i} className={`break-words ${line.startsWith(">") ? "text-white opacity-90" : "text-green-500"}`}>
                            {line}
                        </p>
                    ))}
                    <div ref={terminalEndRef}></div>
                </div>

                <div className="flex items-center mb-8 border-t border-green-900/30 pt-4">
                    <span className="mr-2 text-green-500 font-bold shrink-0">rijo@portfolio:~$</span>
                    <input
                        type="text"
                        className="bg-transparent border-none focus:ring-0 text-green-500 w-full p-0 font-mono outline-none text-xs md:text-base"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        autoFocus
                    />
                </div>

                <div className="flex flex-wrap gap-4">
                    <a href="https://www.linkedin.com/in/rijo-v-b376aaaa/" target="_blank" className="retro-border border-green-900/50 p-2 text-green-500 hover:bg-green-500 hover:text-black transition-all flex items-center text-xs md:text-sm bg-transparent">
                        <Linkedin size={14} className="mr-2" /> LINKEDIN
                    </a>
                    <a href="https://github.com/rjv450" target="_blank" className="retro-border border-green-900/50 p-2 text-green-500 hover:bg-green-500 hover:text-black transition-all flex items-center text-xs md:text-sm bg-transparent">
                        <Github size={14} className="mr-2" /> GITHUB
                    </a>
                </div>
            </div>
            <div className="text-center mt-12 opacity-30 text-[10px] uppercase tracking-widest">
                © 2026 RIJO VARUGHESE // ALL_RIGHTS_RESERVED
            </div>
        </footer>
    );
}
