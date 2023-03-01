import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddShoppingCart } from "@styled-icons/material/AddShoppingCart";
import Button from ".";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    icon: {
      type: ""
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const WithIcon = Template.bind({});
export const AsLink = Template.bind({});

Default.args = {
  size: "large",
  children: "Buy now"
};

WithIcon.args = {
  size: "large",
  children: "Buy now",
  icon: <AddShoppingCart />
};

AsLink.args = {
  size: "large",
  children: "Buy now",
  as: "a",
  href: "/link"
};
