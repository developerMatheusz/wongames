import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExploreSidebar from ".";
import items from "./mock";

export default {
  title: "ExploreSidebar",
  component: ExploreSidebar,
  args: {
    items,
    onFilter: () => console.log("filter")
  },
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  }
} as ComponentMeta<typeof ExploreSidebar>;

const Template: ComponentStory<typeof ExploreSidebar> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{
        platforms: ["windows", "linux"],
        sort_by: "low-to-high"
      }}
    />
  </div>
);

export const Default = Template.bind({});

export const WithInitialValues = Template.bind({});

WithInitialValues.args = {
  initialValues: {
    windows: true,
    sort_by: "low-to-high"
  }
};
