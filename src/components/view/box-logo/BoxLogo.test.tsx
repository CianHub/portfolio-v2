import React from 'react';
import { BoxLogo } from './BoxLogo';

import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterTest, beforeTest } from '../../../helpers/testHelpers';

let container: HTMLElement | null;

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('BoxLogo', () => {
  it('should render the component', () => {
    act(() => {
      render(<BoxLogo />, container);
    });
    expect(container?.textContent).toBe('BoxLogo');
  });
});
