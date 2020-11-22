import { DocumentNode, gql } from '@apollo/client';

export const REPOS_QUERY: DocumentNode = gql`
  query GetRepos($firstRepo: Int, $firstLang: Int) {
    viewer {
      login
      repositories(first: $firstRepo) {
        nodes {
          name
          description
          url
          updatedAt
          languages(first: $firstLang) {
            edges {
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;
