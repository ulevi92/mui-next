import { FC, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";

import { useThemeStore } from "../hooks/ThemeStore";

import { darkTheme, theme } from "../theme/theme";

import Navbar from "./navbar/Navbar";

const Layout: FC = ({ children }) => {
  useEffect(() => {
    window.onload = () => {};
  }, []);

  const store = useThemeStore();

  return (
    <ThemeProvider theme={store.darkMode ? darkTheme : theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
