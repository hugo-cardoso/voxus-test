import React, { useState } from 'react';
import {
  Wrapper,
  Label,
  Field,
  FieldMessageError,
  Dropdown,
  DropdownItem
} from './Select.style';

const Select = ({onChange, labelText, options, validationStatus}) => {
  const [value, setValue] = useState('');
  const [isVisibleDropdown, setVisibleDropdown] = useState(false);

  const toggleDropdown = () => {
    setVisibleDropdown(!isVisibleDropdown);
  }

  const handleChangeDropdownItem = index => {
    setValue(options[index].name);
    onChange(options[index].value);
    setVisibleDropdown(false);
  }

  return (
    <Wrapper>
      <Label 
        hasText={value.length}
        onClick={() => toggleDropdown()}
      >
        { labelText }
      </Label>
      <Field 
        value={ value } 
        onClick={() => toggleDropdown()}
        readOnly
      />
      { isVisibleDropdown ? (
        <Dropdown>
          {
            options.map(({name, value}, index) => (
              <DropdownItem
                key={ name }
                value={ value }
                onClick={() => handleChangeDropdownItem(index)}
              >
                { name }
              </DropdownItem>
            ))
          }
        </Dropdown>
      ) : ''}
      { Object.keys(validationStatus).includes('status') && !validationStatus.status ? <FieldMessageError>{ validationStatus.message }</FieldMessageError> : '' }
    </Wrapper>
  )
}

export default Select;