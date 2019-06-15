import React, { useState, createRef } from 'react';
// import { validate } from '../../utils/fieldValidator';
import {
  Wrapper,
  Label,
  Field,
  FieldMessageError
} from './Input.style';

const Input = ({onChange, labelText, validationStatus}) => {
  const [value, setValue] = useState('');
  const [hasFocus, setFocus] = useState(false);
  let field = createRef();

  const focusField = () => {
    if(hasFocus) return;
    field.focus();
    setFocus(true);
  };

  const handleChangeField = text => {
    setValue(text);
    onChange(text);
  }

  const handleBlurField = () => {
    setFocus(false);
  }

  return (
    <Wrapper hasFocus={ hasFocus }>
      <Label 
        hasText={value.length}
        hasFocus={ hasFocus }
        onClick={() => focusField()}
      >
        { labelText }
      </Label>
      <Field 
        ref={ref => field = ref}
        value={ value } 
        onBlur={() => handleBlurField()}
        onFocus={() => setFocus(true)}
        onChange={e => handleChangeField(e.target.value)}
      />
      { Object.keys(validationStatus).includes('status') && !validationStatus.status ? <FieldMessageError>{ validationStatus.message }</FieldMessageError> : '' }
    </Wrapper>
  )
}

export default Input;