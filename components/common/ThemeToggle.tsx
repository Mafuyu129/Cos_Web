"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-primary/15 bg-white text-text-dark transition hover:bg-light-bg dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
