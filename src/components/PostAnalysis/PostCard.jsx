import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";
import { postAnalysisFilterData } from '../../constants/postAnalysisFilterData';
import { useBtnInteraction } from '../../hooks/useBtnInteraction';
import Tag from '../common/Analysis/Tag';

export default function PostCard({onClick, postData}) {
  const [postRef, isPostHover, isPostClick] = useBtnInteraction();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [keywords, setKeywords] = useState([]);

  // 날짜
  useEffect(() => {
    const dateOnly = postData.createdTime.split("T")[0];
    const [yearValue, monthValue, dayValue] = dateOnly.split("-");
    setYear(yearValue);
    setMonth(parseInt(monthValue).toString()); // 앞의 0 제거
    setDay(parseInt(dayValue).toString()); // 앞의 0 제거
  }, [postData])

  // 키워드
  useEffect(() => {
    setKeywords(postData.detectedKeywords);
  }, [postData])

  return (
    <Main ref={postRef} onClick={onClick}>
      <ImgContainer $isPostHover={isPostHover} $isPostClick={isPostClick}>
        {isPostHover && 
          <BackContainer>
            <DateContainer>{year}년&nbsp;<span>{month}월 {day}일</span></DateContainer>
            <TagContainer>
              {keywords.map((data, index) => {
                return (
                  <Tag key={index} title={data} />
                )
              })}
            </TagContainer>
          </BackContainer>
        }
        <img className='thumbnail' src={postData.firstPhotoUrl} alt="post" />
        {/* <img className='thumbnail' src="SampleImage11.png" alt="" /> */}
      </ImgContainer>
    </Main>
  );
}

const Main = styled.div`
  cursor: pointer;
  display: flex;
  aspect-ratio: 4/5;
  /* width: 17.813vw;
  height: 39.63vh; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  /* width: 94%; */
  /* width: 17.813vw; */
  background-color: ${(props) => props.theme.Black};
`;

const ImgContainer = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: ${(props) => (props.$isPostHover ? props.theme.Black : 'transparent')};
  /* aspect-ratio: 4/5; */
  width: 100%;
  height: 100%;

  .thumbnail {
    width: 100%;
    height: inherit;
    object-fit: cover;
    border-radius: 8px;
    /* opacity: ${(props) => (props.$isPostHover ? 0.4 : 1)}; */
    opacity: ${(props) => (props.$isPostClick ? 0.2 : props.$isPostHover ? 0.4 : 1)};
  }

  img:not([src]) {
    visibility: hidden; // 이미지 없는 사진 일 때
  }
`;

const BackContainer = styled.div`
  position: absolute;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 8%;
  padding-right: 8%;
  opacity: 1;
  z-index: 10;
  display: block;
`;

const DateContainer = styled.div`
  ${fontSizes.body2Medium};
  color: ${(props) => props.theme.White};
  display: flex;
  flex-wrap: wrap;

  span {
    white-space: nowrap;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;