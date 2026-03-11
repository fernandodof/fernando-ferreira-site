"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle/language-toggle";
import { useLanguage } from "@/components/language-provider/language-provider";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="font-semibold text-foreground hover:text-muted transition-colors"
          >
            Fernando Ferreira
          </Link>
          <Link
            href="/resume"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            {t("nav.resume")}
          </Link>
        </nav>
        <div className="flex items-center gap-1">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
