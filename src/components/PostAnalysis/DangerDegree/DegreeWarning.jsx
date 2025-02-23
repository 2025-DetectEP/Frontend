import React from 'react';
import styled from "styled-components";
import '../../../App.css';
import media from '../../../styles/media';
import { fontSizes } from "../../../styles/FontSizes";
import { ReactComponent as IconEmotion } from '../../../assets/icons/icon_degree_emotion_skull.svg'

export default function DegreeWarning() {
  return (
    <Main>
      <IconEmotion />
      <TextcContainer>
        <Title>유출 위험도 높음</Title>
        <Sub>게시물을 수정해서 노출된 정보를 관리하세요.</Sub>
      </TextcContainer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 24.167vw;
  min-width: 270px;
  /* height: 128px; */
  padding: 2.963vh 1.667vw;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => props.theme.White};
  ${media.small`
    padding: 2.222vh 4vw;
    width: 100%;
  `}
`;

const TextcContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  ${fontSizes.titleHead3Bold};
  color: ${(props) => props.theme.Warning800};
  align-self: stretch;
  white-space: nowrap;
`;

const Sub = styled.div`
  ${fontSizes.titleSubhead3Light};
  color: ${(props) => props.theme.Gray700};
  align-self: stretch;
`;
