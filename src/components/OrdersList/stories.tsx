import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import OrdersList from ".";
import itemsMock from "./mock";

export default {
  title: "OrdersList",
  component: OrdersList,
  args: {
    items: itemsMock
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as ComponentMeta<typeof OrdersList>;

const Template: ComponentStory<typeof OrdersList> = (args) => (
  <div style={{ maxWidth: 850, margin: "auto" }}>
    <OrdersList {...args} />
  </div>
);

export const Default = Template.bind({});
