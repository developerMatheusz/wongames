import Button from "../Button";
import * as S from "./styles";
import React from "react";

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

const Empty = ({ title, description, hasLink }: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Image
        src="/img/empty.svg"
        alt="A gamer in a couch playing videogame"
        role="image"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      {hasLink && (
        <Button href="/" as="a">
          Go back to store
        </Button>
      )}
    </S.Wrapper>
  );
};

export default Empty;
