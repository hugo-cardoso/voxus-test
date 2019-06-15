import React, { useState, createRef } from 'react';
import {
  WrapperFields,
  WrapperInput,
  LabelInput,
  FieldInput,
  WrapperSelect,
  FieldSelect,
  Dropdown,
  DropdownItem,
  FieldMessageError,
  CountryIcon
} from './InputPhone.style';

import brazilIcon from '../../images/brazil-flag-icon.png';
import euaIcon from '../../images/eua-flag-icon.png';

const COUNTRY_OPTIONS = [
  {
    id: 0,
    icon: brazilIcon,
    value: '+55',
    name: 'Brasil'
  },
  {
    id: 1,
    icon: euaIcon,
    value: '+1',
    name: 'Estados Unidos'
  }
];

const InputPhone = ({onChange, labelText, validationStatus}) => {
  const [value, setValue] = useState('');
  const [hasFocus, setFocus] = useState(false);
  const [countryValue, setCountryValue] = useState(0);
  const [isVisibleDropdown, setVisibleDropdown] = useState(false);

  let field = createRef();

  const focusField = () => {
    if(hasFocus) return;
    field.focus();
    setFocus(true);
  };

  const handleChangeField = text => {
    const onlyNumbers = text.replace(/[^\d]/,'');
    setValue(onlyNumbers);
    sendData(COUNTRY_OPTIONS[countryValue].value, onlyNumbers);
  }

  const handleBlurField = () => {
    setFocus(false);
  }

  const toggleDropdown = () => {
    setVisibleDropdown(!isVisibleDropdown);
  }

  const handleChangeDropdownItem = index => {
    setCountryValue(COUNTRY_OPTIONS[index].id);
    sendData(COUNTRY_OPTIONS[index].value, value);
    setVisibleDropdown(false);
  }

  const sendData = (ddi, phone) => onChange(`${ ddi }${ phone }`);

  return (
    <WrapperFields>
      <WrapperSelect>
        <FieldSelect onClick={() => toggleDropdown()}>
          <CountryIcon src={COUNTRY_OPTIONS[countryValue].icon}/>
        </FieldSelect>
        {
          isVisibleDropdown 
          ? (
            <Dropdown>
              {
                COUNTRY_OPTIONS.map(({value, icon, name}, index) => (
                  <DropdownItem key={value} onClick={() => handleChangeDropdownItem(index)}>
                    <CountryIcon src={icon}/>
                    { name }
                  </DropdownItem>
                ))
              }
            </Dropdown>
          )
          : ''
        }
      </WrapperSelect>
      <WrapperInput hasFocus={ hasFocus }>
        <LabelInput 
          hasText={value.length}
          hasFocus={ hasFocus }
          onClick={() => focusField()}
        >
          { labelText }
        </LabelInput>
        <FieldInput 
          ref={ref => field = ref}
          type="tel"
          value={ value } 
          onBlur={() => handleBlurField()}
          onFocus={() => setFocus(true)}
          onChange={e => handleChangeField(e.target.value)}
        />
      </WrapperInput>
      { Object.keys(validationStatus).includes('status') && !validationStatus.status ? <FieldMessageError>{ validationStatus.message }</FieldMessageError> : '' }
    </WrapperFields>
  )
}

export default InputPhone;