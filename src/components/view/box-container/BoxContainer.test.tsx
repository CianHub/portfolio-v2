import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BoxContainer } from './BoxContainer';

const component = TestRenderer.create(<BoxContainer />);

describe('BoxContainer', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('BoxContainer');
  });
});
