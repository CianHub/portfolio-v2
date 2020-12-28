import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${JSON.stringify(
      '2a22d125fafb511612d7208ebd13c78ea9f9d4f6'
    )}`,
  },
  cache: new InMemoryCache(),
});

export default client;
