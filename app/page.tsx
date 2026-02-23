"use client";
import { useState } from "react";
import InitialLoader from "@/components/InitialLoader";
import GlitchHeader from "@/components/GlitchHeader";
import SkillsSection from "@/components/SkillsSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TerminalFooter from "@/components/TerminalFooter";
import QuickActions from "@/components/QuickActions";
import ContactSection from "@/components/ContactSection";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import { Project } from "@/constants/projects";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (loading) {
    return <InitialLoader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen selection:bg-black selection:text-white">
      {/* Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        <div className="w-full h-1 bg-black/10 absolute top-0 left-0 animate-scanline"></div>
      </div>

      <div className="boot-line">
        <GlitchHeader />
        <SkillsSection />
        <ProjectsGrid onProjectSelect={setSelectedProject} />
        <ExperienceTimeline />
        <ContactSection />
        <TerminalFooter />
        <QuickActions />
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
