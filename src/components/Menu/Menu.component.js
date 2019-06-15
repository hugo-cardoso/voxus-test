import React from 'react';
import {
  Wrapper,
  Container,
  LogoLink,
  LogoImage
} from './Menu.style';

import logo from '../../images/logo.svg';

const Menu = () => {

  return (
    <Wrapper>
      <Container>
        <LogoLink
          target="_blank"
          href="https://www.voxus.com.br"
        >
          <LogoImage src={logo}/>
        </LogoLink>
      </Container>
    </Wrapper>
  )
}

export default Menu;