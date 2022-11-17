import React from "react";
import styled from "styled-components";

const NoteBoxCss = styled.div`
  display: inline-block;
  background-color: #cd835f;
  color: #fafad2;
  border-radius: 5px;
  max-width:180px;
  min-width:90px;
  overflow-wrap: break-word;
  padding: 16px;

  ${({ positionTop }) =>
    positionTop
      ? `transform:translateY(-10px);`
      : `transform: translateY(160px);`}
  &::before {
    content: "";
    position: absolute;
    transform: translateX(-32%);
    border: 20px solid transparent;
    ${({ top }) =>
      top
        ? `border-top-color: #D2691E;bottom: -40px;`
        : `border-bottom-color: #D2691E;top: -40px;`}
  }
`;

const NoteBox = ({ positionTop, text, top }) => {
  return (
    <NoteBoxCss positionTop={positionTop} top={top}>
      <p style={{ margin: "0px" }}>{text}</p>
    </NoteBoxCss>
  );
};

export default NoteBox;
