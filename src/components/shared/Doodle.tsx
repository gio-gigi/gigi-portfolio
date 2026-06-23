import { Sparkles } from "lucide-react";

export function Doodle({ className = "" }: { className?: string }) {
  return (
    <Sparkles
      className={className}
      style={{ color: "var(--strawberry)" }}
      strokeWidth={2.5}
    />
  );
}