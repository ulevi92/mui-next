import { ThemeProvider } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { useStore } from "../hooks/ContextStore";
import { darkTheme, theme } from "../theme/theme";

import Navbar from "./navbar/Navbar";

const Layout: FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const store = useStore();

  useEffect(() => {
    setDarkMode(JSON.parse(window.localStorage.getItem("dark-mode")));
  }, [store.darkMode]);

  console.log("did render");

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
