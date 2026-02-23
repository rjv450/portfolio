"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

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
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Indicator position based on scroll progress
    const indicatorTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="max-w-7xl mx-auto p-6 md:p-12 mb-20 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black mb-12 pixel-text cursor-blink fluid-h2"
            >
                WORK_LOG.LOG
            </motion.h2>

            <div ref={containerRef} className="relative flex">
                {/* Loading Bar Column */}
                <div className="w-2 md:w-4 mr-6 md:mr-12 border-2 md:border-4 border-black relative bg-zinc-200 min-h-[500px]">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-black origin-top"
                        style={{ scaleY }}
                    ></motion.div>

                    {/* Floating Scroll Indicator */}
                    <motion.div
                        style={{ top: indicatorTop }}
                        className="absolute -right-3 md:-right-6 flex items-center justify-center bg-black text-white p-1 md:p-2 border-2 border-white translate-x-1/2 z-10"
                    >
                        <ChevronRight size={16} />
                    </motion.div>
                </div>

                {/* Roles Column */}
                <div className="flex-1 space-y-16 md:space-y-32">
                    {experiences.map((exp, i) => (
                        <ExperienceItem key={i} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExperienceItem({ exp, index }: { exp: typeof experiences[0], index: number }) {
    const itemRef = useRef(null);
    const { scrollYProgress: itemProgress } = useScroll({
        target: itemRef,
        offset: ["start center", "end center"]
    });

    const opacity = useTransform(itemProgress, [0, 0.4, 0.6, 1], [0.3, 1, 1, 0.3]);
    const scale = useTransform(itemProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
    const x = useTransform(itemProgress, [0, 0.5, 1], [-20, 0, -20]);

    return (
        <motion.div
            ref={itemRef}
            style={{ opacity, scale, x }}
            className="invert-hover p-6 md:p-8 transition-all border-l-4 border-black md:border-4 relative bg-white"
        >
            <div className="absolute -top-4 -left-4 bg-black text-white px-3 py-1 font-mono text-xs md:text-sm border-2 border-white z-10">
                LOG_ENTRY_0{index + 1}
            </div>

            <div className="flex items-center gap-3 mb-4">
                <Briefcase size={20} className="text-black" />
                <h3 className="text-xl md:text-4xl font-black">{exp.company}</h3>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-black text-white px-2 py-1 font-mono text-[10px] md:text-xs">
                    ROLE: {exp.role}
                </span>
                <span className="border-2 border-black px-2 py-1 font-mono text-[10px] md:text-xs">
                    PERIOD: {exp.period}
                </span>
            </div>

            <p className="max-w-3xl font-mono leading-relaxed text-sm md:text-xl border-t-2 border-black/10 pt-4">
                {exp.description}
            </p>

            <div className="mt-8 flex justify-end">
                <div className="h-1 w-24 bg-black/20 relative overflow-hidden">
                    <motion.div
                        style={{ scaleX: itemProgress }}
                        className="absolute inset-0 bg-black origin-left"
                    />
                </div>
            </div>
        </motion.div>
    );
}
