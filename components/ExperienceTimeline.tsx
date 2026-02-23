"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
    {
        company: "IROID TECHNOLOGIES",
        role: "Node JS Developer",
        period: "2024 - PRESENT",
        description: "Backend Developer for Mosaic (B2B Quick-Commerce). Developing scalable services using Node.js and MongoDB. Implementing Redis caching and Stripe integration. Full-stack lead for Callndr microservices architecture.",
    },
    {
        company: "INNOVATURE LABS",
        role: "Software Engineer",
        period: "2022 - 2024",
        description: "Built interactive web applications using NestJS, React, and Vue.js. Integrated Snowflake with R/Shiny for data analysis. Developed job portals and task management systems with Spring Boot and Angular.",
    },
];

export default function ExperienceTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            let p = (windowHeight - rect.top) / (rect.height + windowHeight / 2);
            p = Math.min(Math.max(p * 100, 0), 100);
            setProgress(p);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="max-w-7xl mx-auto p-6 md:p-12 mb-20">
            <h2 className="text-4xl font-black mb-12 pixel-text cursor-blink">WORK_LOG</h2>
            <div ref={containerRef} className="relative flex">
                {/* Loading Bar Column */}
                <div className="w-4 sm:w-8 mr-4 sm:mr-8 border-4 border-black relative bg-zinc-200">
                    <div
                        className="absolute top-0 left-0 w-full bg-black transition-all duration-100"
                        style={{ height: `${progress}%` }}
                    ></div>
                </div>
                {/* Roles Column */}
                <div className="flex-1 space-y-24">
                    {experiences.map((exp, i) => (
                        <div key={i} className="invert-hover p-4 transition-colors">
                            <h3 className="text-xl sm:text-3xl font-black">{exp.company}</h3>
                            <p className="font-mono text-lg sm:text-xl">{exp.role} | {exp.period}</p>
                            <p className="mt-4 max-w-2xl font-mono leading-relaxed text-sm sm:text-base">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
