import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CartIcon from ".";

export default {
  title: "CartIcon",
  component: CartIcon,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof CartIcon>;

const Template: ComponentStory<typeof CartIcon> = (args) => (
  <CartIcon {...args} />
);

export const Default = Template.bind({});
export const WithItems = Template.bind({});

Default.args = {};
WithItems.args = {
  quantity: 3
};
