import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "@/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Won Games</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link rel="shortcut icon" href="/img/logo.svg" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/logo.svg" type="image/x-icon" />
        <meta name="description" content="The best Game Stores in the world!" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
