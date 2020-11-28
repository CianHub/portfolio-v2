import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BoxLogo } from './BoxLogo';

const component = TestRenderer.create(<BoxLogo />);

describe('BoxLogo', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('BoxLogo');
  });
});
