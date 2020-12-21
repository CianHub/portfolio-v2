import React from 'react';
import About from './About';

import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterTest, beforeTest } from '../../../helpers/testHelpers';
import { getByRole, waitFor } from '@testing-library/react';
import { Fade } from 'react-awesome-reveal';
import { IntersectionObserverStub } from '../../../testdata/mockIntersectionObserver';

let container: HTMLElement | null;

jest.mock('../../../hooks/useCurrentPath', () => {
  return jest.fn(() => '/about');
});

jest.doMock('intersection-observer-mock', () => IntersectionObserverStub, {
  virtual: true,
});

window.IntersectionObserver = jest.requireMock('intersection-observer-mock');
jest.spyOn(IntersectionObserver.prototype, 'root', 'get').mockReturnValue(null);

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('About', () => {
  it('should render the component', async () => {
    act(() => {
      render(<About />, container);
    });

    await waitFor(() => {
      expect(getByRole(container as HTMLElement, 'About')).toBeInTheDocument();
    });
  });
});
