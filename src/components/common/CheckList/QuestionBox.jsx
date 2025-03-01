import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import media from '../../../styles/media';
import { fontSizes } from "../../../styles/FontSizes";
import { useBtnInteraction } from '../../../hooks/useBtnInteraction';
import { Tooltip } from "react-tooltip";

const QuestionBox = ({title, answer, setAnswer, categoryId, questionId, description}) => {
  const [yesRef, isYesHover] = useBtnInteraction(); // 예 버튼
  const [noRef, isNoHover] = useBtnInteraction(); // 아니오 버튼
  const [questionRef, isQHover] = useBtnInteraction();  // 물음표 아이콘
  const [isQClick, setIsQClick] = useState(false);  // 물음표 아이콘 클릭 여부
  const tooltipRef = useRef(null);

  // 답변 업데이트
  const handleAnswer = (newAnswer) => {
    setAnswer(categoryId, questionId, newAnswer);
  };

  // 툴팁 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.targer !== tooltipRef.current
         && questionRef.current && !questionRef.current.contains(event.target)) {
        setIsQClick(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Main>
      <QuestionContainer>
        <span className='title'>{title}</span>
        {description &&
          <>
            <div
              ref={questionRef}
              onClick={() => setIsQClick(!isQClick)}
              data-tooltip-id={`${categoryId}-${questionId}`}
            >
              {isQClick ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM13 13.355C13.8037 13.1128 14.4936 12.59 14.9442 11.8817C15.3947 11.1735 15.5759 10.3271 15.4547 9.49647C15.3336 8.66588 14.9181 7.90644 14.284 7.35646C13.6499 6.80647 12.8394 6.50254 12 6.5C11.1909 6.49994 10.4067 6.78015 9.78079 7.29299C9.15492 7.80583 8.72601 8.51963 8.567 9.313L10.529 9.706C10.5847 9.42743 10.7183 9.1704 10.9144 8.96482C11.1104 8.75923 11.3608 8.61354 11.6364 8.54471C11.912 8.47587 12.2015 8.48671 12.4712 8.57597C12.7409 8.66523 12.9797 8.82924 13.1598 9.04891C13.34 9.26858 13.454 9.53489 13.4887 9.81684C13.5234 10.0988 13.4773 10.3848 13.3558 10.6416C13.2343 10.8984 13.0423 11.1154 12.8023 11.2673C12.5623 11.4193 12.2841 11.5 12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V14H13V13.355Z" fill="#3E4042"/>
                </svg>
              :
                isQHover ? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM13 13.355C13.8037 13.1128 14.4936 12.59 14.9442 11.8817C15.3947 11.1735 15.5759 10.3271 15.4547 9.49647C15.3336 8.66588 14.9181 7.90644 14.284 7.35646C13.6499 6.80647 12.8394 6.50254 12 6.5C11.1909 6.49994 10.4067 6.78015 9.78079 7.29299C9.15492 7.80583 8.72601 8.51963 8.567 9.313L10.529 9.706C10.5847 9.42743 10.7183 9.1704 10.9144 8.96482C11.1104 8.75923 11.3608 8.61354 11.6364 8.54471C11.912 8.47587 12.2015 8.48671 12.4712 8.57597C12.7409 8.66523 12.9797 8.82924 13.1598 9.04891C13.34 9.26858 13.454 9.53489 13.4887 9.81684C13.5234 10.0988 13.4773 10.3848 13.3558 10.6416C13.2343 10.8984 13.0423 11.1154 12.8023 11.2673C12.5623 11.4193 12.2841 11.5 12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V14H13V13.355Z" fill="#8A8C8E"/>
                  </svg>
                :
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M12 22.5C6.477 22.5 2 18.023 2 12.5C2 6.977 6.477 2.5 12 2.5C17.523 2.5 22 6.977 22 12.5C22 18.023 17.523 22.5 12 22.5ZM12 20.5C14.1217 20.5 16.1566 19.6571 17.6569 18.1569C19.1571 16.6566 20 14.6217 20 12.5C20 10.3783 19.1571 8.34344 17.6569 6.84315C16.1566 5.34285 14.1217 4.5 12 4.5C9.87827 4.5 7.84344 5.34285 6.34315 6.84315C4.84285 8.34344 4 10.3783 4 12.5C4 14.6217 4.84285 16.6566 6.34315 18.1569C7.84344 19.6571 9.87827 20.5 12 20.5ZM11 15.5H13V17.5H11V15.5ZM13 13.855V14.5H11V13C11 12.7348 11.1054 12.4804 11.2929 12.2929C11.4804 12.1054 11.7348 12 12 12C12.2841 12 12.5623 11.9193 12.8023 11.7673C13.0423 11.6154 13.2343 11.3984 13.3558 11.1416C13.4773 10.8848 13.5234 10.5988 13.4887 10.3168C13.454 10.0349 13.34 9.76858 13.1598 9.54891C12.9797 9.32924 12.7409 9.16523 12.4712 9.07597C12.2015 8.98671 11.912 8.97587 11.6364 9.04471C11.3608 9.11354 11.1104 9.25923 10.9144 9.46482C10.7183 9.6704 10.5847 9.92743 10.529 10.206L8.567 9.813C8.68863 9.20508 8.96951 8.64037 9.38092 8.17659C9.79233 7.7128 10.3195 7.36658 10.9086 7.17332C11.4977 6.98006 12.1275 6.94669 12.7337 7.07661C13.3399 7.20654 13.9007 7.49511 14.3588 7.91282C14.8169 8.33054 15.1559 8.86241 15.3411 9.45406C15.5263 10.0457 15.5511 10.6759 15.4129 11.2803C15.2747 11.8847 14.9785 12.4415 14.5545 12.8939C14.1306 13.3462 13.5941 13.6779 13 13.855Z" fill="#8A8C8E"/>
                  </svg>
              }
            </div>
            <Tooltip
              ref={tooltipRef}
              id={`${categoryId}-${questionId}`}
              place='bottom-start'
              arrowColor='transparent'
              isOpen={isQClick}
              style={{backgroundColor:'transparent', margin: '0', padding: '0'}}
            >
              <TooltipContainer>
                {description.map((des) => (
                  <DescriptionContainer key={des.id}>
                    <div className='terminology'>{des.terminology}</div>
                    <div className='description'>{des.description}</div>
                  </DescriptionContainer>
                ))}
              </TooltipContainer>
            </Tooltip>
          </>
        }
      </QuestionContainer>
      <ButtonContainer>
        <Button 
          ref={yesRef}
          $isHover={isYesHover}
          $answer={answer}
          value='yes'
          onClick={() => handleAnswer('yes')}
        >
          {answer === 'yes' ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M12 22.5C6.477 22.5 2 18.023 2 12.5C2 6.977 6.477 2.5 12 2.5C17.523 2.5 22 6.977 22 12.5C22 18.023 17.523 22.5 12 22.5ZM11.003 16.5L18.073 9.429L16.659 8.015L11.003 13.672L8.174 10.843L6.76 12.257L11.003 16.5Z" fill="#293256"/>
            </svg> 
          :
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M12.5 22.5C6.977 22.5 2.5 18.023 2.5 12.5C2.5 6.977 6.977 2.5 12.5 2.5C18.023 2.5 22.5 6.977 22.5 12.5C22.5 18.023 18.023 22.5 12.5 22.5ZM12.5 20.5C14.6217 20.5 16.6566 19.6571 18.1569 18.1569C19.6571 16.6566 20.5 14.6217 20.5 12.5C20.5 10.3783 19.6571 8.34344 18.1569 6.84315C16.6566 5.34285 14.6217 4.5 12.5 4.5C10.3783 4.5 8.34344 5.34285 6.84315 6.84315C5.34285 8.34344 4.5 10.3783 4.5 12.5C4.5 14.6217 5.34285 16.6566 6.84315 18.1569C8.34344 19.6571 10.3783 20.5 12.5 20.5ZM11.503 16.5L7.26 12.257L8.674 10.843L11.503 13.672L17.159 8.015L18.574 9.429L11.503 16.5Z" fill="#293256"/>
            </svg>
          }
          <span>예</span>
        </Button>
        <Button
          ref={noRef}
          $isHover={isNoHover}
          $answer={answer}
          value='no'
          onClick={() => handleAnswer('no')}
        >
          {answer === 'no' ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M12 22.5C6.477 22.5 2 18.023 2 12.5C2 6.977 6.477 2.5 12 2.5C17.523 2.5 22 6.977 22 12.5C22 18.023 17.523 22.5 12 22.5ZM11.003 16.5L18.073 9.429L16.659 8.015L11.003 13.672L8.174 10.843L6.76 12.257L11.003 16.5Z" fill="#293256"/>
            </svg> 
          :
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <path d="M12.5 22.5C6.977 22.5 2.5 18.023 2.5 12.5C2.5 6.977 6.977 2.5 12.5 2.5C18.023 2.5 22.5 6.977 22.5 12.5C22.5 18.023 18.023 22.5 12.5 22.5ZM12.5 20.5C14.6217 20.5 16.6566 19.6571 18.1569 18.1569C19.6571 16.6566 20.5 14.6217 20.5 12.5C20.5 10.3783 19.6571 8.34344 18.1569 6.84315C16.6566 5.34285 14.6217 4.5 12.5 4.5C10.3783 4.5 8.34344 5.34285 6.84315 6.84315C5.34285 8.34344 4.5 10.3783 4.5 12.5C4.5 14.6217 5.34285 16.6566 6.84315 18.1569C8.34344 19.6571 10.3783 20.5 12.5 20.5ZM11.503 16.5L7.26 12.257L8.674 10.843L11.503 13.672L17.159 8.015L18.574 9.429L11.503 16.5Z" fill="#293256"/>
            </svg>
          }
          <span>아니오</span>
        </Button>
      </ButtonContainer>
    </Main>
  );
}

