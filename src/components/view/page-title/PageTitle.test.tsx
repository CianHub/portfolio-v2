import React from 'react';
import { PageTitle } from './PageTitle';

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

describe('PageTitle', () => {
  it('should render the component', () => {
    act(() => {
      render(<PageTitle />, container);
    });
    expect(container?.textContent).toBe('PageTitle');
  });
});
