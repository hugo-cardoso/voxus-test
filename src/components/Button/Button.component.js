import React from 'react';
import {
  Wrapper
} from './Button.style';

const Button = ({onClick, label, variant, isDisable}) => {

  return (
    <Wrapper variant={variant} onClick={() => onClick()} disabled={isDisable}>{ label }</Wrapper>
  )
}

export default Button;