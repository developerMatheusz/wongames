import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Email } from "@styled-icons/material-outlined";
import TextField from ".";

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    label: "E-mail",
    labelFor: "Email",
    icon: <Email />,
    id: "Email",
    initialValue: "",
    placeholder: "example@example.com"
  },
  argTypes: {
    onInput: {
      action: "changed"
    }
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const Default = Template.bind({});
export const WithError = Template.bind({});

Default.args = {};
WithError.args = {
  error: "Ops... something is wrong"
};
