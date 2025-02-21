import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import styles from './Header.module.css';
import LoginModal from '../Login/LoginModal';
import ProfileDropdown from './ProfileDropdown';

export default function Header() {
  const { isLogin, login, logout }= useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);  // 로그인 모달 여부
  const [isDropdown, setIsDropdown] = useState(false);  // 프로필 드롭다운 여부
  
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
    setIsDropdown(!isDropdown);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerObj}>
        <h1>LOGO</h1>
        {isLogin ? 
          <button className={styles.profile} onClick={handleDropdown}>
          </button>
          : <button className={styles.loginBtn} onClick={handleClick}>로그인</button>
        }
      </div>

      {isDropdown && (    // 프로필 드롭다운
        <ProfileDropdown setIsDropdown={setIsDropdown} />
      )}

      {isModalOpen && (   // 로그인 모달
        <LoginModal setIsModalOpen={setIsModalOpen} />
      )}
    </header>
  )
}