import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merges Tailwind classes safely (same helper as shadcn/ui) */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Returns a rotation string for the scrapbook tilt effect */
export function tiltStyle(index: number, magnitude = 1.5): React.CSSProperties {
  return { transform: `rotate(${((index % 5) - 2) * magnitude}deg)` };
}

/** Alternating tilt for cards (even = negative, odd = positive) */
export function cardTilt(index: number): React.CSSProperties {
  return { transform: `rotate(${index % 2 === 0 ? -0.6 : 0.8}deg)` };
}