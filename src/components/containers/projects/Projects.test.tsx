import React from 'react';
import Projects from './Projects';

import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import {
  afterTest,
  beforeTest,
  testProject,
} from '../../../helpers/testHelpers';
import {
  fireEvent,
  getByLabelText,
  getByRole,
  waitFor,
} from '@testing-library/react';

let container: HTMLElement | null;

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('Projects', () => {
  it('should render the component', async () => {
    act(() => {
      render(<Projects projects={[testProject]} />, container);
    });

    await waitFor(async () => {
      expect(
        getByRole(container as HTMLElement, 'section')
      ).toBeInTheDocument();
    });
  });

  it('should render the filter component', async () => {
    act(() => {
      render(<Projects projects={[testProject]} />, container);
    });

    await waitFor(async () => {
      expect(getByRole(container as HTMLElement, 'form')).toBeInTheDocument();
    });
  });

  it('should render the project rows', async () => {
    act(() => {
      render(<Projects projects={[testProject]} />, container);
    });

    await waitFor(async () => {
      expect(
        getByRole(container as HTMLElement, 'rowgroup')
      ).toBeInTheDocument();
    });
  });

  it('should call handleSorting on select element value change', async () => {
    act(() => {
      render(<Projects projects={[testProject]} />, container);
    });
    const sort = getByLabelText(
      container as HTMLElement,
      'sort-projects'
    ) as HTMLSelectElement;

    await waitFor(async () => {
      expect(getByRole(container as HTMLElement, 'form')).toBeInTheDocument();
      fireEvent.change(sort, { target: { value: 'Latest' } });
      expect(sort.value).toBe('Latest');
    });
  });

  it('should call handleFilter on input element value change', async () => {
    act(() => {
      render(<Projects projects={[testProject]} />, container);
    });
    const cssCheckbox = getByLabelText(
      container as HTMLElement,
      'CSS'
    ) as HTMLInputElement;

    act(() => {
      fireEvent.click(cssCheckbox);
    });

    await waitFor(async () => {
      expect(
        getByRole(container as HTMLElement, 'menuitem')
      ).toBeInTheDocument();

      expect(cssCheckbox.checked).toBe(false);
    });
  });
});
