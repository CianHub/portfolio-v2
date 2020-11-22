import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import TestRenderer, { act } from 'react-test-renderer';

import App from './App';
import { mockQueryData, mockQueryError } from './testdata/mockQuery';

const dataComponentStructure = (
  <MockedProvider mocks={mockQueryData} addTypename={false}>
    <App />
  </MockedProvider>
);

const errorComponentStructure = (
  <MockedProvider mocks={mockQueryError} addTypename={false}>
    <App />
  </MockedProvider>
);

const component = TestRenderer.create(dataComponentStructure);
const errorComponent = TestRenderer.create(errorComponentStructure);

describe('App', () => {
  it('should render loading state initially', () => {
    const tree = component.toJSON() as TestRenderer.ReactTestRendererJSON;
    expect(tree.children).toContain('Loading...');
  });

  it('should render some data', async () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={mockQueryData} addTypename={false}>
        <App />
      </MockedProvider>
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));

      const title = component.root.findByType('h1');
      expect(title.children).toContain('CianHub');
    });
  });

  it('should render error text', async () => {
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));

      const tree = errorComponent.toJSON() as TestRenderer.ReactTestRendererJSON;
      expect(tree.children).toContain(
        'There seems to have been some mistake..'
      );
    });
  });
});
