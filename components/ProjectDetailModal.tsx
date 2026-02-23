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
                className="bg-white border-4 border-black w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 md:p-8 relative retro-border-heavy animate-boot-up scrollbar-hide"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 md:top-4 md:right-4 font-mono text-xl md:text-2xl hover:bg-black hover:text-white px-2 transition-colors border-2 border-black bg-white z-10"
                >
                    X
                </button>

                <div className="mb-6 border-b-4 border-black pb-4 mt-8 md:mt-0">
                    <div className="font-mono text-xs md:text-sm opacity-50 mb-1">{project.id}</div>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-black pixel-text animate-glitch leading-tight">{project.title}</h2>
                </div>

                <div className="space-y-6">
                    <div>
                        <h4 className="font-mono text-sm md:text-lg font-bold mb-2 bg-black text-white inline-block px-2">
                            PROJECT_SUMMARY:
                        </h4>
                        <p className="font-mono leading-relaxed text-sm md:text-lg">
                            {project.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-mono text-sm md:text-lg font-bold mb-2 bg-black text-white inline-block px-2">
                            TECHNICAL_DEEP_DIVE:
                        </h4>
                        <p className="font-mono leading-relaxed text-xs md:text-base">
                            {project.longDescription}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-mono text-sm md:text-lg font-bold mb-2 bg-black text-white inline-block px-2">
                            CORE_STACK:
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {project.tech.map((t, i) => (
                                <div key={i} className="retro-border p-2 font-mono text-[10px] md:text-sm text-center truncate">
                                    [x] {t}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-between items-center border-t-4 border-black pt-6">
                    <div className="flex gap-2 md:gap-4">
                        <a
                            href="mailto:rijovarghese450@gmail.com"
                            className="retro-border px-3 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-sm hover:bg-black hover:text-white transition-colors"
                        >
                            [ EMAIL_ENVOY ]
                        </a>
                        <a
                            href="tel:+919605718477"
                            className="retro-border px-3 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-sm hover:bg-black hover:text-white transition-colors"
                        >
                            [ VOICE_LINK ]
                        </a>
                    </div>
                    <button
                        className="retro-border px-4 py-1 md:px-6 md:py-2 font-mono text-xs md:text-sm hover:bg-black hover:text-white transition-colors bg-black text-white"
                        onClick={onClose}
                    >
                        TERMINATE_VIEW
                    </button>
                </div>
            </div>
        </div>
    );
}
