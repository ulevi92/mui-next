import { FC, useMemo } from "react";
import { ThemeProvider } from "@material-ui/core";

import { darkTheme, theme } from "../theme/theme";

import Navbar from "./navbar/Navbar";
import { useStore } from "../hooks/StoreContext";
import Footer from "./footer/Footer";

const Layout: FC = ({ children }) => {
  const store = useStore();

  return (
    <ThemeProvider theme={store.darkMode ? darkTheme : theme}>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
