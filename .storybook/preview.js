import React from "react";
import { ThemeProvider } from "styled-components";
import { CartContext, CartContextDefaultValues } from "../src/hooks/use-cart";
import GlobalStyles from "styles/global";
import theme from "styles/theme";

export const parameters = {
  backgrounds: {
    default: "won-light",
    values: [
      {
        name: "won-light",
        value: theme.colors.white
      },
      {
        name: "won-dark",
        value: theme.colors.mainBg
      }
    ]
  }
};

const withGlobalStyle = (storyFn, context) => (
  <ThemeProvider theme={theme}>
    <CartContext.Provider
      value={{
        ...CartContextDefaultValues,
        ...(context?.args?.cartContextValue || {}),
        ...context.args
      }}
    >
      <GlobalStyles removeBg />
      {storyFn()}
    </CartContext.Provider>
  </ThemeProvider>
);

export const decorators = [withGlobalStyle];
