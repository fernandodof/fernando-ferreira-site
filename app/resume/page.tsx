"use client";

import { useLanguage } from "@/components/language-provider/language-provider";
import { Timeline } from "@/components/timeline/timeline";
import { resumeEntries } from "@/lib/resume";

export default function ResumePage() {
  const { t } = useLanguage();

  const experience = resumeEntries.filter((e) => e.type === "experience");
  const education = resumeEntries.filter((e) => e.type === "education");

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {t("resume.title")}
      </h1>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t("resume.experience")}
        </h2>
        <Timeline entries={experience} />
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t("resume.education")}
        </h2>
        <Timeline entries={education} />
      </section>
    </div>
  );
}
