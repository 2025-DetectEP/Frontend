import React, { forwardRef, useEffect } from 'react';
import styled from "styled-components";
import '../../../App.css';
import { ReactComponent as IconRightEnabled } from '../../../assets/icons/icon_right_enabled.svg'
import { ReactComponent as IconRightHover } from '../../../assets/icons/icon_right_hover.svg'
import { ReactComponent as IconRightPressed } from '../../../assets/icons/icon_right_pressed.svg'

const RightBtn = forwardRef(({isHovered, isPressed, startScrolling, stopScrolling}, ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseDown = () => {
      startScrolling("right");
    };

    const handleMouseUp = () => {
      stopScrolling();
    };

    const handleMouseLeave = () => {
      stopScrolling();
    };

    element.addEventListener("mousedown", handleMouseDown, true);
    element.addEventListener("mouseup", handleMouseUp, true);
    element.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      element.removeEventListener("mousedown", handleMouseDown, true);
      element.removeEventListener("mouseup", handleMouseUp, true);
      element.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [ref]);
  // useEffect(() => {
  //   const element = ref.current;
  //   if (!element) return;

  //   const handleMouseDown = () => {
  //     startScrolling("right");
  //   };

  //   element.addEventListener("mousedown", handleMouseDown, true);

  //   return () => {
  //     element.removeEventListener("mousedown", handleMouseDown, true);
  //   };
  // }, [ref]);

  return (
    <Main ref={ref}>
      {isPressed ? (
        <IconRightPressed />
      ) : isHovered ? (
        <IconRightHover />
      ) : (
        <IconRightEnabled />
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