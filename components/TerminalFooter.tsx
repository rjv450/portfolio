"use client";
import { useState, useRef, useEffect } from "react";

export default function TerminalFooter() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState<string[]>([]);
    const [history, setHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const scrollRef = useRef<HTMLDivElement>(null);

    const commands = ["help", "contact", "phone", "whoami", "github", "linkedin", "resume", "clear", "skills", "projects", "experience"];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
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
            } else if (cmd === "contact" || cmd === "message") {
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
                response = "> DOWNLOADING SYSTEM_DOSSIER.PDF (RESUME-2026)...";
                setTimeout(() => window.open("/docs/Rijo_varughese_resume-2026.pdf", "_blank"), 500);
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
        <footer className="bg-black text-green-500 p-6 md:p-12 font-mono">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-4 border-b border-green-900 pb-2">
                    <span>RIJO_OS_TERMINAL_V1.0</span>
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-600"></div>
                        <div className="w-3 h-3 bg-yellow-600"></div>
                        <div className="w-3 h-3 bg-green-600"></div>
                    </div>
                </div>

                <div className="mb-6 space-y-2 max-h-[400px] overflow-y-auto scrollbar-hide">
                    <p>&gt; INITIALIZING SYSTEM...</p>
                    <p>&gt; LOGIN SUCCESSFUL. WELCOME, USER.</p>
                    <p className="text-zinc-500">Type &apos;HELP&apos; to see available protocols.</p>
                    <p className="text-zinc-500">[ type &apos;resume&apos; to download | type &apos;phone&apos; to call | type &apos;contact&apos; to email ]</p>
                    {output.map((line, i) => (
                        <p key={i} className={line.startsWith(">") ? "text-white opacity-80" : "text-green-500"}>
                            {line}
                        </p>
                    ))}
                    <div ref={scrollRef}></div>
                </div>

                <div className="flex items-center mb-8">
                    <span className="mr-2 text-green-500 font-bold">rijo@portfolio:~$</span>
                    <input
                        type="text"
                        className="bg-transparent border-none focus:ring-0 text-green-500 w-full p-0 font-mono outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        autoFocus
                    />
                </div>

                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/rijo-v-b376aaaa/" target="_blank" className="retro-border border-green-900 p-2 text-green-500 hover:bg-green-500 hover:text-black transition-colors flex items-center">
                        <span className="mr-2">[LNK]</span> LINKEDIN
                    </a>
                    <a href="https://github.com/rjv450" target="_blank" className="retro-border border-green-900 p-2 text-green-500 hover:bg-green-500 hover:text-black transition-colors flex items-center">
                        <span className="mr-2">[GIT]</span> GITHUB
                    </a>
                </div>
            </div>
        </footer>
    );
}
