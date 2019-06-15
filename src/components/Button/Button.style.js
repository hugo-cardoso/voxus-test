import styled from 'styled-components';

const Wrapper = styled.button`
  width: auto;
  height: 42px;
  background-color: ${
    ({variant}) => {
      switch (variant) {
        case 'primary':
          return '#14E298';
        case 'outline':
          return '#FFF';
        default: 
          return '#14E298';
      } 
    }
  };
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${
    ({variant}) => {
      switch (variant) {
        case 'primary':
          return '#FFF';
        case 'outline':
          return '#14E298';
        default: 
          return '#FFF';
      } 
    }
  };
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.0125em;
  border: 1px solid #14E298;
  appearance: none;
  cursor: pointer;
  transition: all .15s linear;

  :hover {
    background-color: #23F7AB;
    color: #FFF;
  }

  :focus {outline: none;}
`;

export {
  Wrapper
};