import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from ".";

export default {
  title: "Menu",
  component: Menu
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () => <Menu />;

export const Default = Template.bind({});

Default.args = {};
