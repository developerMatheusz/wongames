import { StoryFn } from "@storybook/addons";
import React from "react";
import { ThemeProvider } from "styled-components";
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

const withGlobalStyle = (storyFn: StoryFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles removeBg />
    {storyFn()}
  </ThemeProvider>
);

export const decorators = [withGlobalStyle];
