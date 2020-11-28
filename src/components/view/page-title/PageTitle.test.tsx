import React from 'react';
import TestRenderer from 'react-test-renderer';
import { PageTitle } from './PageTitle';

const component = TestRenderer.create(<PageTitle />);

describe('PageTitle', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('PageTitle');
  });
});
