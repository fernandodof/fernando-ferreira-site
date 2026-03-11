"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider/language-provider";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col gap-6 py-16 sm:py-24">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t("home.title")}
        </h1>
        <p className="text-xl text-muted font-medium">
          {t("home.tagline")}
        </p>
      </div>
      <p className="max-w-xl text-base text-muted leading-relaxed">
        {t("home.description")}
      </p>
      <div>
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-80 transition-opacity"
        >
          {t("home.cta")}
        </Link>
      </div>
    </section>
  );
}
