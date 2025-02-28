import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";
import { postAnalysisFilterData } from '../../constants/postAnalysisFilterData';
import { useBtnInteraction } from '../../hooks/useBtnInteraction';
import Tag from '../common/Analysis/Tag';

export default function PostCard({onClick}) {
  const [postRef, isPostHover, isPostClick] = useBtnInteraction();

  return (
    <Main ref={postRef} onClick={onClick}>
      <ImgContainer $isPostHover={isPostHover} $isPostClick={isPostClick}>
        {isPostHover && 
          <BackContainer>
            <DateContainer>yyyy년&nbsp;<span>mm월 dd일</span></DateContainer>
            <TagContainer>
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
            </TagContainer>
          </BackContainer>
        }
        <img className='thumbnail' src="SampleImage45.png" alt="" />
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
  width: 100%;
`;

const ImgContainer = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: ${(props) => (props.$isPostHover ? props.theme.Black : 'transparent')};

  .thumbnail {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    /* opacity: ${(props) => (props.$isPostHover ? 0.4 : 1)}; */
    opacity: ${(props) => (props.$isPostClick ? 0.2 : props.$isPostHover ? 0.4 : 1)};
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