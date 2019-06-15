import styled from 'styled-components';
import * as AppBase from '../../App.style';

const Wrapper = styled.footer`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 48px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
`;

const Container = styled(AppBase.Container)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const LogoLink = styled.a`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const LogoImage = styled.img`

`;

const Item = styled.a`
  font-family: 'Roboto', sans-serif;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.0125em;
  color: #748296;
  text-decoration: none;
  margin-bottom: 10px;

  :hover{ color: #326fff; }

  @media screen and (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export {
  Wrapper,
  Container,
  LogoLink,
  LogoImage,
  Item
}