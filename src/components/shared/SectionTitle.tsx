import { Sparkles } from "lucide-react";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
}

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="text-center">
      <span className="font-hand text-xl" style={{ color: "var(--chocolate)" }}>
        {eyebrow} <Sparkles className="inline h-4 w-4" />
      </span>
      <h2 className="mt-1 text-4xl italic md:text-5xl">{title}</h2>
    </div>
  );
}