import React from 'react';
import FadeIn from 'react-fade-in';
import { StyledBoxButton } from '../components/styles/StyledBoxButton/StyledBoxButton';
import { StyledBoxDescription } from '../components/styles/StyledBoxDescription/StyledBoxDescription';
import { StyledHashtag } from '../components/styles/StyledBoxHashtag/StyledBoxHashtag';
import { StyledBoxTitle } from '../components/styles/StyledBoxTitle/StyledBoxTitle';
import Theme from '../components/styles/theme';
import { BoxContainer } from '../components/view/box-container/BoxContainer';
import { GetRepos_viewer_repositories_nodes } from '../models/graphqL/GetRepos';
import {
  getHashtag,
  getLanguage,
  makeStrArrayValuesUnique,
} from './commonFunctions';

export const getOptions = (
  projects: (GetRepos_viewer_repositories_nodes | null)[] | null | undefined
) => {
  const languages: string[] = [];
  projects?.forEach((repo: GetRepos_viewer_repositories_nodes | null) =>
    getLanguage(repo?.languages?.edges)?.forEach((language: string) =>
      languages.push(language)
    )
  );

  return languages.filter(makeStrArrayValuesUnique);
};

export const sortProjects = (
  projects: (GetRepos_viewer_repositories_nodes | null)[] | null | undefined,
  sort: string
): GetRepos_viewer_repositories_nodes[] | undefined => {
  if (sort === 'Latest') {
    if (projects && !projects[0]?.updatedAt.includes('2020')) {
      return projects?.reverse() as GetRepos_viewer_repositories_nodes[];
    }
  } else if (sort === 'Oldest') {
    if (projects && projects[0]?.updatedAt.includes('2020')) {
      return projects?.reverse() as GetRepos_viewer_repositories_nodes[];
    }
  }
  return projects as GetRepos_viewer_repositories_nodes[];
};

export const getFilters = (
  projects: (GetRepos_viewer_repositories_nodes | null)[] | null | undefined
) => {
  const options: any = {};
  getOptions(projects)
    .filter(makeStrArrayValuesUnique)
    .forEach((val: string) => (options[val] = true));

  return options;
};

export const displayProjects = (
  projects: (GetRepos_viewer_repositories_nodes | null)[] | null | undefined,
  filters: any
): JSX.Element[] | undefined => {
  const filteredProjects = filterProjects(projects, filters);

  if (filteredProjects?.length === 0) {
    return [<p key="no-projects">No projects found</p>];
  }

  return filteredProjects?.map(
    (repo: GetRepos_viewer_repositories_nodes | null) => {
      return (
        <BoxContainer key={repo?.url}>
          <FadeIn>
            <StyledBoxTitle>{repo?.name}</StyledBoxTitle>
            <StyledHashtag theme={Theme}>
              {getHashtag(repo?.languages?.edges)}
            </StyledHashtag>
            <StyledBoxDescription>{repo?.description}</StyledBoxDescription>
            <span style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>
              Last Updated: {repo?.updatedAt.split('T')[0]}
            </span>
            <br />
            <a
              rel="noopener noreferrer"
              target="_blank"
              style={{ textDecoration: 'none', color: 'inherit' }}
              href={repo?.url}
            >
              <StyledBoxButton theme={Theme}>
                View Repository &gt;
              </StyledBoxButton>
            </a>
          </FadeIn>
        </BoxContainer>
      );
    }
  );
};

export const filterProjects = (
  projects: (GetRepos_viewer_repositories_nodes | null)[] | null | undefined,
  filters: any
) => {
  return projects?.filter((project) => {
    const lang = getLanguage(project?.languages?.edges);
    const filterParams = getFiltersToApply(filters);

    if (filterParams.length === 0) {
      return true;
    }

    return !filterParams.some((filter: string | undefined) => {
      return lang?.includes(filter as string);
    });
  });
};

export const getFiltersToApply = (filters: any) => {
  const keys = Object.keys(filters);
  return keys.filter((key: string) => filters[key] === false);
};
