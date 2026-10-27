import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { achievements, timeline, type Achievement, type TimelineEntry } from "@/lib/data";

type TimelineItemProps = {
  entry: TimelineEntry;
  // On md+ screens entries alternate sides of the centre line; mobile is always a single column.
  side: "left" | "right";
  compact: boolean;
};

function TimelineItem({ entry, side, compact }: TimelineItemProps) {
  const isEducation = entry.kind === "education";
  const Icon = isEducation ? GraduationCap : Briefcase;
  const cardColumn = side === "left" ? "md:col-start-1" : "md:col-start-2";

  return (
    // On md+ each item tucks up beside the previous one (opposite side) to avoid empty gaps.
    <li className="relative pb-8 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-x-20 md:pb-0 md:pl-0 md:[&:not(:first-of-type)]:-mt-20">
      {/* Node on the line. */}
      <span
        aria-hidden="true"
        className="absolute left-5 top-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition-colors duration-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 md:left-1/2"
      >
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>

      <div
        className={`rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5 transition-colors duration-300 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/20 dark:hover:border-zinc-700 sm:p-6 ${cardColumn}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="rounded-full bg-zinc-200/70 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {isEducation ? "Education" : "Experience"}
          </span>
          <span className="text-xs font-medium tabular-nums text-zinc-500">{entry.period}</span>
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{entry.title}</h3>
        <p className="mt-1 text-sm text-zinc-500">
          {entry.org}
          {entry.location && <span> · {entry.location}</span>}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed">{entry.summary}</p>

        {!compact && entry.tags && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Skills used">
            {entry.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-zinc-200 px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

// `compact` drops the per-entry skill tags (used on the home page).
export function Timeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className="relative">
      {/* The line: left edge on mobile, centred on wider screens. */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-5 top-5 w-px -translate-x-1/2 bg-gradient-to-b from-zinc-300 via-zinc-200 to-transparent dark:from-zinc-700 dark:via-zinc-800 md:left-1/2"
      />
      {timeline.map((entry, i) => (
        <TimelineItem
          key={`${entry.title}-${entry.period}`}
          entry={entry}
          side={i % 2 === 0 ? "left" : "right"}
          compact={compact}
        />
      ))}
    </ol>
  );
}

const achievementIcons: Record<Achievement["icon"], typeof Trophy> = { trophy: Trophy, award: Award };

export function Achievements() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {achievements.map((achievement) => {
        const Icon = achievementIcons[achievement.icon];
        return (
          <li
            key={achievement.title}
            className="flex gap-4 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5 dark:border-zinc-800 dark:bg-zinc-800/20"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
              <Icon className="h-4 w-4" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <p className="font-medium text-zinc-900 dark:text-zinc-100">{achievement.title}</p>
              <p className="mt-1 text-sm leading-relaxed">{achievement.detail}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
