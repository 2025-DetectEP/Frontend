import React, { useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import media from '../../../styles/media';
import { fontSizes } from "../../../styles/FontSizes";
import { ReactComponent as IconLink } from '../../../assets/icons/icon_arrow_right_up_line.svg'

export default function LinkBtn({title, url}) {
  return (
    <BtnContainer onClick={() => window.open(url)}>
      <span>{title}</span>
      <IconLink />
    </BtnContainer>
  );
}

const BtnContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.407vh 1.667vw;
  gap: 16px;
  border-radius: 8px;

  ${media.small`
    padding: 2.407vh 4vw;
  `}

  &:hover {
    background-color: ${(props) => props.theme.Gray100};
  }
  &:active {
    background-color: ${(props) => props.theme.Gray200};
  }

  span {
    ${fontSizes.btnTitle1Bold};
    color: ${(props) => props.theme.Gray800};
  }
`;