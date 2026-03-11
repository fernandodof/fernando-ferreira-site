"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/components/language-provider/language-provider";
import type { ResumeEntry } from "@/lib/resume";

interface TimelineProps {
  entries: ResumeEntry[];
}

function DateRange({ startDate, endDate, presentLabel }: {
  startDate: string;
  endDate: string | null;
  presentLabel: string;
}) {
  if (!startDate) {
    return null;
  }
  const end = endDate === null ? presentLabel : endDate;
  return (
    <span className="text-xs text-muted whitespace-nowrap">
      {startDate} – {end}
    </span>
  );
}

export function Timeline({ entries }: TimelineProps) {
  const { locale, t } = useLanguage();
  const lang = locale;

  return (
    <ol className="relative border-l border-border ml-3">
      {entries.map((entry, index) => {
        const isExperience = entry.type === "experience";
        const Icon = isExperience ? Briefcase : GraduationCap;

        return (
          <li key={index} className="mb-10 ml-6">
            {/* Icon dot */}
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-card border border-border">
              <Icon
                size={12}
                className={isExperience ? "text-foreground" : "text-muted"}
              />
            </span>

            <div className="flex flex-col gap-1">
              {/* Header row */}
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-foreground">
                  {entry.title[lang]}
                </h3>
                <DateRange
                  startDate={entry.startDate}
                  endDate={entry.endDate}
                  presentLabel={t("resume.present")}
                />
              </div>

              {/* Organisation + location */}
              <p className="text-sm text-muted">
                {entry.organization}
                {entry.location ? ` · ${entry.location}` : ""}
              </p>

              {/* Bullet points */}
              {entry.description[lang].length > 0 && (
                <ul className="mt-2 flex flex-col gap-1.5 list-disc list-outside ml-4">
                  {entry.description[lang].map((point, i) => (
                    <li key={i} className="text-sm text-foreground leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
