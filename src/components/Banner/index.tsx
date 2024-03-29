import Button from "../Button";
import Ribbon, { RibbonColors, RibbonSizes } from "../Ribbon";
import * as S from "./styles";
import React from "react";
import Image from "next/legacy/image";

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "normal"
}: BannerProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <S.ImageWrapper>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageWrapper>
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  );
};

export default Banner;
