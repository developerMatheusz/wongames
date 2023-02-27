import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Heading from ".";

export default {
  title: "Heading",
  component: Heading,
  argTypes: {
    children: {
      type: "string"
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: "Most Populars",
  color: "black"
};
