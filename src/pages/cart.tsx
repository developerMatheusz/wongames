import Cart, { CartProps } from "../templates/Cart";
import { initializeApollo } from "../utils/apollo";
import { QUERY_RECOMMENDED } from "../graphql/queries/recommended";
import { gamesMapper, highlightMapper } from "../utils/mappers";
import React from "react";
import protectedRoutes from "@/utils/protected-routes";
import { GetServerSidePropsContext } from "next/types";

export default function CartPage(props: CartProps) {
  return <Cart {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);
  const { data } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  });

  const games = data.recommended.data.attributes.section.games.data;
  const highlight = data.recommended.data.attributes.section.highlight;
  const recommendedTitle = data.recommended.data.attributes.section.title;

  return {
    props: {
      session,
      recommendedTitle: recommendedTitle,
      recommendedGames: gamesMapper(games),
      recommendedHighlight: highlightMapper(highlight)
    }
  };
}
