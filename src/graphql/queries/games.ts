import { gql, QueryHookOptions, useQuery } from "@apollo/client";
import { GameFragment } from "../fragments/game";

export const QUERY_GAMES = gql`
  query QueryGames(
    $filters: GameFiltersInput
    $sort: [String]
    $pagination: PaginationArg
  ) {
    games(filters: $filters, sort: $sort, pagination: $pagination) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
    }
  }

  ${GameFragment}
`;

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export function useQueryGames(options?: QueryHookOptions) {
  return useQuery(QUERY_GAMES, options);
}
