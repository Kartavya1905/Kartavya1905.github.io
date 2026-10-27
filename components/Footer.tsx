import Link from "next/link";
import { navItems, profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 text-sm text-zinc-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-1 md:items-end">
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {profile.email}
          </a>
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
