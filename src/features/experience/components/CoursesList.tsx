"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared";
import { courses } from "../data";
import { CourseCard } from "./CourseCard";
import { useI18n } from "@/components/providers";

export function CoursesList() {
  const { t } = useI18n();

  return (
    <motion.section
      id="courses"
      className="mx-auto max-w-6xl px-6 "
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <SectionTitle
          eyebrow={t.courses.eyebrow}
          title={t.courses.title}
        />
      </motion.div>

      <motion.div
        className="mt-10 grid gap-5 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.18 } },
        }}
      >
        {courses.map((c, i) => (
          <motion.div
            key={c.name}
            className="origin-center"
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
            }}
            whileHover={{ y: -6, scale: 1.015 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <CourseCard course={c} index={i} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}