import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  // Optional link to the page that holds the full version of this section.
  action?: { href: string; label: string };
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, description, action, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-16 sm:py-24">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
        <div className="min-w-0">
          {eyebrow && <p className="text-sm text-zinc-500">{eyebrow}</p>}
          <h2
            id={`${id}-heading`}
            className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl"
          >
            {title}
          </h2>
          {description && <p className="mt-3 max-w-2xl leading-relaxed">{description}</p>}
        </div>
        {action && <ArrowLink href={action.href} label={action.label} />}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group/link inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors duration-200 hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-100"
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5" strokeWidth={1.75} />
    </Link>
  );
}
