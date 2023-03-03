import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormSignIn from ".";

export default {
  title: "Form/FormSignIn",
  component: FormSignIn,
  parameters: {
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof FormSignIn>;

const Template: ComponentStory<typeof FormSignIn> = () => (
  <div style={{ width: 300, margin: "auto" }}>
    <FormSignIn />
  </div>
);

export const Default = Template.bind({});
