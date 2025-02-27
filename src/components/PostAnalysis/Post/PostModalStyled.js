import styled from "styled-components";
import '../../../App.css';
import media from '../../../styles/media';
import { fontSizes } from "../../../styles/FontSizes";

export const Main = styled.div`
  position: fixed;
  top:0; left: 0; bottom: 0; right: 0;
  background: rgba(6, 6, 6, 0.6);
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

export const PostModalContainer = styled.div`
  /* min-width: 52.083vw; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* min-width: 24.167vw; */
  /* height: 61.111vh; */
  /* flex-shrink: 0; */
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  width: 62.292vw;
  aspect-ratio: 1196/885;

  @media only screen and (min-width: 1024px) { //700px
    min-width: 600px;
  }

  @media only screen and (max-width: 1024px) { //700px
    width: 92vw;
    max-width: 552px;
    /* min-width: 552px; */
  }
`;

export const TopContainer = styled.div`
  /* width: 62.292vw; */
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    ${fontSizes.btnTitle2Medium};
    color: ${(props) => props.theme.White};
  }

  /* @media only screen and (min-width: 700px) {
    width: 100%;
  } */

  /* @media only screen and (max-width: 700px) {
    width: 92vw;
    max-width: 552px;
  } */
`;

export const ToggleContainer = styled.button`
  display: flex;
  gap: 8px;
`;

export const CloseBtn = styled.button`
  
`;

export const PostContainer = styled.div`
  /* width: 62.292vw; */
  /* height: 81.944vh; */
  /* flex-shrink: 0; */
  box-shadow: 0px 0px 16px 0px #666868;
  border-radius: 8px;
  /* aspect-ratio: 1196/885; */
  overflow-x: auto;

  display: flex;
  flex-direction: row;
  /* justify-content: end; */
  justify-content: start;

  @media only screen and (min-width: 1024px) { //700px
    height: 81.944vh;
    width: 100%;
    /* overflow-y: auto; */
    /* aspect-ratio: 5/3; */
    overflow-y: hidden;
  }
  
  @media only screen and (max-width: 1024px) { //700px
    /* width: 62.292vw;
    height: 81.944vh; */
    width: 92vw;
    max-width: 552px;
    height: 81.944vh;
    /* height: 80%; */
    /* min-width: 552px; */
    /* display: grid;
    grid-template-rows: 4fr 3fr; */
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* background-color: cadetblue; */
    overflow-y: auto;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.Black};
  /* height: 100%; */
  aspect-ratio: 4/5;
  align-content: center;
  
  @media only screen and (min-width: 1024px) { //700px
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  
  @media only screen and (max-width: 1024px) { //700px
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

export const ImageSlideBtns = styled.div`
  position: absolute;
  z-index: 11;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  width: 100%;
  /* height: 81.944vh; */
  flex-grow: 1;
  
  height: 100%;
  padding: 1.667vw;
  
  @media only screen and (max-width: 1024px) { //700px
    padding: 1.481vh;
  }

  .prevBtn {
    background-color: pink;
    pointer-events: all;
    visibility: ${(props) => props.$currentIndex !== 0 ? 'visible' : 'hidden'};
  }

  .nextBtn {
    background-color: pink;
    pointer-events: all;
    visibility: ${(props) => props.$currentIndex !== props.$length-1 ? 'visible' : 'hidden'};
  }
`;

export const Img = styled.div`
  aspect-ratio: 4/5;
  align-content: center;
  position: relative;

  .image {
    width: 100%;
  }

  .slide {
    display: flex;
    transition: transform 0.5s ease;
    &.active {
      /* transform: translateX(0); */
    }
    &:not(.active) {
      /* transform: translateX(100%); */
    }
  }
`;

export const PostActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 25.417vw; */
  /* width: 25.417vw; */
  /* min-width: 32vw; */
  /* background-color: #3daf76; */
  padding: 2.963vh 1.667vw;
  background-color: ${(props) => props.theme.White};
  /* overflow-y: auto; */

  @media only screen and (min-width: 1024px) { //700px
    flex-grow: 1;
    justify-content: space-between;
    flex-basis: 488px;
    min-width: 488px;
    /* width: 25.417vw; */
    /* min-width: 400px; */
    /* background-color:rgb(174, 231, 203); */
    height: 100%;
  }
  @media only screen and (max-width: 1024px) { //700px
    flex-grow: 1;
    /* min-height: 43.704vh; */
    /* background-color: #ca5bc5; */
    padding: 1.481vh 1.951vw;
  }

  .linkBtn {
    border-top: 1px solid ${(props) => props.theme.Gray500};
    margin-left: -1.667vw;
    margin-right: -1.667vw;
    padding-top: 2.963vh;
    padding-left: 1.667vw;
    padding-right: 1.667vw;
    
    @media only screen and (max-width: 1024px) { //700px
      margin-left: -1.951vw;
      margin-right: -1.951vw;
      padding-top: 1.481vh;
      padding-left: 1.667vw;
      padding-right: 1.667vw;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  /* margin-top: 2.963vh;
  margin-bottom: 2.963vh; */
`;

export const OriginalContainer = styled.div`
  ${fontSizes.body3Regular};
  color: ${(props) => props.theme.Black};
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  margin-top: 2.963vh;
  margin-bottom: 2.963vh;
`;

export const OriginalText = styled.div`
  ${fontSizes.body3Regular};
  color: ${(props) => props.theme.Black};
  flex-grow: 1;
  max-height: 100%;

  @media only screen and (min-width: 1024px) { //700px
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const ReviseContainer = styled.div`
  ${fontSizes.body3Regular};
  color: ${(props) => props.theme.Secondary};
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
  margin-top: 2.963vh;
  margin-bottom: 2.963vh;
`;

export const ReviseText = styled.div`
  ${fontSizes.body3Regular};
  color: ${(props) => props.theme.Secondary};
  flex-grow: 1;
  max-height: 100%;
  margin-bottom: 2.963vh;

  @media only screen and (min-width: 1024px) { //700px
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const Notice = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: ${(props) => props.theme.Gray100};
  ${fontSizes.bdCaption1Medium};
  color: ${(props) => props.theme.Gray700};
  text-overflow: ellipsis;
  margin-bottom: 1.481vh;
`;

export const NotFindText = styled.div`
  ${fontSizes.body3Regular};
  color: ${(props) => props.theme.Black};
  flex-grow: 1;
  max-height: 100%;
  margin-bottom: 2.963vh;

  @media only screen and (min-width: 1024px) { //700px
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export const NoText = styled.div`
  ${fontSizes.body2Medium};
  color: ${(props) => props.theme.Gray700};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) { //700px
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;