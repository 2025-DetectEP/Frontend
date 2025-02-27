import React, { useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import { fontSizes } from "../../../styles/FontSizes";
import { useBtnInteraction } from '../../../hooks/useBtnInteraction';

export default function PostToggleBtn({isOriginal, setIsOriginal}) {
  const [leftRef, isLeftHover, isLeftClick] = useBtnInteraction();
  const [rightRef, isRightHover, isRightClick] = useBtnInteraction();

  return (
    <ToggleContainer>
      <Btn1 
        ref={leftRef}
        $isLeftHover={isLeftHover}
        $isOriginal={isOriginal}
        onClick={() => setIsOriginal(true)}
      >
        <span>원본 글</span>
      </Btn1>
      <Btn2
        ref={rightRef}
        $isRightHover={isRightHover}
        $isOriginal={isOriginal}
        onClick={() => setIsOriginal(false)}
      >
        <span>개인정보를 제외한 수정본</span>
      </Btn2>
    </ToggleContainer>
  );
}

const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${fontSizes.btnTitle2Medium};
  color: ${(props) => props.theme.Gray700};
`;

const Btn1 = styled.div`
  cursor: pointer;
  text-align: center;
  align-content: center;
  /* white-space: nowrap; */
  padding: 1.111vh 0.833vw;
  border-radius: 800px 0px 0px 800px;
  border: 2px solid ${(props) => props.$isOriginal ? props.theme.Primary : props.$isLeftHover ? props.theme.Primary : props.theme.Gray200};
  background-color: ${(props) => props.$isOriginal ? props.theme.Primary300 : props.$isLeftHover ? props.theme.Primary100 : 'transparent'};
`;

const Btn2 = styled.div`
  cursor: pointer;
  text-align: center;
  align-content: center;
  /* white-space: nowrap; */
  padding: 1.111vh 0.833vw;
  border-radius: 0px 800px 800px 0px;
  border: 2px solid ${(props) => props.$isOriginal ? (props.$isRightHover ? props.theme.Primary : props.theme.Gray200) : props.theme.Primary};
  background-color: ${(props) => props.$isOriginal ? (props.$isRightHover ? props.theme.Primary100 : 'transparent') : props.theme.Primary300};
`;