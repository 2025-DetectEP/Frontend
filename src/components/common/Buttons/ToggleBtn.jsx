import React, { useState } from 'react';
import styled from "styled-components";
import '../../../App.css';

export default function ToggleBtn() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <ToggleContainer onClick={() => setIsToggleOn(!isToggleOn)}>
      <Toggle $isToggleOn={isToggleOn}>
        <ToggleButton $isToggleOn={isToggleOn}></ToggleButton>
      </Toggle>
    </ToggleContainer>
  );
}

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Toggle = styled.div`
  cursor: pointer;
  transition: all 0.3s;
  /* position: relative; */
  width: 44px;
  height: 28px;
  border-radius: 16px;
  outline: none;
  padding: 2px 4px;
  background-color: ${(props) => props.$isToggleOn ? props.theme.Primary : props.theme.Gray200};
`;

const ToggleButton = styled.div`
  transition: all 0.3s;
  /* display: block; */
  width: 20px;
  height: 20px;
  aspect-ratio: 1/1;
  border-radius: 800px;
  margin-top: 2px;
  background-color: ${(props) => props.theme.White};
  box-shadow: 0px 0px 6px 0px rgba(224, 226, 227, 0.80);
  transform: ${(props) => props.$isToggleOn ? 'translateX(16px)': 'translateX(0px)'};
`;
