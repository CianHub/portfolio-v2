import React from 'react';
import About from './About';

import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterTest, beforeTest } from '../../../helpers/testHelpers';
import { getByRole } from '@testing-library/react';

let container: HTMLElement | null;

jest.mock('../../../hooks/useCurrentPath', () => {
  return jest.fn(() => '/about');
});

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('About', () => {
  it('should render the component', () => {
    act(() => {
      render(<About />, container);
    });
    expect(getByRole(container as HTMLElement, 'About')).toBeInTheDocument();
  });
});
