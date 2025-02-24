import React, { forwardRef, useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import { ReactComponent as IconLeftEnabled } from '../../../assets/icons/icon_left_enabled.svg'
import { ReactComponent as IconLeftHover } from '../../../assets/icons/icon_left_hover.svg'
import { ReactComponent as IconLeftPressed } from '../../../assets/icons/icon_left_pressed.svg'

const LeftBtn = forwardRef(({isHovered, isPressed}, ref) => {
  return (
    <Main ref={ref}>
      {isPressed ? (
        <IconLeftPressed width={32} height={32} />
      ) : isHovered ? (
        <IconLeftHover width={32} height={32} />
      ) : (
        <IconLeftEnabled width={32} height={32} />
      )}
    </Main>
  );
});

export default LeftBtn;

const Main = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`