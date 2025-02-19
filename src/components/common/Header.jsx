import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerObj}>
        <h1>LOGO</h1>
        {/* <nav>
          <ul>
            <li><a href='/'>Home</a></li>
          </ul>
        </nav> */}
        {isLogin ? 
          <button className={styles.profile}>
          </button>
          : <button className={styles.loginBtn}>로그인</button>
        }
      </div>
    </header>
  )
}