import React from 'react';
import styled from 'styled-components';

const BoxCss = styled.div`
    margin:1rem;
    `

const Box = ({children}) => {
  return (
   <BoxCss>{children}</BoxCss>
  )
}

export default Box;