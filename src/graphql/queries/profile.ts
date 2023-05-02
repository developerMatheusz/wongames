import { gql } from "@apollo/client";

export const QUERY_PROFILE_ME = gql`
  query QueryProfileMe($username: String!) {
    usersPermissionsUsers(filters: { username: { eq: $username } }) {
      data {
        id
        attributes {
          email
          username
        }
      }
    }
  }
`;
