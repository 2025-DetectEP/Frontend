import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";

export const Main = styled.div`
`;

export const Section1 = styled.div`
  background: ${(props) => props.theme.Background_solid};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 7.407vh 12.5vw;

  ${media.large`
    padding: 7.407vh 12.5vw;
  `}
  ${media.small`
    padding: 5.556vh 3.962vw;
  `}

  .total {
    align-self: stretch;
    ${fontSizes.titleHead2Medium};
    color: ${(props) => props.theme.Black};
  }

  .sub {
    ${fontSizes.titleSubhead2Light};
    color: ${(props) => props.theme.Black};
  }
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 7.407vh 12.5vw;

  ${media.large`
    padding: 7.407vh 12.5vw;
  `}
  ${media.small`
    padding: 5.556vh 3.962vw;
  `}
`;

export const Title = styled.div`
  .title {
    align-self: stretch;
    ${fontSizes.body1Bold};
    color: ${(props) => props.theme.Black};
  }

  .sub {
    align-self: stretch;
    ${fontSizes.bdCaption1Medium};
    color: ${(props) => props.theme.Gray700};
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.926vh;
  padding: 2.963vh 0;
  border-top: 1px solid ${(props) => props.theme.Gray500};
  border-bottom: 1px solid ${(props) => props.theme.Gray500};

  .graphTitle {
    ${fontSizes.body2Medium};
    color: ${(props) => props.theme.Black};
  }
`;

export const Result = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  ${media.small`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 1.111vh;
  `}
`;

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25vw;

  .label {
    ${fontSizes.body2Medium};
    color: ${(props) => props.theme.Gray500};
  }
  
  ${media.small`
    width: 100%;
    
  `}
`;


export const Graph = styled.div`
  border-radius: 8px;
  background: ${(props) => props.theme.Gray100};
  width: 49.583vw;
  display: grid;
  grid-template-columns: ${(props) => props.$percent}% ${(props) => 100 - props.$percent}%;

  .value {
    border-radius: 8px;
    background: ${(props) => props.theme.Secondary};
  }

  .total {
  }

  ${media.small`
    width: 100%;  
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.25vw;
  margin-top: 5.556vh;
`;