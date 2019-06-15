import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 73px;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.0125em;
  text-align: center;
  color: #2D3A40;
  font-weight: 500;
  margin-bottom: 17px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

const Subtitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.0125em;
  text-align: center;
  color: #748296;
  font-weight: 400;
`;

export {
  Wrapper,
  Title,
  Subtitle
};