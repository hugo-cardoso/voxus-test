import styled from 'styled-components';
import * as InputBase from '../Input/Input.style';
import * as SelectBase from '../Select/Select.style';

const WrapperFields = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  margin-bottom: 30px;
`;

const WrapperInput = styled(InputBase.Wrapper)`
  margin-bottom: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  flex: 1;
`;

const LabelInput = styled(InputBase.Label)``;

const FieldInput = styled(InputBase.Field)``;

const WrapperSelect = styled(SelectBase.Wrapper)`
  width: 60px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  margin-bottom: 0;
`;

const FieldSelect = styled.div`
  width: 100%;
  height: calc(100% - 2px);
  border: 0;
  padding: 0 15px;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CountryIcon = styled.img``;

const Dropdown = styled(SelectBase.Dropdown)``;

const DropdownItem = styled(SelectBase.DropdownItem)``;

const FieldMessageError = styled(InputBase.FieldMessageError)`
  top: 100%;
`;

export {
  WrapperFields,
  WrapperInput,
  LabelInput,
  FieldInput,
  WrapperSelect,
  FieldSelect,
  Dropdown,
  DropdownItem,
  CountryIcon,
  FieldMessageError,
};