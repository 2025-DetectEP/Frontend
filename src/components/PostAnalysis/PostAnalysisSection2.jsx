import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as S from './PostAnalysisSection2Styled';
import { postAnalysisFilterData } from '../../constants/postAnalysisFilterData';
import { useBtnInteraction } from '../../hooks/useBtnInteraction';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import FilterBtn from './FilterBtn';
import LeftBtn from '../common/Buttons/LeftBtn';
import RightBtn from '../common/Buttons/RightBtn';
import PostCard from './PostCard';
import PostModal from './Post/PostModal';

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

  const [isPostClick, setIsPostClick] = useState(false); // 게시물 클릭

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
      if(isPostClick) {
        setIsBtnVisible(true);
      } else {
        setIsBtnVisible(false);
      }
    }
  }, [width, isPostClick]);

  // X-스크롤 (방향: left 또는 right)
  // const startScrolling = (direction) => {
  //   if (!filterScrollRef.current) return;
    
  //   const scrollAmount = filterScrollRef.current.clientWidth * 0.2;
  //   // const scrollAmount = 100;

  //   filterScrollRef.current.scrollBy({
  //     left: direction === "left" ? -scrollAmount : scrollAmount,
  //     behavior: "smooth"
  //   });
  // };

  let scrollInterval = null;

  const startScrolling = (direction) => {
    if (!filterScrollRef.current) return;

    scrollInterval = setInterval(() => {
      filterScrollRef.current.scrollLeft += direction === "left" ? -10 : 10;
    }, 30); // 30ms마다 이동
  };

  // 스크롤 멈춤
  const stopScrolling = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      scrollInterval = null;
    }
  };


  return (
    <S.Main>
      {isPost ? (
        analysisCount === 0 ? (   // 게시물 O, 개인정보 노출 X
          <S.NoneContainer>
            <span>앞으로도 지금처럼 개인정보를 지켜봐요!</span>
            <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
          </S.NoneContainer>
        ) : (   // 게시물 O, 개인정보 노출 O
          <>
            <S.FilterSearchContainer ref={filterContainerRef}>
              <S.FilterContainer>
                <S.FilterBtnBg className="left" $isBtnVisible={isBtnVisible} />
                <S.FilterBtnBg className="right" $isBtnVisible={isBtnVisible} />
                <S.FilterLeftBtn $isBtnVisible={isBtnVisible}>
                  <LeftBtn
                    ref={leftRef}
                    isHovered={isLeftHover}
                    isPressed={isLeftPress}
                    startScrolling={startScrolling}
                    stopScrolling={stopScrolling}
                  />
                </S.FilterLeftBtn>
                <S.FilterRightBtn $isBtnVisible={isBtnVisible}>
                  <RightBtn
                    ref={rightRef}
                    isHovered={isRightHover}
                    isPressed={isRightPress}
                    startScrolling={startScrolling}
                    stopScrolling={stopScrolling}
                  />
                </S.FilterRightBtn>
                <S.FilterBtnContainer ref={filterScrollRef}>
                  {postAnalysisFilterData.map(data => {
                    return (
                      <FilterBtn key={data.id} title={data.title} onClick={()=>{console.log(data.title)}} />
                    )
                  })}
                </S.FilterBtnContainer>
              </S.FilterContainer>
              <S.SearchContainer onSubmit={handleFormSubmit}>
                <S.SearchBtn htmlFor="postSearch">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#8A8C8E"/>
                  </svg>
                </S.SearchBtn>
                <S.SearchInput
                  id="postSearch"
                  placeholder="게시물 검색"
                  onFocus={() => setIsSearchFocus(true)}
                  onBlur={() => setIsSearchFocus(false)}
                  value={searchValue || ''}
                  onChange={handleInputChange}
                  type="text"
                />
                {isSearchFocus && (
                  <S.CancelBtn onMouseDown={() => {setSearchValue('')}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 10.586L9.172 7.757L7.757 9.172L10.586 12L7.757 14.828L9.172 16.243L12 13.414L14.828 16.243L16.243 14.828L13.414 12L16.243 9.172L14.828 7.757L12 10.586Z" fill="#8A8C8E"/>
                    </svg>
                  </S.CancelBtn>
                )}
              </S.SearchContainer>
            </S.FilterSearchContainer>
            <S.PostCardContainer>
              <PostCard onClick={()=>setIsPostClick(true)} />
            </S.PostCardContainer>
          </>
        )
      ) : (   // 게시물 X
        <S.NoneContainer>
          <span>게시물을 업로드한 뒤 분석을 받아보세요!</span>
          <button onClick={() => navigate('/')}>홈으로 돌아가기</button>
        </S.NoneContainer>
      )}
      
      {/* 게시물 모달 */}
      {isPostClick && 
        <PostModal setIsPostClick={setIsPostClick} />
      }
    </S.Main>
  );
}
