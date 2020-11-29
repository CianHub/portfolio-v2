import React from 'react';
import { BoxTitle } from './BoxTitle';

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

describe('BoxTitle', () => {
  it('should render the component', () => {
    act(() => {
      render(<BoxTitle />, container);
    });
    expect(container?.textContent).toBe('BoxTitle');
  });
});
