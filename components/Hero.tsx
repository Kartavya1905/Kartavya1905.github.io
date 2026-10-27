import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, stats } from "@/lib/data";

const iconLinks = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

function Portrait() {
  return (
    <div className="relative mx-auto w-56 sm:w-64 md:w-72 lg:w-80">
      {/* Soft glow behind the frame. */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-zinc-300/70 via-zinc-200/30 to-transparent blur-2xl dark:from-zinc-600/40 dark:via-zinc-700/20"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-zinc-200 bg-black shadow-xl shadow-zinc-300/40 dark:border-zinc-800 dark:shadow-black/40">
        <Image
          src={profile.photo.src}
          alt={`Portrait of ${profile.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, (min-width: 640px) 256px, 224px"
          className="origin-[50%_20%] scale-[1.2] object-cover"
        />
      </div>
      <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-zinc-200 bg-white/90 px-4 py-1.5 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-300">
        {profile.photo.caption}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section aria-label="Introduction" className="pb-8 pt-10 sm:pt-16 lg:pt-24">
      <div className="grid items-center gap-14 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12 lg:gap-20">
        <div className="order-2 md:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </p>

          <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl sm:leading-[1.15] lg:text-5xl lg:leading-[1.1]">
            Hi, I&apos;m {profile.name}.{" "}
            <span className="text-zinc-500 dark:text-zinc-400">{profile.headline}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg sm:leading-relaxed">
            {profile.valueProposition}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {iconLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors duration-200 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
            ))}

            <a
              href={profile.resume}
              download
              className="ml-1 inline-flex h-10 items-center gap-2 rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              <Download className="h-4 w-4" strokeWidth={1.75} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <Portrait />
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 sm:grid-cols-4 lg:mt-20">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col-reverse justify-end gap-1 p-5 sm:p-6${i % 2 === 1 ? "border-l" : ""} ${
              i >= 2 ? "border-t sm:border-t-0" : ""
            } ${i === 2 ? "sm:border-l" : ""} border-zinc-200 dark:border-zinc-800`}
          >
            <dt className="text-xs leading-snug text-zinc-500">{stat.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
