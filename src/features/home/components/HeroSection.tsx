"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Download } from "lucide-react";
import { Sticker } from "@/components/ui";
import { useI18n } from "@/components/providers";

type AnimatedTextProps = {
  text: string;
  startDelay?: number;
  className?: string;
  style?: CSSProperties;
};

function AnimatedText({ text, startDelay = 0, className, style }: AnimatedTextProps) {
  return (
    <span className={className} style={style}>
      {Array.from(text).map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block whitespace-pre"
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.24, delay: startDelay + index * 0.028 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const { t, locale } = useI18n();
  const cvEsUrl = process.env.NEXT_PUBLIC_CV_ES_URL;
  const cvEnUrl = process.env.NEXT_PUBLIC_CV_EN_URL;
  const cvHref = locale === "en" ? cvEnUrl : cvEsUrl;

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-8">
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        {/* Text */}
        <div className="relative">
          <h1 className="mt-3 text-5xl leading-[1.05] md:text-7xl">
            <span className="sr-only">{t.hero.srTitle}</span>
            <span aria-hidden>
              <AnimatedText text={t.hero.intro} startDelay={0} />
              <AnimatedText
                text={t.hero.name}
                startDelay={0.12}
                className="italic"
                style={{
                  background: "linear-gradient(180deg, transparent 60%, var(--vanilla) 60%)",
                }}
              />
              <AnimatedText text="," startDelay={0.38} />
              <br />
              <AnimatedText text={t.hero.rolePrefix} startDelay={0.48} />
              <AnimatedText
                text={t.hero.software}
                startDelay={0.72}
                className="whitespace-nowrap"
                style={{ color: "var(--strawberry)" }}
              />
              <AnimatedText
                text={t.hero.flower}
                startDelay={0.93}
                className="font-hand"
                style={{ color: "var(--chocolate)" }}
              />
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-[color:var(--muted-foreground)]">
            {t.hero.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Sticker variant="brown" href="/#contact">
              <Mail className="h-4 w-4" /> {t.hero.ctaContact}
            </Sticker>
            {cvHref ? (
              <Sticker variant="cream" href={cvHref} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" /> {t.hero.ctaResume}
              </Sticker>
            ) : null}
          </div>
        </div>

        {/* Photo frame */}
        <div className="relative mx-auto w-full max-w-sm">
          <div
            className="paper aspect-[4/5] rotate-[2deg] overflow-hidden"
            style={{ background: "var(--strawberry-soft)" }}
          >
            <div className="tape" />
            <Image
              src="/images/gio-img.jpeg"
              alt={t.hero.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}