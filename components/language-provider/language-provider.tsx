"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import en from "@/messages/en.json";
import ptBR from "@/messages/pt-BR.json";

export type Locale = "en" | "pt-BR";

type Messages = typeof en;

interface LanguageContextValue {
  locale: Locale;
  t: (key: string) => string;
  setLocale: (locale: Locale) => void;
}

const messages: Record<Locale, Messages> = { en, "pt-BR": ptBR };

const LanguageContext = createContext<LanguageContextValue | null>(null);

function detectLocale(): Locale {
  const saved = localStorage.getItem("locale") as Locale | null;
  if (saved === "en" || saved === "pt-BR") {
    return saved;
  }

  const browserLang = navigator.language || "";
  return browserLang.startsWith("pt") ? "pt-BR" : "en";
}

function resolve(obj: Record<string, unknown>, path: string): string {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj) as string ?? path;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem("locale", next);
    setLocaleState(next);
  }, []);

  const t = useCallback(
    (key: string) => resolve(messages[locale] as unknown as Record<string, unknown>, key),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
