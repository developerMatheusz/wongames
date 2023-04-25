import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GameCard from ".";

export default {
  title: "GameCard",
  component: GameCard,
  args: {
    title: "Population Zero",
    slug: "population-zero",
    developer: "Rockstar Games",
    img: "https://source.unsplash.com/user/willianjusten/300x140",
    price: 235,
    promotionalPrice: 215
  },
  argTypes: {
    onFav: {
      action: "clicked"
    },
    ribbon: {
      type: "string"
    }
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof GameCard>;

const Template: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: "30rem" }}>
    <GameCard {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithRibbon = Template.bind({});

WithRibbon.args = {
  ribbon: "20% OFF",
  ribbonSize: "small",
  ribbonColor: "primary"
};
