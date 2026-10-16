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
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#0038AE]/15 bg-[#F4F9FD] text-[#0038AE] transition hover:border-[#48ACD6] hover:bg-white dark:border-white/15 dark:bg-white/[0.06] dark:text-[#48ACD6] dark:hover:bg-white/15"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

