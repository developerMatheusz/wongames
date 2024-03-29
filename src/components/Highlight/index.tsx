import Button from "../Button";
import * as S from "./styles";
import React from "react";
import Image from "next/legacy/image";

export type HighlightProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  floatImage?: string;
  buttonLabel: string;
  buttonLink: string;
  alignment?: "right" | "left";
};

const HighLight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  buttonLabel,
  buttonLink,
  alignment = "right"
}: HighlightProps) => {
  return (
    <S.Wrapper alignment={alignment}>
      <Image src={backgroundImage} alt={title} layout="fill" />
      {!!floatImage && (
        <S.FloatImageWrapper>
          <Image src={floatImage} alt={title} width={400} height={300} />
        </S.FloatImageWrapper>
      )}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default HighLight;
