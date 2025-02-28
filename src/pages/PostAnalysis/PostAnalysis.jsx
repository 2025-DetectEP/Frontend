import React, { useContext, useEffect, useState } from 'react';
import * as S from "./PostAnalysisStyled";
import theme from '../../styles/theme';
import PostAnalysisSection1 from '../../components/PostAnalysis/PostAnalysisSection1';
import PostAnalysisSection2 from '../../components/PostAnalysis/PostAnalysisSection2';

export default function PostAnalysis() {
  const [isPost, setIsPost] = useState(true);  // 게시물 존재 여부
  const [postCount, setPostCount] = useState(112);   // 게시물 개수
  const [analysisCount, setAnalysisCount] = useState(20);   // 개인정보 포함된 게시물 개수
  const [dangerDegree, setDangerDegree] = useState(1) ;  // 1:낮음, 2:보통, 3:높음 (섹션1에 사용)

  return (
    <S.Main>
      <S.Section1>
        <PostAnalysisSection1 
          isPost={isPost}
          postCount={postCount}
          analysisCount={analysisCount}
          dangerDegree={dangerDegree}
        />
      </S.Section1>

      <S.Section2>
        <PostAnalysisSection2 
          isPost={isPost}
          postCount={postCount}
          analysisCount={analysisCount}
        />
      </S.Section2>
    </S.Main>
  );
}