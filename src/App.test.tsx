import React from 'react';
import { MockedProvider } from '@apollo/client/testing';

import App from './App';
import { mockQueryData, mockQueryError } from './testdata/mockQuery';
import { getByRole, getByText, render, waitFor } from '@testing-library/react';

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
      expect(getByRole(container, 'navbar')).toBeInTheDocument();
      expect(getByText(container, 'About')).toBeInTheDocument();
    });
  });

  it('should render error text', async () => {
    const { container } = render(
      <MockedProvider mocks={mockQueryError} addTypename={false}>
        <App />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(
        getByText(container, 'There seems to have been some mistake..')
      ).toBeInTheDocument();
    });
  });
});
