import { IconBadge } from "@/components/ui";

interface FactRowProps {
  icon: React.ReactNode;
  label: string;
}

export function FactRow({ icon, label }: FactRowProps) {
  return (
    <li className="flex items-center gap-3">
      <IconBadge size="sm">{icon}</IconBadge>
      <span className="font-medium">{label}</span>
    </li>
  );
}