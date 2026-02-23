"use client";
import { motion } from "framer-motion";
import { projects, Project } from "@/constants/projects";
import { ExternalLink, Cpu } from "lucide-react";

export default function ProjectsGrid({
    onProjectSelect
}: {
    onProjectSelect: (project: Project) => void
}) {
    return (
        <main className="max-w-7xl mx-auto p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => onProjectSelect(project)}
                        className={`${project.colSpan} border-4 border-black p-6 md:p-8 relative overflow-hidden group min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-black hover:text-white bg-white`}
                    >
                        <div className="absolute top-4 left-4 font-mono text-xs md:text-sm uppercase opacity-50 flex items-center gap-2">
                            <Cpu size={14} />
                            {project.id}
                        </div>

                        <div className="group-hover:opacity-0 transition-opacity duration-300 px-4">
                            <h3 className="text-2xl md:text-4xl font-black mb-2 break-words">{project.title}</h3>
                            <p className="text-base md:text-lg font-mono opacity-80">{project.description}</p>
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 bg-black text-white">
                            <h4 className="text-xl md:text-2xl font-bold mb-4 font-mono flex items-center gap-2">
                                <ExternalLink size={20} />
                                TECH_SPEC:
                            </h4>
                            <ul className="font-mono space-y-1 md:space-y-2 text-sm md:text-xl">
                                {project.tech.slice(0, 4).map((t, idx) => (
                                    <li key={idx}>[x] {t}</li>
                                ))}
                                {project.tech.length > 4 && <li>...</li>}
                            </ul>
                            <div className="mt-6 md:mt-8 border-2 border-white px-4 py-2 font-mono text-xs md:text-sm animate-pulse">
                                CLICK_FOR_DETAILS
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
