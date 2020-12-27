import React from 'react';
import { Margin } from './Margin';

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

describe('Margin', () => {
  it('should render the component', () => {
    act(() => {
      render(<Margin marginCount={18} />, container);
    });
    expect(getByRole(container as HTMLElement, 'landmark')).toBeInTheDocument();
  });
});
