import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { ReactComponent as CloseIcon } from '../../assets/icons/icon_close.svg';
import FBLoginBtn from './FBLoginBtn';
import LoginBtn from './LoginBtn';

export default function LoginModal({setIsModalOpen}) {
  const outRef = useRef(null);  // 모달 밖 클릭 시 모달 닫힘
  const [showBubble, setShowBubble] = useState(false);  // 말풍선
  
  // 모달 열리면 스크롤 막음
  useEffect(() => {
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
  }, []);
  
  // 0.3초 뒤 말풍선 나타내기
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);


  return (
    <ModalBg ref={outRef} onClick={(e) => {if(e.target == outRef.current) setIsModalOpen(false)}}>
    <LoginModalContainer>
      <CloseBtn onClick={() => setIsModalOpen(false)}><CloseIcon /></CloseBtn>
      <LoginContainer>
        <TitleContainer>
          <Logo>logo</Logo>
          <Title>로그인</Title>
          <Description>로그인하시면 전체 게시물 분석이 가능해요<br/>분석하고 싶으신 sns를 선택해 주세요</Description>
        </TitleContainer>
        <FBContainer $isVisible={showBubble}>
          <FBDescription>인스타그램 계정을 분석할 수 있어요</FBDescription>
        </FBContainer>
        
        <BtnContainer>
          {/* <FBLoginBtn setIsModalOpen={setIsModalOpen} /> */}
          <LoginBtn setIsModalOpen={setIsModalOpen}/>
        </BtnContainer>
        <Spacer />
        <FooterText>추후 분석이 지원되는 SNS가 더 추가될 예정입니다.</FooterText>
      </LoginContainer>
    </LoginModalContainer>
    </ModalBg>
  );
}

const ModalBg = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(6, 6, 6, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;

const LoginModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 24.167vw;
  height: 61.111vh;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => props.theme.White};
  box-shadow: 0px 0px 16px 0px #666868;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  overflow-y: auto; /* 세로 스크롤 가능하게 설정 */
  height: 100%;
  /* max-height: 60%; 최대 높이 제한 */
  padding-left: 16px; /* 내부 여백 추가 */
  padding-right: 16px; /* 내부 여백 추가 */
  
  margin-top: 7.407vh;
  margin-bottom: 5.556vh;

  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  /* position: absolute;
  top: 5.556vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  margin-bottom: 3.241vh; */
`;

const Logo = styled.div`
  /* margin-top: 0.625vw; */
  margin-bottom: 3.704vh;
  text-align: center;
`;

const Title = styled.div`
  color: ${(props) => props.theme.Black};
  text-align: center;
  font-family: "GyeonggiTitleBold";
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const Description = styled.div`
  color: ${(props) => props.theme.Gray700};
  text-align: center;
  font-family: "GyeonggiTitleLight";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  margin-top: 1.481vh;
`;

const FBContainer = styled.div`
  margin-top: 2.315vh;
  display: flex;
  justify-content: center;
  visibility: ${({$isVisible}) => ($isVisible ? "visible" : "hidden")};
  opacity: ${({$isVisible}) => ($isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const FBDescription = styled.span`
  position: relative;
	background: ${(props) => props.theme.Gray800};
  border-radius: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;

  color: ${(props) => props.theme.White};
  text-align: center;
  font-family: "NotoSansLight";
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 16.8px */

  &::after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-top-color: ${(props) => props.theme.Gray800};
    border-width: 8px;
    margin-left: -8px;
  }
`;

const BtnContainer = styled.div`
  margin-top: 12px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const FooterText = styled.div`
  color: ${(props) => props.theme.Gray500};
  text-align: center;
  font-family: "NotoSansMedium";
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 1.6vh;
`;