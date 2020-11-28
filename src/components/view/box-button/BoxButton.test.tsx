import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BoxButton } from './BoxButton';

const component = TestRenderer.create(<BoxButton />);

describe('BoxButton', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('BoxButton');
  });
});
