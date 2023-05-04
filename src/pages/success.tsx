import { QUERY_RECOMMENDED } from "../graphql/queries/recommended";
import { initializeApollo } from "../utils/apollo";
import { gamesMapper, highlightMapper } from "../utils/mappers";
import Success, { SuccessTemplateProps } from "../templates/Success";
import React from "react";

export default function SuccessPage(props: SuccessTemplateProps) {
  return <Success {...props} />;
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
    revalidate: 60 * 60,
    props: {
      recommendedTitle: recommendedTitle,
      recommendedGames: gamesMapper(games),
      recommendedHighlight: highlightMapper(highlight)
    }
  };
}
