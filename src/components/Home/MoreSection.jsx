import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";
import { ReactComponent as IconLink } from '../../assets/icons/icon_arrow_right_up_line.svg'

export default function MoreSection() {
  return (
    <MoreContainer>
      <span className='title'>더 알아보기</span>
      <div>
        <MoreBtn onClick={() => window.open("https://www.privacy.go.kr/front/contents/cntntsView.do?contsNo=27")}>
          <span>개인정보란?</span>
          <IconLink />
        </MoreBtn>
        <DashedLine/>
        <MoreBtn onClick={() => window.open("https://edu.privacy.go.kr/")}>
          <span>개인정보 배움터</span>
          <IconLink />
        </MoreBtn>
        <DashedLine/>
        <MoreBtn onClick={() => window.open("https://blog.google/intl/ko-kr/company-news/technology/safer-internet-day/")}>
          <span>구글 사이버 보안 가이드</span>
          <IconLink />
        </MoreBtn>
      </div>
    </MoreContainer>
  );
}

const MoreContainer = styled.div`
  margin-top: 32px;
  ${media.small`
    margin-top: 24px;
  `}

  .title {
    ${fontSizes.titleHead3Bold};
    color: ${(props) => props.theme.Black};
  }

  div {
    margin-top: 2.222vh;
  }
`;

const MoreBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.963vh 1.667vw;
  gap: 16px;
  border-radius: 8px;

  ${media.small`
    padding: 2.963vh 4vw;
  `}

  &:hover {
    background-color: ${(props) => props.theme.Gray100};
  }
  &:active {
    background-color: ${(props) => props.theme.Gray200};
  }

  span {
    ${fontSizes.btnTitle1Bold};
    color: ${(props) => props.theme.Gray800};
  }
`;

const DashedLine = styled.div`
  border-bottom: 1px dashed #8A8C8E;
  margin-top: 12px;
  margin-bottom: 12px;
`;