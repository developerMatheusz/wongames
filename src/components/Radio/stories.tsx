import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from ".";

export default {
  title: "Form/Radio",
  component: Radio,
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
} as unknown as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
        defaultChecked
        {...args}
      />
    </div>
  </>
);

export const Default = Template.bind({});

Default.args = {};
