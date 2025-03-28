"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa";
import { cn } from "@/lib/utils"; // Pastikan kamu punya fungsi `cn`

type ThemeToggleProps = React.HTMLAttributes<HTMLButtonElement>;

export function ThemeToggle({ className, ...props }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("rounded-full relative", className)}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      {...props}
    >
      <FaSun className="absolute h-5 w-5 transition-all dark:rotate-90 dark:scale-0" />
      <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
