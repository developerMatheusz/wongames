import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BannerSlider from ".";

const items = [
  {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death 1",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season</p>",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling"
  },
  {
    img: "https://source.unsplash.com/user/willianjusten/1042x581",
    title: "Defy death 2",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season</p>",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling"
  },
  {
    img: "https://source.unsplash.com/user/willianjusten/1042x582",
    title: "Defy death 3",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season</p>",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death",
    ribbon: "Bestselling"
  }
];

export default {
  title: "BannerSlider",
  component: BannerSlider,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  },
  args: {
    items
  }
} as ComponentMeta<typeof BannerSlider>;

const Template: ComponentStory<typeof BannerSlider> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <BannerSlider {...args} />
  </div>
);

export const Default = Template.bind({});
