import React from 'react';
import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";

export default function FilterBtn({title}) {
  return (
    <BtnoContainer>
      <button>{title}</button>
    </BtnoContainer>
  );
}

const BtnoContainer = styled.div`
  button {
    ${fontSizes.btnTitle2Medium};
    color: ${(props) => props.theme.Black};
    display: inline-flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 800px;
    border: 2px solid ${(props) => props.theme.Primary};
  }

  button:hover {
    background: ${(props) => props.theme.Primary100};
  }

  button:active {
    background: ${(props) => props.theme.Primary300};
  }
`;