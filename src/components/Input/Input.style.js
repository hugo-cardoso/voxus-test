import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 42px;
  margin-bottom: 30px;
  background-color: #FFF;
  border: 1px solid rgba(116, 130, 150, 0.2);
  border-radius: 3px;
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

const Label = styled.div`
  position: absolute;
  left: ${ ({hasText, hasFocus}) => hasText || hasFocus ? 7 : 15 }px;;
  top: ${ ({hasText, hasFocus}) => hasText || hasFocus ? -7 : 13 }px;
  font-family: 'Roboto', sans-serif;
  font-size: ${ ({hasText, hasFocus}) => hasText || hasFocus ? 14 : 16 }px;;
  line-height: 14px;
  letter-spacing: 0.0125em;
  z-index: 1;
  color: ${ ({hasFocus}) => hasFocus ? '#2D3A40' : 'rgba(45, 58, 64, 0.3)' };
  padding: ${ ({hasText, hasFocus}) => hasText || hasFocus ? '0 5' : 0 }px;
  background-color: #FFF;
  transition: all .25s cubic-bezier(.31,1.27,.97,.92);
`;

const Field = styled.input`
  width: 100%;
  height: calc(100% - 2px);
  border: 0;
  padding: 0 15px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #000;
  letter-spacing: 0.0125em;
  font-weight: 400;

  :focus {outline: none;}
`;

const FieldMessageError = styled.div`
  width: auto;
  height: 24px;
  background-color: #F0175C;
  padding: 0 15px;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  letter-spacing: 0.0125em;
  border-radius: 0 0 4px 4px;
  position: absolute;
  top: calc(100% + 1px);
`;

export {
  Wrapper,
  Label,
  Field,
  FieldMessageError
};