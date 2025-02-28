import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from "./CheckListStyled";
import theme from '../../styles/theme';
import { useAuth } from '../../context/AuthContext';
import { checkListData } from '../../constants/checkListData';
import QuestionBox from '../../components/common/CheckList/QuestionBox';

export default function Home() {

  return (
    <S.Main>
      <S.Section1>
        <div className='title'>개인정보 관리 체크리스트</div>
        <div className='description'>개인정보 보호 수칙과 SNS 사용 보호 수칙 기반의 체크리스트를 통해 개인정보를 얼마나 안전하게 관리하고 있는지 점검해요.</div>
      </S.Section1>

      <S.Section2>
        {checkListData.map(data => {
          return (
            <S.CheckListContainer key={data.id}>
              <S.CheckListTitle>{data.title}</S.CheckListTitle>
              <div className='line'></div>
              <S.CheckListContent>
                {data.questions.map(d => {
                  return (
                    <QuestionBox key={d.id} title={d.content} />
                  )
                })}
              </S.CheckListContent>
            </S.CheckListContainer>
          )
        })
        }
      </S.Section2>
    </S.Main>
  );
}