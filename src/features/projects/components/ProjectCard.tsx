"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Sticker } from "@/components/ui";
import { cardTilt } from "@/lib/utils";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const lift = index % 2 === 0 ? -10 : -8;

  return (
    <motion.article
      className="paper p-7"
      style={cardTilt(index)}
      initial={{ opacity: 0, y: 36, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: lift, scale: 1.015 }}
    >
      <motion.div
        className="tape"
        animate={{ rotate: [-3, -1.8, -3] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="mb-5 grid h-32 place-items-center rounded-xl border-2"
        style={{ background: project.accent, borderColor: "var(--ink)" }}
        whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 0.6 : -0.6 }}
        transition={{ type: "spring", stiffness: 210, damping: 16 }}
      >
        <motion.span
          className="font-display text-3xl italic"
          style={{ color: "var(--ink)" }}
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {project.title}
        </motion.span>
      </motion.div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-2xl">{project.title}</h3>
        <Sticker variant="cream" className="text-xs">
          {project.tag}
        </Sticker>
      </div>

      <p className="mt-2 text-[color:var(--muted-foreground)]">{project.desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t, stackIndex) => (
          <motion.span
            key={t}
            className="rounded-full border px-2.5 py-0.5 text-xs"
            style={{ borderColor: "var(--ink)" }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.08 + stackIndex * 0.05, duration: 0.35 }}
            whileHover={{ y: -3, scale: 1.05 }}
          >
            {t}
          </motion.span>
        ))}
      </div>

      <motion.a
        href={project.href ?? "#"}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold"
        style={{ color: "var(--chocolate)" }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        Ver proyecto <ExternalLink className="h-3.5 w-3.5" />
      </motion.a>
    </motion.article>
  );
}