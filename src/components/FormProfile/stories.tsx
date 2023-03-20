import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormProfile from ".";

export default {
  title: "Form/FormProfile",
  component: FormProfile,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as ComponentMeta<typeof FormProfile>;

const Template: ComponentStory<typeof FormProfile> = () => (
  <div style={{ maxWidth: 860, margin: "auto" }}>
    <FormProfile />
  </div>
);

export const Default = Template.bind({});
