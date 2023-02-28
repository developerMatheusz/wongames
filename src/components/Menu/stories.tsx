import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from ".";

export default {
  title: "Menu",
  component: Menu,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
