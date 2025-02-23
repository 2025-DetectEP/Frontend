import React from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";
import DegreeGood from './DangerDegree/DegreeGood';
import DegreeSoso from './DangerDegree/DegreeSoso';
import DegreeWarning from './DangerDegree/DegreeWarning';
import IconInsta from './IconInsta';

export default function PostAnalysisSection1({isPost, postCount, analysisCount, dangerDegree}) {
  return (
    <Main>
      <TitleContainer>
        <AccountContainer>
          <span>분석한 계정</span>
          <span className='instaIcon'>
            <IconInsta />
          </span>
          <span>ID</span>
        </AccountContainer>
        <InfoContainer $count={analysisCount}>
          {isPost ? 
            <span>전체 게시물 {postCount}개 중<br />
            개인정보가 포함된 게시물이&nbsp;
            <br className='lineBreak'/>
            <span className='analysisCount'>{analysisCount}개</span> 발견되었어요.</span>
          : 
            <span>해당 계정에<br />게시물이 존재하지 않아요.</span>
          }
        </InfoContainer>
      </TitleContainer>
      <DangerInformContainer>
        {isPost && (
          <>
            {dangerDegree === 1 && <DegreeGood />}
            {dangerDegree === 2 && <DegreeSoso />}
            {dangerDegree === 3 && <DegreeWarning />}
          </>
        )}
      </DangerInformContainer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 7.407vh;
  padding-bottom: 7.407vh;

  ${media.small`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 5.556vh;
    padding-bottom: 5.556vh;
  `}
`;

const TitleContainer = styled.div`
  
`;

const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  span {
    ${fontSizes.body2Medium};
    color: ${(props) => props.theme.Gray700};
    text-align: center;
  }

  .instaIcon {
    padding-left: 16px;
    padding-right: 8px;
    display: flex;
    align-items: center;
  }
`;

const InfoContainer = styled.div`
  ${fontSizes.titleHead2Medium};
  color: ${(props) => props.theme.Black};

  .lineBreak {
    display: none;
    ${media.small`
      display: block;
    `}
  }

  .analysisCount {
    color: ${(props) => props.$count > 0 ? props.theme.Warning : props.theme.Gray700};
  }
`;

const DangerInformContainer = styled.div`
  display: flex;
  align-items: center;
  ${media.small`
    margin-top: 16px;
  `}
`;
