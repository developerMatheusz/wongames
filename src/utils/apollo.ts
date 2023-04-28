/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import { useMemo } from "react";
import { setContext } from "@apollo/client/link/context";

let apolloClient: ApolloClient<NormalizedCacheObject | null>;

function createApolloClient(session?: any) {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
  });

  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.accessToken || clientSession?.accessToken || "";
    const authorization = jwt ? `Bearer ${jwt}` : "";
    return { headers: { ...headers, authorization } };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
}

export function initializeApollo(initialState = null, session?: any) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session);

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState);
  }

  if (typeof window === "undefined") return apolloClientGlobal;
  apolloClient = apolloClient ?? apolloClientGlobal;

  return apolloClient;
}

export function useApollo(initialState = null, session?: any) {
  const store = useMemo(
    () => initializeApollo(initialState, session),
    [initialState, session]
  );
  return store;
}
