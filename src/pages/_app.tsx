import NextNProgress from "nextjs-progressbar";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Head from "next/head";
import { useApollo } from "../utils/apollo";
import { CartProvider } from "../hooks/use-cart";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { WishlistProvider } from "../hooks/use-wishlist";

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>Won Games</title>
              </Head>
              <GlobalStyles />
              <NextNProgress
                color="#F231A5"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
              />
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}
