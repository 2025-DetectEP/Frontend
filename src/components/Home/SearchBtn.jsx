import React from 'react';
import styled from "styled-components";
import '../../App.css';

export default function SearchBtn({btnType, value, onClick}) {
  return (
    <BtnDiv btnType={btnType} onClick={onClick}>
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
  background: ${(props) => (props.btnType === "all" ? props.theme.Primary : props.theme.Primary100)};

  span {
    font-family: "NotoSansBold";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${(props) => (props.theme.Black)};
    text-align: center;
  }

  &:hover {
    background: ${(props) => (props.btnType === "all" ? props.theme.Primary500 : props.theme.Primary200)};
  }
`;