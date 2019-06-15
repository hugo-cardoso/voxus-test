import React from 'react';
import {
  Wrapper
} from './Panel.style';

const Panel = ({children}) => {

  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
};

export default Panel;