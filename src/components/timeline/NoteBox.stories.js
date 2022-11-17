import React from "react";
import NoteBox from "./NoteBox";

export default {
    title:"NoteBox",
    component:NoteBox,
};

const Template = (args) => <NoteBox {...args} />;
export const FirstStory =  Template.bind({});

FirstStory.args = {
    text:"lorem Ipsum",
    top:true,
    positionTop:true
};