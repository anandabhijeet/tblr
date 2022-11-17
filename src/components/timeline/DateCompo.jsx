import React from 'react'
import styled from 'styled-components';

const DateCircle = styled.div`
    width:50px;
    height:50px;
    border-radius:100%;
    padding:8pxpx;
    border:1px solid #DAA520;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    transform:translateY(133px);
    &>p{
        margin:3px 0 0 15px;
        color:#DAA520;
    }
`

const DateCompo = ({date}) => { 
    const monthsNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthsNames[date.getMonth()];
    const day = date.getDate()
    console.log("date");
  return (
    <DateCircle>
        <p style={{margin:"0px"}}>{day}</p>
        <p style={{margin:"0px"}}>{month}</p>
    </DateCircle>
  )
}

export default DateCompo