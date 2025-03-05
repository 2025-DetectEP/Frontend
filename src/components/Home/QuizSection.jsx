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
  
  const [quiz, setQuiz] = useState([
    {id: 1, question: '질문1', select1: '선택11', select2: '선택12', answer: '선택11', description: '설명1', rate: '51%', isCorrect: 0},
    {id: 2, question: '질문2 질문2질문2질문2질문 2질문2질문2 질문2질문2질문2 질문2질문2질문2 질문2질문2질문2', select1: '선택21', select2: '선택22', answer: '선택22', description: '설명2', rate: '52%', isCorrect: 0},
    {id: 3, question: '질문3', select1: '선택31', select2: '선택32', answer: '선택32', description: '설명3', rate: '53%', isCorrect: 0},
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);  // 퀴즈 현재 인덱스값
  const length = quiz.length; // 퀴즈 개수
  
  const handleNextSlide = () => { // 다음 퀴즈 버튼
    console.log("다음")
    if(currentIndex < length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrevSlide = () => { // 이전 퀴즈 버튼
    console.log("이전")
    if(currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleSelectBtn = (select, answer, index) => {  // 퀴즈 선택지 버튼
    setQuiz((prevQuiz) =>
      prevQuiz.map((item, i) =>
        i === index
          ? { ...item, isCorrect: select === answer ? 1 : 2 }
          : item
      )
    );
    // 정답을 서버로 보낼 예정(오답 비율을 위해)
  }

  return (
    <Main>
      <span>오늘의 개인정보 퀴즈</span>
      {quiz.map((data, index) => 
        index === currentIndex && (
          data.isCorrect === 0 ?
            <Quiz key={index}>
              <span>{data.question}</span>
              <Answer>
                <button onClick={() => handleSelectBtn(data.select1, data.answer, index)}>{data.select1}</button>
                <button onClick={() => handleSelectBtn(data.select2, data.answer, index)}>{data.select2}</button>
              </Answer>
            </Quiz>
            :
            <QuizAnswer key={index}>
              {data.isCorrect === 1 && <span className='correct'>정답입니다</span>}
              {data.isCorrect === 2 && <span className='wrong'>오답입니다</span>}
              <div className='rate'>오답률 {data.rate}</div>
              <div className='description'>{data.description}</div>
            </QuizAnswer>
        )
      )}
      <QuizNavigation>
        <span
          className='quizIconBtn' 
          onMouseEnter={() => setIsQuizLeftHovered(true)}
          onMouseLeave={() => setIsQuizLeftHovered(false)}
          onMouseDown={() => setIsQuizLeftPressed(true)}
          onMouseUp={() => {setIsQuizLeftPressed(false); handlePrevSlide();}}
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
        <span className="currentNum">{currentIndex+1}</span><span className="allNum">&nbsp;/ {length}</span>
        <span 
          className='quizIconBtn' 
          onMouseEnter={() => setIsQuizRightHovered(true)}
          onMouseLeave={() => setIsQuizRightHovered(false)}
          onMouseDown={() => setIsQuizRightPressed(true)}
          onMouseUp={() => {setIsQuizRightPressed(false); handleNextSlide();}}
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
  ${media.small`
    span {
      padding-top: 16px;
      padding-bottom: 16px;
    }
    height: 264px;
  `}
`;

const QuizAnswer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  flex-grow: 1;
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 36px;

  ${media.small`
    padding-top: 16px;
    padding-bottom: 16px;
    height: 264px;
  `}

  .correct {
    ${fontSizes.body1Bold}
    color: ${(props) => props.theme.Secondary};
    text-align: center;
    align-self: stretch;
  }

  .wrong {
    ${fontSizes.body1Bold}
    color: ${(props) => props.theme.Warning};
    text-align: center;
    align-self: stretch;
  }
  
  .rate {
    display: flex;
    padding: 4px 8px;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: ${(props) => props.theme.Gray100};
    ${fontSizes.bdCaption1Medium}
    color: ${(props) => props.theme.Secondary};
    margin-top: 8px;
    margin-bottom: 2.963vh;
  }

  .description {
    ${fontSizes.body2Medium}
    color: ${(props) => props.theme.Gray700};
    text-align: center;
    align-self: stretch;
  }
`;

const Answer = styled.div`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
  
  button {
    /* width: 50%; */
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
    display: flex;
    flex-direction: column;
    align-self: stretch;
    width: 100%;
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