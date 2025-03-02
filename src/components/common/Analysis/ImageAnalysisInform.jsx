import React, { useEffect, useState } from 'react';
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import '../../../App.css';
import { fontSizes } from "../../../styles/FontSizes";
import Tag from './Tag';

const ImageAnalysisInform = ({isImgAnalysis}) => {
  return (
    <Main $isImgAnalysis={isImgAnalysis}>
      {isImgAnalysis ?
        <FindContainer>
          <span className='title'>사진에서 발견된 정보</span>
          <TagContainer>
            <Tag />
            <Tag />
          </TagContainer>
          <Content>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores temporibus voluptates omnis est! Perspiciatis soluta odit nemo asperiores totam iste delectus praesentium, atque, dolore dolor dolorem dolores reprehenderit cupiditate illum. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores temporibus voluptates omnis est! Perspiciatis soluta odit nemo asperiores totam iste delectus praesentium, atque, dolore dolor dolorem dolores reprehenderit cupiditate illum. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores temporibus voluptates omnis est! Perspiciatis soluta odit nemo asperiores totam iste delectus praesentium, atque, dolore dolor dolorem dolores reprehenderit cupiditate illum. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores temporibus voluptates omnis est! Perspiciatis soluta odit nemo asperiores totam iste delectus praesentium, atque, dolore dolor dolorem dolores reprehenderit cupiditate illum. 
          </Content>
        </FindContainer>
      :
        <NotFindContainer>
          <span className='noTitle'>전체 사진에 개인정보가 발견되지 않았어요!</span>
        </NotFindContainer>
      }
    </Main>
  );
}

export default ImageAnalysisInform;

const Main = styled.div`
  z-index: 10;
  border-radius: 8px;
  background: ${(props) => props.$isImgAnalysis ? 'rgba(255, 255, 255, 0.90)' : 'rgba(255, 249, 229, 0.90)'};
  box-shadow: 0px 0px 16px 0px #666868;
  position: absolute;
  left: 0;
  top: 0;
  margin: 2.963vh 1.667vw;
  padding: 2.963vh 1.667vw;
  width: calc(100% - 1.667vw - 1.667vw);

  @media only screen and (max-width: 1024px) { //700px
    /* margin: 1.481vh 2.667vw;
    padding: 2.222vh 4vw;
    width: calc(100% - 1.481vh - 1.481vh); */
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
  }
  
  .title {
    ${fontSizes.titleHead3Bold};
    color: ${(props) => props.theme.Black};
  }

  .noTitle {
    ${fontSizes.body3Regular};
    color: ${(props) => props.theme.Black};
  }
`;

const FindContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 1.481vh;
`;

const NotFindContainer = styled.div`
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
  min-height: 3vh;
  overflow-y: auto;
`;