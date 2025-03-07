import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const useLoginRedirect = () => {
  const { login, setIsLoading } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
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
    setIsLoading(true); // 요청 시작 시 로딩 상태 활성화

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/login/facebook`, {
        headers: { 
          "accept": "application/json",
          "facebook-code": code,
        }
      })
      if (response.data?.code === 201) { // 로그인 완료
        console.log(response.data?.code, ': ', response.data?.message);

        convertImageToBase64(response?.data.data.profilePictureUrl).then((base64) => {
          login(response?.data.data.accessToken, response?.data.data.refreshToken, response?.data.data.name, base64);
          window.location.reload();
        })
      } else { // 로그인 실패
        console.log(response.data?.code, ': ', response.data?.message);
      }
    } catch (error) { // API 에러 발생
        console.error('로그인 API 에러 발생: ', error);
    } finally {
      setIsLoading(false); // 요청이 끝나면 로딩 해제
    }
  }

  const convertImageToBase64 = async (imageUrl) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("이미지 변환 오류:", error);
      return null;
    }
  };
};

export default useLoginRedirect;