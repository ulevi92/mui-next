import type { AppProps /*, AppContext */ } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import ContextStore from "../hooks/ContextStore";
import Layout from "../components/Layout";
import { CssBaseline } from "@material-ui/core";
import ThemeStore from "../hooks/ThemeStore";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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
        <ThemeStore>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </ThemeStore>
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
