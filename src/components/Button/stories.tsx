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
  }
} as unknown as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ThirdStory = Template.bind({});

ThirdStory.args = {
  children: "Buy now"
};

export const withIcon = Template.bind({});

withIcon.args = {
  size: "small",
  children: "Buy now",
  icon: <AddShoppingCart />
};
