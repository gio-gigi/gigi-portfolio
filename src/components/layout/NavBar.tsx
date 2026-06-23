"use client";

import { useEffect, useMemo, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flower, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { IconBadge } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/providers";

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();
  const [activeHash, setActiveHash] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const homeSectionHashes = useMemo(
    () => NAV_LINKS.filter((link) => link.href.startsWith("/#")).map((link) => link.href.slice(1)),
    [],
  );

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const updateActiveFromScroll = () => {
      const sections = homeSectionHashes
        .map((hash) => document.getElementById(hash.replace("#", "")))
        .filter((section): section is HTMLElement => Boolean(section));

      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + 120;
      let currentHash = `#${sections[0].id}`;

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentHash = `#${section.id}`;
        }
      }

      setActiveHash(currentHash);
    };

    const applyHashFromLocation = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
        return;
      }
      updateActiveFromScroll();
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);
    window.addEventListener("hashchange", applyHashFromLocation);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
      window.removeEventListener("hashchange", applyHashFromLocation);
    };
  }, [homeSectionHashes, pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleHomeAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobileMenu = false,
  ) => {
    if (!href.startsWith("/#") || pathname !== "/") return;

    event.preventDefault();
    const hash = href.slice(1);
    const sectionId = hash.replace("#", "");
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", hash);
    setActiveHash(hash);

    if (closeMobileMenu) {
      setMobileOpen(false);
    }
  };

  const getIsActive = (href: string) => {
    const isHomeAnchor = href.startsWith("/#");
    return isHomeAnchor ? pathname === "/" && activeHash === href.slice(1) : pathname === href;
  };

  const handleNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string, mobile = false) => {
    const isHomeAnchor = href.startsWith("/#");

    if (isHomeAnchor && pathname === "/") {
      handleHomeAnchorClick(event, href, mobile);
      return;
    }

    if (mobile) {
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:color-mix(in_oklab,var(--cream)_85%,transparent)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <IconBadge
            size="md"
            bg="var(--strawberry)"
            className="border-ink shadow-[var(--shadow-sticker)]"
          >
            <Flower className="h-5 w-5" strokeWidth={2.5} />
          </IconBadge>
          <span className="font-display text-xl italic">{t.nav.brand}</span>
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] p-2 text-[color:var(--foreground)] shadow-[var(--shadow-sticker)] transition-colors hover:text-[color:var(--strawberry)] md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex gap-6">
            {NAV_LINKS.map(({ href }, index) => {
              const isActive = getIsActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={(event) => handleNavLinkClick(event, href)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm font-medium transition-all",
                    "hover:text-[color:var(--strawberry)]",
                    isActive
                      ? "bg-[color:var(--strawberry-soft)] text-[color:var(--chocolate)] shadow-[var(--shadow-sticker)]"
                      : "text-[color:var(--foreground)]",
                  )}
                >
                  {t.nav.links[index] ?? NAV_LINKS[index]?.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] p-1 shadow-[var(--shadow-sticker)]">
            <span className="sr-only">{t.nav.languageLabel}</span>
            {(["es", "en"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={cn(
                  "rounded-full px-2 py-1 text-xs font-semibold uppercase transition-colors",
                  locale === lang
                    ? "bg-[color:var(--strawberry-soft)] text-[color:var(--chocolate)]"
                    : "text-[color:var(--muted-foreground)] hover:text-[color:var(--strawberry)]",
                )}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" className="border-t border-[color:var(--border)] px-6 pb-5 pt-4 md:hidden">
          <div className="paper flex flex-col gap-2 p-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-[color:var(--muted-foreground)]">
                {t.nav.languageLabel}
              </span>
              <div className="flex gap-1">
                {(["es", "en"] as const).map((lang) => (
                  <button
                    key={`mobile-${lang}`}
                    type="button"
                    onClick={() => setLocale(lang)}
                    className={cn(
                      "rounded-full px-2 py-1 text-xs font-semibold uppercase transition-colors",
                      locale === lang
                        ? "bg-[color:var(--strawberry-soft)] text-[color:var(--chocolate)]"
                        : "text-[color:var(--muted-foreground)] hover:text-[color:var(--strawberry)]",
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {NAV_LINKS.map(({ href }, index) => {
            const isActive = getIsActive(href);

            return (
              <Link
                key={`mobile-${href}`}
                href={href}
                onClick={(event) => handleNavLinkClick(event, href, true)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium transition-all",
                  isActive
                    ? "bg-[color:var(--strawberry-soft)] text-[color:var(--chocolate)]"
                    : "text-[color:var(--foreground)] hover:text-[color:var(--strawberry)]",
                )}
              >
                {t.nav.links[index] ?? NAV_LINKS[index]?.label}
              </Link>
            );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}