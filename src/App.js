import React from 'react';
import TimeLine from './components/timeline/TimeLine';

const App = () => {
  const cards =[
    {
        date: new Date(2018, 11, 24),
        text:"Lorem Ipsum doloth",
        positionTop:true
    },
    {
        date: new Date(2019, 10, 21),
        text:"Lorem Ipsum doloth",
        positionTop:false
    },
    {
        date: new Date(2019, 6, 12),
        text:"Lorem Ipsum doloth",
        positionTop:true
    },
    {
        date: new Date(2021, 1, 24),
        text:"Lorem Ipsum doloth",
        positionTop:false
     }]
  return (
    <TimeLine cards={cards}></TimeLine>
  )
}

export default App