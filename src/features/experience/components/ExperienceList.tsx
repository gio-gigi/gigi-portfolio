import { SectionTitle } from "@/components/shared";
import { experience } from "../data";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceList() {
  return (
    <section id="experience-list" className="mx-auto max-w-6xl px-6 ">
      <SectionTitle eyebrow="experiencia" title="Por dónde he pasado" />

      <div className="mt-10 space-y-6">
        {experience.map((e) => (
          <ExperienceCard key={e.role} item={e} />
        ))}
      </div>
    </section>
  );
}