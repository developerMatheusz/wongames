import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GameInfo from ".";
import mockGame from "./mock";

export default {
  title: "GameInfo",
  component: GameInfo,
  args: {
    mockGame
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as ComponentMeta<typeof GameInfo>;

const Template: ComponentStory<typeof GameInfo> = (args) => (
  <div style={{ maxWidth: "144rem", margin: "auto", padding: "1.5rem" }}>
    <GameInfo {...args} />
  </div>
);

export const Default = Template.bind({});
export const IsInCart = Template.bind({});

Default.args = {
  price: 330
};
IsInCart.args = {
  isInCart: () => true,
  price: 330
};
