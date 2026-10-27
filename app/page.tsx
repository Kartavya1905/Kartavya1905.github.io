import Link from "next/link";
import { ArrowRight, Layers, Mail } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CompactGrid } from "@/components/ProjectCards";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { featuredProjects, moreProjects, skillGroups } from "@/lib/data";

const totalProjects = featuredProjects.length + moreProjects.length;

const exploreLinks = [
  {
    href: "/skills",
    title: "Technical Stack",
    description: `${skillGroups.length} areas, from PyTorch and FAISS to how GPUs talk to each other when training at scale.`,
    Icon: Layers,
  },
  {
    href: "/contact",
    title: "Get in touch",
    description: "I'm open to AI and software engineering roles. Here's how to reach me.",
    Icon: Mail,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="home-background"
        eyebrow="Background"
        title="Experience & Education"
        action={{ href: "/experience", label: "Full timeline & achievements" }}
      >
        <Timeline compact />
      </Section>

      <Section
        id="home-work"
        eyebrow="Selected work"
        title="Featured Projects"
        action={{ href: "/projects", label: `All ${totalProjects} projects` }}
      >
        <CompactGrid projects={featuredProjects} />
      </Section>

      <section aria-label="Explore" className="grid gap-4 pb-20 sm:grid-cols-2 sm:pb-28">
        {exploreLinks.map(({ href, title, description, Icon }) => (
          <Link
            key={href}
            href={href}
            className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/20 dark:hover:border-zinc-700"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center justify-between gap-2 font-medium text-zinc-900 dark:text-zinc-100">
                {title}
                <ArrowRight
                  className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              </span>
              <span className="mt-1 block text-sm leading-relaxed">{description}</span>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}
