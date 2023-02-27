import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Main from ".";

export default {
  title: "Main",
  component: Main,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Default = Template.bind({});

Default.args = {};
