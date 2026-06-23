import { cn } from "@/lib/utils";

interface IconBadgeProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  bg?: string; // CSS var or hex
  className?: string;
}

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export function IconBadge({
  children,
  size = "md",
  bg = "var(--vanilla)",
  className,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-full border-2",
        sizeMap[size],
        className
      )}
      style={{ background: bg, borderColor: "var(--ink)" }}
    >
      {children}
    </span>
  );
}