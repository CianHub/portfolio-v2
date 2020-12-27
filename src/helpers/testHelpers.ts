import { unmountComponentAtNode } from 'react-dom';
import { GetRepos_viewer_repositories_nodes } from '../models/graphqL/GetRepos';

export const beforeTest = (): HTMLElement => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  return container;
};

export const afterTest = (container: HTMLElement): null => {
  unmountComponentAtNode(container);
  container.remove();
  return null;
};

export const testProject: GetRepos_viewer_repositories_nodes = {
  description:
    'This website offers both existing and potential fans of a band or musician  (The Monkees in this case) a way to see and hear songs from the bands back catalog and find out about any new material as it becomes available. The site provides information and links to buy tickets for the bands upcoming concerts as well as a method of booking the band for private events. Fans can learn about the individual members of The Monkees through the band section and provides links to the bands social media and a newsletter sign-up option.',
  languages: {
    edges: [
      {
        node: { name: 'CSS', color: '#563d7c', __typename: 'Language' },
        __typename: 'LanguageEdge',
      },
    ],
    __typename: 'LanguageConnection',
  },
  name: 'the-monkees-website',
  updatedAt: '2019-07-29T12:11:57Z',
  url: 'https://github.com/CianHub/the-monkees-website',
  __typename: 'Repository',
};
