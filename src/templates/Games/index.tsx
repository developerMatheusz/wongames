/* eslint-disable @typescript-eslint/no-explicit-any */
import ExploreSidebar, { ItemProps } from "../../components/ExploreSidebar";
import GameCard from "../../components/GameCard";
import { Grid } from "../../components/Grid";
import Base from "../Base";
import * as S from "./styles";
import { QUERY_GAMES } from "../../graphql/queries/games";
import { useRouter } from "next/router";
import {
  parseQueryStringToFilter,
  parseQueryStringToWhere
} from "../../utils/filter";
import { ParsedUrlQueryInput } from "querystring";
import Empty from "../../components/Empty";
import React from "react";
import { useQuery } from "@apollo/client";
import { getImageUrl } from "@/utils/getImageUrl";

export type GamesTemplateProps = {
  filterItems: ItemProps[];
};

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter();

  const { data, loading } = useQuery(QUERY_GAMES, {
    variables: {
      filters: parseQueryStringToWhere({
        queryString: query,
        filterItems
      }),
      sort: query.sort as string | null
    }
  });

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: "/games",
      query: items
    });

    return;
  };

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <section>
            {data.games.data?.length ? (
              <>
                <Grid>
                  {data?.games.data.map((game: any) => (
                    <GameCard
                      id={game.id}
                      key={game.attributes.slug}
                      title={game.attributes.name}
                      slug={game.attributes.slug}
                      developer={
                        game.attributes.developers.data[0].attributes.name
                      }
                      img={`${getImageUrl(
                        game.attributes.cover.data.attributes.url
                      )}`}
                      price={game.attributes.price}
                    />
                  ))}
                </Grid>
              </>
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
                hasLink
              />
            )}
          </section>
        )}
      </S.Main>
    </Base>
  );
};

export default GamesTemplate;
