import React from 'react';

import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterTest, beforeTest } from '../../../helpers/testHelpers';
import { getByRole, waitFor } from '@testing-library/react';
import { TypedText } from './TypedText';
import Theme from '../../styles/theme';

let container: HTMLElement | null;

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('TypedText', () => {
  it('should render the component', async () => {
    act(() => {
      render(
        <TypedText
          index={0}
          key="text-line"
          textToDisplay={'test'}
          textToType={'test'}
          setText={() => {
            return;
          }}
          setTextTyped={() => {
            return;
          }}
          textTyped={false}
          firstLine={true}
          fontColor={Theme.colors.green}
        />,
        container
      );
    });

    await waitFor(() => {
      const comp = getByRole(container as HTMLElement, 'TypedText');

      expect(comp).toBeInTheDocument();
    });
  });
});
