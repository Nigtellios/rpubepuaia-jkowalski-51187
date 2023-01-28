import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const token = process.env.NEXT_PUBLIC_API_TOKEN;

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    }
  }),
  cache: new InMemoryCache({
    resultCaching: false
  }),
  ssrMode: true,
});

export default client;
