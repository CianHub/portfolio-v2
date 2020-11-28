import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Navbar } from './Navbar';

const component = TestRenderer.create(<Navbar />);

describe('Navbar', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('Navbar');
  });
});
