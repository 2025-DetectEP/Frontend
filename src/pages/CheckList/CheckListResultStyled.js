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

export const TestResult = styled.div`
`;

export const Sub = styled.div`
`;

export const Section2 = styled.div`
`;