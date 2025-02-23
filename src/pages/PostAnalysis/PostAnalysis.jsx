import React, { useContext, useEffect, useState } from 'react';
import * as S from "./PostAnalysisStyled";
import theme from '../../styles/theme';
import PostAnalysisSection1 from '../../components/PostAnalysis/PostAnalysisSection1';

export default function PostAnalysis() {
  return (
    <S.Main>
      <S.Section1>
        <PostAnalysisSection1 />
      </S.Section1>

      <S.Section2>

      </S.Section2>
    </S.Main>
  );
}