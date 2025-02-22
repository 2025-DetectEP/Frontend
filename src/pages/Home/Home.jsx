import React, { useContext, useEffect, useState } from 'react';
import * as S from "./HomeStyled";
import theme from '../../styles/theme';
import { ReactComponent as RightArrowEnabled } from '../../assets/icons/icon_circle_right_arrow_enabled.svg'
import { ReactComponent as RightArrowHover} from '../../assets/icons/icon_circle_right_arrow_hover.svg'
import SearchBtn from '../../components/Home/SearchBtn';
import mainImg from '../../assets/home/mainImg.png';
import LoginModal from '../../components/Login/LoginModal';
import QuizSection from '../../components/Home/QuizSection';
import MoreSection from '../../components/Home/MoreSection';

console.log(theme);
export default function Home() {
  const [isLogin, setIsLogin] = useState(false);  // 로그인 여부
  const [isModalOpen, setIsModalOpen] = useState(false);  // 로그인 모달 여부
  const [isRightArrowHovered, setIsRightArrowHovered] = useState(false);  // rightArrow 버튼 호버
  const [isSec2CheckHovered, setIsSec2CheckHovered] = useState(false);    // 섹션2 체크하기 버튼 호버

  // 로그인 확인(토큰 여부)
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  },[]);

  // 로그인 여부에 따라 모달(로그인X -> 로그인 모달)
  const handleClick = () => {
    if (isLogin) {  // 로그인O
       setIsModalOpen(false);
       console.log("로그인o")
       // 다른 활동 작성 예정
    } else {  // 로그인X
      setIsModalOpen(true); // 로그인 모달 열기
      console.log("로그인x")
    }
  }

  return (
    <div style={{ background: theme.Background_gradient }}>
      <S.HomeImg image={mainImg}>
        <S.MainTitle>
          SNS를 통한 개인정보 유출,<br/>
          <span>Pribee</span>와 방지하세요.
        </S.MainTitle>
        <S.SubTitle>
          Chat GPT와 Cloud DLP를 활용해서 게시물 속 개인정보를 안전하게 분석해 드려요.
          <span
            onMouseEnter={() => setIsRightArrowHovered(true)}
            onMouseLeave={() => setIsRightArrowHovered(false)}
          >
            {isRightArrowHovered ? <RightArrowHover /> : <RightArrowEnabled />}
          </span>
        </S.SubTitle>
        <S.BtnContainer>
          <SearchBtn btnType="all" value="기존 게시물 분석하기" onClick={handleClick}></SearchBtn>
          <SearchBtn btnType="one" value="직접 입력해 검사하기" onClick={handleClick}></SearchBtn>
        </S.BtnContainer>
      </S.HomeImg>

      <S.Section2>
        <span>개인정보 지식 얻어 프라이버시를 지킵시다?</span>
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

      {isModalOpen && (
        <LoginModal setIsModalOpen={setIsModalOpen} setIsLogin={setIsLogin} />
        )
      }
    </div>
  )
}
