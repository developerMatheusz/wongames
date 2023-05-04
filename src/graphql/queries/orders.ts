import { gql } from "@apollo/client";
import { GameFragment } from "../fragments/game";

export const QUERY_ORDERS = gql`
  query QueryOrders($identifier: String!) {
    orders(filters: { user: { email: { eq: $identifier } } }) {
      data {
        id
        attributes {
          createdAt
          card_brand
          card_last4
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
