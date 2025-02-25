import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import media from '../../../styles/media';
import { fontSizes } from "../../../styles/FontSizes";

export default function Tag() {
  return (
    <TagContainer>
      <Title>프로필 정보</Title>
    </TagContainer>
  );
}

const TagContainer = styled.div`
  display: inline-flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.Primary100};
  background: ${(props) => props.theme.Primary100};
`;

const Title = styled.div`
  ${fontSizes.bdCaption1Medium};
  color: ${(props) => props.theme.Black};
`;