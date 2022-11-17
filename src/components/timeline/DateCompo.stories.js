import React from "react";
import DateCompo from "./DateCompo";
// import { withKnobs, date } from "@storybook/addon-knobs";

export default{
    title:'DateCompo',
    component:DateCompo,
    argTypes:{
        date:{control:'date'}
    }
}

const Template = (args) => {
    const date = new Date(args.date);
    return <DateCompo date={date}/>
}

export const FirstStory = Template.bind({});

FirstStory.args = {
    date: new Date('December 17, 1995 03:24:00')
}