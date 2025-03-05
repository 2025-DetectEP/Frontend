import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const useLoginRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const { login }= useAuth();
  const hasLoggedIn = React.useRef(false); // 로그인 여부를 체크하는 ref

  useEffect(() => {
    const urlCode = searchParams.get("code"); // URL에서 code 파라미터 가져오기
    const hash = url.hash;
    if (urlCode && !hasLoggedIn.current) {
      const code = urlCode + hash;
      hasLoggedIn.current = true;
      
      getLogin(code);
    }
  }, [searchParams, navigate]);

  const getLogin = async(code) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/login/facebook`, {
        headers: { 
          "accept": "application/json",
          "facebook-code": code,
        }
      })
      if (response.data?.code === 201) {
        console.log('로그인 완료');
        console.log('message: ', response.data?.message);
        login(response?.data.data.accessToken, response?.data.data.refreshToken);
      } else {
        console.log('로그인 실패 code: ', response.data?.code);
        console.log('로그인 실패 message: ', response.data?.message);
      }
    } catch (error) {
        console.error('로그인 API 에러 발생: ', error);
    }
  }
};

export default useLoginRedirect;