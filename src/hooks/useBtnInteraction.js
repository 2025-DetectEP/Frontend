import { useEffect, useRef, useState } from "react"

export const useBtnInteraction = () => {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const ref = useRef();

  const handleMouseOver = () => {
    setIsHover(true);
  }
  
  const handleMouseOut = () => {
    setIsHover(false);
  }

  const handleMouseDown = () => {
    setIsClick(true);
  }
  
  const handleMouseUp = () => {
    setIsClick(false);
  }

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);
    element.addEventListener("mousedown", handleMouseDown);
    element.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
      element.removeEventListener("mousedown", handleMouseDown);
      element.removeEventListener("mouseup", handleMouseUp);
    }
  }, [ref]);

  return [ref, isHover, isClick];
}