import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { CompactGrid, FeaturedCard } from "@/components/ProjectCards";
import { featuredProjects, moreProjects } from "@/lib/data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="pb-20 sm:pb-28">
      <PageIntro
        eyebrow="Projects"
        title="What I've built"
        description="The three projects I'm proudest of, with the problem, what we did and how it turned out. Below them is the rest of my work, from medical imaging to decoding brain signals."
      />

      <section aria-labelledby="featured-heading" className="mt-12 sm:mt-16">
        <h2 id="featured-heading" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          Featured
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.title} project={project} lead={i === 0} />
          ))}
        </div>
      </section>

      <section aria-labelledby="more-heading" className="mt-16">
        <h2 id="more-heading" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
          More projects
        </h2>
        <div className="mt-6">
          <CompactGrid projects={moreProjects} />
        </div>
      </section>
    </div>
  );
}
