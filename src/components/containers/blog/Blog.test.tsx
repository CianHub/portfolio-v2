import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Blog } from './Blog';

const component = TestRenderer.create(<Blog />);

describe('Blog', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('Blog');
  });
});
