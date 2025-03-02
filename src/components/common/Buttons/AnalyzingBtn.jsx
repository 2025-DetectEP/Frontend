import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import media from '../../../styles/media';
import { fontSizes } from "../../../styles/FontSizes";
import { useBtnInteraction } from '../../../hooks/useBtnInteraction';

const AnalyzingBtn = ({title, onClick, isActive}) => {
  const [ref, isHover, isClick] = useBtnInteraction();

  const handleClick = () => {
    if(isActive) {
      onClick();
    }
  }

  return (
    <BtnContainer
      ref={ref}
      $isHover={isHover}
      $isClick={isClick}
      $isActive={isActive}
      onClick={handleClick}
    >
      <Title $isActive={isActive}>{title}</Title>
    </BtnContainer>
  );
}

export default AnalyzingBtn; 

const BtnContainer = styled.div`
  cursor: ${(props) => props.$isActive ? 'pointer' : 'default'};
  display: flex;
  /* width: 11.458vw;
  height: 5.556vh; */
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => props.$isActive ? 
    props.$isClick ? props.theme.Primary600 : 
      props.$isHover ? props.theme.Primary500 : props.theme.Primary
    : props.theme.Gray100};

  padding: 1.481vh 0.833vw;
  ${media.small`
    padding: 5.556vh 4vw;
  `}
`;

const Title = styled.div`
  ${fontSizes.btnTitle1Bold};
  color: ${(props) => props.$isActive ? props.theme.Gray800 : props.theme.Gray500};
`;