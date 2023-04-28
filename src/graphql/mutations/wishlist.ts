import { gql } from "@apollo/client";
import { GameFragment } from "../fragments/game";

export const MUTATION_CREATE_WISHLIST = gql`
  mutation MutationCreateWishlist($input: WishlistInput!) {
    createWishlist(data: $input) {
      data {
        id
        attributes {
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
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

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlist($input: WishlistInput!, $id: ID!) {
    updateWishlist(data: $input, id: $id) {
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
          user {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
      }
    }
  }

  ${GameFragment}
`;
