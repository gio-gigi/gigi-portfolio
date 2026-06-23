"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch, BriefcaseBusiness } from "lucide-react";
import { Sticker } from "@/components/ui";
import { OWNER_EMAIL } from "@/lib/constants";
import { useI18n } from "@/components/providers";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-4xl px-6 pt-25"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="paper p-10 text-center md:p-14"
        style={{ background: "var(--vanilla-soft)" }}
        initial={{ scale: 0.98 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: 0.08 }}
      >
        <motion.div
          className="tape"
          animate={{ rotate: [-3, -1.8, -3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.span
          className="font-hand text-2xl"
          style={{ color: "var(--chocolate)" }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.35 }}
        >
          {t.contact.eyebrow}
        </motion.span>

        <motion.h2
          className="mt-2 text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.4 }}
        >
          {t.contact.titlePrefix}
          <span
            className="italic"
            style={{
              background:
                "linear-gradient(180deg, transparent 60%, var(--strawberry) 60%)",
            }}
          >
            {t.contact.titleHighlight}
          </span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-4 max-w-md text-[color:var(--muted-foreground)]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {t.contact.description}
        </motion.p>

        <motion.div
          className="mt-7 flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.38 } },
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <Sticker variant="pink" href={`mailto:${OWNER_EMAIL}`}>
            <Mail className="h-4 w-4" /> {OWNER_EMAIL}
            </Sticker>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <Sticker variant="cream" href="https://github.com">
            <GitBranch className="h-4 w-4" /> GitHub
            </Sticker>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
            <Sticker variant="brown" href="https://linkedin.com">
            <BriefcaseBusiness className="h-4 w-4" /> LinkedIn
            </Sticker>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}