import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GameCardSlider from ".";
import items from "./mock";

export default {
  title: "GameCardSlider",
  component: GameCardSlider,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  args: {
    items
  }
} as unknown as ComponentMeta<typeof GameCardSlider>;

const Template: ComponentStory<typeof GameCardSlider> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <GameCardSlider {...args} />
  </div>
);

export const Default = Template.bind({});
