import FacebookLogin from "@greatsumini/react-facebook-login";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { ReactComponent as FaceBookIcon } from '../../assets/icons/icon_Facebook.svg';

export default function LoginBtn({setIsModalOpen}) {
  const { login } = useAuth();
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_ID}
      onSuccess={(response) => {
        console.log("로그인 성공!");
        console.log("id: ", response.userID);
        console.log("accessToken: ", response.accessToken);
        console.log("expiresIn: ", response.expiresIn);
        console.log("reauthorize_required_in: ", response.reauthorize_required_in);
        console.log("signedRequest: ", response.signedRequest);
        
        login(response.accessToken);
        setIsModalOpen(false);
        window.location.reload();
      }}
      onFail={(error) => {
        console.log("로그인 실패!");
        console.log("status: ", error.status);
      }}
      onProfileSuccess={(response) => {
        console.log("Get Profile Success!");
        console.log("name: ", response.name);
        console.log("id: ", response.id);
        console.log("picture: ", response.picture);
        console.log("email: ", response.email);

        const userImg = response.picture.data.url;
        localStorage.setItem("userImg", userImg);
      }}
      render={({onClick}) => (
        <FBLoginBtn onClick={onClick}>
          <FaceBookIcon/>
          <BtnText>Facebook으로 계속하기</BtnText>
        </FBLoginBtn>
      )}
    />
  );
}

const FBLoginBtn = styled.div`
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