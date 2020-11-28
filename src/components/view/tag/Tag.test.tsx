import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Tag } from './Tag';

const component = TestRenderer.create(<Tag />);

describe('Tag', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('Tag');
  });
});
