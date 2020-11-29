import React from 'react';
import { Navbar } from './Navbar';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Theme from '../../styles/theme';

describe('Navbar', () => {
  it('should render the component and  the styles for /', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(screen.getByRole('navbar')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toHaveStyle({
      color: Theme.colors.green,
    });
  });

  it('should render the styles for /projects', () => {
    const history = createMemoryHistory();
    history.push('/projects');

    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveStyle({
      color: Theme.colors.orange,
    });
  });

  it('should render the styles for /blog', () => {
    const history = createMemoryHistory();
    history.push('/blog');

    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(screen.getByRole('link', { name: 'Blog' })).toHaveStyle({
      color: Theme.colors.blue,
    });
  });
});
