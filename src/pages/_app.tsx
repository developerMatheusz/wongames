import { AppProps } from "next/app";
import GlobalStyles from "@/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Won Games</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
