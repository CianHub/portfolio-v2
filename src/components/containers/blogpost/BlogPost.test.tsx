import React from 'react';
import BlogPost from './BlogPost';

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

describe('BlogPost', () => {
  it('should render the component', () => {
    act(() => {
      render(<BlogPost />, container);
    });
    expect(container?.textContent).toBe('BlogPost');
  });
});
