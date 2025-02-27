import React, { useEffect, useState } from 'react';
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import '../../../App.css';
import { fontSizes } from "../../../styles/FontSizes";
import Tag from './Tag';

const TextTooltip = ({ text, errorWords }) => {
  return (
    <div>
      {/* 문장을 단어별로 나누고, 수정해야 할 단어만 툴팁 추가 */}
      {text.split(" ").map((word, index) =>
        errorWords.includes(word) ? (
          <TextContainer
            key={index}
            data-tooltip-id={`tooltip-${index}`}
          >
            {word}
            <Tooltip 
              id={`tooltip-${index}`}
              place='bottom-start'
              arrowColor='transparent'
              aria-haspopup='true'
              style={{backgroundColor:'transparent', margin: '0', padding: '0'}}
            >
              <TooltipContainer>
                <span className='title'>텍스트에서 발견된 개인정보</span>
                <TagContainer>
                  <Tag />
                  <Tag />
                  <Tag />
                  <Tag />
                  <Tag />
                  <Tag />
                  <Tag />
                </TagContainer>
                <Content>
                  {word}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, maiores placeat alias omnis at sint temporibus eaque non iure aperiam sit aliquam iusto ipsa quibusdam expedita debitis? Assumenda, nihil porro.
                </Content>
              </TooltipContainer>
            </Tooltip>
          </TextContainer>
        ) : (
          <span key={index} style={{ margin: "0 3px" }}>
            {word}
          </span>
        )
      )}
    </div>
  );
};

export default TextTooltip;

const TextContainer = styled.span`
  cursor: pointer;
  background-color: ${(props) => props.theme.Warning100};
  text-decoration: underline;
  text-decoration-color: ${(props) => props.theme.Warning};
  margin: 0 3px;
`;

const TooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.90);
  box-shadow: 0px 0px 16px 0px #666868;
  padding: 2.963vh 1.667vw;
  width: 22.083vw;
  
  @media only screen and (max-width: 1024px) { //700px
    padding: 2.222vh 4vw;
    width: 60.667vw;
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
`;