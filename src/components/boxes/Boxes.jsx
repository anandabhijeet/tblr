import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BoxesCss = styled.div`
    padding:10px;
    display:flex;
    flex-direction:wrap;
    ${({alignment})=>alignment?`flex-direction:row`:`flex-direction:column`}
    `

const ChildCss = styled.div`
    height:20px;
    width:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:8px;
    color:#fff;
    background-color:${({color})=>color};
    border-radius:${({corner})=>corner};
    `


/**
 * Here is thee series of boxes. you can change color and the alignment of boxes. And you even change the border radius of the squares.
 */

const Boxes = ({alignment, color, corner, size}) => {
    const number =[1,2,3,4,5]
  return (
    <BoxesCss alignment={alignment}>
       {number.map((item, index)=>(
        <ChildCss color={color} corner={corner} key={index}><p>{item}</p></ChildCss>
       ))}
    </BoxesCss>
  )
}

Boxes.propTypes = {
    /**
   * change the alignment of series of boxes
   */
  alignment: PropTypes.bool,
   /**
   * change the color of boxes
   */
  color: PropTypes.string,
  /**
   * change the border radius of the boxes.
   */
  corner:PropTypes.string,

} 

Boxes.defaultProps ={
    alignment:true,
    color:"#00ff21",
    corner:"0px",
  
}

export default Boxes