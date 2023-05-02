import { GetServerSidePropsContext } from "next";
import FormProfile, { FormProfileProps } from "../../components/FormProfile";
import Profile from "../../templates/Profile";
import React from "react";
import protectedRoutes from "../../utils/protected-routes";
import { initializeApollo } from "../../utils/apollo";
import { QUERY_PROFILE_ME } from "../../graphql/queries/profile";

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);
  const { data } = await apolloClient.query({
    query: QUERY_PROFILE_ME,
    variables: {
      username: session?.user?.name
    }
  });

  return {
    props: {
      session,
      email: data.usersPermissionsUsers.data[0].attributes.email,
      username: data.usersPermissionsUsers.data[0].attributes.username
    }
  };
}
