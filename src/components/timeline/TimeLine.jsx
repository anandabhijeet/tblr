import React from 'react';
import styled from 'styled-components';
import {NoteBox, Box, Line, DateCompo} from "../index"

const TimelineCss = styled.div`
display: flex;
width: 100%;
flex-direction: column;
`
const FlexRow = styled.div`
 display:flex;
 flex-direction:row;
 justify-content: space-between; 
`

const TimeLine = ({cards}) => {
    if( !cards || cards.length===0)
    return "no data"

 return (
     <TimelineCss>
         <FlexRow>
             {
                  cards.map( (card) => 
                     // key has to be there 
                     <Box key={card.date.toString()}> 
                         <DateCompo date ={card.date}></DateCompo>
                         <NoteBox positionTop={card.positionTop} text={card.text} top={card.positionTop}></NoteBox>
                     </Box>
                 )
             }
         </FlexRow>

         <FlexRow>
             <Line></Line>
         </FlexRow>              
       
     </TimelineCss>
 )
}

export default TimeLine