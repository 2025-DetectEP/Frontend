import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";

export const Main = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.White};
  color: ${(props) => props.theme.Black};
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* justify-content: space-between; */
  z-index: 100;
  
  /* padding-left: 10%; */
  /* padding-right: 10%; */
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12.5vw;
  padding-right: 12.5vw;
  ${media.small`
    padding-left: 3.962vw;
    padding-right: 3.962vw;
  `}

  .logo {
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 500px;
  border: 1px solid ${(props) => props.theme.Gray700};
  background-color: ${(props) => props.theme.White};
  cursor: pointer ;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const LoginBtn = styled.button`
  background-color: transparent;
  border: 0;
  display: inline-flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  ${fontSizes.btnTitle2Medium};
  color: ${(props) => props.theme.Gray600};

  &:hover {
    background-color: ${(props) => props.theme.Gray200};
  }
`;