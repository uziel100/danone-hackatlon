/* eslint-disable no-dupe-keys */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, from, NormalizedCacheObject, GraphQLRequest } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import fetch from 'cross-fetch';
import baseConfig from 'base.config';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext(({ context = {} }: GraphQLRequest) => {
  // Custom headers are now merged with the request context
  let customHeaders = { ...context?.headers };
  customHeaders = {
    ...customHeaders,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${baseConfig.contentfulDeliveryToken}`
  };
  return {
    headers: customHeaders
  };
});

const httpLink = new HttpLink({
  uri: baseConfig.httpsUri, // Server URL (must be absolute)
  fetch
});

const clientLinkWithAuth = from([errorLink, authLink.concat(httpLink)]);

function createApolloClient() {
  const clientLink = clientLinkWithAuth;

  return new ApolloClient({
    ssrMode: true,
    link: clientLink!,
    cache: new InMemoryCache()
  });
}

export function initializeApollo(initialState: any = null) {
  const apolloClientCache = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = apolloClientCache.extract();

    // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
    const data = merge(existingCache, initialState, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s)))
      ]
    });

    // Restore the cache with the merged data
    apolloClientCache.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return apolloClientCache;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = apolloClientCache;

  return apolloClientCache;
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: any) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
