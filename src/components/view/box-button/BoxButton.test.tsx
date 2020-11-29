import React from 'react';
import { BoxButton } from './BoxButton';

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

describe('BoxButton', () => {
  it('should render the component', () => {
    act(() => {
      render(<BoxButton />, container);
    });
    expect(container?.textContent).toBe('BoxButton');
  });
});
