import { QUERY_GAMES } from "../graphql/queries/games";
import GamesTemplate, { GamesTemplateProps } from "../templates/Games";
import { initializeApollo } from "../utils/apollo";
import { parseQueryStringToWhere } from "../utils/filter";
import { GetServerSidePropsContext } from "next";
import React from "react";

export default function Games(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo();

  const filterPlatforms = {
    title: "Platforms",
    name: "platforms",
    type: "checkbox",
    fields: [
      { label: "Windows", name: "windows" },
      { label: "Linux", name: "linux" },
      { label: "Mac OS", name: "mac" }
    ]
  };

  const filterSort = {
    title: "Sort by price",
    name: "sort",
    type: "radio",
    fields: [
      { label: "Lowest to highest", name: "price:asc" },
      { label: "Highest to lowest", name: "price:desc" }
    ]
  };

  const filterCategories = {
    title: "Genres",
    name: "categories",
    type: "checkbox",
    fields: [
      { label: "Action", name: "action" },
      { label: "Adventure", name: "adventure" },
      { label: "Sports", name: "sports" },
      { label: "Puzzle", name: "puzzle" },
      { label: "Horror", name: "horror" },
      { label: "Platform", name: "platform" },
      { label: "Fantasy", name: "fantasy" },
      { label: "RPG", name: "role-playing" },
      { label: "JRPG", name: "jrpg" },
      { label: "Simulation", name: "simulation" },
      { label: "Strategy", name: "strategy" },
      { label: "Shooter", name: "shooter" }
    ]
  };

  const filterItems = [filterSort, filterPlatforms, filterCategories];

  await apolloClient.query({
    query: QUERY_GAMES,
    variables: {
      filters: parseQueryStringToWhere({
        queryString: query,
        filterItems
      }),
      sort: query.sort as string | null
    }
  });

  return {
    props: {
      filterItems
    }
  };
}
