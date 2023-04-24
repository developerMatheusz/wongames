import formatPrice from "../../utils/format-price";
import { FavoriteBorder, Favorite } from "@styled-icons/material-outlined";
import Ribbon, { RibbonColors, RibbonSizes } from "../Ribbon";
import * as S from "./styles";
import React from "react";
import CartButton from "../CartButton";

export type GameCardProps = {
  id: string;
  title: string;
  slug: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
  onFav?: () => void;
};

const GameCard = ({
  id,
  title,
  slug,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor = "primary",
  ribbonSize = "normal"
}: GameCardProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <S.ImageBox href={`game/${slug}`}>
        <img src={img} alt={title} />
      </S.ImageBox>
      <S.Content>
        <S.Info href={`game/${slug}`}>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
        <S.FavButton onClick={onFav} role="button">
          {favorite ? (
            <Favorite aria-label="Remove from Wishlist" />
          ) : (
            <FavoriteBorder aria-label="Add to Wishlist" />
          )}
        </S.FavButton>
        <S.BuyBox>
          {!!promotionalPrice && (
            <S.Price isPromotional>{formatPrice(price)}</S.Price>
          )}
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
          <CartButton id={id} />
        </S.BuyBox>
      </S.Content>
    </S.Wrapper>
  );
};

export default GameCard;
