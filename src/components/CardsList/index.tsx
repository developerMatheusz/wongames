import Heading from "../Heading";
import { PaymentCard } from "../PaymentOptions";
import * as S from "./styles";
import React from "react";

export type CardsListProps = {
  cards?: PaymentCard[];
};

const CardsList = ({ cards }: CardsListProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black" size="small">
        My cards
      </Heading>
      {cards?.map((card) => (
        <S.Card key={card.number}>
          <img src={card.img} alt={card.flag} />
          <span>{card.number}</span>
        </S.Card>
      ))}
    </S.Wrapper>
  );
};

export default CardsList;
