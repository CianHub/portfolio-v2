import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Margin } from './Margin';

const component = TestRenderer.create(<Margin />);

describe('Margin', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('Margin');
  });
});
