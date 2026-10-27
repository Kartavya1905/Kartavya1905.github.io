import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Achievements, Timeline } from "@/components/Timeline";

export const metadata: Metadata = { title: "Experience & Education" };

export default function ExperiencePage() {
  return (
    <div className="pb-20 sm:pb-28">
      <PageIntro
        eyebrow="Experience & Education"
        title="Where I've worked and studied"
        description="I trained as an engineer first and interned in software, research and industry before moving into AI. Here's the path so far."
      />

      <section aria-label="Timeline" className="mt-12 sm:mt-16">
        <Timeline />
      </section>

      <section aria-labelledby="achievements-heading" className="mt-16 sm:mt-20">
        <h2 id="achievements-heading" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Achievements
        </h2>
        <div className="mt-6">
          <Achievements />
        </div>
      </section>
    </div>
  );
}
