import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import axios from 'axios';
import refreshToken from '../../utils/refreshToken';

export default function ProfileDropdown({setIsDropdown, userImgUrl, profileImageRef}) {
  const { logout, setIsLoading } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // 영역 밖 클릭 감지
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && 
        profileImageRef?.current && 
        !dropdownRef.current.contains(event.target) && 
        !profileImageRef.current.contains(event.target)
      ) {
        setIsDropdown(false);
      }
    }

    document.addEventListener("mouseup", handleClickOutside); // 이벤트 추가
    return () => {
      document.removeEventListener("mouseup", handleClickOutside); // 이벤트 제거
    };
  }, []);

  // 로그아웃
  const handleLogout = async() => {
    setIsLoading(true); // 요청 시작 시 로딩 상태 활성화

    try {
      let accessToken = localStorage.getItem("accessToken");

      let response = await axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        headers: { 
          "accept": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        }
      })
      if (response.data?.code === 200) { // 로그아웃 완료
        console.log(response.data?.code, ': ', response.data?.message);
        logout();
      } else if (response.data?.code === 403) { // 토큰 만료
        console.log(response.data?.code, ': ', response.data?.message);

        // 토큰 재발급 후 로그아웃 다시 요청
        const newToken = await refreshToken();
        if(newToken) {
          console.log('새 토큰으로 로그아웃 요청');

          response = await axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
            headers: { 
              "accept": "application/json",
              "Authorization": `Bearer ${newToken}`,
            }
          })
          if (response.data?.code === 200) { // 로그아웃 완료
            console.log(response.data?.code, ': ', response.data?.message);
            logout();
          } else {  // 로그아웃 실패
            console.log(response.data?.code, ': ', response.data?.message);
          }
        } else {
          console.log("토큰 재발급 실패, 로그아웃 진행 불가");
        }
      } else {
        console.log(response.data?.code, ': ', response.data?.message);
      }
    } catch (error) { // API 에러 발생
        console.error('로그아웃 API 에러 발생: ', error);
    } finally {
      setIsLoading(false); // 요청이 끝나면 로딩 해제
    }

    setIsDropdown(false);
    navigate('/');
    window.location.reload();
  };

  // 탈퇴
  const handleWithdraw = async() => {
    setIsLoading(true); // 요청 시작 시 로딩 상태 활성화

    try {
      let accessToken = localStorage.getItem("accessToken");

      let response = await axios.delete(`${process.env.REACT_APP_API_URL}/auth/withdraw`, {
        headers: { 
          "accept": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        }
      })
      if (response.data?.code === 200) { // 탈퇴 완료
        console.log(response.data?.code, ': ', response.data?.message);
        logout();
      } else if (response.data?.code === 403) { // 토큰 만료
        console.log(response.data?.code, ': ', response.data?.message);

        // 토큰 재발급 후 탈퇴 다시 요청
        const newToken = await refreshToken();
        if(newToken) {
          console.log('새 토큰으로 탈퇴 요청');

          response = await axios.delete(`${process.env.REACT_APP_API_URL}/auth/withdraw`, {
            headers: { 
              "accept": "application/json",
              "Authorization": `Bearer ${newToken}`,
            }
          })
          if (response.data?.code === 200) { // 탈퇴 완료
            console.log(response.data?.code, ': ', response.data?.message);
            logout();
          } else {  // 탈퇴 실패
            console.log(response.data?.code, ': ', response.data?.message);
          }
        } else {
          console.log("토큰 재발급 실패, 탈퇴 진행 불가");
        }
      } else {
        console.log(response.data?.code, ': ', response.data?.message);
      }
    } catch (error) { // API 에러 발생
        console.error('탈퇴 API 에러 발생: ', error);
    } finally {
      setIsLoading(false); // 요청이 끝나면 로딩 해제
    }

    setIsDropdown(false);
    navigate('/');
    window.location.reload();
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <IdConainer>
        <div>
          <img src={userImgUrl} alt="Profile" />
        </div>
        <span>ID</span>
      </IdConainer>
      <ListContainer onClick={handleLogout}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_200_1303)">
          <path d="M4 15H6V20H18V4H6V9H4V3C4 2.73478 4.10536 2.48043 4.29289 2.29289C4.48043 2.10536 4.73478 2 5 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V15ZM10 11V8L15 12L10 16V13H2V11H10Z" fill="#3E4042"/>
          </g>
          <defs>
          <clipPath id="clip0_200_1303">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <span>로그아웃</span>
      </ListContainer>
      <ListContainer onClick={handleWithdraw}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_200_1307)">
          <path d="M14 14.252V16.342C13.0949 16.022 12.1263 15.9239 11.1754 16.0558C10.2245 16.1877 9.3192 16.5459 8.53543 17.1002C7.75166 17.6545 7.11234 18.3888 6.67116 19.2414C6.22998 20.094 5.99982 21.04 6 22L4 21.999C3.99969 20.7779 4.27892 19.5729 4.8163 18.4764C5.35368 17.3799 6.13494 16.4209 7.10022 15.673C8.0655 14.9251 9.18918 14.4081 10.3852 14.1616C11.5811 13.9152 12.8177 13.9457 14 14.251V14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM19 17.586L21.121 15.464L22.536 16.879L20.414 19L22.536 21.121L21.121 22.536L19 20.414L16.879 22.536L15.464 21.121L17.586 19L15.464 16.879L16.879 15.464L19 17.586Z" fill="#3E4042"/>
          </g>
          <defs>
          <clipPath id="clip0_200_1307">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        <div>탈퇴</div>
      </ListContainer>
    </DropdownContainer>
  );
}

const Container = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  width: 100vw;
  height: 100vh;
`;

const DropdownContainer = styled.div`
  position: fixed;
  top: 54px;
  right: 12.5vw;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.White};
  z-index: 1000;
  box-shadow: 0px 0px 16px 0px ${(props) => props.theme.Gray600};
  border-radius: 8px;

  ${media.small`
    right: 3.962vw;
  `}
`;

// const DropdownContainer = styled.div`
//   position: fixed;
//   top: 0;
//   width: 11.458vw;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   background-color: #852525;
//   z-index: 1000;
//   box-shadow: 0px 0px 16px 0px ${(props) => props.theme.Gray600};
//   border-radius: 8px;
// `;

const IdConainer = styled.div`
  color: ${(props) => props.theme.Gray800};
  font-family: "NotoSansBold";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  box-sizing: border-box;
  padding: 16px 20px;
  width: 100%;
  gap: 10px;
  /* cursor: pointer; */
  border-bottom: 1px solid ${(props) => props.theme.Gray200};

  div {
    border-radius: 50px;
    border: 1px solid ${(props) => props.theme.Gray700};
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  div img {
    width: 100%;
    height: 100%;
  }
`;

const ListContainer = styled.div`
  color: ${(props) => props.theme.Gray800};
  font-family: "NotoSansMedium";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  box-sizing: border-box;
  padding: 16px 20px;
  width: 100%;
  gap: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.Gray100};
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;