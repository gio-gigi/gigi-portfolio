"use client";

import { Sparkles } from "lucide-react";
import { Sticker } from "@/components/ui";
import { SectionTitle } from "@/components/shared";
import { tiltStyle } from "@/lib/utils";
import { skills } from "../data/skills";
import { useI18n } from "@/components/providers";

export function SkillsSection() {
  const { t } = useI18n();

  const getVariant = (className: string): "pink" | "cream" | "brown" => {
    if (className.includes("sticker-cream")) return "cream";
    if (className.includes("sticker-brown")) return "brown";
    return "pink";
  };

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionTitle eyebrow={t.skills.eyebrow} title={t.skills.title} />

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {skills.map((s, i) => (
          <Sticker
            key={s.label}
            variant={getVariant(s.className)}
            style={tiltStyle(i)}
          >
            <Sparkles className="h-3.5 w-3.5" /> {s.label}
          </Sticker>
        ))}
      </div>
    </section>
  );
}