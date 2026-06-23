"use client";

import Link from "next/link";
import { BriefcaseBusiness, GitBranch, Heart, Mail } from "lucide-react";
import { NAV_LINKS, OWNER_EMAIL, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";
import { Sticker } from "@/components/ui";
import { useI18n } from "@/components/providers";

const socialIconMap = {
  github: GitBranch,
  linkedin: BriefcaseBusiness,
  mail: Mail,
} as const;

const normalizeExternalHref = (href: string) => {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
    return href;
  }
  return `https://${href}`;
};

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-14 w-full px-6 pb-10 pt-6">
      <div className="paper grid gap-8 p-6 md:grid-cols-[1.2fr_1fr_1fr] md:p-8">
        <div>
          <p className="font-hand text-xl" style={{ color: "var(--chocolate)" }}>
            {t.footer.thanks}
          </p>
          <h3 className="mt-1 text-2xl md:text-3xl">
            {SITE_NAME} <span style={{ color: "var(--strawberry)" }}>✿</span>
          </h3>
          <p className="mt-3 max-w-sm text-sm text-[color:var(--muted-foreground)]">
            {t.footer.blurb}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--chocolate)]">
            {t.footer.navTitle}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[color:var(--strawberry)]"
                >
                  {t.nav.links[index] ?? link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--chocolate)]">
            {t.footer.contactTitle}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {SOCIAL_LINKS.map((item) => {
              const Icon = socialIconMap[item.icon as keyof typeof socialIconMap] ?? Mail;
              const href = normalizeExternalHref(item.href);
              const variant =
                item.icon === "mail" ? "pink" : item.icon === "github" ? "cream" : "brown";

              return (
                <Sticker
                  key={item.label}
                  variant={variant}
                  href={href}
                  className="text-xs"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Sticker>
              );
            })}

            <Sticker variant="pink" href={`mailto:${OWNER_EMAIL}`} className="text-xs">
              <Mail className="h-4 w-4" /> {OWNER_EMAIL}
            </Sticker>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-[color:var(--muted-foreground)]">
        {t.footer.madeWith}
        <Heart className="mx-1 inline h-3.5 w-3.5" style={{ color: "var(--strawberry)" }} />
        {t.footer.outro} · {new Date().getFullYear()} © {SITE_NAME}
      </p>
    </footer>
  );
}