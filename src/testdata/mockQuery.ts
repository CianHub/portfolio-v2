import { GraphQLError } from 'graphql';
import { REPOS_QUERY } from '../graphql/queries';

export const mockQueryData = [
  {
    request: {
      query: REPOS_QUERY,
      variables: {
        firstRepo: 100,
        firstLang: 10,
      },
    },
    result: (): unknown => {
      return {
        data: {
          viewer: {
            login: 'CianHub',
            repositories: {
              nodes: [
                {
                  description:
                    'This website offers both existing and potential fans of a band or musician  (The Monkees in this case) a way to see and hear songs from the bands back catalog and find out about any new material as it becomes available. The site provides information and links to buy tickets for the bands upcoming concerts as well as a method of booking the band for private events. Fans can learn about the individual members of The Monkees through the band section and provides links to the bands social media and a newsletter sign-up option.',
                  languages: {
                    edges: [
                      {
                        node: {
                          name: 'CSS',
                          color: '#563d7c',
                        },
                      },
                      {
                        node: {
                          name: 'HTML',
                          color: '#e34c26',
                        },
                      },
                    ],
                  },
                  name: 'the-monkees-website',
                  updatedAt: '2019-07-29T12:11:57Z',
                  url: 'https://github.com/CianHub/the-monkees-website',
                },
              ],
            },
          },
        },
      };
    },
  },
];

export const mockQueryError = [
  {
    request: {
      query: REPOS_QUERY,
      variables: {
        firstRepo: 100,
        firstLang: 10,
      },
    },
    error: new GraphQLError('There seems to have been some mistake..'),
  },
];
