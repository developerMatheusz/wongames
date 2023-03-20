import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProfileMenu from ".";

export default {
  title: "ProfileMenu",
  component: ProfileMenu,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof ProfileMenu>;

const Template: ComponentStory<typeof ProfileMenu> = (args) => (
  <ProfileMenu {...args} />
);

export const Default = Template.bind({});

Default.args = {};
