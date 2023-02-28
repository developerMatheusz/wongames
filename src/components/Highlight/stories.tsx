import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Highlight from ".";

export default {
  title: "Highlight",
  component: Highlight,
  args: {
    title: "Read Dead is back",
    subtitle: "Come see John's new adventures",
    backgroundImage: "/img/red-dead-img.jpg",
    buttonLabel: "Buy now",
    buttonLink: "/games/rdr2"
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof Highlight>;

const Template: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: "104rem" }}>
    <Highlight {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithFloatImage = Template.bind({});

WithFloatImage.args = {
  floatImage: "/img/red-dead-float.png",
  alignment: "right"
};
