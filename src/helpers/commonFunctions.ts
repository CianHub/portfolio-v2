import { GetRepos_viewer_repositories_nodes_languages_edges } from '../models/graphqL/GetRepos';

export const getHashtag = (
  edges:
    | (GetRepos_viewer_repositories_nodes_languages_edges | null)[]
    | null
    | undefined
): string => {
  const text = edges?.map((edge) => `#${edge?.node.name}`);
  return text?.join(' ') || '';
};

export const getLanguage = (
  edges:
    | (GetRepos_viewer_repositories_nodes_languages_edges | null)[]
    | null
    | undefined
): string[] => {
  const text = edges?.map((edge) => `${edge?.node.name}`) || [''];
  return text;
};

export const makeStrArrayValuesUnique = (
  value: string,
  index: number,
  self: string[]
): boolean => self.indexOf(value) === index;

export const cloneData = (data: unknown): any =>
  data ? JSON.parse(JSON.stringify(data)) : data;
