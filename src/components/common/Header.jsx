import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './Header.module.css';
import LoginModal from '../Login/LoginModal';
import ProfileDropdown from './ProfileDropdown';

export default function Header() {
  const { isLogin, login, logout }= useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);  // 로그인 모달 여부
  const [isDropdown, setIsDropdown] = useState(false);  // 프로필 드롭다운 여부
  const [userImgUrl, setUserImgUrl] = useState();   // 프로필 이미지
  const profileImageRef = useRef(null);
  
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

  // 프로필 드롭다운
  const handleDropdown = () => {
    setIsDropdown((prev) => !prev);
  }

  // useEffect(() => {
  //   if (isDropdown) {

  //     // document.addEventListener("click", handleClickProfile);

  //     return () => {
  //       document.removeEventListener("click", handleDropdown);
  //     }
  //   }
  // }, [isDropdown]);

  // 프로필 이미지
  useEffect(() => {
    preloadImage();
  }, []);

  const preloadImage = () => {
    const userImg = localStorage.getItem("userImg");
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
    <header className={styles.header}>
      <div className={styles.headerObj}>
        <h1>{isDropdown?'t':'f'}</h1>
        {isLogin ? 
          <div className={styles.profile} onClick={handleDropdown} ref={profileImageRef} >
            <img src={userImgUrl} alt="Profile" />
          </div>
          : <button className={styles.loginBtn} onClick={handleClick}>로그인</button>
        }
      </div>

      {isDropdown && (    // 프로필 드롭다운
        <ProfileDropdown setIsDropdown={setIsDropdown} userImgUrl={userImgUrl} profileImageRef={profileImageRef} />
      )}

      {isModalOpen && (   // 로그인 모달
        <LoginModal setIsModalOpen={setIsModalOpen} />
      )}
    </header>
  )
}