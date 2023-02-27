import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Ribbon from ".";

export default {
  title: "Ribbon",
  component: Ribbon,
  args: {
    children: "Best Seller"
  },
  argTypes: {
    children: {
      type: "string"
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as unknown as ComponentMeta<typeof Ribbon>;

const Template: ComponentStory<typeof Ribbon> = (args) => (
  <div
    style={{
      width: "40rem",
      height: "25rem",
      position: "relative",
      backgroundColor: "#888"
    }}
  >
    <Ribbon {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {};
