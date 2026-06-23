"use client";

import { motion } from "framer-motion";
import { Flower } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/components/providers";

const DASH_COUNT = 24;

export function ExperiencePath() {
  const [isLineVisible, setIsLineVisible] = useState(false);
  const { t } = useI18n();
  const jobs = t.experience.jobs;

  return (
    <section id="experience-path" className="bg-crema-2 px-10 py-10">
      <div className="paper p-7 md:p-9">
        <p className="font-hand text-base text-cafe mb-1">{t.experience.eyebrow}</p>
        <h2 className="font-display italic text-4xl text-cafe-dark mb-10">{t.experience.title}</h2>

        <motion.div
          className="relative pl-8 timeline-line"
          onViewportEnter={() => setIsLineVisible(true)}
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            aria-hidden
            className="pointer-events-none absolute top-[20px] bottom-2 w-[3px] overflow-hidden"
            style={{ left: "0.5mm" }}
            initial="hidden"
            animate={isLineVisible ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.045,
                  delayChildren: 0.04,
                },
              },
            }}
          >
            {Array.from({ length: DASH_COUNT }).map((_, index) => (
              <motion.span
                key={index}
                className="block h-[10px] w-[3px] rounded-[2px] bg-rosa-deep"
                style={{ marginBottom: index === DASH_COUNT - 1 ? 0 : "6px" }}
                variants={{ hidden: { opacity: 0, scaleY: 0.2 }, visible: { opacity: 1, scaleY: 1 } }}
                transition={{ duration: 0.14, ease: "easeOut" }}
              />
            ))}
          </motion.div>

          {jobs.map((job, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              {/* flower dot */}
              <motion.span
                className="absolute -left-9 top-0.5 text-rosa-deep text-lg select-none"
                initial={{ opacity: 0, scale: 0.65, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.12 }}
              >
                <Flower className="text-rosa-deep bg-crema-2" size={18} strokeWidth={1.5} />
              </motion.span>

              <p className="font-hand text-sm text-cafe mb-0.5">{job.date}</p>
              <h3 className="font-display font-bold text-xl text-cafe-dark mb-0.5">{job.role}</h3>
              <p className="text-sm text-cafe-mid font-medium mb-2">{job.company}</p>
              <p className="text-sm text-cafe-mid leading-relaxed">{job.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
