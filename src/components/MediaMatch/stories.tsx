import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MediaMatch from ".";

export default {
  title: "MediaMatch",
  component: MediaMatch
} as ComponentMeta<typeof MediaMatch>;

const Template: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);

const SecondTemplate: ComponentStory<typeof MediaMatch> = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

export const Desktop = Template.bind({});
export const Mobile = SecondTemplate.bind({});

Desktop.args = {};
Mobile.args = {};
Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile1"
  }
};
