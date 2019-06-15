import styled from 'styled-components';
import arrowIcon from '../../images/arrow_down.png';

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

  ::before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    background: url(${ arrowIcon });
    background-position: center;
    background-repeat: no-repeat;
    right: 15px;
    top: 16px;
  }
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
  cursor: pointer;
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
  cursor: pointer;

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

const Dropdown = styled.div`
  width: 100%;
  background-color: #FFF;
  border: 1px solid #E3E6EA;
  border-radius: 3px;
  box-shadow: 0px 4px 10px rgba(116, 130, 150, 0.2);
  position: absolute;
  padding: 5px 0;
  top: calc(100% + 5px);
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const DropdownItem = styled.div`
  width: 100%;
  height: 30px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #2D3A40;
  letter-spacing: 0.0125em;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export {
  Wrapper,
  Label,
  Field,
  FieldMessageError,
  Dropdown,
  DropdownItem
};