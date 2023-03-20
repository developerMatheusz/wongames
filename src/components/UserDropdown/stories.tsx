import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserDropdown from ".";

export default {
  title: "UserDropdown",
  component: UserDropdown,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as unknown as ComponentMeta<typeof UserDropdown>;

const Template: ComponentStory<typeof UserDropdown> = (args) => (
  <div style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}>
    <UserDropdown {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  username: "matheus"
};
