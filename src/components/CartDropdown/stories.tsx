import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CartDropdown from ".";
import items from "../CartList/mock";

export default {
  title: "CartDropdown",
  component: CartDropdown,
  args: {
    items,
    total: "R$ 300,00"
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof CartDropdown>;

const Template: ComponentStory<typeof CartDropdown> = (args) => (
  <div style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}>
    <CartDropdown {...args} />
  </div>
);

const TemplateEmpty: ComponentStory<typeof CartDropdown> = () => (
  <div style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}>
    <CartDropdown />
  </div>
);

export const Default = Template.bind({});
export const Empty = TemplateEmpty.bind({});
