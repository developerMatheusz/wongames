import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CartList from ".";
import mockItem from "./mock";

export default {
  title: "CartList",
  component: CartList,
  args: {
    items: mockItem,
    total: "R$ 330,00"
  },
  argTypes: {
    items: {
      type: ""
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof CartList>;

const Template: ComponentStory<typeof CartList> = (args) => (
  <div style={{ maxWidth: 800, margin: "0 auto" }}>
    <CartList {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
