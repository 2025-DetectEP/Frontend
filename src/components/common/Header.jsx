import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import * as S from "./HeaderStyled";
import LoginModal from '../Login/LoginModal';
import ProfileDropdown from './ProfileDropdown';
import { ReactComponent as Logo } from '../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';
import useLoginRedirect from '../../hooks/useLoginRedirect';

export default function Header() {
  const { isLogin }= useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);  // 로그인 모달 여부
  const [isDropdown, setIsDropdown] = useState(false);  // 프로필 드롭다운 여부
  const [userImgUrl, setUserImgUrl] = useState();   // 프로필 이미지
  const profileImageRef = useRef(null);
  useLoginRedirect();   // 로그인 리다이렉트

  // 로그인 여부에 따라 모달(로그인X -> 로그인 모달)
  const handleClick = () => {
    if (isLogin) {  // 로그인O
       setIsModalOpen(false);
    } else {  // 로그인X
      setIsModalOpen(true); // 로그인 모달 열기
    }
  }

  // 프로필 드롭다운
  const handleDropdown = () => {
    setIsDropdown((prev) => !prev);
  }

  // 프로필 이미지
  useEffect(() => {
    preloadImage();
  }, []);

  const preloadImage = () => {
    const userImg = localStorage.getItem("profilePictureUrl");
    if (userImg) {
      setUserImgUrl(userImg);
      const img = new Image();
      img.src = userImg;
      img.onload = () => {
        setUserImgUrl(userImg); // 이미지 로드 완료 후 상태 업데이트
      };
    }
  }

  return (
    <S.Main>
      <S.HeaderContainer>
        <div className='logo' onClick={() => window.location.reload()}>
          <Link to='/'><Logo /></Link>
        </div>
        {isLogin ? 
          <S.Profile onClick={handleDropdown} ref={profileImageRef} >
            <img src={userImgUrl} alt="Profile" />
          </S.Profile>
          : <S.LoginBtn onClick={handleClick}>로그인</S.LoginBtn>
        }
      </S.HeaderContainer>

      {isDropdown && (    // 프로필 드롭다운
        <ProfileDropdown setIsDropdown={setIsDropdown} userImgUrl={userImgUrl} profileImageRef={profileImageRef} />
      )}

      {isModalOpen && (   // 로그인 모달
        <LoginModal setIsModalOpen={setIsModalOpen} />
      )}
    </S.Main>
  )
}