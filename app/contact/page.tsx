import type { Metadata } from "next";
import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: "LinkedIn", value: "linkedin.com/in/kartavya648", href: profile.linkedin, Icon: Linkedin, external: true },
  { label: "GitHub", value: "github.com/Kartavya1905", href: profile.github, Icon: Github, external: true },
  { label: "Resume", value: "PDF, 1 page", href: profile.resume, Icon: FileText, external: false },
];

export default function ContactPage() {
  return (
    <div className="pb-20 sm:pb-28">
      <PageIntro
        eyebrow="Contact"
        title="Let's build something together"
        description="If you're hiring for AI or software engineering roles, I'd love to hear from you. Email is the quickest way to reach me."
      />

      <p className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-500">
        <MapPin className="h-4 w-4" strokeWidth={1.75} />
        {profile.location} · {profile.availability}
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {contactLinks.map(({ label, value, href, Icon, external }) => (
          <li key={label} className="min-w-0">
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              download={label === "Resume" ? true : undefined}
              className="group flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/20 dark:hover:border-zinc-700 sm:gap-4 sm:p-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300 sm:h-11 sm:w-11">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-zinc-500">{label}</span>
                <span className="mt-0.5 block text-sm font-medium text-zinc-900 [overflow-wrap:anywhere] dark:text-zinc-100 sm:text-base">
                  {value}
                </span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={1.75}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
