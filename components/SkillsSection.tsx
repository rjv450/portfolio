"use client";

export default function SkillsSection() {
    const skills = [
        "BACKEND: NESTJS, NODEJS, SPRING BOOT, DJANGO",
        "FRONTEND: REACT, NEXTJS, ANGULAR, VUE.JS",
        "DATABASE: MYSQL, MONGODB, REDIS, SNOWFLAKE",
        "CLOUD & DEVOPS: AWS (EC2, S3, RDS, IAM, REKOGNITION), DOCKER",
        "DATA TOOLS: R, SHINY, POWER QUERY, DAX",
        "SEARCH & CACHE: ELASTICSEARCH, REDIS",
        "VERSION CONTROL: GIT, GITHUB, GITLAB",
        "TASK MGMT: JIRA, BACKLOG",
    ];

    return (
        <section className="border-b-4 border-black bg-zinc-50 py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 border-b-4 border-black pb-4">
                    <h2 className="text-2xl sm:text-4xl font-black pixel-text text-center sm:text-left">DIR: /SKILLS_SYSTEM</h2>
                    <span className="font-mono text-xs sm:text-sm mt-2 sm:mt-0">{skills.length} FILES DETECTED</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="retro-border p-3 md:p-4 invert-hover transition-colors font-mono cursor-default text-sm md:text-base"
                        >
                            [X] {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
