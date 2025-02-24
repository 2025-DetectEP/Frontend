import React, { forwardRef, useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import { ReactComponent as IconRightEnabled } from '../../../assets/icons/icon_right_enabled.svg'
import { ReactComponent as IconRightHover } from '../../../assets/icons/icon_right_hover.svg'
import { ReactComponent as IconRightPressed } from '../../../assets/icons/icon_right_pressed.svg'

const RightBtn = forwardRef(({isHovered, isPressed}, ref) => {
  return (
    <Main ref={ref}>
      {isPressed ? (
        <IconRightPressed width={32} height={32} />
      ) : isHovered ? (
        <IconRightHover width={32} height={32} />
      ) : (
        <IconRightEnabled width={32} height={32} />
      )}
    </Main>
  );
});

export default RightBtn;

const Main = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`