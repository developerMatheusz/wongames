import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PaymentOptions from ".";
import cardsMock from "./mock";

export default {
  title: "PaymentOptions",
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      type: ""
    },
    handlePayment: {
      action: "clicked"
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof PaymentOptions>;

const Template: ComponentStory<typeof PaymentOptions> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
