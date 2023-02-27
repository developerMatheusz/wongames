import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MediaMatch from ".";

export default {
  title: "MediaMatch",
  component: MediaMatch,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof MediaMatch>;

const Template: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);

export const Desktop = Template.bind({});
export const Mobile = Template.bind({});

Desktop.args = {};
Mobile.args = {};
Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1"
  }
};
