"use client";

import { useLanguage } from "@/components/language-provider/language-provider";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  const toggle = () => setLocale(locale === "en" ? "pt-BR" : "en");

  return (
    <button
      onClick={toggle}
      aria-label={t("language.toggle")}
      className="p-2 rounded-md text-foreground hover:bg-border transition-colors text-sm font-medium"
    >
      {t("language.toggle")}
    </button>
  );
}