export default QuestionBox;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 2.222vh 1.25vw;
  border-radius: 8px;
  background: ${(props) => props.theme.Gray100};

  ${media.small`
    flex-direction: column;
    gap: 12px;
    padding: 2.222vh 4vw;
  `}
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-grow: 1;
  gap: 0.417vw;

  .title {
    ${fontSizes.body2Medium};
    color: ${(props) => props.theme.Black};
  }

  svg {
    cursor: pointer;
  }

  ${media.small`
    width: 100%;
    align-items: start;
  `}
  
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.25vw;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* width: 7.031vw; */
  width: 135px;
  padding: 1.111vh 0.833vw;
  gap: 0.417vw;
  border-radius: 800px;
  border: 2px solid var(--Secondary, #293256);
  ${fontSizes.btnTitle1Bold};
  color: ${(props) => props.theme.Secondary};
  background-color: ${(props) => props.$answer === props.value ? props.theme.Secondary300 : props.$isHover ? props.theme.Secondary100 : 'transparent'};
`;

const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.222vh 1.25vw;
  gap: 2.963vh;
  align-self: stretch;
  border-radius: 8px;
  background: ${(props) => props.theme.White};
  box-shadow: 0px 0px 16px 0px ${(props) => props.theme.Gray600};
  width: 500px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.481vh;

  .terminology {
    ${fontSizes.titleHead3Bold};
    color: ${(props) => props.theme.Black};
  }

  .description {
    ${fontSizes.body3Regular};
    color: ${(props) => props.theme.Black};
  }
`;