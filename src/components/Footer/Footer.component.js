import React from 'react';
import {
  Wrapper,
  Container,
  LogoLink,
  LogoImage,
  Item
} from './Footer.style';

import logo from '../../images/logo_gray.svg';

const Footer = () => {

  return (
    <Wrapper>
      <Container>
        <LogoLink
          target="_blank"
          href="https://www.voxus.com.br"
        >
          <LogoImage src={logo}/>
        </LogoLink>
        <Item href="https://www.voxus.com.br/privacidade.html">Termos de serviço</Item>
        <Item href="https://www.voxus.com.br/privacidade.html">Política de privacidade</Item>
        <Item href="https://www.voxus.com.br/opcoes-anuncio.html">Opções de anúncio</Item>
      </Container>
    </Wrapper>
  )
}

export default Footer;