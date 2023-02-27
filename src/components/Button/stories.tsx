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
      default: "dark"
    }
  }
} as unknown as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  size: "large",
  children: "Buy now"
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  size: "large",
  children: "Buy now",
  icon: <AddShoppingCart />
};

export const AsLink = Template.bind({});

AsLink.args = {
  size: "large",
  children: "Buy now",
  as: "a",
  href: "/link"
};
