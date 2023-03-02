import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from ".";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {
    onCheck: {
      action: "checked"
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox
    name="category"
    label="Action"
    labelFor="action"
    isChecked
    {...args}
  />
);

export const Default = Template.bind({});

Default.args = {};
