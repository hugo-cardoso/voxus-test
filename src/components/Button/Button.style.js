import styled from 'styled-components';

const Wrapper = styled.button`
  width: auto;
  height: 42px;
  background-color: #14E298;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.0125em;
  border: 0;
  appearance: none;
  cursor: pointer;
  transition: all .15s linear;

  :hover {background-color: #23F7AB;}

  :focus {outline: none;}
`;

export {
  Wrapper
};