import React from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';

export default function Footer() {
  return (
    <FooterContainer>
      
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