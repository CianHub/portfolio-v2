import React from 'react';
import TestRenderer from 'react-test-renderer';
import BlogPost from './BlogPost';

const component = TestRenderer.create(<BlogPost />);

describe('BlogPost', () => {
  it('should render the component', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('BlogPost');
  });
});
