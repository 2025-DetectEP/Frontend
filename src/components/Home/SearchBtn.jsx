import React from 'react';
import styled from "styled-components";
import '../../App.css';
import { fontSizes } from '../../styles/FontSizes';
import media from '../../styles/media';

export default function SearchBtn({btnType, value, onClick}) {
  return (
    <BtnDiv $btnType={btnType} onClick={onClick}>
      <span>{value}</span>
    </BtnDiv>
  );
}

const BtnDiv = styled.div`
  display: flex;
  width: 220px;
  /* height: 60px; */
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  background: ${(props) => (props.$btnType === "all" ? props.theme.Primary : props.theme.Primary100)};

  box-sizing: border-box;
  ${media.large`
    width: 220px;
  `}
  ${media.small`
    width: 100%;
  `}

  span {
    ${fontSizes.btnTitle1Bold};
    color: ${(props) => (props.theme.Black)};
    text-align: center;
  }

  &:hover {
    background: ${(props) => (props.$btnType === "all" ? props.theme.Primary500 : props.theme.Primary200)};
  }
`;