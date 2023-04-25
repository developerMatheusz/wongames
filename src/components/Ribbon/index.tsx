import * as S from "./styles";
import React from "react";

export type RibbonColors = "primary" | "secondary";
export type RibbonSizes = "normal" | "small";

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

const Ribbon = ({
  children,
  color = "primary",
  size = "normal"
}: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Ribbon;
