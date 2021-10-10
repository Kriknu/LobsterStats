import React from 'react';
import { NavLink } from 'react-router-dom';
import Wrapper from './NavBar.styles';
import { IRoute } from '../../IRoute';

interface INavBar {
  readonly links: IRoute[]
}

const NavBar = ({ links } : INavBar) => (
  <Wrapper>
    {
        links.map((e) => (
          <NavLink to={`/${e.path}`} activeClassName="selected">{e.name}</NavLink>
        ))
      }
  </Wrapper>
);

export default NavBar;
