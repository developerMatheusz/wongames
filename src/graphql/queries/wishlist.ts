import { QueryHookOptions, gql, useQuery } from "@apollo/client";
import { GameFragment } from "../fragments/game";

export const QUERY_WISHLIST = gql`
  query QueryWishlist($identifier: StringFilterInput!) {
    wishlists(filters: { user: { email: $identifier } }) {
      data {
        id
        attributes {
          games {
            data {
              id
              attributes {
                ...GameFragment
              }
            }
          }
        }
      }
    }
  }

  ${GameFragment}
`;

export function useQueryWishlist(options?: QueryHookOptions) {
  return useQuery(QUERY_WISHLIST, options);
}
