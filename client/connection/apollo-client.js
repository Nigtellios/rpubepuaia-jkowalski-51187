import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:2137/graphql',
  cache: new InMemoryCache(),
  ssrMode: true,
});

export default client;
