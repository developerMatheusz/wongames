import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GameItem from ".";

export default {
  title: "GameItem",
  component: GameItem,
  args: {
    img: "https://source.unsplash.com/user/willianjusten/151x70",
    title: "Red Dead Redemption 2",
    price: "R$ 215,00"
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as ComponentMeta<typeof GameItem>;

const Template: ComponentStory<typeof GameItem> = (args) => (
  <GameItem {...args} />
);

export const Default = Template.bind({});
export const WithPayment = Template.bind({});

Default.args = {};
WithPayment.args = {
  downloadLink: "https://wongames.com/game/download/123teste",
  paymentInfo: {
    flag: "mastercard",
    img: "/img/cards/mastercard.png",
    number: "**** **** **** 4326",
    purchaseDate: "Purchase made on 07/20/2023 at 20:32"
  }
};
