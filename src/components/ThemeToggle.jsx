import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDark, toggleDrak] = useState(true);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      toggleDrak(true);
      document.documentElement.classList.add("dark");
    } else {
      toggleDrak(false);
      localStorage.setItem("theme", "light");
    }
  }, []);
  const toggleTheme = () => {
    if (isDark) {
      toggleDrak(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      toggleDrak(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-[60] p-2 rounded-fill transition-colors duration-3000 ",
        "focus:outline-hidden"
      )}
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
