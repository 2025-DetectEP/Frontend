import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./HomeStyled";
import theme from '../../styles/theme';
import { useAuth } from '../../context/AuthContext';
import { ReactComponent as RightArrowEnabled } from '../../assets/icons/icon_circle_right_arrow_enabled.svg'
import { ReactComponent as RightArrowHover } from '../../assets/icons/icon_circle_right_arrow_hover.svg'
import { ReactComponent as RightArrowPressed } from '../../assets/icons/icon_circle_right_arrow_pressed.svg'
import SearchBtn from '../../components/Home/SearchBtn';
import mainImg from '../../assets/home/mainImg.png';
import LoginModal from '../../components/Login/LoginModal';
import QuizSection from '../../components/Home/QuizSection';
import MoreSection from '../../components/Home/MoreSection';
import ServiceLinkBtn from '../../components/Home/ServiceLinkBtn';
import { section3BtnData } from '../../constants/section3BtnData';

export default function Home() {
  const { isLogin }= useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);  // 로그인 모달 여부
  const [isRightArrowHovered, setIsRightArrowHovered] = useState(false);  // 섹션1 rightArrow 버튼 호버
  const [isRightArrowPressed, setIsRightArrowPressed] = useState(false);  // 섹션1 rightArrow 버튼 호버
  const [isSec2CheckHovered, setIsSec2CheckHovered] = useState(false);    // 섹션2 체크하기 버튼 호버

  // 로그인 확인(토큰 여부) -> context로 수정 예정
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (accessToken) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // },[]);

  // 로그인 여부에 따라 모달(로그인X -> 로그인 모달)
  const handlePostAnalysisBtn = () => {
    if (isLogin) {  // 로그인O
       setIsModalOpen(false);
       navigate("/post-analysis");  // 기존 게시물 분석하기 페이지로 이동
    } else {  // 로그인X
      setIsModalOpen(true); // 로그인 모달 열기
    }
  }

  return (
    <div style={{ background: theme.Background_gradient }}>
      <S.HomeImg $image={mainImg}>
        <S.MainTitle>
          SNS를 통한 개인정보 유출,<br/>
          <span>Pribee</span>와 방지하세요.
        </S.MainTitle>
        <S.SubTitle>
          Chat GPT와 Cloud DLP를 활용해서 게시물 속 개인정보를 안전하게 분석해 드려요.
          <span
            onMouseEnter={() => setIsRightArrowHovered(true)}
            onMouseLeave={() => setIsRightArrowHovered(false)}
            onMouseDown={() => setIsRightArrowPressed(true)}
            onMouseUp={() => setIsRightArrowPressed(false)}
            onMouseOut={() => setIsRightArrowPressed(false)}
          >
            {isRightArrowPressed ? (
              <RightArrowPressed />
            ) : isRightArrowHovered ? (
              <RightArrowHover />
            ) : (
              <RightArrowEnabled />
            )}
          </span>
        </S.SubTitle>
        <S.BtnContainer>
          <SearchBtn btnType="all" value="기존 게시물 분석하기" onClick={handlePostAnalysisBtn}></SearchBtn>
          <SearchBtn btnType="one" value="직접 입력해 검사하기" onClick={handlePostAnalysisBtn}></SearchBtn>
        </S.BtnContainer>
      </S.HomeImg>

      <S.Section2>
        <span className='sec2SubTitle'>개인정보 지식 얻어 프라이버시를 지킵시다?</span>
        <S.Sec2Container>
          <QuizSection />
          <MoreSection />
        </S.Sec2Container>
        <S.CheckContainer $isBtnHover={isSec2CheckHovered} >
          <span>나는 개인정보를 안전하게 관리하고 있을까?</span>
          <button
            onMouseEnter={() => setIsSec2CheckHovered(true)} 
            onMouseLeave={() => setIsSec2CheckHovered(false)}
          >체크하기</button>
        </S.CheckContainer>
      </S.Section2>

      <S.Section3>
        <S.Sec3Title>
          <span className='sec3SubTitle'>넷상에 스스로 관리할 수 없는 개인정보가 노출되어 있나요?</span>
          <span className='sec3title'>개인정보 지킴이 서비스</span>
        </S.Sec3Title>
        <S.Sec3BtnContainer>
          {section3BtnData.map(data => {
            return (
              <ServiceLinkBtn key={data.id} title={data.title} description={data.description} url={data.url} />
            )
          })}
        </S.Sec3BtnContainer>
      </S.Section3>

      {isModalOpen && (
        <LoginModal setIsModalOpen={setIsModalOpen} />
        )
      }
    </div>
  )
}
