"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { type Locale, translations } from "@/lib/i18n/translations";

type I18nContextValue = {
  locale: Locale;
  t: (typeof translations)[Locale];
  setLocale: (locale: Locale) => void;
};

const I18N_STORAGE_KEY = "portfolio-locale";

const I18nContext = createContext<I18nContextValue | null>(null);

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "es";

  const saved = window.localStorage.getItem(I18N_STORAGE_KEY);
  return saved === "en" || saved === "es" ? saved : "es";
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const value = useMemo<I18nContextValue>(() => {
    const setLocale = (nextLocale: Locale) => {
      setLocaleState(nextLocale);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(I18N_STORAGE_KEY, nextLocale);
      }
    };

    return {
      locale,
      t: translations[locale],
      setLocale,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
