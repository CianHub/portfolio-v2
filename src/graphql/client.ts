import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GH_PA_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;
