import { createContext, useContext } from "react";

export interface ThemeModeContextType {
  themeMode: string;
  setThemeMode: (themeMode: string) => void;
}

export const ThemeModeContext = createContext<ThemeModeContextType>({
  themeMode: "light",
  setThemeMode: null,
});
export const useThemeMode = () => useContext(ThemeModeContext);
