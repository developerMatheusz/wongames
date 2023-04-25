import * as S from "./styles";
import { forwardRef } from "react";
import SlickSlider, { Settings } from "react-slick";
import React from "react";

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => {
  return (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  );
};

export default forwardRef(Slider);
