import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link)`
  display: inline-block;
  font-size: 20px;
  margin-left: 20px;
  color: white;
  text-decoration: none;

  &:visited,
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const Anchor = ({to, children}) => <LinkStyled to={to}>{children}</LinkStyled>

export default Anchor;
