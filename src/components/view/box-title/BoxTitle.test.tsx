import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BoxTitle } from './BoxTitle';

const component = TestRenderer.create(<BoxTitle />);

describe('BoxTitle', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('BoxTitle');
  });
});
