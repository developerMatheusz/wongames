import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Highlight from ".";

export default {
  title: "Highlight",
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    backgroundImage: "/img/red-dead-img.jpg",
    buttonLabel: "Buy now",
    buttonLink: "/rdr2"
  }
} as ComponentMeta<typeof Highlight>;

const Template: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
);

export const Default = Template.bind({});

Default.args = {};
