import React from 'react';
import LoginBtn from '../components/Login/LoginBtn';

export default function Home() {
  return (
    <div>
      <h1>뭔가 서비스 설명<br/>분석해보세요</h1>
      <h2>저희는 안전하답니다...</h2>
      <LoginBtn />
      <button onClick={() => {console.log("안녕ㄴ")}}>안녕</button>
    </div>
  )
}