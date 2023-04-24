import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CartList from ".";

export default {
  title: "CartList",
  component: CartList,
  argTypes: {
    cartContextValue: {
      type: ""
    },
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
    <CartList />
  </div>
);

export const Default = Template.bind({});
export const WithButton = TemplateWithButton.bind({});
export const Empty = TemplateEmpty.bind({});
