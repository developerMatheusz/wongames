import { ComponentStory, ComponentMeta } from "@storybook/react";
import Showcase from ".";
import hightlightMock from "../Highlight/mock";
import gamesMock from "../GameCardSlider/mock";

export default {
  title: "Showcase",
  component: Showcase,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark"
    }
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "0 auto" }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Showcase>;

const Template: ComponentStory<typeof Showcase> = (args) => (
  <Showcase {...args} />
);

export const Default = Template.bind({});
export const WithoutTitle = Template.bind({});
export const WithoutHighlight = Template.bind({});
export const WithoutGames = Template.bind({});

Default.args = {
  title: "Most Popular",
  highlight: hightlightMock,
  games: gamesMock
};

WithoutTitle.args = {
  highlight: hightlightMock,
  games: gamesMock
};

WithoutHighlight.args = {
  title: "Most Popular",
  games: gamesMock
};

WithoutGames.args = {
  title: "Most Popular",
  highlight: hightlightMock
};
