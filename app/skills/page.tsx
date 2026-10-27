import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SkillsGrid } from "@/components/SkillsGrid";

export const metadata: Metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <div className="pb-20 sm:pb-28">
      <PageIntro
        eyebrow="Skills"
        title="Technical stack"
        description="The languages and tools I use day to day, grouped by how I use them, plus the systems theory I've been studying on the side."
      />
      <div className="mt-12 sm:mt-16">
        <SkillsGrid />
      </div>
    </div>
  );
}
