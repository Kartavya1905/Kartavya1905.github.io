"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ChevronRight, Download, Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

// Active links are styled through aria-current, so the markup stays correct without client state.
const desktopLinkClass =
  "rounded-full px-3 py-1.5 text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-900 aria-[current=page]:bg-zinc-100 aria-[current=page]:font-medium aria-[current=page]:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 dark:aria-[current=page]:bg-zinc-800 dark:aria-[current=page]:text-zinc-100";

const mobileLinkClass =
  "flex items-center justify-between rounded-xl px-3 py-3 text-base text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 aria-[current=page]:bg-zinc-100 aria-[current=page]:font-medium aria-[current=page]:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:aria-[current=page]:bg-zinc-800 dark:aria-[current=page]:text-zinc-100";

export function Header() {
  const pathname = usePathname();
  // The mobile menu is a native <details>, so it opens and closes even before hydration.
  const menuRef = useRef<HTMLDetailsElement>(null);
  const closeMenu = () => menuRef.current?.removeAttribute("open");

  useEffect(closeMenu, [pathname]);

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/60 bg-white/80 backdrop-blur transition-colors duration-300 dark:border-zinc-800/60 dark:bg-zinc-900/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={desktopLinkClass}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <details ref={menuRef} className="group md:hidden">
            <summary
              aria-label="Menu"
              className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 [&::-webkit-details-marker]:hidden"
            >
              <Menu className="h-5 w-5 group-open:hidden" strokeWidth={1.75} />
              <X className="hidden h-5 w-5 group-open:block" strokeWidth={1.75} />
            </summary>

            <nav
              aria-label="Mobile"
              className="absolute inset-x-0 top-16 border-b border-zinc-200 bg-white px-4 pb-6 pt-3 shadow-xl shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={mobileLinkClass}
                    >
                      {item.label}
                      <ChevronRight className="h-4 w-4 text-zinc-400" strokeWidth={1.75} />
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href={profile.resume}
                download
                className="mt-4 flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-900 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} />
                Download Resume
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
