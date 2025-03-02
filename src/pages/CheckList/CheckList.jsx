import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./CheckListStyled";
import theme from '../../styles/theme';
import { useAuth } from '../../context/AuthContext';
import { checkListData } from '../../constants/checkListData';
import QuestionBox from '../../components/common/CheckList/QuestionBox';
import Button1_5 from '../../components/common/Buttons/Button1_5';

export default function CheckList() {
  const navigate = useNavigate();

  // 대답 'none'으로 초기화
  const initalizeAnswers = () => {
    const answers = {};
    checkListData.forEach((category) => {
      category.questions.forEach((question) => {
        answers[`${category.id}-${question.id}`] = 'none';
      });
    });
    return answers;
  };

  const [answers, setAnswers] = useState(initalizeAnswers);

  // 대답
  const updateAnswer = (categoryId, questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [`${categoryId}-${questionId}`]: answer,
    }));
  };

  // 모든 문제 풀었으면 결과보기 버튼 활성화
  const [isSolve, setIsSolve] = useState(false);  // 모든 문제 풀었는지 확인

  useEffect(() => {
    const allAnswer = Object.values(answers).every((answer) => answer === 'yes' || answer === 'no');
    setIsSolve(allAnswer);
  }, [answers]);

  // 결과 보기(전에 계산 후 페이지 이동)
  const handleResult = () => {
    const result = {};
    let totalScore = 0;
    const categoryScore = Array(checkListData.length).fill(0);

    checkListData.map(category => {
      category.questions.map(question => {
        const userAnswer = answers[`${category.id}-${question.id}`];

        console.log('userAnswer: ', userAnswer);

         // 정답 비교
        const score = question.answer === userAnswer ? 1 : 0;
        result[`${category.id}-${question.id}`] = score;

        totalScore += score;  // 전체 점수 계산

        categoryScore[Number(category.id) - 1] += score;  // 항목별 점수 계산
      })
    })

    totalScore = Math.ceil((totalScore / 15) * 100);
    categoryScore[0] = (categoryScore[0] / 5) * 100;
    categoryScore[1] = (categoryScore[1] / 5) * 100;
    categoryScore[2] = (categoryScore[2] / 5) * 100;
    navigate('result', {state: {totalScore, categoryScore}});
  };

  return (
    <S.Main>
      <S.Section1>
        <div className='title'>개인정보 관리 체크리스트</div>
        <div className='description'>개인정보 보호 수칙과 SNS 사용 보호 수칙 기반의 체크리스트를 통해 개인정보를 얼마나 안전하게 관리하고 있는지 점검해요.</div>
      </S.Section1>

      <S.Section2>
        {checkListData.map(category => {
          return (
            <S.CheckListContainer key={category.id}>
              <S.CheckListTitle>{category.title}</S.CheckListTitle>
              <div className='line'></div>
              <S.CheckListContent>
                {category.questions.map(question => {
                  return (
                    <QuestionBox
                      key={question.id}
                      title={question.content}
                      answer={answers[`${category.id}-${question.id}`]}
                      setAnswer={updateAnswer}
                      categoryId={category.id}
                      questionId={question.id}
                      description={question.description}
                    />
                  )
                })}
              </S.CheckListContent>
            </S.CheckListContainer>
          )
        })}
        <S.ResultBtn>
          <Button1_5 title='결과 보기' onClick={handleResult} isActive={isSolve} />        
        </S.ResultBtn>
      </S.Section2>
    </S.Main>
  );
}