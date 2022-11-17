import React from "react";
import Box from "./Box";
import Line from "./Line";

export default{
    title:'Box',
    component:Box,
    subcomponents:{Line}
}

const Template = (args) => <Box {...args}><Line/></Box>

export const FirstStory = Template.bind({});