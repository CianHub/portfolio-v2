import React from 'react';
import TestRenderer from 'react-test-renderer';
import { About } from './About';

const component = TestRenderer.create(<About />);

describe('About', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('About');
  });
});
