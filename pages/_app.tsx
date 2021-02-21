import type { AppProps /*, AppContext */ } from "next/app";
import { useEffect, useState } from "react";
import Head from "next/head";
import ContextStore from "../hooks/StoreContext";
import Layout from "../components/Layout";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { darkTheme, theme } from "../theme/theme";

import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const jss = create({
    ...jssPreset(),
    // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
    insertionPoint: "jss-insertion-point",
  });

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && "parentElement" in jssStyles) {
      (jssStyles.parentElement as HTMLElement).removeChild(jssStyles);
    }
  }, []);

  console.log(darkMode);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ContextStore>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={darkMode ? darkTheme : theme}>
            <Layout>
              <CssBaseline />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </StylesProvider>
      </ContextStore>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
