import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "./CheckListResultStyled";
import theme from '../../styles/theme';
import { useAuth } from '../../context/AuthContext';
import { checkListData } from '../../constants/checkListData';
import Button1_5 from '../../components/common/Buttons/Button1_5';
import Button1_4 from '../../components/common/Buttons/Button1_4';

export default function CheckListResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  
  const totalScore = state.totalScore || 0;
  const categoryScore = state.categoryScore || [0, 0, 0];
  console.log('totalScore: ', totalScore)
  console.log('categoryScore: ', categoryScore)
  
  return (
    <S.Main>
      <S.Section1>
        <div className='total'>점검 결과 {totalScore}점 입니다.</div>
        <div className='sub'>항상 100점이 나올 수 있도록 개인정보를 관리해 보세요!</div>
      </S.Section1>

      <S.Section2>
        <S.Title>
          <div className='title'>파트별 개인정보 보호 정도</div>
          <div className='sub'>그래프가 ‘높음’에 가까울수록 개인정보를 잘 보호하고 있다는 의미입니다.</div>
        </S.Title>
        <S.ResultContainer>
          <S.Result>
            <span className='graphTitle'>가입/계정 관련</span>
            <S.GraphContainer>
              <span className='label'>낮음</span>
              <S.Graph $percent={categoryScore[0]}>
                <div className='value'></div>  
                <div className='total'></div>  
              </S.Graph>
              <span className='label'>높음</span>
            </S.GraphContainer>
          </S.Result>
          <S.Result>
            <span className='graphTitle'>게시물 업로드 관련</span>
            <S.GraphContainer>
              <span className='label'>낮음</span>
              <S.Graph $percent={categoryScore[1]}>
                <div className='value'></div>  
                <div className='total'></div>  
              </S.Graph>
              <span className='label'>높음</span>
            </S.GraphContainer>
          </S.Result>
          <S.Result>
            <span className='graphTitle'>기타 개인정보 보호 관련</span>
            <S.GraphContainer>
              <span className='label'>낮음</span>
              <S.Graph $percent={categoryScore[2]}>
                <div className='value'></div>  
                <div className='total'></div>  
              </S.Graph>
              <span className='label'>높음</span>
            </S.GraphContainer>
          </S.Result>
        </S.ResultContainer>

        <S.ButtonContainer>
          <Button1_5 title='다시 하기' onClick={() => navigate('/check-list')} isActive={true} />
          <Button1_4 title='메인으로' onClick={() => navigate('/')} />
        </S.ButtonContainer>
      </S.Section2>
    </S.Main>
  );
}