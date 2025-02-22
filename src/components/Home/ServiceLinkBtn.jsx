import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";
import { ReactComponent as IconLink } from '../../assets/icons/icon_arrow_right_up_line.svg'
import { ReactComponent as IconLinkPressed } from '../../assets/icons/icon_arrow_right_up_line_pressed.svg'

export default function ServiceLinkBtn({title, description, url}) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(()=>{console.log(url)},[])
  return (
    <BtnContainer
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseOut={() => setIsPressed(false)}
      onClick={() => window.open(url)}
    >
      <TitleContainer>
        <span>{title}</span>
        {isPressed ? <IconLinkPressed /> : <IconLink />}
      </TitleContainer>
      <SubContainer $isPressed={isPressed}>{description}</SubContainer>
    </BtnContainer>
  );
}

const BtnContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 464px;
  height: 148px; */
  gap: 16px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.Secondary100};
  background: ${(props) => props.theme.White};
  padding: 2.963vh 1.5vw;
  ${media.small`
    padding: 2.222vh 2.86vw;
  `}

  color: ${(props) => props.theme.Gray800};
  &:hover {
    border: 2px solid ${(props) => props.theme.Secondary100};
    background: ${(props) => props.theme.Secondary100};
    color: ${(props) => props.theme.Gray800};
  }
  &:active {
    border: 2px solid ${(props) => props.theme.Secondary};
    background: ${(props) => props.theme.Secondary};
    color: ${(props) => props.theme.Gray100};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${fontSizes.btnTitle1Bold};
`;

const SubContainer = styled.div`
  ${fontSizes.btnCaption1Medium};
  color: ${(props) => (props.$isPressed ? props.theme.Gray400 : props.theme.Gray600)};
`;