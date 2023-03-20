import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from ".";

export default {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Click here",
  children: "content"
};
