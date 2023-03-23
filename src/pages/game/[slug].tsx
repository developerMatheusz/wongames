import Game, { GameTemplateProps } from "@/templates/Game";
import gamesMock from "@/components/GameCardSlider/mock";
import highlightMock from "@/components/Highlight/mock";
import { useRouter } from "next/router";
import { initializeApollo } from "@/utils/apollo";
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "@/graphql/queries/games";
import { GetStaticProps } from "next";

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

  const slugPaths = data.games.data.map((game) => ({
    slug: game.attributes.slug
  }));

  const paths = slugPaths.map(({ slug }) => ({
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
    }
  });

  if (!data.games.data.length) {
    return { notFound: true };
  }

  const game = data.games.data[0];
  const gallery = game.attributes.gallery.data.map((src) => ({
    src: src.attributes
  }));
  const platforms = game.attributes.platforms.data.map((platform) => ({
    name: platform.attributes.name
  }));
  const genres = game.attributes.categories.data.map((categorie) => ({
    name: categorie.attributes.name
  }));

  return {
    props: {
      cover: `http://localhost:1337${game.attributes.cover?.data.attributes.src}`,
      gameInfo: {
        title: game.attributes.name,
        price: game.attributes.price,
        description: game.attributes.short_description
      },
      gallery: gallery.map((image) => ({
        src: `http://localhost:1337${image.src.src}`,
        label: image.src.label
      })),
      description: game.attributes.description,
      details: {
        developer: game.attributes.developers.data[0].attributes.name,
        releaseDate: game.attributes.release_date,
        platforms: platforms.map((platform) => platform.name),
        publisher: game.attributes.publisher.data.attributes.name,
        rating: game.attributes.rating,
        genres: genres.map((category) => category.name),
        upcommingGames: gamesMock,
        upcommingHighlight: highlightMock,
        recommendedGames: gamesMock
      }
    }
  };
};
