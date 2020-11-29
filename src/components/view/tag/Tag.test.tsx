import React from 'react';
import { Tag } from './Tag';

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

describe('Tag', () => {
  it('should render the component', () => {
    act(() => {
      render(<Tag />, container);
    });
    expect(container?.textContent).toBe('Tag');
  });
});
