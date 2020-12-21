import React from 'react';
import { render } from 'react-dom';

import { act } from 'react-dom/test-utils';
import { getAllByRole, getByRole, waitFor } from '@testing-library/react';
import { afterTest, beforeTest } from '../../helpers/testHelpers';
import { AnimationDoneContextProvider } from './AnimationDoneContextProvider';

let container: HTMLElement | null;

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('AboutTAnimationDoneContextProvider', () => {
  it('should render the component', async () => {
    act(() => {
      render(
        <AnimationDoneContextProvider>
          <div role={'test'}>test</div>
        </AnimationDoneContextProvider>,
        container
      );
    });

    await waitFor(() => {
      expect(getByRole(container as HTMLElement, 'test')).toBeInTheDocument();
    });
  });
});
