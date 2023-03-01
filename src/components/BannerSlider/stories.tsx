import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BannerSlider from ".";
import items from "./mock";

export default {
  title: "BannerSlider",
  component: BannerSlider,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  args: {
    items
  }
} as ComponentMeta<typeof BannerSlider>;

const Template: ComponentStory<typeof BannerSlider> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <BannerSlider {...args} />
  </div>
);

export const Default = Template.bind({});
