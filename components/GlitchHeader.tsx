"use client";

export default function GlitchHeader() {
    return (
        <header className="p-8 md:p-12 border-b-4 border-black relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <h1
                    className="text-4xl sm:text-6xl md:text-8xl font-black pixel-text animate-glitch tracking-tighter cursor-default"
                    data-text="RIJO VARUGHESE"
                >
                    RIJO VARUGHESE
                </h1>
                <p className="mt-4 text-xl font-mono bg-black text-white px-4 py-1 cursor-blink">
                    &gt; LOAD_SYSTEM_V3.0_FULLSTACK_ENG
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                        href="/docs/Rijo_varughese_resume-2026.pdf"
                        target="_blank"
                        className="retro-border px-6 py-2 font-mono hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 active:translate-y-0"
                    >
                        [ DOWNLOAD_DOSSIER ]
                    </a>
                    <a
                        href="mailto:rijovarghese450@gmail.com"
                        className="retro-border px-6 py-2 font-mono hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 active:translate-y-0"
                    >
                        [ SECURE_CONTACT ]
                    </a>
                </div>
            </div>
        </header>
    );
}
