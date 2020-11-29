import React from 'react';
import { Navbar } from './Navbar';

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

describe('Navbar', () => {
  it('should render the component', () => {
    act(() => {
      render(<Navbar />, container);
    });
    expect(container?.textContent).toBe('Navbar');
  });
});
