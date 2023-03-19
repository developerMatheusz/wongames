import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Empty from ".";

export default {
  title: "Empty",
  component: Empty,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Your wishlist is empty",
  description: "Games added to your wishlist will appear here",
  hasLink: true
};
