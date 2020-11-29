import React from 'react';
import Projects from './Projects';

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

describe('Projects', () => {
  it('should render the component', () => {
    act(() => {
      render(<Projects />, container);
    });
    expect(container?.textContent).toBe('Projects');
  });
});
