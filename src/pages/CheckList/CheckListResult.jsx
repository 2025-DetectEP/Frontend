import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from "./CheckListResultStyled";
import theme from '../../styles/theme';
import { useAuth } from '../../context/AuthContext';
import { checkListData } from '../../constants/checkListData';

export default function CheckListResult() {
  const { state } = useLocation();
  if(!state) return <p>결과 없음</p>
  
  const allScore = state.allScore || 0;
  const categoryScore = state.categoryScore || [];
  console.log('allScore: ', allScore)
  console.log('categoryScore: ', categoryScore)

  return (
    <>
    </>
  );
}