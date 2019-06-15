import styled from 'styled-components';
import * as ContainerApp from '../../App.style';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #FFF;
  border-bottom: 1px solid rgba(45, 58, 64, 0.1);
  box-sizing: border-box;
`;

const Container = styled(ContainerApp.Container)`
  display: flex;
  justify-content: flex-start;
  height: 100%;
`;

const LogoLink = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`

`;

export {
  Wrapper,
  Container,
  LogoLink,
  LogoImage
};