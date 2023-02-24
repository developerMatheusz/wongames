import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Main from ".";

export default {
  title: "Main",
  component: Main
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {};
