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
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
);

const TemplateWithButton: ComponentStory<typeof CartList> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
);

const TemplateEmpty: ComponentStory<typeof CartList> = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList items={[]} />
  </div>
);

export const Default = Template.bind({});
export const WithButton = TemplateWithButton.bind({});
export const Empty = TemplateEmpty.bind({});
