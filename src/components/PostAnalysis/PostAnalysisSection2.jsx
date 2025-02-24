import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";

export default function PostAnalysisSection1({isPost, postCount, analysisCount}) {
  const navigate = useNavigate();

  return (
    <Main>
      {isPost ? (
        analysisCount === 0 ? (
          <NoneContainer>
            <span>앞으로도 지금처럼 개인정보를 지켜봐요!</span>
            <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
          </NoneContainer>
        ) : (
          <></>
        )
      ) : (
        <NoneContainer>
          <span>게시물을 업로드한 뒤 분석을 받아보세요!</span>
          <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
        </NoneContainer>
      )}
      
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 24px;

  span {
    ${fontSizes.body2Medium};
    color: ${(props) => props.theme.Gray700};
    text-align: center;
  }

  button {
    ${fontSizes.btnTitle2Bold};
    color: ${(props) => props.theme.Secondary};
    text-align: center;
    display: inline-block;
    width: auto;
    padding: 8px 12px;
    border-radius: 8px;
    gap: 10px;
  }
  button:hover {
    background-color: ${(props) => props.theme.Gray100};
  }
  button:active {
    background-color: ${(props) => props.theme.Gray200};
  }
`;