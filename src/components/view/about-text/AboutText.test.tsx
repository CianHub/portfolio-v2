import React from 'react';
import { AboutText } from './AboutText';
import { createMemoryHistory } from 'history';

import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterTest, beforeTest } from '../../../helpers/testHelpers';
import { getAllByRole, getByRole, waitFor } from '@testing-library/react';
import { IntersectionObserverStub } from '../../../testdata/mockIntersectionObserver';
import { Router } from 'react-router-dom';

jest.setTimeout(50000);

jest.doMock('intersection-observer-mock', () => IntersectionObserverStub, {
  virtual: true,
});

window.IntersectionObserver = jest.requireMock('intersection-observer-mock');
jest.spyOn(IntersectionObserver.prototype, 'root', 'get').mockReturnValue(null);

let container: HTMLElement | null;

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('AboutText', () => {
  it('should render the component', async () => {
    act(() => {
      render(<AboutText />, container);
    });

    await waitFor(() => {
      expect(
        getByRole(container as HTMLElement, 'article')
      ).toBeInTheDocument();
    });
  });

  it('should render all TypedText components', async () => {
    const history = createMemoryHistory();

    act(() => {
      render(
        <Router history={history}>
          <AboutText />
        </Router>,
        container
      );
    });

    await waitFor(
      async () => {
        const typedText = await getAllByRole(
          container as HTMLElement,
          'presentation'
        );

        expect(typedText.length).toBe(4);
      },
      { timeout: 50000 }
    );
  });
});
