import CardsList, { CardsListProps } from "../../components/CardsList";
import Profile from "../../templates/Profile";
import mockCards from "../../components/PaymentOptions/mock";
import React from "react";

export default function Cards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  );
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  };
}
