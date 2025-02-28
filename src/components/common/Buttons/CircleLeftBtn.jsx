import React, { forwardRef, useEffect, useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import { ReactComponent as IconLeftEnabled } from '../../../assets/icons/icon_left_enabled.svg'
import { ReactComponent as IconLeftHover } from '../../../assets/icons/icon_left_hover.svg'
import { ReactComponent as IconLeftPressed } from '../../../assets/icons/icon_left_pressed.svg'

const CircleLeftBtn = ({onClick}) => {
  const [ishover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const handleMouseUp = () => {
    setIsPress(false);
    onClick(); // onClick 함수를 여기서 호출
  };

  return (
    <Main
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={() => setIsPress(true)}
      onMouseUp={handleMouseUp}
      onMouseOut={() => setIsPress(false)}
    >
      {isPress ? (
        <IconLeftPressed/>
      ) : ishover ? (
        <IconLeftHover/>
      ) : (
        <IconLeftEnabled/>
      )}
    </Main>
  );
};

export default CircleLeftBtn;

const Main = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`