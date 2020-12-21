import React from 'react';
import Particles from 'react-particles-js';
import { getHashtag } from '../../../helpers/commonFunctions';
import { GetRepos_viewer_repositories_nodes } from '../../../models/graphqL/GetRepos';
import { StyledBoxButton } from '../../styles/StyledBoxButton/StyledBoxButton';
import { StyledBoxDescription } from '../../styles/StyledBoxDescription/StyledBoxDescription';
import { StyledHashtag } from '../../styles/StyledBoxHashtag/StyledBoxHashtag';
import { StyledBoxTitle } from '../../styles/StyledBoxTitle/StyledBoxTitle';
import { StyledRow } from '../../styles/StyledRow/StyledRow';
import { StyledSection } from '../../styles/StyledSection/StyledSection';
import Theme from '../../styles/theme';
import { BoxContainer } from '../../view/box-container/BoxContainer';

const displayProjects = (
  projects: (GetRepos_viewer_repositories_nodes | null)[] | null | undefined
) => {
  return projects?.map((repo: GetRepos_viewer_repositories_nodes | null) => {
    return (
      <BoxContainer key={repo?.url}>
        <StyledBoxTitle>{repo?.name}</StyledBoxTitle>
        <StyledHashtag theme={Theme}>
          {getHashtag(repo?.languages?.edges)}
        </StyledHashtag>
        <StyledBoxDescription>{repo?.description}</StyledBoxDescription>
        <span style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>
          Last Updated: {repo?.updatedAt.split('T')[0]}
        </span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: 'none', color: 'inherit' }}
          href={repo?.url}
        >
          <StyledBoxButton theme={Theme}>View Repository &gt;</StyledBoxButton>
        </a>
      </BoxContainer>
    );
  });
};
interface Props {
  projects: (GetRepos_viewer_repositories_nodes | null)[] | null | undefined;
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <StyledSection
      role="Projects"
      id="projects"
      theme={Theme}
      backgroundColor={'transparent'}
      justify={'flex-start'}
      vertical={true}
    >
      <Particles
        height="100%"
        params={{
          polygon: {
            draw: { stroke: { color: 'rgba(255, 255, 255, .05)' } },
          },
        }}
        style={{
          position: 'fixed',
          right: 0,
          bottom: 0,
          left: 0,
          top: 0,
          zIndex: -100,
          height: '100vh',
          margin: 0,
          padding: 0,
          width: '100%',
          backgroundColor: Theme.colors.black,
        }}
      ></Particles>
      <h2 style={{ alignSelf: 'flex-start' }}>Projects:// </h2>
      <p style={{ alignSelf: 'flex-start', marginBottom: '2rem' }}>
        A collection of my projects and their corresponding repositories.
      </p>
      <StyledRow>{displayProjects(projects)}</StyledRow>
    </StyledSection>
  );
};

export default Projects;
