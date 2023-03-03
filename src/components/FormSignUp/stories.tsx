import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormSignUp from ".";

export default {
  title: "Form/FormSignUp",
  component: FormSignUp,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof FormSignUp>;

const Template: ComponentStory<typeof FormSignUp> = () => (
  <div style={{ width: 300, margin: "auto" }}>
    <FormSignUp />
  </div>
);

export const Default = Template.bind({});
