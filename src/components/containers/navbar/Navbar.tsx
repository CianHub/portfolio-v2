import React from 'react';
import { NavLink } from '../../../models/NavLink.model';
import Theme from '../../styles/theme';
import { StyledNavbar } from '../../styles/StyledNavBar/StyledNavbar';
import { Link } from 'react-router-dom';
import { StyledNavLink } from '../../styles/StyledNavLink/StyledNavLink';
import useCurrentPathName from '../../../hooks/useCurrentPath';

const navLinks: NavLink[] = [
  { url: '/', label: 'About', isActiveColor: `${Theme.colors.green}` },
  {
    url: '/projects',
    label: 'Projects',
    isActiveColor: `${Theme.colors.orange}`,
  },
  //{ url: '/blog', label: 'Blog', isActiveColor: `${Theme.colors.blue}` },
];

export const Navbar: React.FC = () => {
  const currentURL = useCurrentPathName();

  const generateNavLinks = (navLinks: NavLink[]): JSX.Element[] => {
    return navLinks?.map((link: NavLink) => {
      return currentURL === link.url ? (
        <StyledNavLink
          theme={Theme}
          key={link.label + link.url}
          isActive={true}
          fontColor={link.isActiveColor}
        >
          <Link to={link.url}>{link.label}</Link>
        </StyledNavLink>
      ) : (
        <StyledNavLink
          theme={Theme}
          key={link.label + link.url}
          fontColor={link.isActiveColor}
        >
          <Link to={link.url}>{link.label}</Link>
        </StyledNavLink>
      );
    });
  };

  return (
    <StyledNavbar theme={Theme} id="navbar" role="navigation">
      {generateNavLinks(navLinks)}
    </StyledNavbar>
  );
};
