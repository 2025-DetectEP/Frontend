import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "./CheckListResultStyled";
import theme from '../../styles/theme';
import { useAuth } from '../../context/AuthContext';
import { checkListData } from '../../constants/checkListData';

export default function CheckListResult() {
  const { state } = useLocation();
  if(!state) return <p>결과 없음</p>
  
  const totalScore = state.totalScore || 0;
  const categoryScore = state.categoryScore || [];
  console.log('totalScore: ', totalScore)
  console.log('categoryScore: ', categoryScore)

  return (
    <S.Main>
      <S.Section1>
        <div className='total'>점검 결과 {totalScore}점 입니다.</div>
        <div className='sub'>항상 100점이 나올 수 있도록 개인정보를 관리해 보세요!</div>
      </S.Section1>

      <S.Section2>

      </S.Section2>
    </S.Main>
  );
}