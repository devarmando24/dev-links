import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "@phosphor-icons/react";

export function Toggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="transition-all duration-500 hover:scale-110"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun
          weight="bold"
          size={22}
          className="text-yellow-500 hover:text-yellow-400"
        />
      ) : (
        <Moon
          weight="bold"
          size={22}
          className="text-purple-900 hover:text-purple-800"
        />
      )}
    </button>
  );
}
