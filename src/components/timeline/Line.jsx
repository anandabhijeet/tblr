import React from 'react';
import styled from 'styled-components/macro';

const LineCss = styled.div`
    width:100%;
    height:5px;
    background: ${({color})=>color};
    `
    


const Line = ({color='#DAA520'} ) => {
  return (
    <LineCss color={color}></LineCss>
  )
}

export default Line