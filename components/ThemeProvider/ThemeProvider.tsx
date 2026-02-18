"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type AppTheme = "cyber";

type ThemeContextValue = {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  devMode: boolean;
  setDevMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<AppTheme>("cyber");
  const [devMode, setDevMode] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") as
      | AppTheme
      | null;
    if (savedTheme === "cyber") {
      setTheme(savedTheme);
    }
    const savedDevMode = window.localStorage.getItem("portfolio-dev-mode");
    if (savedDevMode === "true") {
      setDevMode(true);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-dev-mode", String(devMode));
    document.body.setAttribute("data-dev-mode", String(devMode));
  }, [devMode]);

  const value = useMemo(
    () => ({ theme, setTheme, devMode, setDevMode }),
    [theme, devMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
