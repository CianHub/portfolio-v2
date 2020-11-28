import React from 'react';
import TestRenderer from 'react-test-renderer';
import { AboutText } from './AboutText';

const component = TestRenderer.create(<AboutText />);

describe('AboutText', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('AboutText');
  });
});
