import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import backgroundImage from './images/bg_Illustration.png';

const GlobalStyle = createGlobalStyle`
  ${ reset }

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  
  body {overflow: hidden;}
`;

const View = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #F5F7FA;
  background-image: url(${ backgroundImage });
  background-position: center bottom;
  background-repeat: no-repeat;
  padding-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media screen and (min-width: 992px) {
    padding: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export {
  GlobalStyle,
  View,
  Container,
  Content
};