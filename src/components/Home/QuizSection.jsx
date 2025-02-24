import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";
import { ReactComponent as IconLeftEnabled } from '../../assets/icons/icon_left_enabled.svg'
import { ReactComponent as IconLeftHover } from '../../assets/icons/icon_left_hover.svg'
import { ReactComponent as IconLeftPressed } from '../../assets/icons/icon_left_pressed.svg'
import { ReactComponent as IconRightEnabled } from '../../assets/icons/icon_right_enabled.svg'
import { ReactComponent as IconRightHover } from '../../assets/icons/icon_right_hover.svg'
import { ReactComponent as IconRightPressed } from '../../assets/icons/icon_right_pressed.svg'

export default function QuizSection() { 
  const [isQuizLeftHovered, setIsQuizLeftHovered] = useState(false);  // 섹션2 퀴즈 왼쪽 버튼 호버
  const [isQuizLeftPressed, setIsQuizLeftPressed] = useState(false);  // 섹션2 퀴즈 왼쪽 버튼 클릭
  const [isQuizRightHovered, setIsQuizRightHovered] = useState(false);  // 섹션2 퀴즈 오른쪽 버튼 호버
  const [isQuizRightPressed, setIsQuizRightPressed] = useState(false);  // 섹션2 퀴즈 오른쪽 버튼 클릭
  
  return (
    <Main>
      <span>오늘의 개인정보 퀴즈</span>
      <Quiz>
        <span>어떤 형식으로 하느냐에 따라 달라겠지만, 일단 맞춤법 퀴즈처럼 넣어 봄ㄴㄴ</span>
        <Answer>
          <button>선택지1</button>
          <button>선택지2</button>
        </Answer>
      </Quiz>
      <QuizNavigation>
        <span
          className='quizIconBtn' 
          onMouseEnter={() => setIsQuizLeftHovered(true)}
          onMouseLeave={() => setIsQuizLeftHovered(false)}
          onMouseDown={() => setIsQuizLeftPressed(true)}
          onMouseUp={() => setIsQuizLeftPressed(false)}
          onMouseOut={() => setIsQuizLeftPressed(false)}
        >
          {isQuizLeftPressed ? (
            <IconLeftPressed width={32} height={32} />
          ) : isQuizLeftHovered ? (
            <IconLeftHover width={32} height={32} />
          ) : (
            <IconLeftEnabled width={32} height={32} />
          )}
        </span>
        <span className="currentNum">1</span><span className="allNum">&nbsp;/ 3</span>
        <span 
          className='quizIconBtn' 
          onMouseEnter={() => setIsQuizRightHovered(true)}
          onMouseLeave={() => setIsQuizRightHovered(false)}
          onMouseDown={() => setIsQuizRightPressed(true)}
          onMouseUp={() => setIsQuizRightPressed(false)}
          onMouseOut={() => setIsQuizRightPressed(false)}
        >
          {isQuizRightPressed ? (
            <IconRightPressed width={32} height={32} />
          ) : isQuizRightHovered ? (
            <IconRightHover width={32} height={32} />
          ) : (
            <IconRightEnabled width={32} height={32} />
          )}
        </span>
      </QuizNavigation>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 49.583vw; */
  flex-shrink: 0;
  border-radius: 8px;
  background:  ${(props) => props.theme.White};
  box-shadow: 0px 0px 16px 0px  ${(props) => props.theme.Secondary100};
  box-sizing: border-box;
  /* padding: 2.963vh 1.667vw; */
  padding: 32px;
  flex: 2;
  ${media.small`
    width: 100%;
    /* padding: 2.222vh 1.25vw; */
    padding: 24px;
  `}

  span {
    ${fontSizes.titleHead3Bold}
    color: ${(props) => props.theme.Black};
  }
`;

const Quiz = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  span {
    flex-grow: 1;
    display: flex;
    align-items: center;
    text-align: center;
    ${fontSizes.body1Medium}
    color: ${(props) => props.theme.Black};
    text-align: center;
    word-break: keep-all;
    padding-top: 24px;
    padding-bottom: 36px;
  }
  box-sizing: border-box;
  ${media.large`
    span {
      padding-top: 24px;
      padding-bottom: 36px;
    }
  `}
  ${media.small`
    span {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  `}
`;

const Answer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  
  button {
    width: 50%;
    padding: 1.759vh 0.833vw;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 8px;
    border: 2px solid ${(props) => props.theme.Secondary300};
    background-color: ${(props) => props.theme.White};
    color: ${(props) => props.theme.Gray800};
    ${fontSizes.btnTitle2Bold}
  }

  button:hover {
    border: 2px solid ${(props) => props.theme.Secondary300};
    background-color: ${(props) => props.theme.Secondary100};
  }
  button:active {
    border: 2px solid ${(props) => props.theme.Secondary400};
    background-color: ${(props) => props.theme.Secondary200};
  }

  margin-bottom: 4.63vh;
  ${media.small`
    margin-bottom: 3.333vh;
  `}
`;

const QuizNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .quizIconBtn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .currentNum {
    margin-left: 28px;
    color: ${(props) => props.theme.Gray700};
    ${fontSizes.bdCaption1Medium}
  }
  .allNum {
    margin-right: 28px;
    color: ${(props) => props.theme.Gray500};
    ${fontSizes.bdCaption1Medium}
  }
`;