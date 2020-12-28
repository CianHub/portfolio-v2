import React, { useState } from 'react';
import Particles from 'react-particles-js';
import { cloneData } from '../../../helpers/commonFunctions';
import {
  getOptions,
  getFilters,
  displayProjects,
  sortProjects,
} from '../../../helpers/filterFunctions';
import { FilterType } from '../../../models/FilterType.model';
import { GetRepos_viewer_repositories_nodes } from '../../../models/graphqL/GetRepos';
import { StyledRow } from '../../styles/StyledRow/StyledRow';
import { StyledSection } from '../../styles/StyledSection/StyledSection';
import Theme from '../../styles/theme';
import { ProjectFilter } from '../../view/project-filter/ProjectFilter';

interface Props {
  projects: (GetRepos_viewer_repositories_nodes | null)[] | null | undefined;
  showLoading: boolean;
}

const Projects: React.FC<Props> = ({ projects, showLoading }) => {
  const options = getOptions(projects);
  const sortingOptions = ['Oldest', 'Latest'];
  const [filters, setFilters] = useState<FilterType>({
    ...getFilters(cloneData(projects)),
  });
  const [sorting, setSorting] = useState('Oldest');

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    const name = event.target.name;
    const newFilters = { ...filters, [name]: value };
    setFilters({ ...newFilters });
  };

  const handleSorting = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSorting(value);
  };

  return (
    <StyledSection
      role="section"
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
      <h2 style={{ alignSelf: 'flex-start', marginBottom: '0.5rem' }}>
        Projects://
      </h2>

      {showLoading && <h3 role="progressbar">Loading...</h3>}
      {!showLoading && (
        <>
          <ProjectFilter
            options={options}
            sortingOptions={sortingOptions}
            currentSorting={sorting}
            handleSorting={handleSorting}
            handleFilter={handleFilter}
            filters={filters}
          />

          <StyledRow role="rowgroup">
            {displayProjects(
              sortProjects(cloneData(projects), sorting),
              filters
            )}
          </StyledRow>
        </>
      )}
    </StyledSection>
  );
};

export default Projects;
