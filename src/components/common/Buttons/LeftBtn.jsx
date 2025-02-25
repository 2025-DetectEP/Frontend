import React, { forwardRef, useEffect, useState } from 'react';
import styled from "styled-components";
import '../../../App.css';
import { ReactComponent as IconLeftEnabled } from '../../../assets/icons/icon_left_enabled.svg'
import { ReactComponent as IconLeftHover } from '../../../assets/icons/icon_left_hover.svg'
import { ReactComponent as IconLeftPressed } from '../../../assets/icons/icon_left_pressed.svg'

const LeftBtn = forwardRef(({isHovered, isPressed, startScrolling, stopScrolling}, ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseDown = () => {
      console.log("handleMouseDown");
      startScrolling("Left");
    };

    const handleMouseUp = () => {
      console.log("handleMouseUp");
      stopScrolling();
    };

    const handleMouseLeave = () => {
      console.log("handleMouseLeave");
      stopScrolling();
    };

    element.addEventListener("mousedown", handleMouseDown, true);
    element.addEventListener("mouseup", handleMouseUp, true);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousedown", handleMouseDown, true);
      element.removeEventListener("mouseup", handleMouseUp, true);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, startScrolling, stopScrolling]);

  return (
    <Main ref={ref}>
      {isPressed ? (
        <IconLeftPressed/>
      ) : isHovered ? (
        <IconLeftHover/>
      ) : (
        <IconLeftEnabled/>
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