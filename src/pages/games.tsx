import { QUERY_GAMES } from "@/graphql/queries/games";
import GamesTemplate, { GamesTemplateProps } from "@/templates/Games";
import { initializeApollo } from "@/utils/apollo";
import { gamesExplorerMapper } from "@/utils/mappers";
import filterItemsMock from "../components/ExploreSidebar/mock";

export default function Games(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { pagination: { limit: 9 } }
  });

  const games = gamesExplorerMapper(data.games.data);

  return {
    props: {
      revalidate: 60,
      games: games,
      filterItems: filterItemsMock
    }
  };
}
