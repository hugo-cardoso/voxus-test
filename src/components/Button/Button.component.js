import React from 'react';
import {
  Wrapper
} from './Button.style';

const Button = ({onClick, label, variant}) => {

  return (
    <Wrapper variant={variant} onClick={() => onClick()}>{ label }</Wrapper>
  )
}

export default Button;