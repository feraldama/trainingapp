import React, { createContext, useContext, useState, ReactNode } from "react";
import { Appearance } from "react-native";

// Tipos de tema
export type ThemeType = "light" | "dark";

// Contexto y provider
interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const colorScheme = Appearance.getColorScheme() ?? "light";
  const [theme, setTheme] = useState<ThemeType>(colorScheme);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return context;
}
