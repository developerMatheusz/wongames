import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Slider from ".";
import { Settings } from "react-slick";
import styled from "styled-components";

export default {
  title: "Slider",
  component: Slider,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof Slider>;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

const Horizontal: ComponentStory<typeof Slider> = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
    <Slide>9</Slide>
  </Slider>
);

const Vertical: ComponentStory<typeof Slider> = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
    <Slide>7</Slide>
    <Slide>8</Slide>
    <Slide>9</Slide>
  </Slider>
);

export const HorizontalSlider = Horizontal.bind({});
export const VerticalSlider = Vertical.bind({});
