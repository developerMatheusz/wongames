/* eslint-disable @typescript-eslint/no-explicit-any */
import Game, { GameTemplateProps } from "../../templates/Game";
import { useRouter } from "next/router";
import { initializeApollo } from "../../utils/apollo";
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "../../graphql/queries/games";
import { GetStaticProps } from "next";
import { QUERY_RECOMMENDED } from "../../graphql/queries/recommended";
import { QUERY_UPCOMING } from "../../graphql/queries/upcoming";
import { gamesMapper, highlightMapper } from "../../utils/mappers";
import React from "react";
import { getImageUrl } from "@/utils/getImageUrl";

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();
  if (router.isFallback) return null;

  return <Game {...props} />;
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: {
      pagination: {
        limit: 9
      }
    }
  });

  const slugPaths = data.games.data.map((game: any) => ({
    slug: game.attributes.slug
  }));

  const paths = slugPaths.map(({ slug }: any) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: true
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    },
    fetchPolicy: "no-cache"
  });

  if (!data.games.data.length) {
    return { notFound: true };
  }

  const game = data.games.data[0];
  const gallery = game.attributes.gallery.data.map((src: any) => ({
    src: src.attributes
  }));
  const platforms = game.attributes.platforms.data.map((platform: any) => ({
    name: platform.attributes.name
  }));
  const genres = game.attributes.categories.data.map((categorie: any) => ({
    name: categorie.attributes.name
  }));

  const { data: games } = await apolloClient.query({
    query: QUERY_RECOMMENDED
  });

  const recommendedGames = games.recommended.data.attributes.section.games.data;
  const recommendedTitle = games.recommended.data.attributes.section.title;

  const TODAY = new Date().toISOString().slice(0, 10);
  const { data: upcoming } = await apolloClient.query({
    query: QUERY_UPCOMING,
    variables: { date: TODAY }
  });

  const upcomingGames = upcoming.upcomingGames.data;
  const showcase = upcoming.showcase.data.attributes.upcomingGames.highlight;
  const upcomingTitle = upcoming.showcase.data.attributes.upcomingGames.title;

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: `${getImageUrl(game.attributes.cover?.data.attributes.src)}`,
      gameInfo: {
        id: game.id,
        title: game.attributes.name,
        price: game.attributes.price,
        description: game.attributes.short_description
      },
      gallery: gallery.map((image: any) => ({
        src: `${getImageUrl(image.src.src)}`,
        label: image.src.label
      })),
      description: game.attributes.description,
      details: {
        developer: game.attributes.developers.data[0].attributes.name,
        releaseDate: game.attributes.release_date,
        platforms: platforms.map((platform: any) => platform.name),
        publisher: game.attributes.publisher.data.attributes.name,
        rating: game.attributes.rating,
        genres: genres.map((category: any) => category.name)
      },
      upcomingTitle: upcomingTitle,
      upcommingGames: gamesMapper(upcomingGames),
      upcommingHighlight: highlightMapper(showcase),
      recommendedTitle: recommendedTitle,
      recommendedGames: gamesMapper(recommendedGames)
    }
  };
};
