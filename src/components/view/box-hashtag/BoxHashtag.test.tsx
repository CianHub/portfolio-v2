import React from 'react';
import TestRenderer from 'react-test-renderer';
import { BoxHashtag } from './BoxHashtag';

const component = TestRenderer.create(<BoxHashtag />);

describe('BoxHashtag', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('BoxHashtag');
  });
});
