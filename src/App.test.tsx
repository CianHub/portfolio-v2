import React from 'react';
import { MockedProvider } from '@apollo/client/testing';

import App from './App';
import { mockQueryData, mockQueryError } from './testdata/mockQuery';
import { getByRole, getByText, render, waitFor } from '@testing-library/react';
import { IntersectionObserverStub } from './testdata/mockIntersectionObserver';

jest.doMock('intersection-observer-mock', () => IntersectionObserverStub, {
  virtual: true,
});

window.IntersectionObserver = jest.requireMock('intersection-observer-mock');
jest.spyOn(IntersectionObserver.prototype, 'root', 'get').mockReturnValue(null);

describe('App', () => {
  it('should render loading state initially', () => {
    const { container } = render(
      <MockedProvider mocks={mockQueryData} addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(getByText(container, 'Loading...')).toBeInTheDocument();
  });

  it('should render some data', async () => {
    const { container } = render(
      <MockedProvider mocks={mockQueryData} addTypename={false}>
        <App />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByRole(container, 'navigation')).toBeInTheDocument();
      expect(getByText(container, 'About')).toBeInTheDocument();
    });
  });
});
