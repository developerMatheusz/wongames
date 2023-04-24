import formatPrice from "../../utils/format-price";
import { FavoriteBorder } from "@styled-icons/material-outlined";
import Button from "../Button";
import Heading from "../Heading";
import Ribbon from "../Ribbon";
import * as S from "./styles";
import React from "react";
import CartButton from "../CartButton";

export type GameInfoProps = {
  id: string;
  title: string;
  description: string;
  price: number;
};

const GameInfo = ({ id, title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading color="black" lineBottom>
        {title}
      </Heading>
      <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
      <S.Description>{description}</S.Description>
      <S.ButtonsWrapper>
        <CartButton id={id} size="large" hasText />
        <Button icon={<FavoriteBorder />} size="large" minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};

export default GameInfo;
