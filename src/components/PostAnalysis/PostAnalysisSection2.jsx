import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";
import { postAnalysisFilterData } from '../../constants/postAnalysisFilterData';
import { useBtnInteraction } from '../../hooks/useBtnInteraction';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import FilterBtn from './FilterBtn';
import LeftBtn from '../common/Buttons/LeftBtn';
import RightBtn from '../common/Buttons/RightBtn';

export default function PostAnalysisSection1({isPost, postCount, analysisCount}) {
  const navigate = useNavigate();
  const [isSearchFocus, setIsSearchFocus] = useState(false);  // 검색 input focus 여부
  const [searchValue, setSearchValue] = useState('');   // 검색 값

  const filterContainerRef = useRef(null);  // filter container의 width 구하기 위함
  const {width} = useResizeObserver(filterContainerRef);
  const [isBtnVisible, setIsBtnVisible] = useState(false);  // 일정 width 이하 -> 버튼 보이게
  const [leftRef, isLeftHover, isLeftPress] = useBtnInteraction(); // 왼쪽 버튼
  const [rightRef, isRightHover, isRightPress] = useBtnInteraction(); // 오른쪽 버튼
  const filterScrollRef = useRef(null);  // filter container의 스크롤 영역

  // 기본 제출 방지
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // 검색 변경
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // filter container width가 750px 이하면 좌우 버튼 생김
  useEffect(() => {
    if (width < 750) {
      setIsBtnVisible(true);
    } else {
      setIsBtnVisible(false);
    }
  }, [width]);

  const startScrolling = (direction) => {
    // console.log("dd: ", filterScrollRef.current.clientWidth)
    console.log("direction: ", direction)
    if (!filterScrollRef.current) return;

    // const scrollAmount = filterScrollRef.current.clientWidth * 0.8;
    const scrollAmount = 50; 

    filterScrollRef.current.scrollBy({
      left: direction === "Left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  // 스크롤 시작 (방향: left 또는 right)
  // const startScrolling = (direction) => {
  //   console.log("direction: ", direction)
  //   console.log("dd: ", filterScrollRef.current.clientWidth)
  //   if (!filterScrollRef.current) return;
  //   scrollInterval = setInterval(() => {
  //     filterScrollRef.current.scrollLeft += direction === "left" ? -10 : 10;
  //     console.log("이이이")
  //   }, 50); // 50ms마다 이동
  // };

  // 스크롤 멈춤
  const stopScrolling = () => {
    // if (scrollInterval) {
    //   clearInterval(scrollInterval);
    //   scrollInterval = null;
    // }
    console.log("스크롤스탑")
  };

  return (
    <Main>
      {isPost ? (
        analysisCount === 0 ? (   // 게시물 O, 개인정보 노출 X
          <NoneContainer>
            <span>앞으로도 지금처럼 개인정보를 지켜봐요!</span>
            <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
          </NoneContainer>
        ) : (   // 게시물 O, 개인정보 노출 O
          <>
            <FilterSearchContainer ref={filterContainerRef}>
              <FilterBtnBg className="left" $isBtnVisible={isBtnVisible} />
              <FilterBtnBg className="right" $isBtnVisible={isBtnVisible} />
              <FilterLeftBtn $isBtnVisible={isBtnVisible}>
                <LeftBtn
                  ref={leftRef}
                  isHovered={isLeftHover}
                  isPressed={isLeftPress}
                  startScrolling={startScrolling}
                  stopScrolling={stopScrolling}
                />
              </FilterLeftBtn>
              {/* <FilterLeftBtn ref={leftRef} $isBtnVisible={isBtnVisible} onClick={() => console.log("왼쪽")}>
                <LeftBtn isHovered={isLeftHover} isPressed={isLeftPress} />
              </FilterLeftBtn> */}
              <FilterRightBtn $isBtnVisible={isBtnVisible}>
                <RightBtn ref={rightRef} isHovered={isRightHover} isPressed={isRightPress} />
              </FilterRightBtn>
              <FilterContainer ref={filterScrollRef}>
                {postAnalysisFilterData.map(data => {
                  return (
                    <FilterBtn key={data.id} title={data.title} />
                  )
                })}
              </FilterContainer>
              <SearchContainer onSubmit={handleFormSubmit}>
                <SearchBtn htmlFor="postSearch">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#8A8C8E"/>
                  </svg>
                </SearchBtn>
                <SearchInput
                  id="postSearch"
                  placeholder="게시물 검색"
                  onFocus={() => setIsSearchFocus(true)}
                  onBlur={() => setIsSearchFocus(false)}
                  value={searchValue || ''}
                  onChange={handleInputChange}
                  type="text"
                />
                {isSearchFocus && (
                  <CancelBtn onMouseDown={() => {setSearchValue('')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 10.586L9.172 7.757L7.757 9.172L10.586 12L7.757 14.828L9.172 16.243L12 13.414L14.828 16.243L16.243 14.828L13.414 12L16.243 9.172L14.828 7.757L12 10.586Z" fill="#8A8C8E"/>
                    </svg>
                  </CancelBtn>
                )}
              </SearchContainer>
            </FilterSearchContainer>
            {searchValue}
          </>
        )
      ) : (   // 게시물 X
        <NoneContainer>
          <span>게시물을 업로드한 뒤 분석을 받아보세요!</span>
          <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
        </NoneContainer>
      )}
      
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  height: 100%;
  overflow-x: hidden;
`;

const NoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
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

const FilterSearchContainer = styled.div`
  margin-top: 3.704vh;
  display: flex;
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

const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 6.667vw;
  /* min-width: 750px; */

  @media only screen and (max-width: 1430px) {
    margin-right: 0;
    width: 750px;
    overflow-x: hidden;
    white-space: nowrap;
  }
`;

const FilterLeftBtn = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: start;
  visibility: ${({$isBtnVisible}) => ($isBtnVisible ? "visible" : "hidden")};
  opacity: ${({$isBtnVisible}) => ($isBtnVisible ? 1 : 0)};
  z-index: 10;
  pointer-events: ${({ $isBtnVisible }) => ($isBtnVisible ? "auto" : "none")}; // 추가
`;

const FilterRightBtn = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: end;
  visibility: ${({$isBtnVisible}) => ($isBtnVisible ? "visible" : "hidden")};
  opacity: ${({$isBtnVisible}) => ($isBtnVisible ? 1 : 0)};
  z-index: 10;
`;

const FilterBtnBg = styled.div`
  position: absolute;
  display: flex;
  width: 200px;
  height: 50%;
  pointer-events: none;
  &.left {
    left: 0;
    background: linear-gradient(90deg, #FFF 39.5%, rgba(255, 255, 255, 0.00) 100%);
    justify-content: start;
    visibility: ${({$isBtnVisible}) => ($isBtnVisible ? "visible" : "hidden")};
    opacity: ${({$isBtnVisible}) => ($isBtnVisible ? 1 : 0)};
  }
  &.right {
    right: 0;
    background: linear-gradient(270deg, #FFF 39.5%, rgba(255, 255, 255, 0.00) 100%);
    justify-content: end;
    visibility: ${({$isBtnVisible}) => ($isBtnVisible ? "visible" : "hidden")};
    opacity: ${({$isBtnVisible}) => ($isBtnVisible ? 1 : 0)};
  }
`;

const SearchContainer = styled.form`
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

const SearchBtn = styled.label`
  /* cursor: pointer; */
`;

const SearchInput = styled.input`
  ${fontSizes.btnTitle2Medium};
  color: ${(props) => props.theme.Gray800};
  flex-grow: 1;
  border: transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: ${(props) => props.theme.Gray500};
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const CancelBtn = styled.div`
  cursor: pointer;
`;