"use client";
import { projects, Project } from "@/constants/projects";

export default function ProjectsGrid({
    onProjectSelect
}: {
    onProjectSelect: (project: Project) => void
}) {
    return (
        <main className="max-w-7xl mx-auto p-6 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => onProjectSelect(project)}
                        className={`${project.colSpan} border-4 border-black p-8 relative overflow-hidden group min-h-[400px] flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-300 hover:bg-black hover:text-white`}
                    >
                        <div className="absolute top-4 left-4 font-mono text-sm uppercase opacity-50">
                            {project.id}
                        </div>
                        <div className="group-hover:hidden px-4">
                            <h3 className="text-4xl font-black mb-2">{project.title}</h3>
                            <p className="text-lg font-mono">{project.description}</p>
                        </div>
                        <div className="hidden group-hover:flex flex-col items-center">
                            <h4 className="text-2xl font-bold mb-4 font-mono">TECH_SPEC:</h4>
                            <ul className="font-mono space-y-2 text-xl">
                                {project.tech.map((t, idx) => (
                                    <li key={idx}>[x] {t}</li>
                                ))}
                            </ul>
                            <div className="mt-8 border-2 border-white px-4 py-2 font-mono text-sm">
                                PROJECT_DETAILS_DECRYPT
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
