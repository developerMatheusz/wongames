import formatPrice from "../../utils/format-price";
import Ribbon, { RibbonColors, RibbonSizes } from "../Ribbon";
import * as S from "./styles";
import React from "react";
import CartButton from "../CartButton";
import WishlistButton from "../WishlistButton";
import Image from "next/legacy/image";

export type GameCardProps = {
  id: string;
  title: string;
  slug: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  ribbon?: React.ReactNode;
  ribbonColor?: RibbonColors;
  ribbonSize?: RibbonSizes;
};

const GameCard = ({
  id,
  title,
  slug,
  developer,
  img,
  price,
  promotionalPrice,
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
      <S.ImageBox>
        <Image src={img} alt={title} layout="fill" />
      </S.ImageBox>
      <S.Content>
        <S.Info href={`game/${slug}`}>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
        <S.FavButton>
          <WishlistButton id={id} />
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
