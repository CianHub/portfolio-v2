import React from 'react';
import { BoxContainer } from './BoxContainer';

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

describe('BoxContainer', () => {
  it('should render the component', () => {
    act(() => {
      render(<BoxContainer>test</BoxContainer>, container);
    });
    expect(container?.textContent).toBe('test');
  });
});
