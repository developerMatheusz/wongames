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
  }
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const ThirdStory = Template.bind({});

ThirdStory.args = {
  children: "Most Populars",
  color: "black"
};
