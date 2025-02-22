import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";

export const HomeImg = styled.div`
  /* min-height: 100vh; */
  /* width: 100%; */
  /* width: 100vw; */
  /* height: 80vh; */
  min-height: 60vh;
  background-image: url(${(props) => props.image}); 
  background-size: cover;
  background-repeat: no-repeat; /* 반복 방지 */
  /* padding-left: 10%;
  padding-right: 10%; */
  background-position: right;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  box-sizing: border-box;
  padding: 7.407vh 12.5vw;
  ${media.large`
    padding: 7.407vh 12.5vw;
  `}
  ${media.small`
    padding: 5.556vh 3.962vw;
  `}
`;

export const MainTitle = styled.h1`
  ${fontSizes.titleHead1Bold};
  color: ${(props) => props.theme.White};
  word-break: keep-all;

  span {
    color: ${(props) => props.theme.Primary};
  }
`;

export const SubTitle = styled.div`
  ${fontSizes.titleSubhead1Light};
  color: ${(props) => props.theme.Gray200};
  
  display: flex;
  align-items: center;
  margin-top: 16px;
  word-break: keep-all;

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0;
    margin-left: 16px;
  }
  span:hover {

  }
`;

export const BtnContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  margin-top: 60px;

  width: 100%;
  box-sizing: border-box;
  ${media.small`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.111vh;
  `}
`;

export const Section2 = styled.div`
  box-sizing: border-box;
  padding: 0vh 12.5vw;
  ${media.large`
    padding: 0vh 12.5vw;
  `}
  ${media.small`
    padding: 0vh 3.962vw;
  `}
`;

export const Sec2Container = styled.div`
  display: flex;
  gap: 24px;
  ${media.small`
    display: flex;
    flex-direction: column;
  `}
`;