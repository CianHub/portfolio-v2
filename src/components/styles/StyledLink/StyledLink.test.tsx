import React from 'react';
import { render } from 'react-dom';
import Theme from '../../styles/theme';
import { StyledLink } from './StyledLink';
import { afterTest, beforeTest } from '../../../helpers/testHelpers';
import { act } from 'react-dom/test-utils';
import { getByRole, waitFor } from '@testing-library/react';

let container: HTMLElement | null;

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('StyledLink', () => {
  it('should render the component', async () => {
    act(() => {
      render(
        <StyledLink role="link" theme={Theme}>
          <a>test</a>
        </StyledLink>,
        container
      );
    });

    await waitFor(() => {
      expect(getByRole(container as HTMLElement, 'link')).toBeInTheDocument();
    });
  });

  it('should render the component with props', async () => {
    act(() => {
      render(
        <StyledLink role="link" theme={Theme} fontColor={Theme.colors.blue}>
          <a>test</a>
        </StyledLink>,
        container
      );
    });

    await waitFor(() => {
      expect(getByRole(container as HTMLElement, 'link')).toBeInTheDocument();
    });
  });
});
