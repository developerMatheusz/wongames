import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "@/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>React avançado - Boilerplate</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
