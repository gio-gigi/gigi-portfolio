"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Palette } from "lucide-react";
import { SectionTitle, FactRow } from "@/components/shared";
import { useI18n } from "@/components/providers";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45 }}
      >
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} />
      </motion.div>

      <motion.div
        className="paper mt-10 grid gap-8 p-8 md:grid-cols-3 md:p-12"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="md:col-span-2">
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            {t.about.description}
          </motion.p>
        </div>

        <motion.ul
          className="space-y-3"
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, delay: 0.14 }}
        >
          <FactRow icon={<Code2 className="h-4 w-4" />} label={t.about.facts[0]} />
          <FactRow icon={<Server className="h-4 w-4" />} label={t.about.facts[1]} />
          <FactRow icon={<Database className="h-4 w-4" />} label={t.about.facts[2]} />
          <FactRow icon={<Palette className="h-4 w-4" />} label={t.about.facts[3]} />
        </motion.ul>
      </motion.div>
    </section>
  );
}