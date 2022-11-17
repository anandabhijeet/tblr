import React from "react";
import Line from "./Line";

export default{
    title:"Line",
    component:Line,
}

const Template = (args) =><Line {...args}/>;

export const FirstStory = Template.bind({});

FirstStory.args = {
    color:"#ffaa00"
}