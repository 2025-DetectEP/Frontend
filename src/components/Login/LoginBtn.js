import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { ReactComponent as FaceBookIcon } from '../../assets/icons/icon_Facebook.svg';
import axios from "axios";

export default function LoginBtn({setIsModalOpen}) {
  const { login } = useAuth();
  const loginURL = process.env.REACT_APP_API_FB_LOGIN;

  const handleOnCick = async() => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_FB_LOGIN)
      if (response.data?.code === 200) {
        console.log('로그인 완료');
        console.log('message: ', response.data?.message);
      } else {
        console.log('로그인 실패: ', response.data?.message);
      }
    } catch (error) {
        console.error('로그인 API 에러 발생: ', error);
    }
  };

  return (
    <FBLoginBtnContainer onClick={handleOnCick}>
      <FaceBookIcon/>
      <BtnText>Facebook으로 계속하기</BtnText>
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