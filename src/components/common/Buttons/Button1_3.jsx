import React, { useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import media from '../../../styles/media';
import { fontSizes } from "../../../styles/FontSizes";
import { useBtnInteraction } from '../../../hooks/useBtnInteraction';

const Button1_3 = ({title, onClick}) => {
  const [ref, isHover, isClick] = useBtnInteraction();

  return (
    <BtnContainer
      ref={ref}
      $isHover={isHover}
      $isClick={isClick}
      onClick={onClick}
    >
      <Title>{title}</Title>
    </BtnContainer>
  );
}

export default Button1_3;

const BtnContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: 11.458vw;
  height: 5.556vh;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => props.$isClick ? props.theme.Secondary : props.$isHover ? props.theme.Secondary100 : props.theme.White};

  padding: 1.481vh 0.833vw;
  ${media.small`
    padding: 5.556vh 4vw;
  `}
`;

const Title = styled.div`
  ${fontSizes.btnTitle1Bold};
  color: ${(props) => props.$isClick ? props.theme.White : props.$isHover ? props.theme.Black : props.theme.Black};
`;