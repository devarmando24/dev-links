import { useTheme } from "../hooks/useTheme";
import sol from "../../src/assets/SunDim.svg";
import lua from "../../src/assets/Moon.svg";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-[62px] p-5 flex items-center justify-end">
      <button
        className="transition-all duration-500 hover:scale-110"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <img height={22} width={22} src={sol} alt="Sol" />
        ) : (
          <img height={22} width={22} src={lua} alt="Lua" />
        )}
      </button>
    </header>
  );
}
