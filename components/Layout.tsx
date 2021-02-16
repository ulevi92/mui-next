import { FC, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";

import { darkTheme, theme } from "../theme/theme";

import Navbar from "./navbar/Navbar";
import { useStore } from "../hooks/ContextStore";

const Layout: FC = ({ children }) => {
  const store = useStore();

  return (
    <ThemeProvider theme={store.darkMode ? darkTheme : theme}>
      <Navbar />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
