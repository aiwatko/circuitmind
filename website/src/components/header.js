import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Anchor from '../components/anchor';
import LogoImg from '../static/logo.svg';

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
`;

const Logo = styled(Link)`
  max-width: 40px; 

  > img {
    max-width: 100%;
  }
`;

const PAGES = [
  {
    title: 'team',
    slug: 'team',
  },
  {
    title: 'about',
    slug: 'about',
  },
  {
    title: 'contact',
    slug: 'mailto:tomide@circuitmind.io',
  },
]

const Header = () => (
  <HeaderStyled>
    <Logo to="/"><img src={LogoImg} alt="Logo" /></Logo>
    <nav>
      {PAGES.map((page, index) => <Anchor key={index} to={page.slug}>{page.title}</Anchor>)}
    </nav>
  </HeaderStyled>
);

export default Header;
