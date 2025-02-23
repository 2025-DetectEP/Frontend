import React from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from '../../styles/FontSizes';

export default function Footer() {
  return (
    <FooterContainer>
      <TermsAndPrivacyContainer>
        <span>필수 약관</span>
        <span>개인정보처리방침</span>
      </TermsAndPrivacyContainer>
      <h1>Pribee</h1>
      <BrandingContainer>
        <span>SNS 개인정보 탐지 보조 서비스<br/>2025.03</span>
        <span>Team Olibees</span>
      </BrandingContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  /* width: 100vw; */
  padding: 2.963vh 12.5vw;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: ${(props) => props.theme.Secondary};
`;

const TermsAndPrivacyContainer = styled.div`
  display: flex;
  gap: 74px;
  ${fontSizes.bdCaption2Light};
  color: ${(props) => props.theme.Gray200};
`;

const BrandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.222vh;
  ${fontSizes.bdCaption2Light};
  color: ${(props) => props.theme.Gray400};
`;