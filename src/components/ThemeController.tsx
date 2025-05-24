import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const ThemeController = () => {
  const [theme, setTheme] = useState<Theme | null>(null);

  // On mount, set theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme = storedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (theme === null) return null; // Wait until theme is known

  return (
    <label className="toggle text-base-content cursor-pointer">
      <input
        type="checkbox"
        value="dark"
        className="theme-controller toggle toggle-sm hidden"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      {/* Sun icon (light mode) */}
      <svg
        aria-label="sun"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${theme === "light" ? "block" : "hidden"}`}
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </g>
      </svg>

      {/* Moon icon (dark mode) */}
      <svg
        aria-label="moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={`w-6 h-6 ${theme === "dark" ? "block" : "hidden"}`}
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </g>
      </svg>
    </label>
  );
};

export default ThemeController;