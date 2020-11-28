import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BoxDescription } from './BoxDescription';

const component = TestRenderer.create(<BoxDescription />);

describe('BoxDescription', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('BoxDescription');
  });
});
