import React, { useEffect, useState } from 'react';
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import '../../../App.css';
import { fontSizes } from "../../../styles/FontSizes";
import Tag from './Tag';

const ImageAnalysisInform = () => {
  return (
    <Main>
      <span className='title'>사진에서 발견된 정보</span>
      <TagContainer>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </TagContainer>
      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum maxime, cupiditate omnis reiciendis assumenda quibusdam sint iure laboriosam natus saepe dignissimos, illum perspiciatis cum, nihil nisi at quo. Voluptas.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eum maxime, cupiditate omnis reiciendis assumenda quibusdam sint iure laboriosam natus saepe dignissimos, illum perspiciatis cum, nihil nisi at quo. Voluptas.
      </Content>
    </Main>
  );
}

export default ImageAnalysisInform;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.481vh;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.90);
  box-shadow: 0px 0px 16px 0px #666868;
  position: absolute;
  left: 0;
  top: 0;
  margin: 2.963vh 1.667vw;
  padding: 2.963vh 1.667vw;

  @media only screen and (max-width: 1024px) { //700px
    margin: 2.667vw 1.481vh;
    padding: 2.222vh 4vw;
  }
  
  .title {
    ${fontSizes.titleHead3Bold};
    color: ${(props) => props.theme.Black};
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Content = styled.div`
  ${fontSizes.body3Regular};
  color: ${(props) => props.theme.Black};
  max-height: 9.259vh;
  overflow-y: auto;
`;