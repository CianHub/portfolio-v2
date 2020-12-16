import React from 'react';
import { AboutText } from './AboutText';

import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterTest, beforeTest } from '../../../helpers/testHelpers';
import { getAllByRole, getByRole, waitFor } from '@testing-library/react';

jest.setTimeout(50000);

let container: HTMLElement | null;

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('About', () => {
  it('should render the component', async () => {
    act(() => {
      render(<AboutText />, container);
    });

    await waitFor(() => {
      expect(
        getByRole(container as HTMLElement, 'AboutText')
      ).toBeInTheDocument();
    });
  });

  it('should render all TypedText components', async () => {
    act(() => {
      render(<AboutText />, container);
    });

    await waitFor(
      async () => {
        const typedText = await getAllByRole(
          container as HTMLElement,
          'TypedText'
        );

        expect(typedText.length).toBe(4);
      },
      { timeout: 50000 }
    );
  });
});
