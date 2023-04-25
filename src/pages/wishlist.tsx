import Wishlist, { WishlistTemplateProps } from "../templates/Wishlist";
import gamesMock from "../components/GameCardSlider/mock";
import { initializeApollo } from "../utils/apollo";
import { QUERY_RECOMMENDED } from "../graphql/queries/recommended";
import { gamesMapper, highlightMapper } from "../utils/mappers";
import React from "react";

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  });

  const games = data.recommended.data.attributes.section.games.data;
  const highlight = data.recommended.data.attributes.section.highlight;
  const recommendedTitle = data.recommended.data.attributes.section.title;

  return {
    props: {
      games: gamesMock,
      recommendedTitle: recommendedTitle,
      recommendedGames: gamesMapper(games),
      recommendedHighlight: highlightMapper(highlight)
    }
  };
}
