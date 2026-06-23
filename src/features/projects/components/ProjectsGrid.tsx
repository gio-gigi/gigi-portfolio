"use client";

import { SectionTitle } from "@/components/shared";
import { useI18n } from "@/components/providers";

import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";

export function ProjectsGrid() {
  const { t } = useI18n();

  return (
    <section id="projects-grid" className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle eyebrow={t.projects.eyebrow} title={t.projects.title} />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}