import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
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

  const [quizIsCorrect, setQuizIsCorrect] = useState([0, 0, 0]);  // 퀴즈 맞췄는지 여부 (0: 선택X, 1: 정답, 2: 틀림)
  const [currentIndex, setCurrentIndex] = useState(0);  // 퀴즈 현재 인덱스값
  const [quizData, setQuizData] = useState([]);

  const host = window.location.hostname === "localhost" 
  ? `${process.env.REACT_APP_API_URL}/quiz/`
  : "api";

  // 퀴즈 API - 랜덤 퀴즈 3개 추출
  const getQuiz = async() => {
    try {
      let response = await axios.get(host, {
        headers: { 
          "accept": "application/json",
        }
      })
      if (response.data?.code === 200) { // 퀴즈 추출 완료
        console.log(response.data?.code, ': ', response.data?.message);
        setQuizData(response.data?.data);
      } else { // 퀴즈 추출 실패
        console.log(response.data?.code, ': ', response.data?.message);
      }
    } catch (error) { // API 에러 발생
        console.error('로그아웃 API 에러 발생: ', error);
    }
  }

  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) return;
    didMount.current = true;
    getQuiz();
  }, []);
  
  const handleNextSlide = () => { // 다음 퀴즈 버튼
    if(currentIndex < quizData.length - 1) setCurrentIndex(prev => prev + 1);
  };

  const handlePrevSlide = () => { // 이전 퀴즈 버튼
    if(currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleSelectBtn = async(selectIsOne, answerIsOne, index, id) => {  // 퀴즈 선택지 버튼
    setQuizIsCorrect(prevState => {
      const newState = [...prevState];
      newState[index] = selectIsOne === answerIsOne ? 1 : 2;  // 정답 맞춤:1, 정답 틀림: 2

      postQuiz(newState[index], id);
      return newState;
    })
  };

  // 정답을 서버로 보기(오답률 반영을 위해)
  const postQuiz = async(quizIsCorrect, id) => {
    const isCorrect = quizIsCorrect === 1 ? true : false;

    try {
      let response = await axios.post(`${process.env.REACT_APP_API_URL}/quiz/`, {
        "quizAnswerReqs": [
          {
            "id": id,
            "isCorrect": isCorrect
          }
        ]
      })
      if (response.data?.code === 200) { // 정답률 처리 완료
        console.log(response.data?.code, ': ', response.data?.message);
      } else { // 정답률 처리 실패
        console.log(response.data?.code, ': ', response.data?.message);
      }
    } catch (error) { // API 에러 발생
        console.error('정답률 처리 API 에러 발생: ', error);
    }
  }

  return (
    <Main>
      <span>개인정보 퀴즈</span>
      {quizData?.length > 0 && quizData[currentIndex] && (
        quizIsCorrect[currentIndex] === 0 ? (
          <Quiz key={currentIndex}>
            <span>{quizData[currentIndex]?.question}</span>
            <Answer>
              <button onClick={() => handleSelectBtn(true, quizData[currentIndex].answerIsOne, currentIndex, quizData[currentIndex].id)}>{quizData[currentIndex]?.answer1}</button>
              <button onClick={() => handleSelectBtn(false, quizData[currentIndex].answerIsOne, currentIndex, quizData[currentIndex].id)}>{quizData[currentIndex]?.answer2}</button>
            </Answer>
          </Quiz>
          ) : (
          <QuizAnswer key={currentIndex}>
            {quizIsCorrect[currentIndex] === 1 && <span className='correct'>정답입니다</span>}
            {quizIsCorrect[currentIndex] === 2 && <span className='wrong'>오답입니다</span>}
            <div className='rate'>오답률 {quizData[currentIndex]?.wrongPortion}%</div>
            <div className='description'>{quizData[currentIndex]?.reason}</div>
          </QuizAnswer>
        )
      )}
      <QuizNavigation $currentIndex={currentIndex}>
        <span
          className='quizIconBtn quizIconLeft' 
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
        <span className="currentNum">{currentIndex+1}</span><span className="allNum">&nbsp;/ {quizData.length}</span>
        <span 
          className='quizIconBtn quizIconRight' 
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
  .quizIconLeft {
    visibility: ${(props) => props.$currentIndex !== 0 ? 'visible' : 'hidden'};
  }
  .quizIconRight{
    visibility: ${(props) => props.$currentIndex !== 2 ? 'visible' : 'hidden'};
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