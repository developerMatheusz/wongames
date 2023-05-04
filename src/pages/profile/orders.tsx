import OrdersList, { OrdersListProps } from "../../components/OrdersList";
import Profile from "../../templates/Profile";
import React from "react";
import { GetServerSidePropsContext } from "next";
import protectedRoutes from "@/utils/protected-routes";
import { initializeApollo } from "@/utils/apollo";
import { QUERY_ORDERS } from "../../graphql/queries/orders";
import { ordersMapper } from "../../utils/mappers";

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  if (!session) {
    return { props: {} };
  }

  const { data } = await apolloClient.query({
    query: QUERY_ORDERS,
    variables: {
      identifier: session?.user?.email
    },
    fetchPolicy: "no-cache"
  });

  return {
    props: {
      items: ordersMapper(data.orders.data),
      session
    }
  };
}
