import { Briefcase } from "lucide-react";
import { IconBadge } from "@/components/ui";
import type { ExperienceItem } from "../types";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="paper p-7 md:p-9">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div className="flex items-center gap-3">
          <IconBadge bg="var(--vanilla)">
            <Briefcase className="h-4 w-4" />
          </IconBadge>
          <div>
            <h3 className="text-xl">{item.role}</h3>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              {item.company}
            </p>
          </div>
        </div>
        <span className="font-hand text-lg" style={{ color: "var(--chocolate)" }}>
          {item.period}
        </span>
      </div>

      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[color:var(--muted-foreground)]">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}