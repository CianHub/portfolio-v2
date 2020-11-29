import React from 'react';
import TestRenderer from 'react-test-renderer';
import Projects from './Projects';

const component = TestRenderer.create(<Projects />);

describe('Projects', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('Projects');
  });
});
