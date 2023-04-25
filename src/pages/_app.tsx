import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Head from "next/head";
import { useApollo } from "../utils/apollo";
import { CartProvider } from "../hooks/use-cart";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Head>
            <title>Won Games</title>
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
