import React, { useState } from 'react';
import * as S from "./styled";
import LoginBtn from '../../components/Login/LoginBtn';
import { ReactComponent as RightArrow} from '../../assets/icons/icon_circle_right_arrow.svg'
import SearchBtn from '../../components/Home/SearchBtn';
import mainImg from '../../assets/home/mainImg.png';
import LoginModal from '../../components/Login/LoginModal';

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div>
      <S.HomeImg image={mainImg}>
        <S.MainTitle>
          SNS를 통한 개인정보 유출,<br/>
          <span>Pribee</span>와 방지하세요.
        </S.MainTitle>
        <S.SubTitle>
          Chat GPT와 Cloud DLP를 활용해서 게시물 속 개인정보를 안전하게 분석해 드려요.
          <span><RightArrow /></span>
        </S.SubTitle>
        <S.BtnContainer>
          <SearchBtn btnType="all" value="기존 게시물 분석하기" onClick={handleClick}></SearchBtn>
          <SearchBtn btnType="one" value="직접 입력해 검사하기" onClick={handleClick}></SearchBtn>
        </S.BtnContainer>
      </S.HomeImg>

      {isModalOpen && (
        <LoginModal setIsModalOpen={setIsModalOpen} />
        )
      }
    </div>
  )
}


        {/* <LoginBtn /> */}
        {/* <button onClick={() => {console.log("안녕")}}>안녕</button> */}