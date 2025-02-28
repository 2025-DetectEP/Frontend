import styled from "styled-components";
import '../../App.css';
import media from '../../styles/media';
import { fontSizes } from "../../styles/FontSizes";

export const Main = styled.div`

`;

export const Section1 = styled.div`
  background: var(--Background_solid, #F8FAFC);
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

  .title {
    align-self: stretch;
    ${fontSizes.titleHead2Medium};
    color: ${(props) => props.theme.Black};
  }

  .description {
    ${fontSizes.titleSubhead2Light};
    color: ${(props) => props.theme.Black};
  }
`;

export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.704vh;
  padding: 7.407vh 12.5vw;

  ${media.large`
    padding: 7.407vh 12.5vw;
  `}
  ${media.small`
    padding: 5.556vh 3.962vw;
  `}
`;

export const CheckListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.481vh;

  .line {
    border-bottom: 1px solid ${(props) => props.theme.Gray500};
  }
`;

export const CheckListTitle = styled.div`
  ${fontSizes.body1Bold};
  color: ${(props) => props.theme.Black};
`;

export const CheckListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.741vh;
`;