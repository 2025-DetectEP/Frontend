import React, { useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import { fontSizes } from "../../../styles/FontSizes";

export default function Button8Large({title, onClick}) {
  return (
    <BtnContainer onClick={onClick}>
      <span>{title}</span>
    </BtnContainer>
  );
}

const BtnContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.481vh 0.833vw;
  gap: 16px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.Primary};

  &:hover {
    border: 2px solid ${(props) => props.theme.Primary};
    background: ${(props) => props.theme.Primary100};
  }
  &:active {
    border: 2px solid ${(props) => props.theme.Primary};
    background: ${(props) => props.theme.Primary};
  }

  span {
    ${fontSizes.btnTitle1Bold};
    color: ${(props) => props.theme.Black};
  }
`;