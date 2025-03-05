import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import styled from "styled-components";
import '../../App.css';
import { fontSizes } from "../../styles/FontSizes";

import Lottie from "lottie-react";
import loadingLottie from '../../assets/lottie/loadingLottie.json';

export default function Loading() {
  const { isLoading } = useAuth();

  // 스크롤 막음
  useEffect(() => {
    if (isLoading) {
      const scrollY = window.scrollY; // 현재 스크롤 위치 저장

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%"; // 모바일 흔들림 방지

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY); // 원래 위치로 복구
      };
    }
  }, [isLoading]);

  return (
    isLoading &&
      <Main>
        <LoadingContainer>
          <LottieContainer>      
            <Lottie animationData={loadingLottie} />
          </LottieContainer>
          <TextContaienr>잠시만 기다려 주세요.</TextContaienr>
        </LoadingContainer>
      </Main>
  );
}

const Main = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.222vh;
`;

const LottieContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
`;

const TextContaienr = styled.div`
  ${fontSizes.body2Medium};
  color: ${(props) => props.theme.Gray700};
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
`;