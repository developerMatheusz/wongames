import Cart, { CartProps } from "../templates/Cart";
import itemsMock from "../components/CartList/mock";
import cardsMock from "../components/PaymentOptions/mock";
import { initializeApollo } from "../utils/apollo";
import { QUERY_RECOMMENDED } from "../graphql/queries/recommended";
import { gamesMapper, highlightMapper } from "../utils/mappers";
import React from "react";

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  });

  const games = data.recommended.data.attributes.section.games.data;
  const highlight = data.recommended.data.attributes.section.highlight;
  const recommendedTitle = data.recommended.data.attributes.section.title;

  return {
    props: {
      items: itemsMock,
      total: "$ 430,00",
      cards: cardsMock,
      recommendedTitle: recommendedTitle,
      recommendedGames: gamesMapper(games),
      recommendedHighlight: highlightMapper(highlight)
    }
  };
}
