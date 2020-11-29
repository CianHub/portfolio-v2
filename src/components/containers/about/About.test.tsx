import React from 'react';
import About from './About';

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

describe('About', () => {
  it('should render the component', () => {
    act(() => {
      render(<About />, container);
    });
    expect(container?.textContent).toBe('About');
  });
});
