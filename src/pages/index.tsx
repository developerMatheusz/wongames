import Home, { HomeTemplateProps } from "../templates/Home";
import { initializeApollo } from "@/utils/apollo";
import { QUERY_HOME } from "../graphql/queries/home";
import { bannerMapper, gamesMapper, highlightMapper } from "@/utils/mappers";

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const TODAY = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    }
  });

  const banners_ = banners.data;
  const newGames_ = newGames.data;
  const upcomingGames_ = upcomingGames.data;
  const freeGames_ = freeGames.data;
  const sections_ = sections.data;
  const upcomingHighlight = sections_.attributes.upcomingGames;
  const freeGamesHighlight = sections_.attributes.freeGames;
  const popularGames = sections_.attributes.popularGames;

  return {
    props: {
      revalidate: 60,
      banners: bannerMapper(banners_),
      newGamesTitle: sections_.attributes.newGames.title,
      newGames: gamesMapper(newGames_),
      mostPopularGamesTitle: sections_.attributes.popularGames.title,
      mostPopularHightlight: highlightMapper(popularGames.highlight),
      mostPopularGames: gamesMapper(popularGames.games.data),
      upcomingGamesTitle: sections_.attributes.upcomingGames.title,
      upcommingGames: gamesMapper(upcomingGames_),
      upcommingHighlight: highlightMapper(upcomingHighlight.highlight),
      freeGamesTitle: sections_.attributes.freeGames.title,
      freeGames: gamesMapper(freeGames_),
      freeHighlight: highlightMapper(freeGamesHighlight.highlight)
    }
  };
}
