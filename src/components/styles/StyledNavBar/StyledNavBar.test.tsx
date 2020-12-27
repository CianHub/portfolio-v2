import React from 'react';
import { render, screen } from '@testing-library/react';
import Theme from '../../styles/theme';
import { StyledNavbar } from './StyledNavbar';

describe('StyledNavbar', () => {
  it('should render the component with the default styles', () => {
    render(
      <StyledNavbar role="navigation" theme={Theme}>
        Navbar
      </StyledNavbar>
    );

    expect(screen.getByRole('navigation')).toHaveStyle({
      color: Theme.colors.white,
    });
    expect(screen.getByRole('navigation')).toHaveStyle({
      backgroundColor: Theme.colors.black,
    });
  });

  it('should render the component with the prop styles', () => {
    render(
      <StyledNavbar
        role="navigation"
        theme={Theme}
        backgroundColor={Theme.colors.green}
        fontColor={Theme.colors.blue}
      >
        Navbar
      </StyledNavbar>
    );

    expect(screen.getByRole('navigation')).toHaveStyle({
      color: Theme.colors.blue,
    });
    expect(screen.getByRole('navigation')).toHaveStyle({
      backgroundColor: Theme.colors.green,
    });
  });
});
