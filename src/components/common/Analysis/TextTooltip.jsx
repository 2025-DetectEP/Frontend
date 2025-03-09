import React from 'react';
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import '../../../App.css';
import { fontSizes } from "../../../styles/FontSizes";
import Tag from './Tag';

const TextTooltip = ({ text, detectMessageKeywords }) => {

  if (!detectMessageKeywords || detectMessageKeywords.length === 0) {
    return <span>{text}</span>; // 감지된 단어가 없으면 그냥 텍스트 출력
  }
  const highlightedText = [];
  let lastIndex = 0;

  detectMessageKeywords.forEach((data, index) => {
    // detectWord가 나오기 전까지의 일반 텍스트 추가
    highlightedText.push(
      <span key={`text-${index}`}>{text.slice(lastIndex, data.startAt)}</span>
    );

    // detectWord 부분을 Tooltip으로 감싸서 추가
    highlightedText.push(
      <TextContainer key={`tooltip-${index}`} data-tooltip-id={`tooltip-${index}`}>
        {text.slice(data.startAt, data.endAt)}
        <Tooltip
          id={`tooltip-${index}`}
          place="bottom-start"
          arrowColor="transparent"
          aria-haspopup="true"
          style={{ backgroundColor: "transparent", margin: "0", padding: "0" }}
        >
          <TooltipContainer>
            <span className="title">텍스트에서 발견된 개인정보</span>
            <TagContainer>
              <Tag title={data.keyword} />
            </TagContainer>
            <Content>{text.slice(data.startAt, data.endAt)}</Content>
          </TooltipContainer>
        </Tooltip>
      </TextContainer>
    );

    // 마지막 인덱스 업데이트
    lastIndex = data.endAt;
  });

  // 마지막으로 남은 일반 텍스트 추가
  highlightedText.push(<span key="last">{text.slice(lastIndex)}</span>);

  return <>{highlightedText}</>;
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