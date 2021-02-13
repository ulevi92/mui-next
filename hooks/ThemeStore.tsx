import { createContext, FC, useContext, useEffect, useState } from "react";

interface themeStore {
  darkMode: boolean;
  setAndSaveDarkMode: () => void;
}

const themeStore = createContext<themeStore | null>(null);

export const useThemeStore = () => useContext(themeStore);

const ThemeStore: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(JSON.parse(window.localStorage.getItem("dark-mode")));
  }, []);

  const setAndSaveDarkMode = () => {
    const darkModeToString = !darkMode ? "true" : "false";
    window.localStorage.setItem("dark-mode", darkModeToString);
    setDarkMode(!darkMode);
  };

  return (
    <themeStore.Provider
      value={{ darkMode, setAndSaveDarkMode: setAndSaveDarkMode }}
    >
      {children}
    </themeStore.Provider>
  );
};

export default ThemeStore;
