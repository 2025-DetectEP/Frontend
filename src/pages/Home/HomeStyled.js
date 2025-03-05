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
  background-image: url(${(props) => props.$image});
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

export const LinkBtn = styled.div`
  ${media.small`
    width: 100%;
  `}
`;

export const Section2 = styled.div`
  box-sizing: border-box;
  padding-top: 7.407vh;
  padding-left: 12.5vw;
  padding-right: 12.5vw;
  ${media.small`
      padding-top: 5.556vh;
      padding-left: 3.962vw;
      padding-right: 3.962vw;
  `}

  .sec2SubTitle {
    ${fontSizes.titleSubhead2Light};
    color: ${(props) => props.theme.Gray700};
  }
`;

export const Sec2Container = styled.div`
  display: flex;
  gap: 24px;
  padding-top: 2.222vh;
  ${media.small`
    display: flex;
    flex-direction: column;
    padding-top: 1.481vh;
  `}
`;

export const CheckContainer = styled.div`
  background-color: ${(props) => (props.$isBtnHover ? props.theme.White : props.theme.Secondary100)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 2.963vh 1.667vw;
  margin-top: 24px;
  ${media.small`
    flex-direction: column;
    padding: 2.222vh 4vw;
    gap: 1.481vh;
  `}

  span {
    ${fontSizes.titleHead3Bold};
    color: ${(props) => props.theme.Black};
  }

  div {
    ${media.small`
      width: 100%;
    `}
  }

  button {
    display: flex;
    width: 220px;
    height: 60px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: ${(props) => props.theme.White};
    ${fontSizes.btnTitle1Bold};
    color: ${(props) => props.theme.Black};

    ${media.small`
      width: 100%;
    `}
  }

  button:hover {
    background: ${(props) => props.theme.Secondary100};
  }
  button:active {
    background: ${(props) => props.theme.Secondary};
    color: ${(props) => props.theme.White};
  }
`;

export const Section3 = styled.div`
  box-sizing: border-box;
  padding: 7.407vh 12.5vw;
  ${media.small`
    padding: 5.556vh 3.962vw;
  `}
`;

export const Sec3Title = styled.div`
  display: flex;
  flex-direction: column;

  .sec3SubTitle {
    ${fontSizes.titleSubhead2Light};
    color: ${(props) => props.theme.Gray700};
  }
  .sec3title {
    ${fontSizes.titleHead2bold};
    color: ${(props) => props.theme.Black};

    padding-top: 1.111vh;
    padding-bottom: 2.222vh;
    ${media.small`
      padding-top: 0.741vh;
      padding-bottom: 1.481vh;
    `}
  }
`;

export const Sec3BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${media.small`
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  `}
`;