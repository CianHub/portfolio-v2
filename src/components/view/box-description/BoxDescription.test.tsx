import React from 'react';
import { BoxDescription } from './BoxDescription';

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

describe('BoxDescription', () => {
  it('should render the component', () => {
    act(() => {
      render(<BoxDescription />, container);
    });
    expect(container?.textContent).toBe('BoxDescription');
  });
});
