import { Binary, Brain, Code2, Eye, Network, Search, Sparkles, Wrench } from "lucide-react";
import { skillGroups, type SkillGroup } from "@/lib/data";

const groupIcons: Record<SkillGroup["icon"], typeof Code2> = {
  code: Code2,
  binary: Binary,
  brain: Brain,
  sparkles: Sparkles,
  search: Search,
  eye: Eye,
  wrench: Wrench,
  network: Network,
};

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group) => {
        const Icon = groupIcons[group.icon];
        return (
          <div
            key={group.category}
            className="rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5 transition-colors duration-300 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800/20 dark:hover:border-zinc-700"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <h2 className="text-sm font-medium leading-tight text-zinc-900 dark:text-zinc-100">{group.category}</h2>
            </div>
            {group.theory && <p className="mt-3 text-xs text-zinc-500">Theoretical knowledge</p>}
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[13px] leading-5 text-zinc-600 transition-colors duration-200 hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
