import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';

export const HomeImg = styled.div`
  /* min-height: 100vh; */
  /* width: 100%; */
  /* width: 100vw; */
  /* height: 80vh; */
  min-height: 60vh;
  background-image: url(${(props) => props.image}); 
  background-size: cover;
  background-repeat: no-repeat; /* 반복 방지 */
  padding-left: 10%;
  padding-right: 10%;
  background-position: right;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MainTitle = styled.h1`
  font-family: 'GyeonggiTitleBold';
  /* font-size: 3.25rem; */
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: ${(props) => props.theme.White};

  ${media.small`
    font-size: 2rem;
  `}
  ${media.large`
    font-size: 3.25rem;
  `}

  span {
    color: ${(props) => props.theme.Primary};
  }
`;

export const SubTitle = styled.div`
  font-family: 'GyeonggiTitleLight';
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  color: ${(props) => props.theme.Gray200};
  
  display: flex;
  align-items: center;
  margin-top: 16px;

  ${media.small`
    font-size: 1.5rem;
  `}
  ${media.large`
    font-size: 2rem;
  `}
  
  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: none;
    border: 0;
    margin-left: 16px;
  }
  span:hover {

  }
`;

export const BtnContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 60px;
`;