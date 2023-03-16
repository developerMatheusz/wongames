import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GameDetails from ".";
import mockGame from "./mock";

export default {
  title: "GameDetails",
  component: GameDetails,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: "date"
    },
    platforms: {
      control: {
        type: "inline-check",
        options: ["windows", "linux", "mac"]
      }
    },
    genres: {
      control: {
        type: "inline-check",
        options: ["Role-playing", "Narrative"]
      }
    }
  }
} as unknown as ComponentMeta<typeof GameDetails>;

const Template: ComponentStory<typeof GameDetails> = (args) => (
  <div style={{ maxWidth: "130rem", margin: "0 auto" }}>
    <GameDetails {...args} />
  </div>
);

export const Default = Template.bind({});
