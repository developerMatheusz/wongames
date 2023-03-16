import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Gallery from ".";
import items from "./mock";

export default {
  title: "Gallery",
  component: Gallery,
  args: {
    items
  },
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <Gallery {...args} />
  </div>
);

export const Default = Template.bind({});
