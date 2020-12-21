import React from 'react';

import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterTest, beforeTest } from '../../../helpers/testHelpers';
import { getByRole, waitFor } from '@testing-library/react';
import { TypedText } from './TypedText';
import Theme from '../../styles/theme';
import { IntersectionObserverStub } from '../../../testdata/mockIntersectionObserver';

let container: HTMLElement | null;

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

fdescribe('TypedText', () => {
  it('should render the component', async () => {
    act(() => {
      render(
        <TypedText
          animationFinished={false}
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
