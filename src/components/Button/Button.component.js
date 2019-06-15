import React from 'react';
import {
  Wrapper
} from './Button.style';

const Button = ({onClick, label}) => {

  return (
    <Wrapper onClick={() => onClick()}>{ label }</Wrapper>
  )
}

export default Button;