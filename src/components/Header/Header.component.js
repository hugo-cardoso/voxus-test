import React from 'react';
import {
  Wrapper,
  Title,
  Subtitle
} from './Header.style';

const Header = ({title, subtitle}) => {

  return (
    <Wrapper>
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </Wrapper>
  )
}

export default Header;