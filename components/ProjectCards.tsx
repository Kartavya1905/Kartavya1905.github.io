import { ArrowUpRight, Github } from "lucide-react";
import type { CompactProject, Project } from "@/lib/data";

const detailRows: { key: keyof Pick<Project, "problem" | "solution" | "impact">; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "impact", label: "Impact" },
];

const cardClass =
  "group flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/60 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-800/20 dark:hover:border-zinc-700 dark:hover:shadow-black/30";

function CodeLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors duration-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
    >
      <Github className="h-3.5 w-3.5" strokeWidth={1.75} />
      View Code
      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
    </a>
  );
}

function CardMeta({ category, status }: { category: string; status?: string }) {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-2">
      <p className="font-mono text-xs text-zinc-500">{category}</p>
      {status && (
        <span className="rounded-full border border-emerald-500/30 px-2 py-0.5 text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
          {status}
        </span>
      )}
    </div>
  );
}

function StackTags({ stack }: { stack: string[] }) {
  return (
    <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tech stack">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-md bg-zinc-200/60 px-2 py-1 font-mono text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

type FeaturedCardProps = {
  project: Project;
  // The lead card spans the full grid width and lays its details out in columns.
  lead: boolean;
};

export function FeaturedCard({ project, lead }: FeaturedCardProps) {
  return (
    <article className={`${cardClass} p-6 sm:p-8 ${lead ? "md:col-span-2" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        <CardMeta category={project.category} status={project.status} />
        <CodeLink href={project.href} />
      </div>

      <div className={`mt-6 ${lead ? "md:flex md:items-end md:justify-between md:gap-10" : ""}`}>
        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
          {project.title}
        </h3>
        <p className={`mt-4 flex items-baseline gap-3 ${lead ? "md:mt-0 md:shrink-0" : ""}`}>
          <span className="whitespace-nowrap text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.highlight.value}
          </span>
          <span className="max-w-[12rem] text-xs leading-snug text-zinc-500">{project.highlight.label}</span>
        </p>
      </div>

      <dl
        className={`mt-6 grid gap-5 border-t border-zinc-200 pt-6 dark:border-zinc-800 ${
          lead ? "md:grid-cols-3 md:gap-8" : ""
        }`}
      >
        {detailRows.map(({ key, label }) => (
          <div key={key}>
            <dt className="text-xs font-medium uppercase tracking-label text-zinc-500">{label}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed">{project[key]}</dd>
          </div>
        ))}
      </dl>

      <StackTags stack={project.stack} />
    </article>
  );
}

// Column spans for an n-card grid (2 cols at md, 3 visual cols at lg on a 6-track grid)
// so the last row is always filled instead of leaving a card stranded.
export function compactSpan(index: number, count: number) {
  const mdSpan = count % 2 === 1 && index === count - 1 ? "md:col-span-2" : "";
  const lastRowStart = count - (count % 3 || 3);
  const lastRowSize = count - lastRowStart;
  // Literal class names so Tailwind's scanner picks them up.
  const lastRowSpans: Record<number, string> = { 1: "lg:col-span-6", 2: "lg:col-span-3", 3: "lg:col-span-2" };
  const lgSpan = index < lastRowStart ? "lg:col-span-2" : lastRowSpans[lastRowSize];
  return `${mdSpan} ${lgSpan}`;
}

export function CompactGrid({ projects }: { projects: CompactProject[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
      {projects.map((project, i) => (
        <CompactCard key={project.title} project={project} span={compactSpan(i, projects.length)} />
      ))}
    </div>
  );
}

function CompactCard({ project, span }: { project: CompactProject; span: string }) {
  return (
    <article className={`${cardClass} p-6 ${span}`}>
      <div className="flex items-start justify-between gap-3">
        <CardMeta category={project.category} status={project.status} />
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View code for ${project.title} on GitHub`}
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors duration-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
        >
          <Github className="h-4 w-4" strokeWidth={1.75} />
        </a>
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-zinc-900 dark:text-zinc-100">
        {project.title}
      </h3>
      {project.highlight && (
        <p className="mt-3 flex items-baseline gap-2">
          <span className="whitespace-nowrap text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {project.highlight.value}
          </span>
          <span className="text-xs leading-snug text-zinc-500">{project.highlight.label}</span>
        </p>
      )}
      <p className="mt-4 text-sm leading-relaxed">{project.summary}</p>

      <StackTags stack={project.stack} />
    </article>
  );
}
