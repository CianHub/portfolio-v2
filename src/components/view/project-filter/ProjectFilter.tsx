import React from 'react';
import { StyledCheckBoxContainer } from '../../styles/StyledCheckBoxContainer/StyledCheckBoxContainer';
import { StyledCheckBoxRow } from '../../styles/StyledCheckBoxRow/StyledCheckBoxRow';
import { StyledProjectFilter } from '../../styles/StyledProjectFilter/StyledProjectFilter';
import { StyledSortingSelect } from '../../styles/StyledSortingSelect/StyledSortingSelect';
import Theme from '../../styles/theme';

interface Props {
  options: string[];
  sortingOptions: string[];
  filters: any;
  currentSorting: string;
  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSorting: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ProjectFilter: React.FC<Props> = ({
  options,
  handleFilter,
  filters,
  sortingOptions,
  currentSorting,
  handleSorting,
}) => {
  const getCheckboxes = () => {
    return options.map((option: string) => {
      return (
        <StyledCheckBoxContainer key={option}>
          #{option}
          <input
            type="checkbox"
            id={option}
            name={option}
            value={filters[option]}
            onChange={($event) => handleFilter($event)}
            defaultChecked={filters[option]}
          />
          <span />
        </StyledCheckBoxContainer>
      );
    });
  };

  const getOptions = () => {
    return sortingOptions.map((option: string) => {
      return (
        <option value={option} key={option}>
          {option}
        </option>
      );
    });
  };

  return (
    <StyledProjectFilter>
      <StyledSortingSelect
        theme={Theme}
        name="sorting"
        value={currentSorting}
        onChange={($event) => handleSorting($event)}
      >
        {getOptions()}
      </StyledSortingSelect>
      <StyledCheckBoxRow theme={Theme}>{getCheckboxes()}</StyledCheckBoxRow>
    </StyledProjectFilter>
  );
};
