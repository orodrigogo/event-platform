import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oxt99g18pp01xx593p4hb0/master',
  cache: new InMemoryCache()
});