import { DocumentNode, gql } from '@apollo/client';

export const REPOS_QUERY: DocumentNode = gql`
  query GetRepos {
    viewer {
      login
      repositories(first: 100, orderBy: { field: NAME, direction: ASC }) {
        edges {
          node {
            id
            description
            name
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                node {
                  id
                  color
                  name
                }
              }
            }
            url
          }
        }
      }
    }
  }
`;
