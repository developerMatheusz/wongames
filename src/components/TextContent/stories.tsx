import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextContent from ".";
import textMock from "./mock";

export default {
  title: "TextContent",
  component: TextContent,
  args: textMock,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as ComponentMeta<typeof TextContent>;

const Template: ComponentStory<typeof TextContent> = (args) => (
  <TextContent {...args} />
);

export const Default = Template.bind({});
