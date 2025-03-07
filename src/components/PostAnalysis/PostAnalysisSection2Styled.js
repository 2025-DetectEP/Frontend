import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  /* height: 100vh; */
  overflow-x: hidden;
`;

export const NoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 47.5vh;
  gap: 24px;

  span {
    ${fontSizes.body2Medium};
    color: ${(props) => props.theme.Gray700};
    text-align: center;
  }

  button {
    ${fontSizes.btnTitle2Bold};
    color: ${(props) => props.theme.Secondary};
    text-align: center;
    display: inline-block;
    width: auto;
    padding: 8px 12px;
    border-radius: 8px;
    gap: 10px;
  }
  button:hover {
    background-color: ${(props) => props.theme.Gray100};
  }
  button:active {
    background-color: ${(props) => props.theme.Gray200};
  }
`;

export const FilterSearchContainer = styled.div`
  margin-top: 3.704vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* gap: 2vw; */
  position: relative;

  ${media.small`
  `}

  @media only screen and (max-width: 1430px) { // 1730px
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  margin-right: 6.667vw;
  /* height: 50px; */
  align-items: center;

  @media only screen and (max-width: 1430px) {
    margin-right: 0;
    width: 100%;
    white-space: nowrap;
    align-items: center;
  }
`;

export const FilterBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  @media only screen and (max-width: 1430px) {
    overflow-x: scroll;
    width: 750px;
  }
  @media only screen and (max-width: 1022px) {
    overflow-x: scroll;
    width: 750px;
    padding-left: 100px;
    padding-right: 100px;
  }
  &:-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

export const FilterLeftBtn = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  display: flex;
  justify-content: start;
  visibility: ${({$isBtnVisible}) => ($isBtnVisible ? "visible" : "hidden")};
  opacity: ${({$isBtnVisible}) => ($isBtnVisible ? 1 : 0)};
  z-index: 10;
  pointer-events: ${({ $isBtnVisible }) => ($isBtnVisible ? "auto" : "none")}; // 추가

  visibility: hidden;
  @media only screen and (max-width: 1022px) {
    visibility: visible;  
  }
`;

export const FilterRightBtn = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  display: flex;
  justify-content: end;
  visibility: ${({$isBtnVisible}) => ($isBtnVisible ? "visible" : "hidden")};
  opacity: ${({$isBtnVisible}) => ($isBtnVisible ? 1 : 0)};
  z-index: 10;
  visibility: hidden;
  
  @media only screen and (max-width: 1022px) {
    visibility: visible;
  }
`;

export const FilterBtnBg = styled.div`
  position: absolute;
  z-index: 9;
  display: flex;
  width: 180px;
  height: 50%;
  pointer-events: none;
  &.left {
    left: 0;
    background: linear-gradient(90deg, #FFF 39.5%, rgba(255, 255, 255, 0.00) 100%);
    justify-content: start;
    /* visibility: ${({$isBtnVisible}) => ($isBtnVisible ? "visible" : "hidden")}; */
    opacity: ${({$isBtnVisible}) => ($isBtnVisible ? 1 : 0)};
  }
  &.right {
    right: 0;
    background: linear-gradient(270deg, #FFF 39.5%, rgba(255, 255, 255, 0.00) 100%);
    justify-content: end;
    /* visibility: ${({$isBtnVisible}) => ($isBtnVisible ? "visible" : "hidden")}; */
    opacity: ${({$isBtnVisible}) => ($isBtnVisible ? 1 : 0)};
  }

  visibility: hidden;
  @media only screen and (max-width: 1022px) {
    visibility: visible;  
  }
`;

export const SearchContainer = styled.form`
  /* display: flex; */
  /* width: 30.521vw; */
  /* max-width: 586px; */
  flex: 1;
  height: 46px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 800px;
  border: 2px solid ${(props) => props.theme.Gray200};
  
  @media only screen and (max-width: 1430px) {
    /* width: 100%; */
  }
  
  @media only screen and (max-width: 1022px) {
    width: 100%;
    height: 46px;
    /* flex: 0; */
    position: sticky;
  }
  
  ${media.small`
    /* width: 92vw; => 600px */
  `}

  &:focus-within {
    border: 2px solid ${(props) => props.theme.Primary};
  }
`;

export const SearchBtn = styled.label`
  /* cursor: pointer; */
`;

export const SearchInput = styled.input`
  ${fontSizes.btnTitle2Medium};
  color: ${(props) => props.theme.Gray800};
  flex-grow: 1;
  border: transparent;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: ${(props) => props.theme.Gray500};
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

export const CancelBtn = styled.div`
  cursor: pointer;
`;

export const PostCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 3.704vh;
  margin-bottom: 7.407vh;
  /* margin-top: 40px;
  margin-bottom: 80px; */

  @media only screen and (max-width: 1022px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${media.small`
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 2.963vh;
    margin-bottom: 60px;
    /* margin-top: 32px;
    margin-bottom: 60px; */
  `}
`;