import React from 'react';

import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterTest, beforeTest } from '../../../helpers/testHelpers';
import Blog from './Blog';

let container: HTMLElement | null;

beforeEach(() => {
  container = beforeTest() as HTMLElement;
});

afterEach(() => {
  container = afterTest(container as HTMLElement);
});

describe('Blog', () => {
  it('should render the component', () => {
    act(() => {
      render(<Blog />, container);
    });
    expect(container?.textContent).toBe('Blog');
  });
});
