"use client";
import { Project } from "@/constants/projects";

export default function ProjectDetailModal({
    project,
    isOpen,
    onClose
}: {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}) {
    if (!isOpen || !project) return null;

    return (
        <div
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white border-4 border-black w-full max-w-2xl p-4 md:p-8 relative retro-border-heavy animate-boot-up"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 font-mono text-2xl hover:bg-black hover:text-white px-2 transition-colors border-2 border-black"
                >
                    X
                </button>

                <div className="mb-6 border-b-4 border-black pb-4">
                    <div className="font-mono text-xs md:text-sm opacity-50 mb-1">{project.id}</div>
                    <h2 className="text-2xl md:text-4xl font-black pixel-text animate-glitch">{project.title}</h2>
                </div>

                <div className="space-y-6">
                    <div>
                        <h4 className="font-mono text-base md:text-lg font-bold mb-2 bg-black text-white inline-block px-2">
                            PROJECT_SUMMARY:
                        </h4>
                        <p className="font-mono leading-relaxed text-base md:text-lg">
                            {project.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-mono text-base md:text-lg font-bold mb-2 bg-black text-white inline-block px-2">
                            TECHNICAL_DEEP_DIVE:
                        </h4>
                        <p className="font-mono leading-relaxed text-sm md:text-base">
                            {project.longDescription}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-mono text-lg font-bold mb-2 bg-black text-white inline-block px-2">
                            CORE_STACK:
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {project.tech.map((t, i) => (
                                <div key={i} className="retro-border p-2 font-mono text-sm text-center">
                                    [x] {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-between items-center border-t-4 border-black pt-6">
                    <div className="flex gap-4">
                        <a
                            href="mailto:rijovarghese450@gmail.com"
                            className="retro-border px-4 py-2 font-mono text-sm hover:bg-black hover:text-white transition-colors"
                        >
                            [ EMAIL_ENVOY ]
                        </a>
                        <a
                            href="tel:+919605718477"
                            className="retro-border px-4 py-2 font-mono text-sm hover:bg-black hover:text-white transition-colors"
                        >
                            [ VOICE_LINK ]
                        </a>
                    </div>
                    <button
                        className="retro-border px-6 py-2 font-mono hover:bg-black hover:text-white transition-colors bg-black text-white"
                        onClick={onClose}
                    >
                        TERMINATE_VIEW
                    </button>
                </div>
            </div>
        </div>
    );
}
