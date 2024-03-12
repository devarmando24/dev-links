import { ReactNode, createContext, useEffect, useState } from "react";

interface ContextProps {
  theme: "dark" | "light";
  // eslint-disable-next-line @typescript-eslint/ban-types
  setTheme: Function;
}

export const ThemeContext = createContext({} as ContextProps);

interface Props {
  children: ReactNode;
}
export function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const root = window.document.documentElement;

    const removeOldTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(removeOldTheme);
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
