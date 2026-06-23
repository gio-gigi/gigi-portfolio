import { ContactSection } from "@/features/contact/components/ContactSection";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";
import { AboutSection } from "@/features/home/components/AboutSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { SkillsSection } from "@/features/home/components/SkillsSection";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen text-foreground">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  ); 
}