import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { ReactComponent as FaceBookIcon } from '../../assets/icons/icon_Facebook.svg';
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginBtn({setIsModalOpen}) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const loginURL = process.env.REACT_APP_API_FB_LOGIN;

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const accessToken = urlParams.get("accessToken");
  //   const refreshToken = urlParams.get("refreshToken");

  //   if (accessToken && refreshToken) {
  //     login(accessToken, refreshToken);
  //     window.history.replaceState({}, document.title, window.location.pathname);
  //     navigate("/");
  //   }
  // }, [login, navigate]);
  
  const handleOnCick = async() => {
    // try {
    //   const response = await axios.get(loginURL)
    //   if (response.data?.code === 200) {
    //     console.log('로그인 완료');
    //     console.log('message: ', response.data?.message);
    //   } else {
    //     console.log('로그인 실패: ', response.data?.message);
    //   }
    // } catch (error) {
    //     console.error('로그인 API 에러 발생: ', error);
    // }
  
    window.location.href = loginURL;
  };
  // window.location.href = loginURL;

  useEffect(() => {
    const fetchUserProfile = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', loginURL, true);
      xhr.withCredentials = true; // 쿠키를 포함하려면 이 설정을 추가합니다.

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const data = JSON.parse(xhr.responseText);
          // setUser(data);
        } else {
          console.error('Error fetching user profile:', xhr.statusText);
        }
        // setLoading(false);
      };

      xhr.onerror = () => {
        console.error('Request failed');
        // setLoading(false);
      };

      xhr.send();
    };

    // 컴포넌트가 마운트되면 사용자 정보를 가져옵니다.
    fetchUserProfile();
  }, []);

  return (
    <FBLoginBtnContainer onClick={handleOnCick}>
      <FaceBookIcon/>
      <BtnText>Facebook으로 계속하기</BtnText>
      {/* <a href={loginURL}>Facebook으로 계속하기</a> */}
    </FBLoginBtnContainer>
  );
}

const FBLoginBtnContainer = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.theme.White};
  color: ${(props) => props.theme.Black};
  padding: 1.481vh 2.963vw;
  border: 2px solid ${(props) => props.theme.Gray400};
  border-radius: 8px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  &:hover {
    background-color: ${(props) => props.theme.Gray200};
  }
`;

const BtnText = styled.div`
  color: ${(props) => props.theme.Black};
  font-family: "NotoSansBold";
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  flex-grow: 1;
  margin: 0;
  text-align: center;
`;