import React, { forwardRef, useEffect, useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import { ReactComponent as IconDeleteEnabled } from '../../../assets/icons/icon_delete_enabled.svg'
import { ReactComponent as IconDeleteHover } from '../../../assets/icons/icon_delete_hover.svg'
import { ReactComponent as IconDeletePressed } from '../../../assets/icons/icon_delete_pressed.svg'
import { useBtnInteraction } from '../../../hooks/useBtnInteraction';

const DeleteBtn = ({onClick}) => {
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);

  const handleMouseUp = () => {
    setIsPress(false);
    onClick(); // onClick 함수를 여기서 호출
  };

  return (
    <BtnContainer
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    onMouseDown={() => setIsPress(true)}
    onMouseUp={handleMouseUp}
    onMouseOut={() => setIsPress(false)}
    >
      {isPress ? (
        <IconDeletePressed/>
      ) : isHover ? (
        <IconDeleteHover/>
      ) : (
        <IconDeleteEnabled/>
      )}
    </BtnContainer>
  );
};

export default DeleteBtn;

const BtnContainer = styled.div`
  cursor: pointer;
  z-index: 1;
  pointer-events: auto;
`;