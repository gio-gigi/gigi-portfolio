"use client";

import { useState } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type StickerVariant = "pink" | "cream" | "brown";

interface StickerProps {
  variant?: StickerVariant;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  asChild?: boolean;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

const variantMap: Record<StickerVariant, string> = {
  pink: "sticker-pink",
  cream: "sticker-cream",
  brown: "sticker-brown",
};

export function Sticker({
  variant = "pink",
  className,
  style,
  children,
  href,
  target,
  rel,
}: StickerProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const classes = cn(
    "sticker relative isolate overflow-hidden transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]",
    variantMap[variant],
    className,
  );

  const createRipple = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.25;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now() + Math.random();

    setRipples((prev) => [...prev, { id, x, y, size }]);

    window.setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 560);
  };

  const rippleNodes = ripples.map((ripple) => (
    <span
      key={ripple.id}
      className="pointer-events-none absolute rounded-full bg-white/45"
      style={{
        left: ripple.x - ripple.size / 2,
        top: ripple.y - ripple.size / 2,
        width: ripple.size,
        height: ripple.size,
        animation: "sticker-ripple 560ms ease-out forwards",
      }}
    />
  ));

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        onMouseDown={createRipple}
        target={target}
        rel={rel}
      >
        {rippleNodes}
        {children}
      </a>
    );
  }

  return (
    <span className={classes} style={style} onMouseDown={createRipple}>
      {rippleNodes}
      {children}
    </span>
  );
}