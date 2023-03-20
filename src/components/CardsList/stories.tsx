import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardsList from ".";
import cardsMock from "../PaymentOptions/mock";

export default {
  title: "CardsList",
  component: CardsList,
  args: {
    cards: cardsMock
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as ComponentMeta<typeof CardsList>;

const Template: ComponentStory<typeof CardsList> = (args) => (
  <div style={{ maxWidth: 850, margin: "auto" }}>
    <CardsList {...args} />
  </div>
);

export const Default = Template.bind({});
