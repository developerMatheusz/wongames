import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Banner from ".";

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    ribbon: {
      type: "string"
    }
  },
  args: {
    img: "https://source.unsplash.com/user/willianjusten/1042x580",
    title: "Defy death",
    subtitle: "<p>Play the new <strong>CrashLands</strong> season</p>",
    buttonLabel: "Buy now",
    buttonLink: "/games/defy-death"
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Banner {...args} />
  </div>
);

export const Default = Template.bind({});
export const WithRibbon = Template.bind({});

WithRibbon.args = {
  ribbon: "20% off",
  ribbonSize: "normal",
  ribbonColor: "primary"
};
