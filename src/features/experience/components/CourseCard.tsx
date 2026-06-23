import { GraduationCap } from "lucide-react";
import { IconBadge } from "@/components/ui";
import type { Course } from "../types";

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <div
      className="paper flex items-center gap-4 p-5"
      style={{ transform: `rotate(${index % 2 ? -0.5 : 0.5}deg)` }}
    >
      <IconBadge size="lg" bg="var(--strawberry)">
        <GraduationCap className="h-5 w-5" />
      </IconBadge>

      <div className="flex-1">
        <h3 className="text-lg leading-tight">{course.name}</h3>
        <p className="text-sm text-[color:var(--muted-foreground)]">
          {course.org} · {course.year}
        </p>
      </div>
    </div>
  );
}