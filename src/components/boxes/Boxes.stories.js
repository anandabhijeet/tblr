import React from "react";
import Boxes from "./Boxes";

export default{
    title:"Boxes",
    component:Boxes
};

const Template = (args) => <Boxes {...args}/>
export const SecondStory = Template.bind({});

