import React from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";
import DegreeGood from './DangerDegree/DegreeGood';
import DegreeSoso from './DangerDegree/DegreeSoso';
import DegreeWarning from './DangerDegree/DegreeWarning';

export default function PostAnalysisSection1({isPost, postCount, analysisCount, dangerDegree}) {
  return (
    <Main>
      <TitleContainer>
        <AccountContainer>
          <span>분석한 계정</span>
          <span className='instaIcon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.3331 9.99967C18.3331 5.39743 14.6022 1.6665 9.99991 1.6665C5.39767 1.6665 1.66675 5.39743 1.66675 9.99967C1.66675 13.9076 4.35736 17.1869 7.98695 18.0875V12.5463H6.26866V9.99967H7.98695V8.90236C7.98695 6.06608 9.27059 4.75144 12.0552 4.75144C12.5832 4.75144 13.4942 4.85511 13.8668 4.95844V7.26672C13.6702 7.24606 13.3285 7.23573 12.9042 7.23573C11.5379 7.23573 11.0099 7.75338 11.0099 9.09902V9.99967H13.7318L13.2642 12.5463H11.0099V18.2718C15.1361 17.7735 18.3334 14.2603 18.3334 9.99967H18.3331Z" fill="#0866FF"/>
              <path d="M13.2638 12.5463L13.7315 9.99969H11.0095V9.09904C11.0095 7.7534 11.5375 7.23575 12.9038 7.23575C13.3282 7.23575 13.6698 7.24608 13.8665 7.26675V4.95846C13.4938 4.8548 12.5828 4.75146 12.0549 4.75146C9.27025 4.75146 7.98661 6.06611 7.98661 8.90238V9.99969H6.26831V12.5463H7.98661V18.0875C8.63126 18.2475 9.30558 18.3329 9.99957 18.3329C10.3412 18.3329 10.6782 18.3119 11.0092 18.2719V12.5463H13.2635H13.2638Z" fill="white"/>
            </svg>
          </span>
          <span>{localStorage.getItem("userName")}</span>
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
